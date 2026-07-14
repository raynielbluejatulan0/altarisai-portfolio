"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { getFeaturedProjects } from "@/lib/portfolio";

const featured = getFeaturedProjects();

export function PortfolioPreviewSection() {
  return (
    <SectionContainer id="work" bordered>
      <SectionHeading
        eyebrow="Featured Work"
        title={
          <>
            Case studies, <span className="text-gradient">built the way ads should be.</span>
          </>
        }
        subtitle="Each project documents the full creative pipeline — strategy, hooks, script, storyboard, AI production, and final delivery. Final client work is being added as campaigns wrap."
      />

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {featured.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button href="/portfolio" variant="outline" size="lg">
          View Full Portfolio
        </Button>
      </motion.div>
    </SectionContainer>
  );
}
