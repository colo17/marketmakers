type Props = {
  className?: string;
  title?: string;
};

/** Logo "M" metálico — mitad oro, mitad plata, como en la marca. */
export default function LogoM({ className = "h-10 w-10", title = "Market Makers" }: Props) {
  return (
    <svg
      viewBox="0 0 100 90"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mm-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e27a" />
          <stop offset="45%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#9c7c1e" />
        </linearGradient>
        <linearGradient id="mm-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#c9c9c9" />
          <stop offset="100%" stopColor="#8a8a8a" />
        </linearGradient>
      </defs>
      {/* Trazo izquierdo (oro) */}
      <path d="M8 88 L8 2 L50 52 L50 74 L22 41 L22 88 Z" fill="url(#mm-gold)" />
      {/* Trazo derecho (plata) */}
      <path d="M92 88 L92 2 L50 52 L50 74 L78 41 L78 88 Z" fill="url(#mm-silver)" />
      {/* Barra central (oro) */}
      <path d="M42 60 L50 69 L58 60 L58 88 L42 88 Z" fill="url(#mm-gold)" />
    </svg>
  );
}
