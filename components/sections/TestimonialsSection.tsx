"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/case-study/TestimonialCard";
import { TESTIMONIAL_PLACEHOLDERS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <SectionContainer bordered>
      <SectionHeading
        eyebrow="Client Feedback"
        title={
          <>
            This space is reserved <span className="text-gradient">for results.</span>
          </>
        }
        subtitle="Client testimonials are added only when they're real. As current projects wrap, this section fills itself."
      />

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {TESTIMONIAL_PLACEHOLDERS.map((testimonial) => (
          <motion.div key={testimonial.role} variants={fadeInUp} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
