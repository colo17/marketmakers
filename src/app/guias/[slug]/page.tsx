import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import EbookContent from "@/components/guias/EbookContent";
import DiscordCta from "@/components/guias/DiscordCta";
import StreamCta from "@/components/guias/StreamCta";
import { BRAND, DISCLAIMER } from "@/data/content";
import { GUIDES_META, getGuideMeta, getEbook, readingMinutes } from "@/data/guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES_META.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getGuideMeta(slug);
  if (!meta) return {};

  return {
    title: meta.seoTitle,
    description: meta.seoDescription,
    keywords: [...meta.keywords],
    alternates: { canonical: `/guias/${meta.slug}` },
    openGraph: {
      type: "article",
      title: meta.seoTitle,
      description: meta.seoDescription,
      url: `${BRAND.url}/guias/${meta.slug}`,
      images: [{ url: meta.cover, alt: `Guía ${meta.title} de Market Makers` }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.seoTitle,
      description: meta.seoDescription,
      images: [meta.cover],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const meta = getGuideMeta(slug);
  const ebook = getEbook(slug);
  if (!meta || !ebook) notFound();

  const minutes = readingMinutes(ebook.words);
  const others = GUIDES_META.filter((g) => g.slug !== slug);
  const toc = ebook.pages.filter((p) => p.title && p.id);

  // El CTA del stream va a mitad de la guía, donde el lector ya está enganchado.
  const midpoint = Math.floor(ebook.pages.length / 2);
  const firstHalf = ebook.pages.slice(0, midpoint);
  const secondHalf = ebook.pages.slice(midpoint);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: meta.title,
      description: meta.seoDescription,
      image: `${BRAND.url}${meta.cover}`,
      inLanguage: "es",
      author: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
      publisher: {
        "@type": "Organization",
        name: BRAND.name,
        logo: { "@type": "ImageObject", url: `${BRAND.url}/media/og-image.jpg` },
      },
      mainEntityOfPage: `${BRAND.url}/guias/${meta.slug}`,
      wordCount: ebook.words,
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: meta.title,
      description: meta.seoDescription,
      inLanguage: "es",
      provider: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: `PT${minutes}M`,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BRAND.url },
        { "@type": "ListItem", position: 2, name: "Guías", item: `${BRAND.url}/guias` },
        {
          "@type": "ListItem",
          position: 3,
          name: meta.title,
          item: `${BRAND.url}/guias/${meta.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <SmoothScroll />
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        <article className="mx-auto max-w-4xl px-5">
          <nav aria-label="Migas de pan" className="mb-8 text-xs text-foreground/45">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/guias" className="hover:text-gold transition-colors">
                  Guías
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground/70">{meta.shortTitle}</li>
            </ol>
          </nav>

          <header className="mb-10">
            <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-display font-bold uppercase tracking-widest text-gold">
              {meta.level}
            </span>
            <h1 className="mt-5 font-display font-black uppercase text-3xl md:text-5xl tracking-tight text-gold-gradient leading-[1.1]">
              {meta.title}
            </h1>
            <p className="mt-5 text-lg text-foreground/70 leading-relaxed">{meta.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-xs text-foreground/45 flex-wrap">
              <span>{minutes} min de lectura</span>
              <span aria-hidden="true">·</span>
              <span>{ebook.words.toLocaleString("es")} palabras</span>
              <span aria-hidden="true">·</span>
              <span>Gratis, sin registro</span>
            </div>
          </header>

          <div className="mb-12">
            <DiscordCta variant="top" />
          </div>

          {toc.length >= 3 && (
            <nav
              aria-label="Contenido de la guía"
              className="card-gold rounded-2xl p-6 md:p-8 mb-14"
            >
              <h2 className="font-display font-bold uppercase tracking-widest text-xs text-gold mb-5">
                Contenido de esta guía
              </h2>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {toc.map((page, i) => (
                  <li key={page.id} className="flex gap-3 text-sm">
                    <span className="font-display font-bold text-gold/50 tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${page.id}`}
                      className="text-foreground/70 hover:text-gold transition-colors"
                    >
                      {page.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <EbookContent css={ebook.css} pages={firstHalf} />

          <div className="my-14">
            <StreamCta />
          </div>

          <EbookContent css="" pages={secondHalf} />

          <div className="mt-16">
            <DiscordCta variant="bottom" />
          </div>

          <section className="mt-20" aria-labelledby="otras-guias">
            <h2
              id="otras-guias"
              className="font-display font-extrabold uppercase text-xl text-foreground mb-6"
            >
              Seguí aprendiendo
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/guias/${other.slug}`}
                  className="card-gold rounded-xl overflow-hidden group"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={other.cover}
                      alt={`Guía ${other.title}`}
                      fill
                      sizes="25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                  </div>
                  <p className="p-4 font-display font-bold text-sm text-gold-light">
                    {other.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <aside className="mt-16 rounded-xl border border-foreground/15 bg-ink-soft p-6">
            <h2 className="font-display font-bold uppercase tracking-wide text-sm text-foreground/80 mb-3">
              {DISCLAIMER.title}
            </h2>
            <p className="text-xs text-foreground/50 leading-relaxed">{DISCLAIMER.short}</p>
          </aside>
        </article>
      </main>

      <Footer />
    </>
  );
}
