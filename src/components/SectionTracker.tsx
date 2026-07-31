"use client";

import { useEffect } from "react";
import { trackSectionView } from "@/lib/analytics";

/**
 * Mide qué secciones de la home llega a ver la gente.
 *
 * Usa IntersectionObserver (no listeners de scroll) para no penalizar el
 * rendimiento, y cada sección se reporta una sola vez por visita.
 * El dato responde: ¿cuántos llegan a ver los precios? ¿y la FAQ?
 */
export default function SectionTracker() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    if (!sections.length) return;

    const seen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!entry.isIntersecting || seen.has(id)) continue;
          seen.add(id);
          trackSectionView(id);
          observer.unobserve(entry.target);
        }
      },
      // Se cuenta como vista cuando entra un tercio de la sección.
      { threshold: 0.33 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
