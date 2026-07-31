"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { SCROLLY, BRAND } from "@/data/content";

/**
 * Sección narrativa: el video queda fijo mientras las frases pasan por encima.
 *
 * El fondo se fija con `position: sticky` (CSS nativo) en vez del `pin` de
 * ScrollTrigger: así no se rompe cuando el navegador de mobile esconde o
 * muestra la barra de direcciones y cambia la altura del viewport.
 *
 * - Desktop: el video avanza cuadro a cuadro con el scroll (scrubbing).
 * - Mobile: el scrubbing de video no es fiable (iOS Safari no decodifica lo
 *   bastante rápido al hacer seek continuo), así que el video se reproduce
 *   en loop. La reproducción normal sí va acelerada por hardware y es fluida.
 *
 * El maquetado es idéntico en ambos modos, así que cambiar de uno a otro
 * (al rotar el teléfono o redimensionar) no altera la altura de la página.
 */
export default function Scrollytelling() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [scrub, setScrub] = useState(false);

  // Se reevalúa al rotar o redimensionar, no solo al cargar.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setScrub(wide.matches && !still.matches);

    update();
    wide.addEventListener("change", update);
    still.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      still.removeEventListener("change", update);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Desktop: el progreso del scroll manda sobre el cuadro del video.
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (!scrub || !video?.duration) return;
    video.currentTime = Math.min(video.duration - 0.05, video.duration * progress);
  });

  // Mobile: reproducción en loop. Desktop: pausado, lo controla el scroll.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (scrub || reduce) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Si el navegador bloquea el autoplay queda el poster: no rompe nada.
      });
    }
  }, [scrub, reduce]);

  return (
    <section ref={sectionRef} className="relative" aria-label="El viaje del trader">
      {/* Fondo fijo */}
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          loop={!scrub}
          preload="metadata"
          poster="/media/scrolly-poster.jpg"
          aria-hidden="true"
        >
          <source src="/media/scrolly-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

        <p className="absolute bottom-8 inset-x-0 text-center text-[0.65rem] md:text-xs uppercase tracking-[0.35em] text-gold/50 px-5">
          {BRAND.slogan2}
        </p>
      </div>

      {/* Las frases pasan por encima del fondo fijo */}
      <div className="relative -mt-[100svh]">
        {SCROLLY.frases.map((frase) => (
          <div
            key={frase.text}
            className="h-svh flex items-center justify-center px-6"
          >
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-35% 0px -35% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-display font-black uppercase text-3xl sm:text-5xl md:text-6xl text-gold-gradient tracking-tight leading-[1.05]">
                {frase.text}
              </p>
              {frase.sub && (
                <p className="mt-4 font-serif italic text-xl md:text-3xl text-foreground/80">
                  {frase.sub}
                </p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
