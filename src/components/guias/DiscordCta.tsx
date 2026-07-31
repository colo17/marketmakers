import { LINKS, STREAMS } from "@/data/content";
import CtaButton from "../ui/CtaButton";

/**
 * Bloque de conversión al Discord. Va arriba de cada guía (para captar a quien
 * llega desde Google) y repetido al final (para quien terminó de leer).
 */
export default function DiscordCta({ variant = "top" }: { variant?: "top" | "bottom" }) {
  if (variant === "top") {
    return (
      <aside className="rounded-2xl border border-gold/35 bg-gold/[0.06] p-6 md:p-7">
        <p className="font-display font-bold uppercase tracking-wide text-gold-light text-sm md:text-base">
          📕 Descargá esta guía en PDF — gratis en nuestro Discord
        </p>
        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
          Estás leyendo la versión web completa. Dentro del Discord te llevás el{" "}
          <strong className="text-foreground/90">PDF descargable</strong>, además de{" "}
          <strong className="text-foreground/90">señales XAU/USD en tiempo real</strong>, análisis
          diario del oro y el resto de la colección de guías.
        </p>
        <CtaButton className="mt-5" location="guia_top">
          Entrar al Discord gratis
        </CtaButton>
      </aside>
    );
  }

  return (
    <aside className="relative overflow-hidden rounded-2xl border-2 border-gold bg-ink-card glow-gold p-8 md:p-10 text-center">
      <div
        className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative">
        <p className="font-serif italic text-gold text-xl mb-2">Terminaste la guía.</p>
        <h2 className="font-display font-extrabold uppercase text-2xl md:text-3xl text-gold-gradient tracking-tight">
          Ahora aplicala en el mercado real
        </h2>
        <p className="mt-4 mx-auto max-w-xl text-foreground/70 leading-relaxed">
          Descargá el PDF de esta guía, sumate a la comunidad y recibí señales de XAU/USD con
          entrada, stop loss y take profit. Análisis diario y streams en vivo todos los días.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
          <CtaButton size="lg" location="guia_bottom">
            Descargar el PDF en Discord
          </CtaButton>
          <CtaButton href={LINKS.kick} variant="outline" size="lg" location="guia_bottom">
            {STREAMS.cta}
          </CtaButton>
        </div>
      </div>
    </aside>
  );
}
