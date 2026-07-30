"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO, BRAND } from "@/data/content";
import CtaButton from "../ui/CtaButton";
import LogoM from "../LogoM";
import GoldParticles from "../GoldParticles";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="inicio"
      className="relative min-h-svh flex items-center justify-center overflow-hidden"
    >
      {/* Video de fondo con poster (lazy: solo metadata) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/media/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-dotted-map opacity-40" />
      <GoldParticles />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-32 flex flex-col items-center text-center gap-7">
        <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-3">
          <LogoM className="h-20 w-20 md:h-24 md:w-24" />
          <p className="font-display font-extrabold uppercase tracking-[0.2em] text-lg md:text-xl">
            <span className="text-gold-gradient">Market</span>{" "}
            <span className="text-silver-gradient">Makers</span>
          </p>
          <p className="text-[0.65rem] md:text-xs tracking-[0.45em] uppercase text-gold/70">
            {BRAND.tagline}
          </p>
        </motion.div>

        <motion.span
          {...fadeUp(0.25)}
          className="inline-block rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-xs md:text-sm font-semibold text-gold-light tracking-wide"
        >
          {HERO.badge}
        </motion.span>

        <motion.h1
          {...fadeUp(0.4)}
          className="font-display font-black uppercase leading-[1.05] text-4xl sm:text-6xl md:text-7xl tracking-tight"
        >
          <span className="text-gold-gradient block">{HERO.headline1}</span>
          <span className="text-silver-gradient block">{HERO.headline2}</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.55)}
          className="max-w-2xl text-foreground/75 text-base md:text-lg leading-relaxed"
        >
          {HERO.subhead}
        </motion.p>

        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <CtaButton size="lg">{HERO.ctaPrimary}</CtaButton>
          <CtaButton href="#como-funciona" variant="outline" size="lg">
            {HERO.ctaSecondary}
          </CtaButton>
        </motion.div>

        <motion.p {...fadeUp(0.85)} className="font-serif italic text-gold/80 text-lg md:text-xl">
          {BRAND.slogan1}
        </motion.p>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <div className="h-10 w-6 rounded-full border border-gold/40 flex justify-center pt-2">
          <motion.div
            animate={reduce ? {} : { y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
