"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Smooth scroll global con Lenis. */
export default function SmoothScroll() {
  useEffect(() => {
    // Respetar prefers-reduced-motion: sin smooth scroll.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let rafId: number;
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
