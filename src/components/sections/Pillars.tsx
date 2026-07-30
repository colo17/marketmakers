import { PILARES } from "@/data/content";
import Reveal from "../ui/Reveal";

const ICONS: Record<string, React.ReactNode> = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 1v4M12 19v4M1 12h4M19 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M4 20V10M10 20V4M16 20v-8M21 20H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 7l4-4m0 0h-3m3 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path
        d="M18 10a6 6 0 10-12 0c0 5-2 6-2 6h16s-2-1-2-6M10.3 20a2 2 0 003.4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Pillars() {
  return (
    <section className="relative border-y border-line bg-ink-soft" aria-label="Pilares de Market Makers">
      <div className="mx-auto max-w-7xl px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {PILARES.map((pilar, i) => (
          <Reveal key={pilar.title} delay={i * 0.15} className="flex items-start gap-5">
            <div className="shrink-0 rounded-full border border-gold/30 bg-gold/5 p-4 text-gold">
              {ICONS[pilar.icon]}
            </div>
            <div>
              <h3 className="font-display font-bold uppercase tracking-wide text-lg text-gold-light">
                {pilar.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{pilar.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
