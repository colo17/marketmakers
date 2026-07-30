import type { EbookPage } from "@/data/guides";

/**
 * Renderiza el contenido original del ebook (HTML + SVG vectoriales).
 *
 * El CSS del ebook viene scopeado bajo `.ebook` desde scripts/extract-html.mjs,
 * así que no se filtra al resto del sitio. Acá sólo añadimos lo necesario para
 * que el diseño —pensado para una hoja A4 fija— fluya de forma responsive.
 */

const RESPONSIVE_CSS = `
.ebook{
  max-width:100%;
  background:transparent;
  font-size:15px;
}
.ebook .ebook-page{
  padding:0;
  margin:0 0 3.5rem;
}
.ebook .ebook-page + .ebook-page{
  padding-top:2.5rem;
  border-top:1px solid rgba(212,175,55,.14);
}
/* los SVG de los gráficos escalan con el ancho disponible */
.ebook svg.illo,
.ebook .svis svg,
.ebook .chart svg{
  width:100%;
  height:auto;
  max-width:100%;
}
.ebook img{max-width:100%;height:auto}
/* tablas y bloques anchos: scroll propio, nunca desbordan la página */
.ebook table{width:100%;display:block;overflow-x:auto}
.ebook h2{scroll-margin-top:7rem}

/* El diseño original asume 794px de ancho: en pantallas chicas
   colapsamos todas las rejillas a una sola columna. */
@media (max-width:760px){
  .ebook .stop,.ebook .smid,.ebook .smid3,.ebook .boxrow,.ebook .plan-grid,
  .ebook .cheat-grid,.ebook .compare,.ebook .emo-grid,.ebook .habits,
  .ebook .lgrid,.ebook .w-cards,.ebook .ix-grid,.ebook .err-grid,
  .ebook .scol,.ebook .kgrid,.ebook .rgrid,.ebook .two,.ebook .three{
    grid-template-columns:1fr !important;
  }
  .ebook{font-size:14px}
}
`;

export default function EbookContent({ css, pages }: { css: string; pages: EbookPage[] }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css + RESPONSIVE_CSS }} />
      <div className="ebook">
        {pages.map((page, i) => (
          <section
            key={i}
            className="ebook-page"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        ))}
      </div>
    </>
  );
}
