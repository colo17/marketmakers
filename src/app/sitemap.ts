import type { MetadataRoute } from "next";
import { BRAND } from "@/data/content";
import { GUIDES_META } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BRAND.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BRAND.url}/guias`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...GUIDES_META.map((guide) => ({
      url: `${BRAND.url}/guias/${guide.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
