import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { CATEGORIES, GENERATED_AT } from "@/lib/media";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = GENERATED_AT ? new Date(GENERATED_AT) : new Date();
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/portfolio`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...CATEGORIES.map((cat) => ({
      url: `${SITE.url}/portfolio/${cat.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
