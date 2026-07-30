import { LINKS, STREAMS, GUIA_STREAM_CTA } from "@/data/content";

/**
 * Bloque de streams dentro de las guías: la teoría que se acaba de leer,
 * aplicada en vivo. Va a mitad de la guía, donde el lector ya está enganchado.
 */
export default function StreamCta() {
  return (
    <aside className="relative overflow-hidden rounded-2xl border border-[#53fc18]/30 bg-[#53fc18]/[0.04] p-7 md:p-9">
      <div
        className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#53fc18]/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-7">
        <div className="flex-1">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#53fc18] opacity-60" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#53fc18]" />
            </span>
            <span className="font-display font-bold uppercase tracking-widest text-[0.7rem] text-[#53fc18]">
              En vivo en Kick
            </span>
          </div>

          <h2 className="font-display font-extrabold uppercase text-xl md:text-2xl text-gold-gradient tracking-tight">
            {GUIA_STREAM_CTA.title}
          </h2>

          <p className="mt-3 text-sm md:text-base text-foreground/70 leading-relaxed max-w-xl">
            {GUIA_STREAM_CTA.body}
          </p>

          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/50">
            <span className="text-gold font-display font-bold">
              {STREAMS.horarios.map((h) => h.hora).join(" y ")}
            </span>
            <span aria-hidden="true">·</span>
            <span>todos los días</span>
            <span aria-hidden="true">·</span>
            <span>{STREAMS.zona}</span>
          </p>
        </div>

        <a
          href={LINKS.kick}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-3 rounded-full bg-[#53fc18] px-7 py-3.5 font-display font-bold uppercase tracking-wide text-black text-sm transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(83,252,24,0.35)]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M3 2h6v6h3V5h3V2h6v7h-3v3h3v7h-6v-3h-3v-3H9v6H3V2z" />
          </svg>
          {GUIA_STREAM_CTA.cta}
        </a>
      </div>
    </aside>
  );
}
