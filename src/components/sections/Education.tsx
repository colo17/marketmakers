"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EDUCACION, LINKS } from "@/data/content";
import { trackGuideOpen, trackDiscordClick } from "@/lib/analytics";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Education() {
  const reduce = useReducedMotion();

  return (
    <section id="educacion" className="relative py-24 md:py-32 bg-ink-soft border-y border-line">
      <div className="absolute inset-0 bg-dotted-map opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="La colección"
          title={EDUCACION.title}
          subtitle={EDUCACION.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EDUCACION.ebooks.map((ebook, i) => (
            <Reveal key={ebook.slug} delay={i * 0.15}>
              <motion.article
                whileHover={reduce ? {} : { rotateX: 4, rotateY: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                style={{ transformStyle: "preserve-3d", perspective: 800 }}
                className="card-gold rounded-2xl overflow-hidden h-full flex flex-col group"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={ebook.cover}
                    alt={`Portada del ebook ${ebook.title} de Market Makers`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 border border-gold/30 px-3 py-1 text-xs text-gold">
                    {ebook.pages}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-display font-bold uppercase tracking-wide text-lg text-gold-light">
                    {ebook.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed flex-1">
                    {ebook.description}
                  </p>
                  <Link
                    href={`/guias/${ebook.slug}`}
                    onClick={() => trackGuideOpen(ebook.slug, "educacion_card")}
                    className="btn-gold rounded-full px-5 py-2.5 text-center text-sm font-display font-bold uppercase tracking-wide mt-2"
                  >
                    {EDUCACION.ctaLeer}
                  </Link>
                  <a
                    href={LINKS.discord}
                    onClick={() => trackDiscordClick("educacion_card", { guide: ebook.slug })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-xs text-foreground/50 hover:text-gold transition-colors"
                  >
                    o descargá el PDF en Discord
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 flex justify-center">
          <Link
            href="/guias"
            className="btn-outline-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-display font-bold uppercase tracking-wide text-sm"
          >
            Ver todas las guías
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14m-6-6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
