import { STREAMS, LINKS } from "@/data/content";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Streams() {
  return (
    <section id="streams" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading eyebrow="En vivo" title={STREAMS.title} subtitle={STREAMS.subtitle} />

        <Reveal>
          <div className="card-gold rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Glow decorativo */}
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Indicador estilo OFF/ON STREAM */}
              <div className="flex flex-col items-center gap-3">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#53fc18] opacity-60" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#53fc18]" />
                </span>
                <p className="font-display font-black uppercase text-3xl md:text-4xl text-gold-gradient tracking-tight">
                  On Stream
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  todos los días
                </p>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                {STREAMS.horarios.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl border border-line bg-ink px-5 py-4 text-center"
                  >
                    <p className="text-xs uppercase tracking-widest text-foreground/50">{h.label}</p>
                    <p className="mt-1 font-display font-extrabold text-2xl md:text-3xl text-gold">
                      {h.hora}
                    </p>
                  </div>
                ))}
                <p className="col-span-2 text-center text-xs text-foreground/50">{STREAMS.zona}</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <a
                  href={LINKS.kick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#53fc18] px-8 py-4 font-display font-bold uppercase tracking-wide text-black transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(83,252,24,0.35)]"
                >
                  {/* Ícono Kick */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M3 2h6v6h3V5h3V2h6v7h-3v3h3v7h-6v-3h-3v-3H9v6H3V2z" />
                  </svg>
                  {STREAMS.cta}
                </a>
                <p className="text-xs text-foreground/50">{STREAMS.canal}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
