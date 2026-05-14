"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type ReactNode, type MouseEvent, useRef } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
  variant?: "default" | "glass" | "gradient";
}

const variantStyles = {
  default: "bg-surface border border-white/5",
  glass: "bg-surface/60 backdrop-blur-lg border border-white/5",
  gradient: "bg-card-gradient border border-white/5",
};

function TiltCard({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  function handleMouse(e: MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileHover={{ borderColor: "rgba(168, 85, 247, 0.3)", boxShadow: "0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(168,85,247,0.1)", transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}

export function Card({ children, className = "", hover = false, tilt = false, variant = "default" }: CardProps) {
  const base = `rounded-2xl p-6 ${variantStyles[variant]} ${className}`;

  if (tilt) return <TiltCard className={base}>{children}</TiltCard>;

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -6, borderColor: "rgba(168, 85, 247, 0.3)", boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 0 15px rgba(168,85,247,0.1)", transition: { duration: 0.25, ease: "easeOut" } }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={base}>{children}</div>;
}
