"use client";

import { LINKS } from "@/data/content";
import { trackDiscordClick, trackKickClick, type CtaLocation } from "@/lib/analytics";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "gold" | "outline";
  size?: "md" | "lg";
  className?: string;
  /** Dónde está el botón. Se manda a Analytics para comparar qué CTA convierte. */
  location?: CtaLocation;
};

/** Botón CTA. Por defecto apunta al Discord de Market Makers. */
export default function CtaButton({
  children,
  href = LINKS.discord,
  variant = "gold",
  size = "md",
  className = "",
  location,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold uppercase tracking-wide";
  const sizes = {
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };
  const variants = {
    gold: "btn-gold",
    outline: "btn-outline-gold",
  };
  const external = href.startsWith("http");

  const handleClick = () => {
    if (!location) return;
    if (href === LINKS.discord) trackDiscordClick(location);
    else if (href === LINKS.kick) trackKickClick(location);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
