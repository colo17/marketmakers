"use client";

import Link from "next/link";
import { trackGuideOpen } from "@/lib/analytics";

/** Card del hub de guías: mide qué guía se abre desde /guias. */
export default function GuideCardLink({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/guias/${slug}`}
      onClick={() => trackGuideOpen(slug, "guias_hub")}
      className="flex flex-col h-full"
    >
      {children}
    </Link>
  );
}
