"use client";

import { trackTocClick } from "@/lib/analytics";
import type { EbookPage } from "@/data/guides";

/**
 * Índice de la guía. Los clics se miden para saber qué capítulos buscan
 * los lectores: eso indica qué temas conviene desarrollar o separar.
 */
export default function GuideToc({ slug, pages }: { slug: string; pages: EbookPage[] }) {
  if (pages.length < 3) return null;

  return (
    <nav aria-label="Contenido de la guía" className="card-gold rounded-2xl p-6 md:p-8 mb-14">
      <h2 className="font-display font-bold uppercase tracking-widest text-xs text-gold mb-5">
        Contenido de esta guía
      </h2>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
        {pages.map((page, i) => (
          <li key={page.id} className="flex gap-3 text-sm">
            <span className="font-display font-bold text-gold/50 tabular-nums shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${page.id}`}
              onClick={() => trackTocClick(slug, page.title ?? "")}
              className="text-foreground/70 hover:text-gold transition-colors"
            >
              {page.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
