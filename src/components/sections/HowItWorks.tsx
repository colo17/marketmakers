import { COMO_FUNCIONA } from "@/data/content";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CtaButton from "../ui/CtaButton";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="El camino"
          title={COMO_FUNCIONA.title}
          subtitle={COMO_FUNCIONA.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {COMO_FUNCIONA.pasos.map((paso, i) => (
            <Reveal key={paso.numero} delay={i * 0.15}>
              <article className="card-gold rounded-2xl p-8 h-full flex flex-col gap-4 hover:-translate-y-1">
                <span className="font-display font-black text-5xl text-gold-gradient">
                  {paso.numero}
                </span>
                <h3 className="font-display font-bold uppercase tracking-wide text-xl text-foreground">
                  {paso.title}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{paso.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 flex justify-center">
          <CtaButton size="lg">{COMO_FUNCIONA.cta}</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
