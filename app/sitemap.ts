import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { CATEGORIES } from "@/lib/media";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/portfolio`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...CATEGORIES.map((cat) => ({
      url: `${SITE.url}/portfolio/${cat.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
