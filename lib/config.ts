/**
 * ─── External integration configuration ─────────────────────────────────────
 *
 * Single connection point for every third-party service the site depends on.
 * Each value is driven by an environment variable so accounts can be created
 * and connected later without touching component code.
 *
 * HONESTY RULE: nothing in this file pretends an account exists before it
 * does. When a value is absent, the site falls back to a contact method that
 * actually works today.
 *
 * To connect a service, set the variable in `.env.local` (local dev) and in
 * Vercel → Project → Settings → Environment Variables, then redeploy:
 *
 *   NEXT_PUBLIC_CALENDLY_URL    Calendly event link for
 *                               "ALTARIS AI — Discovery Call" (20 min),
 *                               e.g. https://calendly.com/<account>/discovery-call
 *   NEXT_PUBLIC_FORM_ENDPOINT   POST endpoint for the qualification form
 *                               (e.g. a Formspree form URL or an own API route)
 *   NEXT_PUBLIC_CONTACT_EMAIL   hello@altarisai.online once the domain mailbox
 *                               is actually configured
 *   NEXT_PUBLIC_GA_ID           GA4 measurement ID (optional)
 *   NEXT_PUBLIC_META_PIXEL_ID   Meta Pixel ID (for when paid acquisition begins)
 */

export const INTEGRATIONS = {
  /** Calendly booking page. null until the account exists. */
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || null,
  /** Qualification form POST endpoint. null → form falls back to composing an email. */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || null,
  /** GA4 measurement ID. null → GA script is not loaded. */
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
  /** Meta Pixel ID. null → pixel is not loaded. */
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || null,
} as const;

/**
 * The mailbox shown and used across the site. Currently the working Gmail
 * account; switches to the domain mailbox automatically once
 * NEXT_PUBLIC_CONTACT_EMAIL is set (only do this after the mailbox exists).
 */
export const ACTIVE_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "business.altarisai@gmail.com";

/**
 * Planned domain mailboxes — NOT yet configured. Documented here so the
 * switch-over is a one-line env change. Never render these as active
 * contact methods while they are only planned.
 */
export const PLANNED_EMAILS = {
  business: "hello@altarisai.online",
  founder: "rayniel@altarisai.online",
} as const;

/** True once a real Calendly link is configured. */
export const BOOKING_CONFIGURED = Boolean(INTEGRATIONS.calendlyUrl);

/**
 * Primary booking destination for every "Book a Discovery Call" CTA:
 * the Calendly page when configured, otherwise the contact section
 * (qualification form + working email + WhatsApp).
 */
export const BOOKING_HREF = INTEGRATIONS.calendlyUrl ?? "/#contact";
