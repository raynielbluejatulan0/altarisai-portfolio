"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ABOUT, WHY_ME } from "@/lib/constants";

export function WhyMeSection() {
  return (
    <SectionContainer id="about" bordered>
      <div className="grid items-start gap-14 lg:grid-cols-2">
        {/* About */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span variants={fadeInUp} className="tag inline-block">
            Why Work With Me
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mt-5 text-balance">
            An ad maker who happens <span className="text-gradient">to use AI.</span>
          </motion.h2>
          {ABOUT.paragraphs.map((paragraph) => (
            <motion.p
              key={paragraph.slice(0, 24)}
              variants={fadeInUp}
              className="mt-6 text-base leading-relaxed text-foreground-muted"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Differentiators */}
        <motion.div
          className="space-y-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {WHY_ME.map((item, i) => (
            <motion.div key={item.title} variants={slideInRight} className="glow-card rounded-3xl p-7">
              <div className="flex items-start gap-5">
                <span className="font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
