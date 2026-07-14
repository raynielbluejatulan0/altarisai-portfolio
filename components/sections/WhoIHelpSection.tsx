"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Store, Package, Briefcase, type LucideIcon } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AUDIENCES, AUDIENCE_NICHES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Store,
  Package,
  Briefcase,
};

export function WhoIHelpSection() {
  return (
    <SectionContainer bordered>
      <SectionHeading
        eyebrow="Who I Help"
        title={
          <>
            Built for brands that <span className="text-gradient">live on paid social.</span>
          </>
        }
        subtitle="If creative volume is the bottleneck between you and scale, this is for you."
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {AUDIENCES.map((audience) => {
          const Icon = iconMap[audience.icon];
          return (
            <motion.div key={audience.title} variants={fadeInUp} className="glow-card rounded-3xl p-7">
              {Icon && <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />}
              <h3 className="font-display mt-5 text-lg font-bold text-foreground">{audience.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{audience.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Niche chips */}
      <motion.div
        className="mt-12 flex flex-wrap items-center justify-center gap-3"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {AUDIENCE_NICHES.map((niche) => (
          <span
            key={niche}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs tracking-wide text-foreground-muted"
          >
            {niche}
          </span>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
