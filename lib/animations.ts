import { type Variants, type Transition } from "framer-motion";

/* ─── Easing Curves ──────────────────────────────────────── */
export const ease = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  snappy: [0.16, 1, 0.3, 1] as const,
  spring: { type: "spring", stiffness: 260, damping: 20 } as Transition,
  springGentle: { type: "spring", stiffness: 120, damping: 14 } as Transition,
  springBouncy: { type: "spring", stiffness: 300, damping: 15 } as Transition,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: ease.smooth } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.snappy } },
};

export const blurFadeInUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: ease.snappy } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: ease.snappy } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: ease.snappy } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: ease.snappy } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

export const hoverLift = { y: -6, transition: { duration: 0.25, ease: ease.smooth } };
export const hoverScale = { scale: 1.05, transition: ease.spring };
export const tapShrink = { scale: 0.97, transition: { duration: 0.1 } };

export const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};
