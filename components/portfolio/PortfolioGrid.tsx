"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { NICHES, type Niche, type PortfolioProject } from "@/lib/portfolio";

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

type Filter = "All" | Niche;

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [active, setActive] = useState<Filter>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.niche === active);

  return (
    <div>
      {/* Niche filter pills */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5" role="tablist" aria-label="Filter by niche">
        {(["All", ...NICHES] as Filter[]).map((niche) => {
          const isActive = active === niche;
          return (
            <button
              key={niche}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(niche)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${
                isActive
                  ? "border-accent/50 bg-accent-faint text-accent"
                  : "border-white/[0.08] bg-white/[0.03] text-foreground-muted hover:border-white/20 hover:text-foreground"
              }`}
            >
              {niche}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        key={active}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-sm text-foreground-dim">
          Case studies for this niche are coming soon.
        </p>
      )}
    </div>
  );
}
