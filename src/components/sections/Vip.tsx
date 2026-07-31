import { VIP } from "@/data/content";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CtaButton from "../ui/CtaButton";

const Check = () => (
  <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-gold" fill="none" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Vip() {
  return (
    <section id="vip" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Premium" title={VIP.title} subtitle={VIP.subtitle} />

        {/* Qué incluye */}
        <Reveal className="mx-auto max-w-4xl mb-16">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VIP.incluye.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/80">
                <Check />
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Banner promo */}
        <Reveal className="mx-auto max-w-3xl mb-10">
          <div className="rounded-2xl border border-gold/50 bg-gold/10 glow-gold px-6 py-4 text-center">
            <p className="font-display font-bold uppercase tracking-wide text-gold-light text-sm md:text-base">
              {VIP.promoBanner}
            </p>
          </div>
        </Reveal>

        {/* Planes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {VIP.planes.map((plan, i) => (
            <Reveal key={plan.nombre} delay={i * 0.15}>
              <article
                className={`rounded-2xl p-8 h-full flex flex-col gap-6 ${
                  plan.destacado
                    ? "border-2 border-gold bg-ink-card glow-gold relative"
                    : "card-gold"
                }`}
              >
                {plan.destacado && "badge" in plan && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 btn-gold rounded-full px-5 py-1.5 text-xs font-display font-bold uppercase tracking-wider whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}
                <div>
                  <h3 className="font-display font-bold uppercase tracking-widest text-sm text-foreground/60">
                    {plan.nombre}
                  </h3>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span
                      className={`font-display font-black text-5xl ${
                        plan.destacado ? "text-gold-gradient" : "text-foreground"
                      }`}
                    >
                      {plan.precio}
                    </span>
                    <span className="text-foreground/50 text-sm">{plan.periodo}</span>
                  </p>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/75">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <CtaButton
                  variant={plan.destacado ? "gold" : "outline"}
                  className="w-full"
                  location={plan.destacado ? "vip_pago" : "vip_gratis"}
                >
                  {plan.cta}
                </CtaButton>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
