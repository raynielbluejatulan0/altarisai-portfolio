"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, hoverLift } from "@/lib/animations";
import { SmartMedia } from "@/components/media/SmartMedia";
import { LogoPlaceholder } from "@/components/placeholders/LogoPlaceholder";
import type { PortfolioProject } from "@/lib/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
}

/** Premium portfolio card — cover, logo slot, title, niche, summary, deliverables, case-study CTA. */
export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <motion.article variants={fadeInUp} whileHover={hoverLift} className="group h-full">
      <Link
        href={`/portfolio/${project.slug}`}
        className="glow-card flex h-full flex-col overflow-hidden rounded-3xl"
      >
        {/* Cover */}
        <div className="relative">
          <SmartMedia asset={project.cover} className="!rounded-none !border-0" />
          <span className="tag absolute left-4 top-4 bg-background/80 backdrop-blur-sm">
            {project.niche}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-7">
          <LogoPlaceholder className="self-start" />

          <h3 className="font-display mt-5 text-xl font-bold text-foreground transition-colors group-hover:text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground-dim">{project.client}</p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground-muted">{project.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.deliverables.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[0.7rem] tracking-wide text-foreground-dim"
              >
                {item}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-flex items-center gap-1.5 border-t border-white/[0.06] pt-5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            View Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
