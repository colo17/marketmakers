import Image from "next/image";
import { BOT_IA } from "@/data/content";
import Reveal from "../ui/Reveal";
import CtaButton from "../ui/CtaButton";

export default function BotIa() {
  return (
    <section id="bot-ia" className="relative py-24 md:py-32 bg-ink-soft border-y border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-gold">
            <Image
              src="/media/bot-ia.jpg"
              alt="Representación del bot de inteligencia artificial de scalping XAU/USD de Market Makers"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-6">
          <span className="self-start rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-display font-bold uppercase tracking-widest text-gold">
            {BOT_IA.badge}
          </span>
          <h2 className="font-display font-extrabold uppercase text-3xl md:text-5xl tracking-tight text-gold-gradient">
            {BOT_IA.title}
          </h2>
          <p className="font-serif italic text-xl text-foreground/70">{BOT_IA.subtitle}</p>
          <p className="text-foreground/70 leading-relaxed">{BOT_IA.description}</p>
          <ul className="flex flex-col gap-3">
            {BOT_IA.puntos.map((punto) => (
              <li key={punto} className="flex items-center gap-3 text-sm text-foreground/75">
                <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                {punto}
              </li>
            ))}
          </ul>
          <CtaButton className="self-start mt-2">{BOT_IA.cta}</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
