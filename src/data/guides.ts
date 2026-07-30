import principiantes from "./ebooks/trading-de-oro-para-principiantes.json";
import oro from "./ebooks/como-operar-el-oro.json";
import estrategias from "./ebooks/estrategias-trading-xauusd.json";
import patrones from "./ebooks/patrones-chartistas.json";
import noticias from "./ebooks/trading-con-noticias.json";
import riesgo from "./ebooks/gestion-del-riesgo.json";
import psicologia from "./ebooks/psicologia-del-trading.json";
import fondeo from "./ebooks/cuentas-de-fondeo.json";

/**
 * Contenido de las guías: el HTML original de los ebooks, con sus gráficos
 * SVG intactos. Regenerar con `node scripts/extract-html.mjs` (ver README).
 */

export type EbookPage = {
  title: string | null;
  id: string | null;
  html: string;
};

export type Ebook = {
  slug: string;
  css: string;
  pages: EbookPage[];
  words: number;
};

const EBOOKS: Record<string, Ebook> = {
  "trading-de-oro-para-principiantes": principiantes as Ebook,
  "como-operar-el-oro": oro as Ebook,
  "estrategias-trading-xauusd": estrategias as Ebook,
  "patrones-chartistas": patrones as Ebook,
  "trading-con-noticias": noticias as Ebook,
  "gestion-del-riesgo": riesgo as Ebook,
  "psicologia-del-trading": psicologia as Ebook,
  "cuentas-de-fondeo": fondeo as Ebook,
};

/** Metadata editorial de cada guía (SEO, orden, presentación). */
export const GUIDES_META = [
  {
    slug: "trading-de-oro-para-principiantes",
    title: "Trading de oro para principiantes",
    shortTitle: "Guía para Principiantes",
    level: "Nivel inicial",
    cover: "/media/ebook-principiantes.jpg",
    excerpt:
      "Del cero a tu primera operación en el oro: qué es el trading, qué son los pips y los lotes, cómo funciona el apalancamiento y cómo proteger tu capital con stop loss.",
    seoTitle: "Trading de Oro para Principiantes — Guía Completa Gratis en Español",
    seoDescription:
      "Aprendé trading de oro (XAU/USD) desde cero: pips, lotes, spread, apalancamiento, stop loss y gestión de riesgo. Guía gratuita en español, explicada paso a paso.",
    keywords: ["trading de oro para principiantes", "cómo empezar en el trading", "qué es XAU/USD"],
  },
  {
    slug: "como-operar-el-oro",
    title: "Cómo operar el oro (XAU/USD)",
    shortTitle: "Mastering Gold",
    level: "Nivel inicial",
    cover: "/media/ebook-mastering-gold.jpg",
    excerpt:
      "Todo sobre el activo: qué es realmente XAU/USD, cómo cotiza en pips y lotes, por qué sube y baja, qué lo mueve y en qué horarios conviene operarlo.",
    seoTitle: "Cómo Operar el Oro XAU/USD — Guía Completa del Activo",
    seoDescription:
      "Guía completa del oro en trading: qué es XAU/USD, cómo cotiza, qué mueve su precio, horarios de mayor volatilidad y cómo operarlo. Gratis y en español.",
    keywords: ["cómo operar el oro", "qué es XAU/USD", "trading de oro en español"],
  },
  {
    slug: "estrategias-trading-xauusd",
    title: "Estrategias de trading en XAU/USD",
    shortTitle: "Guía de Estrategias",
    level: "Nivel intermedio",
    cover: "/media/ebook-estrategias.jpg",
    excerpt:
      "El manual de operativa completo: tendencias, soportes y resistencias, price action, Smart Money Concepts, análisis top-down y gestión de riesgo aplicados al oro.",
    seoTitle: "Estrategias de Trading XAU/USD — Manual Completo Gratis",
    seoDescription:
      "Estrategias de trading para XAU/USD: tendencias, zonas de oferta y demanda, price action, Smart Money Concepts y confluencias. Manual completo gratis en español.",
    keywords: ["estrategias XAU/USD", "análisis XAU/USD", "smart money concepts oro"],
  },
  {
    slug: "patrones-chartistas",
    title: "Patrones chartistas",
    shortTitle: "Chart Patterns",
    level: "Nivel intermedio",
    cover: "/media/ebook-chart-patterns.jpg",
    excerpt:
      "Los 26 patrones que se repiten en el gráfico del oro: triángulos, banderas, banderines, dobles techos, hombro-cabeza-hombro y cómo operarlos con confluencias.",
    seoTitle: "Patrones Chartistas — Guía Completa de Figuras del Gráfico",
    seoDescription:
      "Patrones chartistas explicados: triángulos, banderas, banderines, doble techo y hombro-cabeza-hombro. Cómo identificarlos y operarlos en XAU/USD. Gratis.",
    keywords: ["patrones chartistas", "figuras chartistas", "patrones de trading"],
  },
  {
    slug: "trading-con-noticias",
    title: "Trading con noticias",
    shortTitle: "Trading The News",
    level: "Nivel avanzado",
    cover: "/media/ebook-noticias.jpg",
    excerpt:
      "Cómo leer el calendario económico y operar la volatilidad: NFP, IPC, decisiones de tipos y bancos centrales, y por qué el oro reacciona como reacciona.",
    seoTitle: "Trading con Noticias — Operar el Calendario Económico en XAU/USD",
    seoDescription:
      "Aprendé a operar noticias en XAU/USD: calendario económico, NFP, IPC, tipos de interés y bancos centrales. Cómo gestionar la volatilidad. Guía gratis en español.",
    keywords: ["trading con noticias", "calendario económico trading", "operar NFP oro"],
  },
  {
    slug: "gestion-del-riesgo",
    title: "Gestión del riesgo",
    shortTitle: "Risk Management",
    level: "Nivel esencial",
    cover: "/media/ebook-riesgo.jpg",
    excerpt:
      "Por qué se pierde incluso con una buena estrategia. Tamaño de posición, ratio riesgo/beneficio, drawdown y las reglas que mantienen viva tu cuenta.",
    seoTitle: "Gestión del Riesgo en Trading — Guía Completa Gratis",
    seoDescription:
      "Gestión del riesgo en trading de oro: tamaño de posición, ratio riesgo/beneficio, control del drawdown y reglas de protección de capital. Guía gratis en español.",
    keywords: ["gestión del riesgo trading", "tamaño de posición", "ratio riesgo beneficio"],
  },
  {
    slug: "psicologia-del-trading",
    title: "Psicología del trading",
    shortTitle: "The Trader's Mind",
    level: "Todos los niveles",
    cover: "/media/ebook-traders-mind.jpg",
    excerpt:
      "Por qué la mayoría pierde con una buena estrategia. FOMO, revenge trading, sobreoperar y el ciclo emocional del mercado — con rutinas concretas para controlarlos.",
    seoTitle: "Psicología del Trading — Cómo Dominar tus Emociones Operando",
    seoDescription:
      "Psicología del trading en español: FOMO, revenge trading, overtrading y gestión emocional. Rutinas y checklists para operar con disciplina. Guía gratuita.",
    keywords: ["psicología del trading", "FOMO trading", "disciplina en el trading"],
  },
  {
    slug: "cuentas-de-fondeo",
    title: "Cuentas de fondeo",
    shortTitle: "Cuentas de Fondeo",
    level: "Nivel avanzado",
    cover: "/media/ebook-fondeo.jpg",
    excerpt:
      "De la demo al capital real: qué es una prop firm, cómo funcionan los challenges, las reglas que te descalifican y cómo preparar la evaluación sin quemarla.",
    seoTitle: "Cuentas de Fondeo y Prop Firms — Guía Completa en Español",
    seoDescription:
      "Cómo funcionan las cuentas de fondeo: prop firms, challenges, drawdown máximo, reglas de descalificación y cómo pasar la evaluación. Guía gratis en español.",
    keywords: ["cuentas de fondeo", "prop firm", "challenge de fondeo"],
  },
] as const;

export type GuideMeta = (typeof GUIDES_META)[number];

export function getGuideMeta(slug: string): GuideMeta | undefined {
  return GUIDES_META.find((g) => g.slug === slug);
}

export function getEbook(slug: string): Ebook | undefined {
  return EBOOKS[slug];
}

/** Minutos de lectura estimados (200 palabras/min). */
export function readingMinutes(words: number): number {
  return Math.max(1, Math.round(words / 200));
}
