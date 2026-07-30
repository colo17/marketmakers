import { LINKS } from "@/data/content";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "gold" | "outline";
  size?: "md" | "lg";
  className?: string;
};

/** Botón CTA. Por defecto apunta al Discord de Market Makers. */
export default function CtaButton({
  children,
  href = LINKS.discord,
  variant = "gold",
  size = "md",
  className = "",
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

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
