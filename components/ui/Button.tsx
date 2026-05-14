"use client";

import { motion } from "framer-motion";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { ease, tapShrink } from "@/lib/animations";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
}

const variantStyles = {
  primary: "bg-white hover:bg-white/90 text-black font-semibold",
  secondary: "bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.10] hover:border-white/20",
  outline: "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/[0.05]",
  ghost: "bg-transparent text-foreground-muted hover:text-foreground hover:bg-white/5",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

const hoverVariants = {
  primary: { scale: 1.04, transition: { ...ease.spring } },
  secondary: { scale: 1.04, transition: { ...ease.spring } },
  outline: { scale: 1.03, transition: { ...ease.spring } },
  ghost: { scale: 1.03, transition: { ...ease.spring } },
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.a href={href} className={classes} whileHover={hoverVariants[variant]} whileTap={tapShrink}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} whileHover={hoverVariants[variant]} whileTap={tapShrink} {...(props as object)}>
      {children}
    </motion.button>
  );
}
