"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Smooth scroll global con Lenis + sincronización con GSAP ScrollTrigger. */
export default function SmoothScroll() {
  useEffect(() => {
    // Respetar prefers-reduced-motion: sin smooth scroll.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let rafId: number;
    let scrollTriggerUpdate: (() => void) | null = null;

    // Sincronizar con ScrollTrigger si está cargado (lo carga el scrollytelling).
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      scrollTriggerUpdate = () => ScrollTrigger.update();
      lenis.on("scroll", scrollTriggerUpdate);
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
