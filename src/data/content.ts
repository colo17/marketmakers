/**
 * ============================================================
 *  CONTENIDO DEL SITIO — MARKET MAKERS
 *  Editá acá todos los textos, precios y enlaces del sitio.
 * ============================================================
 */

// ---- ENLACES ----
export const LINKS = {
  discord: "https://discord.gg/NExjMnrvQE",
  kick: "https://kick.com/1colomas",
  instagram: "https://instagram.com/marketmakersprofit",
  instagramHandle: "@marketmakersprofit",
} as const;

// ---- PRECIO VIP (editable) ----
export const PRECIO_VIP = "US$ 49"; // precio mensual del plan VIP
export const PRECIO_VIP_PERIODO = "/mes";

// ---- MARCA ----
export const BRAND = {
  name: "Market Makers",
  tagline: "XAU/USD SIGNALS",
  slogan1: "Precisión. Disciplina. Consistencia.",
  slogan2: "Disciplina hoy, libertad mañana.",
  // ⚠️ URL pública del sitio. De acá salen el canonical, el sitemap y las
  // previews al compartir (Open Graph). Cuando conectes un dominio propio,
  // cambiá ESTA línea y volvé a desplegar: es el único lugar donde se define.
  url: "https://marketmakers-nine.vercel.app",
} as const;

// ---- HERO ----
export const HERO = {
  badge: "🔥 LANZAMIENTO: TODO GRATIS POR 2 SEMANAS",
  headline1: "Domina el oro.",
  headline2: "Opera con precisión.",
  subhead:
    "Señales de trading de oro (XAU/USD) en tiempo real, análisis profesional y educación completa en español. Unite a la comunidad y empezá a operar con criterio.",
  ctaPrimary: "Unite al Discord — GRATIS",
  ctaSecondary: "Ver cómo funciona",
} as const;

// ---- PILARES ----
export const PILARES = [
  {
    icon: "target",
    title: "Análisis Profesional",
    description:
      "Análisis XAU/USD diario con estructura de mercado, zonas clave y contexto macro. Nada de humo: lectura técnica real.",
  },
  {
    icon: "chart",
    title: "Estrategias Rentables",
    description:
      "Setups probados con confluencias, gestión de riesgo definida y ejecución clara. Estrategia antes que impulso.",
  },
  {
    icon: "bell",
    title: "Señales en Tiempo Real",
    description:
      "Alertas de entrada con stop loss y take profit al instante en Discord. Vos decidís, nosotros te damos el mapa.",
  },
] as const;

// ---- CÓMO FUNCIONA (funnel) ----
export const COMO_FUNCIONA = {
  title: "Cómo funciona",
  subtitle:
    "Comenzar es gratis. Las señales VIP son de pago — pero durante nuestras 2 primeras semanas, TODO está gratis.",
  pasos: [
    {
      numero: "01",
      title: "Empezá GRATIS",
      description:
        "Unite al Discord y accedé a la comunidad, los ebooks de la colección Market Makers y el análisis diario del oro. Sin tarjeta, sin vueltas.",
    },
    {
      numero: "02",
      title: "Subí a VIP",
      description:
        "Señales premium de XAU/USD en tiempo real: entrada, stop loss y take profit. Setups completos con gestión de riesgo y seguimiento en vivo.",
    },
    {
      numero: "03",
      title: "Bot IA (beta)",
      description:
        "Nuestro bot de scalping para XAU/USD está en fase de aprendizaje. Los miembros acceden antes que nadie a los avances y resultados del desarrollo.",
    },
  ],
  cta: "Empezar gratis en Discord",
} as const;

// ---- SCROLLYTELLING ----
export const SCROLLY = {
  frases: [
    { text: "El mercado no premia la suerte.", sub: "Premia la preparación." },
    { text: "Precisión.", sub: "Cada entrada tiene una razón." },
    { text: "Disciplina hoy…", sub: "" },
    { text: "…libertad mañana.", sub: "" },
  ],
} as const;

// ---- EDUCACIÓN / EBOOKS ----
export const EDUCACION = {
  title: "Educación que construye traders",
  subtitle:
    "La colección Market Makers: ocho guías completas para pasar de cero a operar el oro con criterio. Leelas gratis acá o descargá los PDF en el Discord.",
  ebooks: [
    {
      slug: "trading-de-oro-para-principiantes",
      title: "Guía para Principiantes",
      pages: "20 páginas",
      description:
        "Desde cero al primer trade con criterio: qué es el trading, cómo leer velas japonesas y cómo dar tus primeros pasos sin quemar la cuenta.",
      cover: "/media/ebook-principiantes.jpg",
    },
    {
      slug: "como-operar-el-oro",
      title: "Mastering Gold",
      pages: "42 páginas",
      description:
        "Todo sobre el activo: qué es XAU/USD, cómo cotiza, qué mueve su precio y en qué horarios conviene operarlo.",
      cover: "/media/ebook-mastering-gold.jpg",
    },
    {
      slug: "estrategias-trading-xauusd",
      title: "Guía Completa de Estrategias",
      pages: "47 páginas",
      description:
        "Setups, confluencias y ejecución aplicados a XAU/USD. El manual de operativa que usamos todos los días en los análisis.",
      cover: "/media/ebook-estrategias.jpg",
    },
    {
      slug: "trading-con-noticias",
      title: "Trading The News",
      pages: "61 páginas",
      description:
        "Calendario económico, NFP, IPC y bancos centrales. Cómo operar la volatilidad de las noticias sin que te pase por encima.",
      cover: "/media/ebook-noticias.jpg",
    },
    {
      slug: "cuentas-de-fondeo",
      title: "Cuentas de Fondeo",
      pages: "45 páginas",
      description:
        "De la demo al capital real: cómo funcionan las prop firms, los challenges y las reglas que te descalifican.",
      cover: "/media/ebook-fondeo.jpg",
    },
    {
      slug: "gestion-del-riesgo",
      title: "Gestión del Riesgo",
      pages: "31 páginas",
      description:
        "Tamaño de posición, ratio riesgo/beneficio y control del drawdown. Las reglas que mantienen tu cuenta viva cuando el mercado se pone en contra.",
      cover: "/media/ebook-riesgo.jpg",
    },
    {
      slug: "psicologia-del-trading",
      title: "The Trader's Mind",
      pages: "34 páginas",
      description:
        "Psicología, disciplina y gestión emocional. Porque el peor enemigo de tu cuenta no es el mercado: sos vos sin un plan.",
      cover: "/media/ebook-traders-mind.jpg",
    },
    {
      slug: "patrones-chartistas",
      title: "Chart Patterns",
      pages: "42 páginas",
      description:
        "Los patrones gráficos que mueven el oro: triángulos, banderas, dobles techos y más, con ejemplos reales aplicados a XAU/USD.",
      cover: "/media/ebook-chart-patterns.jpg",
    },
  ],
  ctaLeer: "Leer online gratis",
  cta: "Descargar gratis en Discord",
} as const;

// ---- VIP / PRECIOS ----
export const VIP = {
  promoBanner: "⚡ Por lanzamiento: acceso VIP GRATIS por 2 semanas",
  title: "Señales VIP",
  subtitle:
    "Todo lo que necesitás para operar el oro con un plan claro, directo en tu Discord.",
  incluye: [
    "Señales XAU/USD en tiempo real",
    "Entrada, Stop Loss y Take Profit definidos",
    "Gestión de riesgo en cada operación",
    "Seguimiento en vivo durante los streams",
    "Análisis diario de estructura de mercado",
    "Acceso anticipado al Bot IA (beta)",
  ],
  planes: [
    {
      nombre: "Gratis",
      precio: "US$ 0",
      periodo: "siempre",
      destacado: false,
      features: [
        "Comunidad de traders en Discord",
        "Colección completa de ebooks",
        "Análisis diario del oro",
        "Streams en vivo en Kick",
      ],
      cta: "Unirme gratis",
    },
    {
      nombre: "VIP",
      precio: PRECIO_VIP,
      periodo: PRECIO_VIP_PERIODO,
      destacado: true,
      badge: "GRATIS 2 SEMANAS",
      features: [
        "Todo lo del plan Gratis",
        "Señales en tiempo real con SL/TP",
        "Setups completos con confluencias",
        "Gestión de riesgo detallada",
        "Seguimiento de operaciones en vivo",
        "Acceso anticipado al Bot IA",
      ],
      cta: "Quiero ser VIP",
    },
  ],
} as const;

// ---- BOT IA ----
export const BOT_IA = {
  badge: "BETA — EN FASE DE APRENDIZAJE",
  title: "Bot IA de Scalping",
  subtitle: "Innovación en desarrollo, sin promesas vacías.",
  description:
    "Estamos entrenando un bot de inteligencia artificial para scalping en XAU/USD. Hoy está en fase de aprendizaje: probamos, medimos y ajustamos con total transparencia frente a la comunidad. No prometemos resultados — compartimos el proceso real de construcción, con sus aciertos y sus errores.",
  puntos: [
    "Scalping automatizado sobre XAU/USD",
    "En entrenamiento con datos reales de mercado",
    "Avances compartidos en los streams y el Discord",
    "Los miembros acceden a la beta antes que nadie",
  ],
  cta: "Quiero acceso anticipado",
} as const;

// ---- STREAMS ----
export const STREAMS = {
  title: "Trading en vivo, todos los días",
  subtitle:
    "Operamos el oro en directo en Kick: análisis en tiempo real, ejecución de señales y preguntas de la comunidad.",
  horarios: [
    { label: "Sesión mañana", hora: "10:00 AM" },
    { label: "Sesión noche", hora: "9:00 PM" },
  ],
  zona: "Hora Uruguay (GMT-3)",
  canal: "kick.com/1colomas",
  cta: "Ver el stream en Kick",
} as const;

// ---- CTA DE STREAMS DENTRO DE LAS GUÍAS ----
export const GUIA_STREAM_CTA = {
  title: "Aprendé mientras copiás las señales",
  body: "No te quedes solo con la teoría. Operamos XAU/USD en directo y vas a ver cada entrada explicada en el momento —por qué se toma, dónde va el stop y cuándo se cierra— por un trader con más de 2 años aplicando estas mismas técnicas.",
  cta: "Ver el stream",
} as const;

// ---- TESTIMONIOS (placeholders editables) ----
export const TESTIMONIOS = {
  title: "La comunidad habla",
  subtitle: "Traders reales, progreso real. Sumate y escribí tu propia historia.",
  items: [
    {
      nombre: "Martín R.",
      rol: "Miembro de la comunidad",
      texto:
        "Entré sin saber nada de trading. Con la guía de principiantes y los streams diarios entendí en semanas lo que solo no había logrado en meses.",
    },
    {
      nombre: "Camila S.",
      rol: "Miembro VIP",
      texto:
        "Lo que más valoro es la gestión de riesgo. Acá nadie te vende humo: cada señal viene con su stop y su lógica explicada.",
    },
    {
      nombre: "Diego P.",
      rol: "Miembro de la comunidad",
      texto:
        "Los análisis en vivo de las 10 AM se volvieron parte de mi rutina. Se aprende muchísimo viendo operar en tiempo real.",
    },
  ],
  cta: "Sumate a la comunidad",
} as const;

// ---- FAQ ----
export const FAQ = {
  title: "Preguntas frecuentes",
  items: [
    {
      pregunta: "¿Es realmente gratis?",
      respuesta:
        "Sí. Unirte al Discord, acceder a la comunidad, los ebooks y el análisis diario es 100% gratis. Y durante las 2 primeras semanas del lanzamiento, también las señales VIP están liberadas para todos.",
    },
    {
      pregunta: "¿Qué pasa después de las 2 semanas?",
      respuesta:
        "El acceso gratuito a la comunidad, los ebooks y los streams se mantiene para siempre. Las señales VIP pasan a ser de pago mediante una suscripción mensual. Te avisamos con tiempo dentro del Discord — sin cargos automáticos ni sorpresas.",
    },
    {
      pregunta: "¿Necesito experiencia para empezar?",
      respuesta:
        "No. La Guía para Principiantes está pensada para arrancar desde cero, y en los streams diarios explicamos cada análisis paso a paso. Si ya tenés experiencia, la Guía de Estrategias y las señales VIP te van a resultar directamente aplicables.",
    },
    {
      pregunta: "¿Qué es el Bot IA?",
      respuesta:
        "Es un bot de scalping para XAU/USD que estamos entrenando con inteligencia artificial. Está en fase beta / aprendizaje: compartimos su desarrollo con total transparencia y los miembros tienen acceso anticipado a los avances.",
    },
    {
      pregunta: "¿Las señales garantizan ganancias?",
      respuesta:
        "No, y desconfiá de quien te prometa lo contrario. El trading conlleva riesgo real de pérdida. Nuestras señales son análisis profesional con gestión de riesgo definida, pero la decisión y la responsabilidad de cada operación son siempre tuyas.",
    },
    {
      pregunta: "¿En qué horario son los streams?",
      respuesta:
        "Todos los días a las 10:00 AM y 9:00 PM, hora Uruguay (GMT-3), en kick.com/1colomas. Ahí operamos en vivo, analizamos el mercado y respondemos preguntas de la comunidad.",
    },
  ],
} as const;

// ---- DISCLAIMER ----
export const DISCLAIMER = {
  title: "Aviso de riesgo",
  full: "El trading de instrumentos financieros, incluido el oro (XAU/USD), conlleva un alto nivel de riesgo y puede no ser adecuado para todos los inversores. Existe la posibilidad de perder parte o la totalidad del capital invertido. Los resultados pasados no garantizan resultados futuros. Todo el contenido de Market Makers — señales, análisis, ebooks, streams y material educativo — tiene fines exclusivamente informativos y educativos, y NO constituye asesoramiento financiero, de inversión ni de ningún otro tipo. Cada persona opera bajo su propia responsabilidad y debería considerar su situación financiera y, de ser necesario, consultar a un asesor profesional independiente antes de operar.",
  short:
    "El trading conlleva riesgo de pérdida. Resultados pasados no garantizan resultados futuros. Este contenido es educativo y no constituye asesoramiento financiero.",
} as const;

// ---- NAV ----
export const NAV = [
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Guías", href: "/guias" },
  { label: "Señales VIP", href: "/#vip" },
  { label: "Bot IA", href: "/#bot-ia" },
  { label: "Streams", href: "/#streams" },
  { label: "FAQ", href: "/#faq" },
] as const;

// ---- SEO ----
export const SEO = {
  title: "Market Makers — Señales de Trading de Oro XAU/USD en Español",
  description:
    "Señales de trading de oro (XAU/USD) en tiempo real, análisis profesional diario y curso de trading gratuito en español. Comunidad para Uruguay y LATAM. Empezá gratis.",
  keywords: [
    "señales de trading de oro",
    "señales XAU/USD",
    "curso de trading",
    "trading de oro en español",
    "análisis XAU/USD",
  ],
} as const;
