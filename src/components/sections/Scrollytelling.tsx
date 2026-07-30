"use client";

import { useEffect, useRef, useState } from "react";
import { SCROLLY, BRAND } from "@/data/content";

/**
 * Sección estrella: el video narrativo se pinea y avanza con el scroll (scrubbing),
 * con frases que aparecen sincronizadas.
 * Fallback: en mobile o con prefers-reduced-motion se muestran las frases
 * con reveals simples sobre el poster estático (sin pin ni scrubbing).
 */
export default function Scrollytelling() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const phraseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [degraded, setDegraded] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (reduce || isMobile) {
      setDegraded(true);
      return;
    }

    let ctx: gsap.Context | undefined;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const video = videoRef.current;
        if (!section || !video) return;

        ctx = gsap.context(() => {
          // Scrub del video sincronizado con el scroll del pin.
          const setupScrub = () => {
            const duration = video.duration;
            if (!duration || Number.isNaN(duration)) return;
            gsap.to(video, {
              currentTime: duration,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=300%",
                scrub: 1.2,
                pin: true,
              },
            });
          };

          if (video.readyState >= 1) setupScrub();
          else video.addEventListener("loadedmetadata", setupScrub, { once: true });

          // Frases sincronizadas: cada una entra y sale en su tramo del scroll.
          const n = SCROLLY.frases.length;
          phraseRefs.current.forEach((el, i) => {
            if (!el) return;
            const segment = 300 / n; // % de scroll por frase
            gsap.fromTo(
              el,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: `top+=${i * segment}% top`,
                  end: `top+=${i * segment + segment * 0.4}% top`,
                  scrub: true,
                },
              }
            );
            if (i < n - 1) {
              gsap.to(el, {
                opacity: 0,
                y: -60,
                ease: "power2.in",
                scrollTrigger: {
                  trigger: section,
                  start: `top+=${(i + 0.6) * segment}% top`,
                  end: `top+=${(i + 1) * segment}% top`,
                  scrub: true,
                },
              });
            }
          });

          // Línea dorada que se dibuja con el scroll.
          gsap.fromTo(
            ".scrolly-line",
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=300%",
                scrub: true,
              },
            }
          );
        }, section);
      }
    );

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  // --- Fallback simple (mobile / reduced motion) ---
  if (degraded) {
    return (
      <section className="relative py-24 overflow-hidden" aria-label="El viaje del trader">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/media/scrolly-poster.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 flex flex-col gap-20 text-center">
          {SCROLLY.frases.map((frase) => (
            <div key={frase.text}>
              <p className="font-display font-extrabold uppercase text-3xl text-gold-gradient">
                {frase.text}
              </p>
              {frase.sub && (
                <p className="mt-3 font-serif italic text-xl text-foreground/70">{frase.sub}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  // --- Versión completa con pin + scrub ---
  return (
    <section
      ref={sectionRef}
      className="relative h-svh overflow-hidden"
      aria-label="El viaje del trader"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        poster="/media/scrolly-poster.jpg"
        aria-hidden="true"
      >
        <source src="/media/scrolly-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ink/55" />

      {/* Frases sincronizadas */}
      <div className="absolute inset-0 flex items-center justify-center">
        {SCROLLY.frases.map((frase, i) => (
          <div
            key={frase.text}
            ref={(el) => {
              phraseRefs.current[i] = el;
            }}
            className="absolute px-5 text-center opacity-0"
          >
            <p className="font-display font-black uppercase text-4xl md:text-6xl text-gold-gradient tracking-tight">
              {frase.text}
            </p>
            {frase.sub && (
              <p className="mt-4 font-serif italic text-2xl md:text-3xl text-foreground/80">
                {frase.sub}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Línea dorada que se dibuja */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-2/3 max-w-xl">
        <div className="scrolly-line divider-gold origin-left" />
      </div>

      <p className="absolute bottom-8 inset-x-0 text-center text-xs uppercase tracking-[0.35em] text-gold/50">
        {BRAND.slogan2}
      </p>
    </section>
  );
}
