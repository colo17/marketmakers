import type { MetadataRoute } from "next";
import { BRAND } from "@/data/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BRAND.url}/sitemap.xml`,
  };
}
