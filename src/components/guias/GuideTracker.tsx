"use client";

import { useEffect, useRef } from "react";
import { trackGuideProgress } from "@/lib/analytics";

/**
 * Mide cuánto se lee de una guía: dispara un evento al cruzar el 25, 50, 75
 * y 100 % del artículo. Cada hito se manda una sola vez por visita.
 *
 * Sirve para saber si las guías se leen de verdad o la gente rebota, y
 * qué guías retienen mejor.
 */
export default function GuideTracker({ slug }: { slug: string }) {
  const sent = useRef<Set<number>>(new Set());

  useEffect(() => {
    const milestones = [25, 50, 75, 100];

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = (window.scrollY / scrollable) * 100;

      for (const milestone of milestones) {
        if (percent >= milestone && !sent.current.has(milestone)) {
          sent.current.add(milestone);
          trackGuideProgress(slug, milestone);
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  return null;
}
