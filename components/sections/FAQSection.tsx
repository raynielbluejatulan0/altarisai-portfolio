"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeInUp, staggerContainerFast, ease } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQS } from "@/lib/constants";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionContainer id="faq" bordered>
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions worth asking <span className="text-gradient">before we talk.</span>
          </>
        }
      />

      <motion.div
        className="mx-auto max-w-3xl space-y-3"
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div key={faq.q} variants={fadeInUp} className="glow-card overflow-hidden rounded-2xl">
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-bold text-foreground">{faq.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: ease.snappy }}
                  className="shrink-0"
                >
                  <Plus className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: ease.snappy }}
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-foreground-muted">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
