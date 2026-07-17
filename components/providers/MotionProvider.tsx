"use client";

import { MotionConfig } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Makes every Framer Motion animation honor the user's OS
 * "reduce motion" setting. `reducedMotion="user"` strips transform/layout
 * animation for those users while keeping essential opacity fades, so the
 * site stays accessible without a per-component hook.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
