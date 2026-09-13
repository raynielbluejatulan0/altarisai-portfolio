import type { Metadata } from "next";
import { PortfolioExplorer } from "@/components/gallery/PortfolioExplorer";
import { CTASection } from "@/components/sections/CTASection";
import { TOTAL_CATEGORIES, TOTAL_ITEMS } from "@/lib/media";
import { SITE } from "@/lib/constants";

const PORTFOLIO_DESCRIPTION =
  "The full body of work: UGC ads, VSLs, 3D Pixar-style animation, product commercials, news-style segments, real estate walkthroughs, podcasts, and more, produced end to end with AI.";

export const metadata: Metadata = {
  title: "Portfolio · AI Video Ads & Creative",
  description: PORTFOLIO_DESCRIPTION,
  alternates: { canonical: "/portfolio" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE.url}/portfolio` },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE.url}/portfolio#collection`,
      name: `Portfolio · ${SITE.name}`,
      url: `${SITE.url}/portfolio`,
      description: PORTFOLIO_DESCRIPTION,
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Page header */}
          <div className="mb-4 text-center">
            <span className="tag">Portfolio</span>
            <h1 className="section-title mt-5 text-balance">
              Our work, <span className="text-gradient">start to finish.</span>
            </h1>
            <p className="section-subtitle">
              {TOTAL_ITEMS} pieces across {TOTAL_CATEGORIES} categories. Every one is produced through our
              full AI pipeline, from strategy and script to final edit. Browse by style, tap any piece
              to play it full screen.
            </p>
          </div>

          <PortfolioExplorer />
        </div>
      </div>

      <CTASection />
    </>
  );
}
