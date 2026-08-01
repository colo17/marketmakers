# Market Makers — Sitio Web Oficial

Sitio web de **Market Makers** (señales de trading de oro XAU/USD + educación), construido con Next.js 16, Tailwind CSS v4, Framer Motion, GSAP y Lenis.

**Estética:** negro mate `#0D0D0D` + oro `#D4AF37` · Montserrat / Inter / Cormorant Garamond (self-hosted vía `next/font`, sin CDN de Google).

---

## 🚀 Cómo correrlo

```bash
npm install
npm run dev       # desarrollo → http://localhost:3000
npm run build     # build de producción
npm start         # servir el build
```

## ✏️ Dónde editar textos, precios y enlaces

**TODO el contenido está en un solo archivo:** [`src/data/content.ts`](src/data/content.ts)

| Qué | Dónde |
| --- | --- |
| Precio del VIP | `PRECIO_VIP` (arriba de todo) |
| Enlaces Discord / Kick / Instagram | `LINKS` |
| Dominio del sitio (para SEO) | `BRAND.url` — ver abajo |
| Textos del hero, badge de lanzamiento | `HERO` |
| Pasos del funnel | `COMO_FUNCIONA` |
| Ebooks (títulos, descripciones, portadas) | `EDUCACION` |
| Planes y features | `VIP` |
| Horarios de streams | `STREAMS` |
| Testimonios (placeholders → reemplazar por reales) | `TESTIMONIOS` |
| Preguntas frecuentes | `FAQ` |
| Aviso de riesgo | `DISCLAIMER` |

## 🖼️ Reemplazar assets por los reales

Todos los assets viven en `public/media/`:

| Archivo | Uso | Cómo reemplazarlo |
| --- | --- | --- |
| `hero-video.mp4` + `hero-poster.jpg` | Video de fondo del hero | Mismo nombre, MP4 H.264 16:9, ideal < 3 MB |
| `scrolly-video.mp4` + `scrolly-poster.jpg` | Video del scrollytelling | Mismo nombre. Debe poder "scrubearse" (keyframes frecuentes: `ffmpeg -g 15`) |
| `ebook-*.jpg` | Portadas de los 4 ebooks | Generadas con IA (sin texto — el título lo pone la card). Para usar las portadas reales de los PDF, exportá la pág. 1 como JPG 800px de ancho con el mismo nombre |
| `bot-ia.jpg` | Imagen sección Bot IA | Mismo nombre, 4:3 |
| `og-image.jpg` | Imagen para redes (Open Graph) | 1200×630 exactos |

> Los videos e imágenes fueron generados con Higgsfield (Seedance 2.0 Mini + Nano Banana, la opción más económica) y optimizados con ffmpeg.

## 📚 Las guías (versión HTML de los ebooks)

Los 8 ebooks están publicados **completos como páginas web**, con su diseño y sus gráficos originales. Es el activo SEO principal del sitio (~51.600 palabras indexables). El orden sigue un recorrido de aprendizaje, de lo básico al capital real:

| URL | Guía | Palabras |
| --- | --- | --- |
| `/guias` | Hub de la biblioteca | — |
| `/guias/trading-de-oro-para-principiantes` | Guía para Principiantes | 2.517 |
| `/guias/como-operar-el-oro` | Mastering Gold | 6.506 |
| `/guias/estrategias-trading-xauusd` | Guía de Estrategias | 7.137 |
| `/guias/patrones-chartistas` | Chart Patterns | 6.617 |
| `/guias/trading-con-noticias` | Trading The News | 9.245 |
| `/guias/gestion-del-riesgo` | Risk Management | 6.841 |
| `/guias/psicologia-del-trading` | The Trader's Mind | 6.291 |
| `/guias/cuentas-de-fondeo` | Cuentas de Fondeo | 6.472 |

### Agregar una guía nueva

1. Poné el HTML del ebook en `C:/Users/Juan/Downloads/`.
2. Agregá una línea a `BOOKS` en [`scripts/extract-html.mjs`](scripts/extract-html.mjs) con su slug.
3. Corré `node scripts/extract-html.mjs`.
4. Agregá el `import` y la entrada en `EBOOKS` y `GUIDES_META` de [`src/data/guides.ts`](src/data/guides.ts).
5. Opcional: sumala a `EDUCACION.ebooks` en `content.ts` para que aparezca en la home.

El sitemap, el índice, los CTA y los datos estructurados se generan solos.

**El PDF no se sirve desde la web**: cada guía tiene un CTA al Discord arriba y otro al final, más un bloque de streams de Kick a mitad de lectura.

### De dónde sale el contenido

Se extrae de los **HTML originales de los ebooks** (los que exporta el proyecto de diseño), no de los PDF. Eso conserva el diseño exacto y, sobre todo, los **gráficos como SVG vectorial**: escalan sin perder nitidez, pesan poco y se adaptan al ancho de pantalla.

De cada página del ebook se toma solo el `.pbody` (se descartan el header y el footer de marca, que se repetían en las 162 páginas), y el CSS se scopea bajo `.ebook` para que no se filtre al resto del sitio.

### Editar una guía

- **Textos, títulos y SEO** de cada guía: [`src/data/guides.ts`](src/data/guides.ts) → `GUIDES_META`.
- **Contenido del ebook**: `src/data/ebooks/<slug>.json` (generado; ver abajo).
- **Copy del CTA de streams**: [`src/data/content.ts`](src/data/content.ts) → `GUIA_STREAM_CTA`.

### Regenerar desde los HTML

Si actualizás un ebook, volvé a exportar su HTML a `C:/Users/Juan/Downloads/` y corré:

```bash
node scripts/extract-html.mjs
```

El script está en [`scripts/extract-html.mjs`](scripts/extract-html.mjs) — ahí se configuran las rutas de origen y los slugs. No necesita dependencias.

## 📊 Medición (Google Tag Manager + GA4)

El sitio carga GTM desde el layout, y desde ahí se alimenta Google Analytics 4.

| Cuenta | ID |
| --- | --- |
| Contenedor de Tag Manager | `GTM-MW66SV6C` |
| Propiedad GA4 (marketmakers.club) | `G-BGP5GMLKYG` |

**Configuración:** el ID del contenedor va en la variable `NEXT_PUBLIC_GTM_ID` (ver [`.env.example`](.env.example)). En local se pone en `.env.local`; en producción ya está cargada en Vercel → *Settings* → *Environment Variables*. Si la variable está vacía, el sitio funciona normal pero sin medición.

### Cómo está armado GTM

- **`GA4 - Etiqueta de Google`** → carga GA4 en todas las páginas.
- **`GA4 - Eventos Market Makers`** → una sola etiqueta que cubre *todos* los eventos: el nombre del evento es la variable `{{Event}}` y el activador es un evento personalizado con la expresión regular `^mm_`.
- **6 variables de capa de datos** (`dlv - cta_location`, `guide`, `percent`, `section`, `heading`, `question`) mapeadas como parámetros del evento.

### Eventos que se envían

Todos van prefijados con `mm_` y se definen en [`src/lib/analytics.ts`](src/lib/analytics.ts):

| Evento | Cuándo | Parámetros |
| --- | --- | --- |
| `mm_discord_click` | Clic en cualquier CTA al Discord | `cta_location`, a veces `guide` |
| `mm_kick_click` | Clic hacia el stream | `cta_location` |
| `mm_instagram_click` | Clic hacia Instagram | `cta_location` |
| `mm_guide_open` | Se abre una guía desde una card | `guide`, `cta_location` |
| `mm_guide_progress` | Se lee el 25/50/75/100 % de una guía | `guide`, `percent` |
| `mm_toc_click` | Clic en el índice de una guía | `guide`, `heading` |
| `mm_faq_open` | Se despliega una pregunta | `question` |
| `mm_section_view` | Una sección de la home entra en pantalla | `section` |

El parámetro `cta_location` es la clave del asunto: permite comparar **qué CTA convierte mejor** (hero vs. precios vs. final de guía) en vez de ver un total indistinto.

### Cómo agregar un evento nuevo

En GTM hay **una sola** etiqueta de evento GA4, con un activador que matchea `^mm_`. Eso significa que alcanza con agregar la función en `analytics.ts` y llamarla: el evento llega a GA4 **sin tocar GTM**.

```ts
export function trackAlgoNuevo(valor: string) {
  track("mm_algo_nuevo", { valor });
}
```

### ⚠️ Pendiente: registrar las dimensiones personalizadas en los informes

Los 6 parámetros (`cta_location`, `guide`, `percent`, `section`, `heading`, `question`) ya **llegan** a GA4 y se pueden ver evento por evento en *Informes → Tiempo real*. Pero para que aparezcan como **columnas/filtros en los informes normales**, hay que registrarlos como dimensiones personalizadas — un paso manual que no se pudo terminar en la config inicial porque el catálogo de parámetros de GA4 tarda unas horas en poblarse después del primer evento (es un pipeline distinto y más lento que el de "Eventos recientes").

Cuando quieras completarlo (alcanza con que el sitio lleve un día recibiendo tráfico real):

1. Analytics → Administrar → **Definiciones personalizadas** → *Crear dimensión personalizada*
2. Repetir para cada uno de los 6 parámetros: nombre = el parámetro (ej. `cta_location`), Ámbito = *Evento*, Parámetro de evento = seleccionarlo de la lista (ya debería aparecer)

**Evento clave:** `mm_discord_click` ya está marcado como evento clave (conversión) en GA4 → Administrar → Eventos. `mm_guide_open` todavía no había recibido tráfico suficiente para aparecer en el catálogo — marcarlo con el mismo mecanismo (la estrella junto al nombre del evento) cuando aparezca.

## 🌐 Despliegue y dominio

El sitio está en Vercel: cada `git push` redeploya automáticamente.

### ⚠️ Cuando conectes un dominio propio

`BRAND.url` en [`src/data/content.ts`](src/data/content.ts) es **el único lugar** donde se define la URL pública. De ahí salen:

- el `canonical` de cada página,
- el `sitemap.xml`,
- las previews al compartir (Open Graph / Twitter Cards),
- los datos estructurados JSON-LD.

Hoy apunta a `https://marketmakers-nine.vercel.app`. Al conectar tu dominio, cambiá esa línea y hacé push. Si no lo hacés, el canonical seguiría apuntando al dominio viejo y Google podría no indexar el nuevo.

Después del cambio, conviene dar de alta el sitio en [Google Search Console](https://search.google.com/search-console) y enviar el sitemap (`tudominio.com/sitemap.xml`) para acelerar la indexación de las guías.

## 🧱 Estructura

```
src/
├── app/
│   ├── layout.tsx        # Fuentes self-hosted + metadata SEO global
│   ├── page.tsx          # Ensambla las 12 secciones
│   ├── globals.css       # Tema de marca (tokens Tailwind v4 + utilidades doradas)
│   ├── sitemap.ts        # sitemap.xml automático
│   └── robots.ts         # robots.txt automático
├── components/
│   ├── sections/         # Hero, Pilares, CómoFunciona, Scrollytelling, Educación,
│   │                     # VIP, BotIA, Streams, Testimonios, FAQ, Disclaimer
│   ├── Navbar / Footer / LogoM / GoldParticles / SmoothScroll / JsonLd
│   └── ui/               # CtaButton, Reveal, SectionHeading
└── data/
    └── content.ts        # ⭐ TODO el contenido editable
```

## 🌍 Futuro: versión en inglés (i18n)

El contenido está 100% separado de los componentes (`src/data/content.ts`), así que para i18n solo hay que:
1. Crear `src/data/content.en.ts` con las mismas claves.
2. Agregar rutas `/en` (o middleware de detección de idioma) que importen ese archivo.

## ⚠️ Notas

- **Todos los CTA** apuntan al Discord: `https://discord.gg/NExjMnrvQE` (definido una sola vez en `LINKS.discord`).
- El scrollytelling se degrada automáticamente en mobile y con `prefers-reduced-motion` (muestra frases con reveal simple en vez de video scrubbing).
- Sin promesas de rentabilidad en el copy: lenguaje realista + disclaimer de riesgo completo y versión corta en el footer.
