"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV, LINKS, BRAND } from "@/data/content";
import LogoM from "./LogoM";
import CtaButton from "./ui/CtaButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-line py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-5 flex items-center justify-between gap-4"
        aria-label="Navegación principal"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
          <LogoM className="h-9 w-9" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-extrabold uppercase tracking-wider text-sm">
              <span className="text-gold-gradient">Market</span>{" "}
              <span className="text-silver-gradient">Makers</span>
            </span>
            <span className="text-[0.6rem] tracking-[0.3em] text-gold/70 uppercase mt-1">
              {BRAND.tagline}
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-foreground/70 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <CtaButton className="hidden md:inline-flex" size="md" location="navbar">
            Unite al Discord
          </CtaButton>
          <button
            className="lg:hidden text-gold p-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-ink/95 backdrop-blur-md border-b border-line">
          <ul className="px-5 py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <CtaButton className="w-full" location="navbar">
                Unite al Discord
              </CtaButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
