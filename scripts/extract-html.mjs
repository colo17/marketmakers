import { readFile, writeFile, mkdir } from "node:fs/promises";

/**
 * Extrae el contenido de los ebooks HTML originales.
 *
 * Cada ebook es un "libro" de páginas A4 fijas (794×1123). Para la web
 * tomamos solo el .pbody de cada página (descartando el header/footer de
 * marca que se repite en las 171 páginas) y dejamos que fluyan de forma
 * responsive. Los gráficos son SVG inline, así que se conservan intactos.
 */

const SRC = "C:/Users/Juan/Downloads";
const OUT = "C:/Users/Juan/market-makers/src/data/ebooks";

const BOOKS = [
  { file: "Market_Makers_Guia_Principiantes.html", slug: "trading-de-oro-para-principiantes" },
  { file: "Market_Makers_Guia_Estrategias.html", slug: "estrategias-trading-xauusd" },
  { file: "Market_Makers_Chart_Patterns.html", slug: "patrones-chartistas" },
  { file: "Market_Makers_Risk_Management.html", slug: "gestion-del-riesgo" },
  { file: "Market_Makers_The_Traders_Mind.html", slug: "psicologia-del-trading" },
];

/**
 * Scopea el CSS del ebook bajo `.ebook` para que no se filtre al resto
 * del sitio, y descarta las reglas globales (html, body, *).
 */
function scopeCss(css) {
  const out = [];
  let i = 0;

  while (i < css.length) {
    // bloques @media / @font-face: scopear su interior
    if (css[i] === "@") {
      const braceStart = css.indexOf("{", i);
      const atRule = css.slice(i, braceStart).trim();
      // encontrar el cierre equilibrado
      let depth = 0;
      let j = braceStart;
      for (; j < css.length; j++) {
        if (css[j] === "{") depth++;
        else if (css[j] === "}") {
          depth--;
          if (depth === 0) break;
        }
      }
      const inner = css.slice(braceStart + 1, j);
      out.push(`${atRule}{${scopeCss(inner)}}`);
      i = j + 1;
      continue;
    }

    const braceStart = css.indexOf("{", i);
    if (braceStart < 0) break;
    const braceEnd = css.indexOf("}", braceStart);
    if (braceEnd < 0) break;

    const selectors = css.slice(i, braceStart).trim();
    const body = css.slice(braceStart + 1, braceEnd).trim();
    i = braceEnd + 1;
    if (!selectors) continue;

    const scoped = selectors
      .split(",")
      .map((sel) => {
        const s = sel.trim();
        if (!s) return null;
        // Las variables van al contenedor para que hereden hacia adentro.
        if (s === ":root" || s === "html" || s === "body") return ".ebook";
        if (s === "html,body" || s === "*") return ".ebook, .ebook *";
        if (s.startsWith("@")) return s;
        return `.ebook ${s}`;
      })
      .filter(Boolean);

    if (scoped.length) out.push(`${scoped.join(",")}{${body}}`);
  }

  return out.join("\n");
}

/** Saca el contenido útil de una página: el .pbody, sin header ni footer. */
function extractBody(pageHtml) {
  const start = pageHtml.indexOf('class="pbody"');
  if (start < 0) return null;
  const from = pageHtml.indexOf(">", start) + 1;
  const footIdx = pageHtml.indexOf('<div class="pfoot"', from);
  const to = footIdx > 0 ? footIdx : pageHtml.lastIndexOf("</section>");
  let html = pageHtml.slice(from, to);
  // el slice arrastra el cierre del propio .pbody
  html = html.replace(/<\/div>\s*$/, "");
  return html.trim();
}

/** Título de la página, tomado de su h1. */
function pageTitle(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return m[1]
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#37;/g, "%")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

const slugify = (t) =>
  t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);

await mkdir(OUT, { recursive: true });

for (const book of BOOKS) {
  const raw = await readFile(`${SRC}/${book.file}`, "utf8");

  const css = scopeCss(raw.slice(raw.indexOf("<style>") + 7, raw.indexOf("</style>")));
  const sections = raw.split(/<section class="page/).slice(1);

  const pages = [];
  const seen = new Set();

  for (const section of sections) {
    // portada: no aporta a la web (ya tenemos hero propio)
    if (/^\s*"?\s*cover/.test(section) || section.includes("cover-inner")) continue;

    let html = extractBody(section);
    if (!html) continue;

    const title = pageTitle(html);

    // índice del ebook: generamos el nuestro
    if (title && /^(índice|contenido)$/i.test(title)) continue;

    // Un solo h1 por página web: degradamos los del ebook a h2 con ancla.
    if (title) {
      const id = slugify(title);
      const anchor = seen.has(id) ? `${id}-${pages.length}` : id;
      seen.add(anchor);
      html = html.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/, `<h2$1 id="${anchor}">$2</h2>`);
      pages.push({ title, id: anchor, html });
    } else {
      // páginas sin título (separadores de capítulo, cheat sheets)
      html = html.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/g, "<h2$1>$2</h2>");
      pages.push({ title: null, id: null, html });
    }
  }

  const text = pages
    .map((p) => p.html.replace(/<[^>]+>/g, " "))
    .join(" ")
    .replace(/\s+/g, " ");
  const words = text.split(" ").filter(Boolean).length;

  const payload = { slug: book.slug, css, pages, words };
  await writeFile(`${OUT}/${book.slug}.json`, JSON.stringify(payload), "utf8");

  const kb = Math.round(JSON.stringify(payload).length / 1024);
  console.log(
    `${book.slug}: ${pages.length} págs · ${words} palabras · ${kb}KB · css ${Math.round(css.length / 1024)}KB`
  );
}
