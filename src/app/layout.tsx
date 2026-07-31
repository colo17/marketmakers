import type { Metadata } from "next";
import { Montserrat, Inter, Cormorant_Garamond } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { BRAND, SEO } from "@/data/content";

// Sin ID configurado el sitio funciona igual, solo que sin medición.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// next/font self-hostea las fuentes en build: el navegador nunca llama al CDN de Google.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: SEO.title,
    template: `%s | ${BRAND.name}`,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: BRAND.url,
    siteName: BRAND.name,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Market Makers — Señales de trading de oro XAU/USD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/media/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      {/* Google Tag Manager. El ID se configura en .env.local (ver README). */}
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
