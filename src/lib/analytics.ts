"use client";

import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Eventos de medición del sitio.
 *
 * Todos los eventos van prefijados con `mm_`. En Google Tag Manager hay
 * UNA sola etiqueta de evento GA4 con un activador de tipo "Evento
 * personalizado" que matchea `^mm_`, así que cualquier evento nuevo que se
 * agregue acá llega a Analytics sin tener que tocar GTM.
 *
 * Convención: nombre en snake_case, y los parámetros viajan planos.
 */

/** Dónde ocurrió la interacción. Sirve para comparar qué CTA convierte mejor. */
export type CtaLocation =
  | "navbar"
  | "hero"
  | "como_funciona"
  | "educacion_card"
  | "educacion_ver_todas"
  | "vip_gratis"
  | "vip_pago"
  | "bot_ia"
  | "streams"
  | "testimonios"
  | "footer"
  | "guia_top"
  | "guia_bottom"
  | "guia_stream"
  | "guias_hub";

type EventParams = Record<string, string | number | boolean | undefined>;

function track(event: string, params: EventParams = {}) {
  // Filtra los undefined para no ensuciar los informes de GA4.
  const clean: EventParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) clean[key] = value;
  }
  sendGTMEvent({ event, ...clean });
}

/** Clic en cualquier CTA que lleve al Discord. Es la conversión principal. */
export function trackDiscordClick(location: CtaLocation, extra?: EventParams) {
  track("mm_discord_click", { cta_location: location, ...extra });
}

/** Clic hacia el stream de Kick. */
export function trackKickClick(location: CtaLocation) {
  track("mm_kick_click", { cta_location: location });
}

/** Clic hacia Instagram. */
export function trackInstagramClick(location: CtaLocation) {
  track("mm_instagram_click", { cta_location: location });
}

/** Apertura de una guía desde una card (home o hub). */
export function trackGuideOpen(slug: string, location: CtaLocation) {
  track("mm_guide_open", { guide: slug, cta_location: location });
}

/** Progreso de lectura dentro de una guía: 25 / 50 / 75 / 100. */
export function trackGuideProgress(slug: string, percent: number) {
  track("mm_guide_progress", { guide: slug, percent });
}

/** Clic en una entrada del índice de la guía. */
export function trackTocClick(slug: string, heading: string) {
  track("mm_toc_click", { guide: slug, heading });
}

/** Apertura de una pregunta de la FAQ. */
export function trackFaqOpen(question: string) {
  track("mm_faq_open", { question });
}

/** Una sección de la home entró en pantalla. Mide hasta dónde llega la gente. */
export function trackSectionView(section: string) {
  track("mm_section_view", { section });
}
