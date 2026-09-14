"use client";

import { track } from "@vercel/analytics";

/**
 * Central CTA/event tracker.
 *
 * Vercel Analytics is the primary sink (no ID or credentials required —
 * enable Analytics on the Vercel project and events appear). If GA4 or the
 * Meta Pixel are configured later via lib/config.ts env vars, events are
 * forwarded to them automatically through their global functions.
 */

export type SiteEvent =
  | "discovery_call_click"
  | "whatsapp_click"
  | "email_click"
  | "portfolio_play"
  | "portfolio_open"
  | "creative_lab_open"
  | "showreel_play"
  | "qualification_form_submit"
  | "agency_cta_click"
  | "package_cta_click";

type EventData = Record<string, string | number>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: SiteEvent, data?: EventData): void {
  // Analytics must never break the UI.
  try {
    track(event, data);
  } catch {
    /* noop */
  }
  try {
    if (typeof window !== "undefined") {
      window.gtag?.("event", event, data ?? {});
      window.fbq?.("trackCustom", event, data ?? {});
    }
  } catch {
    /* noop */
  }
}
