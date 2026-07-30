import { TESTIMONIOS } from "@/data/content";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CtaButton from "../ui/CtaButton";

export default function Testimonials() {
  return (
    <section id="comunidad" className="relative py-24 md:py-32 bg-ink-soft border-y border-line">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Comunidad"
          title={TESTIMONIOS.title}
          subtitle={TESTIMONIOS.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIOS.items.map((t, i) => (
            <Reveal key={t.nombre} delay={i * 0.15}>
              <figure className="card-gold rounded-2xl p-8 h-full flex flex-col gap-5">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold/50" fill="currentColor" aria-hidden="true">
                  <path d="M10 7H6a3 3 0 00-3 3v7h7v-7H7a3 3 0 013-3zm11 0h-4a3 3 0 00-3 3v7h7v-7h-3a3 3 0 013-3z" />
                </svg>
                <blockquote className="font-serif italic text-lg text-foreground/80 leading-relaxed flex-1">
                  “{t.texto}”
                </blockquote>
                <figcaption>
                  <p className="font-display font-bold uppercase tracking-wide text-sm text-gold-light">
                    {t.nombre}
                  </p>
                  <p className="text-xs text-foreground/50 mt-1">{t.rol}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 flex justify-center">
          <CtaButton size="lg">{TESTIMONIOS.cta}</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
