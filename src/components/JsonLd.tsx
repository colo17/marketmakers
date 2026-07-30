import { BRAND, LINKS, EDUCACION, FAQ, SEO } from "@/data/content";

/** Datos estructurados JSON-LD: Organization, WebSite, Course y FAQPage. */
export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: BRAND.url,
    logo: `${BRAND.url}/media/og-image.jpg`,
    description: SEO.description,
    sameAs: [LINKS.discord, LINKS.kick, LINKS.instagram],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: BRAND.url,
    inLanguage: "es",
  };

  const courses = EDUCACION.ebooks.map((ebook) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: ebook.title,
    description: ebook.description,
    inLanguage: "es",
    provider: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT2H",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }));

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };

  const blocks = [organization, website, ...courses, faqPage];

  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
