import { DISCLAIMER } from "@/data/content";
import Reveal from "../ui/Reveal";

export default function Disclaimer() {
  return (
    <section aria-labelledby="disclaimer-title" className="relative py-16 bg-ink-soft border-t border-line">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="rounded-2xl border border-foreground/15 bg-ink p-8">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" fill="none" aria-hidden="true">
                <path
                  d="M12 9v4m0 4h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2
                id="disclaimer-title"
                className="font-display font-bold uppercase tracking-wide text-lg text-foreground"
              >
                {DISCLAIMER.title}
              </h2>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">{DISCLAIMER.full}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
