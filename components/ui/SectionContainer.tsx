"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

const revealVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export function SectionContainer({ id, children, className = "", wide = false }: SectionContainerProps) {
  return (
    <section id={id} className={`py-24 sm:py-32 px-4 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        className={`mx-auto ${wide ? "max-w-8xl" : "max-w-7xl"}`}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
