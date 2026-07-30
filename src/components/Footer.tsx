import { BRAND, LINKS, DISCLAIMER } from "@/data/content";
import LogoM from "./LogoM";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-14">
      <div className="mx-auto max-w-7xl px-5 flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <LogoM className="h-12 w-12" />
          <p className="font-display font-extrabold uppercase tracking-wider">
            <span className="text-gold-gradient">Market</span>{" "}
            <span className="text-silver-gradient">Makers</span>
          </p>
          <p className="font-serif italic text-gold/70">{BRAND.slogan2}</p>
        </div>

        <nav aria-label="Redes sociales">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href={LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-gold transition-colors flex items-center gap-2 text-sm"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M20.3 4.4A19.8 19.8 0 0015.4 3l-.2.4c1.6.4 3 1.2 4.3 2.2a16.2 16.2 0 00-14.9 0A11 11 0 018.8 3.4L8.6 3a19.8 19.8 0 00-4.9 1.5A20.3 20.3 0 00.1 18.1a19.9 19.9 0 006.1 3l.5-.7a12.8 12.8 0 01-2.4-1.2l.6-.4a14.2 14.2 0 0012.2 0l.6.4c-.8.5-1.6.9-2.4 1.2l.5.7a19.9 19.9 0 006.1-3A20.2 20.2 0 0020.3 4.4zM8 15.3c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm8 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z" />
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a
                href={LINKS.kick}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-gold transition-colors flex items-center gap-2 text-sm"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M3 2h6v6h3V5h3V2h6v7h-3v3h3v7h-6v-3h-3v-3H9v6H3V2z" />
                </svg>
                Kick
              </a>
            </li>
            <li>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-gold transition-colors flex items-center gap-2 text-sm"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        <div className="divider-gold w-full max-w-lg" />

        <p className="max-w-2xl text-xs text-foreground/40 leading-relaxed">{DISCLAIMER.short}</p>

        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
