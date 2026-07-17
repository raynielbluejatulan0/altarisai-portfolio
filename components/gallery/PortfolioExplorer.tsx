"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, type MediaCategory } from "@/lib/media";
import { GalleryGrid } from "./GalleryGrid";

const ALL = "all";

/**
 * Full portfolio browser: a sticky category tab bar over the media galleries.
 * "All" renders every category as its own section; selecting a tab focuses one.
 * Categories are read from the manifest, so new folders appear automatically.
 */
export function PortfolioExplorer() {
  const [active, setActive] = useState<string>(ALL);

  const visible: MediaCategory[] =
    active === ALL ? CATEGORIES : CATEGORIES.filter((c) => c.slug === active);

  return (
    <div>
      {/* Sticky tab bar */}
      <div className="sticky top-16 z-30 -mx-4 mb-12 border-b border-white/[0.06] bg-background/80 px-4 py-3 backdrop-blur-md">
        <div className="relative">
          <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
            <Tab label="All Work" active={active === ALL} onClick={() => setActive(ALL)} />
            {CATEGORIES.map((c) => (
              <Tab key={c.slug} label={c.name} count={c.count} active={active === c.slug} onClick={() => setActive(c.slug)} />
            ))}
          </div>
          {/* Scroll affordance — signals more tabs on narrow screens */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent xl:hidden"
            aria-hidden
          />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-20 sm:space-y-28">
        {visible.map((cat, ci) => (
          <motion.section
            key={cat.slug}
            id={cat.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-32"
          >
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{cat.name}</h2>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs tabular-nums text-foreground-dim">
                    {cat.count}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted sm:text-base">{cat.description}</p>
              </div>
              <Link
                href={`/portfolio/${cat.slug}`}
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
              >
                View category
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <GalleryGrid items={cat.items} priorityCount={ci === 0 ? 4 : 0} />
          </motion.section>
        ))}
      </div>
    </div>
  );
}

function Tab({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count?: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "border-accent/50 bg-accent-faint text-white"
          : "border-white/10 bg-white/[0.02] text-foreground-muted hover:border-white/20 hover:text-white"
      }`}
    >
      {label}
      {count !== undefined && (
        <span className={`ml-1.5 tabular-nums ${active ? "text-accent" : "text-foreground-dim"}`}>{count}</span>
      )}
    </button>
  );
}
