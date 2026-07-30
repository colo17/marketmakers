import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import { BRAND } from "@/data/content";
import { GUIDES_META, getEbook, readingMinutes } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guías de Trading de Oro XAU/USD — Gratis en Español",
  description:
    "Cuatro guías completas y gratuitas para aprender trading de oro (XAU/USD) en español: desde los conceptos básicos hasta estrategias, patrones chartistas y psicología del trading.",
  alternates: { canonical: "/guias" },
  openGraph: {
    title: "Guías de Trading de Oro XAU/USD — Gratis en Español",
    description:
      "Cuatro guías completas y gratuitas para aprender trading de oro en español: básicos, estrategias, patrones chartistas y psicología.",
    url: `${BRAND.url}/guias`,
    type: "website",
  },
};

export default function GuiasPage() {
  const guides = GUIDES_META.map((meta) => ({
    ...meta,
    words: getEbook(meta.slug)?.words ?? 0,
  }));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BRAND.url },
      { "@type": "ListItem", position: 2, name: "Guías", item: `${BRAND.url}/guias` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SmoothScroll />
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center flex flex-col items-center gap-5 mb-16">
            <span className="font-serif italic text-gold text-xl">Biblioteca</span>
            <h1 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tight text-gold-gradient max-w-3xl">
              Guías de trading de oro
            </h1>
            <p className="max-w-2xl text-foreground/70 leading-relaxed">
              Toda nuestra colección educativa, completa y gratuita, para leer online. Aprendé a
              operar XAU/USD desde cero: conceptos básicos, estrategias, patrones chartistas,
              gestión del riesgo y la psicología que sostiene todo lo demás.
            </p>
            <CtaButton size="lg">Descargá los PDF en Discord</CtaButton>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, i) => (
              <Reveal key={guide.slug} delay={i * 0.1}>
                <article className="card-gold rounded-2xl overflow-hidden h-full flex flex-col group">
                  <Link href={`/guias/${guide.slug}`} className="flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={guide.cover}
                        alt={`Portada de la guía ${guide.title} de Market Makers`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                      <span className="absolute top-4 left-4 rounded-full border border-gold/40 bg-ink/80 px-3 py-1 text-xs text-gold">
                        {guide.level}
                      </span>
                    </div>
                    <div className="p-7 flex flex-col gap-3 flex-1">
                      <h2 className="font-display font-bold uppercase tracking-wide text-lg text-gold-light">
                        {guide.title}
                      </h2>
                      <p className="text-sm text-foreground/65 leading-relaxed flex-1">
                        {guide.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-foreground/45 pt-2">
                        <span>{readingMinutes(guide.words)} min de lectura</span>
                        <span aria-hidden="true">·</span>
                        <span>{guide.words.toLocaleString("es")} palabras</span>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-2 font-display font-bold uppercase tracking-wide text-sm text-gold group-hover:gap-3 transition-all">
                        Leer guía completa
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M5 12h14m-6-6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
