"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS, type TestimonialEntry } from "@/lib/constants";

/**
 * Testimonial framework. Renders real, approved testimonials from
 * TESTIMONIALS.entries (name, brand, role, quote, headshot, logo). While the
 * list is empty it shows one honest placeholder — never fabricated quotes.
 */
export function TestimonialsSection() {
  const hasEntries = TESTIMONIALS.entries.length > 0;

  return (
    <SectionContainer bordered>
      <SectionHeading
        eyebrow={TESTIMONIALS.eyebrow}
        title={
          <>
            What our clients <span className="text-gradient">say.</span>
          </>
        }
      />

      {hasEntries ? (
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {TESTIMONIALS.entries.map((entry) => (
            <motion.div key={`${entry.name}-${entry.brand}`} variants={fadeInUp} className="h-full">
              <TestimonialCard entry={entry} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="glow-card mx-auto max-w-xl rounded-3xl p-10 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Quote className="mx-auto h-6 w-6 text-accent/50" aria-hidden />
          <p className="mt-5 text-sm leading-relaxed text-foreground-muted sm:text-base">
            {TESTIMONIALS.placeholder}
          </p>
        </motion.div>
      )}
    </SectionContainer>
  );
}

function TestimonialCard({ entry }: { entry: TestimonialEntry }) {
  return (
    <figure className="glow-card flex h-full flex-col rounded-3xl p-8">
      <Quote className="h-6 w-6 text-accent/50" aria-hidden />
      <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
        &ldquo;{entry.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        {entry.headshot && (
          <Image
            src={entry.headshot}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground">{entry.name}</p>
          <p className="text-xs text-foreground-dim">
            {[entry.role, entry.brand].filter(Boolean).join(" · ")}
          </p>
        </div>
        {entry.logo && (
          <Image src={entry.logo} alt={entry.brand ?? ""} width={64} height={24} className="h-6 w-auto object-contain opacity-80" />
        )}
      </figcaption>
    </figure>
  );
}
