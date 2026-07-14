import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

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
    ...PORTFOLIO_PROJECTS.map((project) => ({
      url: `${SITE.url}/portfolio/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
