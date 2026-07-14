import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio — AI Video Ad Case Studies",
  description:
    "AI-powered advertising creatives across beauty, supplements, fashion, food, home, pets, tech, SaaS, and automotive — full case studies from strategy to final ad.",
};

export default function PortfolioPage() {
  return (
    <div className="px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page header */}
        <div className="mb-16 text-center">
          <span className="tag">Portfolio</span>
          <h1 className="section-title mt-5 text-balance">
            Ad creative, documented <span className="text-gradient">end to end.</span>
          </h1>
          <p className="section-subtitle">
            Every case study walks the full pipeline — research, hooks, script, storyboard, AI
            production, and final delivery. Client work is added as campaigns wrap and results come in.
          </p>
        </div>

        <PortfolioGrid projects={PORTFOLIO_PROJECTS} />
      </div>
    </div>
  );
}
