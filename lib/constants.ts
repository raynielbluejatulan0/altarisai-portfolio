import { getAllItems, getCategory, type MediaItem } from "./media";
import { ACTIVE_EMAIL, BOOKING_HREF } from "./config";

export const SITE = {
  name: "ALTARIS AI",
  tagline: "AI-Powered Creative Production",
  positioning: "AI-powered creative production for ambitious eCommerce brands.",
  description:
    "ALTARIS AI creates strategy-led, performance-focused advertising creative for eCommerce and DTC brands using modern AI-powered production.",
  url: "https://altarisai.online",
};

export const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "For Agencies", href: "/#agencies" },
  { label: "Contact", href: "/#contact" },
];

export const CONTACT = {
  /** Working mailbox today; switches to hello@altarisai.online via env once configured. */
  email: ACTIVE_EMAIL,
  whatsapp: "https://wa.me/639608688682",
  whatsappDisplay: "+63 960 868 8682",
};

/* ─── Social profiles (only accounts that actually exist) ─────────────────── */

type SocialIcon = "facebook" | "instagram" | "threads" | "tiktok" | "x" | "whatsapp";

export const SOCIALS: readonly { label: string; href: string; icon: SocialIcon }[] = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594000755438", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/business.altarisai/", icon: "instagram" },
  { label: "Threads", href: "https://www.threads.com/@business.altarisai", icon: "threads" },
  { label: "TikTok", href: "https://www.tiktok.com/@businessaltarisai", icon: "tiktok" },
  { label: "X", href: "https://x.com/altarisai", icon: "x" },
  { label: "WhatsApp", href: "https://wa.me/639608688682", icon: "whatsapp" },
];

/* ─── CTAs ────────────────────────────────────────────────────────────────────
   BOOKING_HREF resolves to the Calendly page once NEXT_PUBLIC_CALENDLY_URL is
   configured (see lib/config.ts); until then it routes to the contact section,
   where the qualification form, working email, and WhatsApp live. */

export const CTA_PRIMARY = {
  label: "Book a Discovery Call",
  href: BOOKING_HREF,
};

export const CTA_SECONDARY = {
  label: "View Our Work",
  href: "/#work",
};

/* ─── Hero ────────────────────────────────────────────────────────────────── */

export const HERO = {
  eyebrow: "AI-Powered Creative Production",
  // headline is split so the accent phrase can be styled independently
  headlinePre: "AI video ads that",
  headlineAccent: "stop the scroll",
  headlinePost: "and sell.",
  positioning: "AI-powered creative production for ambitious eCommerce and DTC brands.",
  subheadline:
    "We combine creative strategy, customer psychology, storytelling, and AI-powered production to develop performance-focused advertising creative without the traditional production bottleneck.",
  status: "Now booking select brand partnerships · GMT+8",
};

/* ─── Value proposition ───────────────────────────────────────────────────── */

export const VALUE_PROPS = [
  {
    title: "Strategy before pixels",
    description:
      "Every ad begins with research, customer psychology, and a deliberate hook plan, never a prompt. The creative is engineered to convert before a single frame is generated.",
    icon: "Target",
  },
  {
    title: "Production quality, AI speed",
    description:
      "Commercial-grade visuals without casting, studios, or shoot days. Concepts become finished, on-brand ads in days, so you can test more angles for less.",
    icon: "Zap",
  },
  {
    title: "Built for testing",
    description:
      "Hooks, scripts, and variations delivered as structured test cells, so every dollar your media buyer spends returns a clear, usable signal.",
    icon: "FlaskConical",
  },
];

/* ─── About ALTARIS AI ────────────────────────────────────────────────────── */

export const ABOUT_COMPANY = {
  eyebrow: "About ALTARIS AI",
  heading: "Built for the new era of creative production.",
  paragraphs: [
    "ALTARIS AI is an AI-powered creative production company built for ambitious eCommerce and DTC brands.",
    "We combine advertising strategy, customer psychology, storytelling, and AI-powered production to create performance-focused creative without the traditional production bottleneck.",
    "We don't use AI to replace creative thinking. We use it to move from insight to finished creative faster, giving brands more opportunities to test, learn, and scale.",
    "From research and creative direction through scripting, production, editing, and final delivery, we manage the creative process end to end.",
  ],
  closing: "Strategy. Creative. Production. Built to perform.",
};

/* ─── Founder ─────────────────────────────────────────────────────────────── */

export const FOUNDER = {
  name: "Rayniel Blue Jatulan",
  title: "Founder & Creative Director, ALTARIS AI",
  photo: "/founder.jpg",
  paragraphs: [
    "ALTARIS AI was built around a simple belief: better creative comes from better thinking.",
    "We combine customer insight, creative strategy, storytelling, and modern AI-powered production to help eCommerce brands create and test advertising creative faster.",
    "The technology makes production faster. The strategy determines what is worth producing.",
  ],
  closing: "Strategy first. Production second.",
};

/* ─── Who we help ─────────────────────────────────────────────────────────── */

export const AUDIENCES = [
  {
    title: "eCommerce & DTC Brands",
    description:
      "You need a dependable stream of fresh ad creative to outpace fatigue, without tying up budget in monthly shoots.",
    icon: "ShoppingBag",
  },
  {
    title: "Shopify Stores",
    description:
      "You are scaling paid social, and the constraint is not media buying. It is creative volume and the speed to iterate on it.",
    icon: "Store",
  },
  {
    title: "Amazon Sellers",
    description:
      "You need scroll-stopping video for listings and external traffic that makes your product the obvious choice.",
    icon: "Package",
  },
  {
    title: "Marketing Agencies",
    description:
      "You need a dependable creative partner who ships client-ready assets on agency timelines, fully white-label.",
    icon: "Briefcase",
  },
];

export const AUDIENCE_NICHES = [
  "Beauty",
  "Skincare",
  "Supplements",
  "Apparel",
  "Food & Beverage",
  "Home Products",
  "Pet Products",
];

/* ─── Services — four groups (what clients buy) ────────────────────────────
   The nine former service cards are consolidated into the system they
   actually form: Strategy → Creative → Production → Testing. */

export const SERVICE_GROUPS = [
  {
    number: "01",
    title: "Strategy",
    icon: "Compass",
    summary:
      "Research-led creative direction before anything goes into production. The thinking that determines what is worth making.",
    includes: [
      "Creative Strategy",
      "Product & Market Research",
      "Customer Psychology",
      "Hook Development",
      "Scriptwriting",
      "Storyboards",
    ],
  },
  {
    number: "02",
    title: "Creative Production",
    icon: "Clapperboard",
    summary:
      "Finished, platform-native advertising creative produced through our AI pipeline, matched to your brand's look.",
    includes: [
      "AI UGC Ads",
      "AI Product Commercials",
      "VSL Creative",
      "Social Ads",
      "Product Launch Creative",
    ],
  },
  {
    number: "03",
    title: "Post-Production",
    icon: "Scissors",
    summary:
      "The edit is where an ad becomes an ad: pacing, motion, sound, captions, and platform-specific finishing on every deliverable.",
    includes: ["Editing", "Motion", "Captions", "Final Delivery"],
  },
  {
    number: "04",
    title: "Creative Testing",
    icon: "FlaskConical",
    summary:
      "Structured variation built for clean testing, so your ad account produces answers instead of guesses.",
    includes: [
      "Hook Variations",
      "Concept Variations",
      "Creative Iteration",
      "Performance-Informed Creative",
    ],
  },
];

export const SERVICES_FLOW = ["Strategy", "Creative", "Production", "Testing"];

/* ─── Client journey (what working together looks like) ───────────────────── */

export const CLIENT_JOURNEY = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn your product, customer, offer, goals, existing creative, and constraints.",
  },
  {
    step: "02",
    title: "Creative Direction",
    description:
      "We research the market and identify creative angles, hooks, messaging, and concepts worth testing.",
  },
  {
    step: "03",
    title: "Production",
    description:
      "We turn the approved creative direction into scripted, produced, edited advertising creative.",
  },
  {
    step: "04",
    title: "Review",
    description: "You review the creative and provide feedback while we refine the work.",
  },
  {
    step: "05",
    title: "Final Delivery",
    description: "You receive launch-ready advertising creative in the agreed formats.",
  },
  {
    step: "06",
    title: "Iterate",
    description:
      "Performance feedback can inform the next creative cycle, helping build a stronger testing system over time.",
  },
];

/* ─── Internal production pipeline (how it gets delivered) ────────────────── */

export const WORKFLOW_STEPS = [
  { step: "01", title: "Discovery", description: "Brand, product, offer, and objectives aligned before anything is made." },
  { step: "02", title: "Product Research", description: "Reviews, objections, and use cases mined for creative raw material." },
  { step: "03", title: "Competitor Research", description: "What the market is running, what is saturated, and where the openings are." },
  { step: "04", title: "Customer Psychology", description: "The real reasons people buy, mapped into angles that resonate." },
  { step: "05", title: "Creative Strategy", description: "Angles, formats, and a testing plan grounded in the research." },
  { step: "06", title: "Hooks", description: "The first two seconds, engineered, with multiple openers per concept." },
  { step: "07", title: "Script", description: "Beat-by-beat scripts where every line earns the next second of attention." },
  { step: "08", title: "Storyboard", description: "The full ad visualized frame by frame before production begins." },
  { step: "09", title: "AI Images", description: "Product and scene imagery generated to match your brand's look." },
  { step: "10", title: "AI Video", description: "Scenes brought to motion through a professional AI video pipeline." },
  { step: "11", title: "Editing", description: "Pacing, sound design, captions, and color: where the ad becomes an ad." },
  { step: "12", title: "Final Delivery", description: "Every format, ratio, and variant, organized and ready to launch." },
];

/* ─── Why work with us ────────────────────────────────────────────────────── */

export const WHY_ME = [
  {
    title: "A marketer first",
    description:
      "The goal is never 'impressive AI'. It is ads that convert. Every creative decision traces back to customer psychology and measured performance.",
  },
  {
    title: "Full pipeline, one team",
    description:
      "Strategy, script, visuals, edit, and delivery under one roof. No handoffs, no telephone game, no waiting on a production chain.",
  },
  {
    title: "Testing velocity",
    description:
      "AI production means more concepts tested every month. More tests, faster learning, and a quicker path to your winning creative.",
  },
  {
    title: "Direct collaboration",
    description:
      "You work directly with the team building your ads. Feedback lands straight on the work, typically turned around within a day.",
  },
];

/* ─── Curated work (primary portfolio) ─────────────────────────────────────
   Primary categories reflect the commercial positioning; experimental
   formats live in the Creative Lab below. Nothing is deleted. */

export interface WorkLabels {
  format: string;
  style: string;
  angle: string;
}

/** Factual creative-format labels per UGC ad (keyed by source filename).
    These describe the creative itself — never invented performance data. */
const UGC_LABELS: Record<string, WorkLabels> = {
  "1": { format: "AI UGC", style: "Expert Authority", angle: "Clinical Recommendation" },
  "2": { format: "AI UGC", style: "Split-Screen Demo", angle: "Expert Demonstration" },
  "3": { format: "AI UGC", style: "Product Showcase", angle: "Expert Recommendation" },
  "4": { format: "AI UGC", style: "Product Showcase", angle: "Hook Variation" },
  "5": { format: "AI UGC", style: "Creator Testimonial", angle: "Authentic Use" },
  "6": { format: "AI UGC", style: "Direct to Camera", angle: "Personal Testimonial" },
  "7": { format: "AI UGC", style: "Expert Authority", angle: "Contrarian Hook" },
  "8": { format: "AI UGC", style: "Car Selfie", angle: "Native Storytelling" },
  "9": { format: "AI UGC", style: "Expert Authority", angle: "Contrarian Confession" },
  "10": { format: "AI UGC", style: "Direct to Camera", angle: "Expert Explainer" },
  "11": { format: "AI UGC", style: "Home Testimonial", angle: "Problem / Solution" },
  "12": { format: "AI UGC", style: "Lifestyle Native", angle: "Curiosity Hook" },
};

export interface WorkItem {
  video: string;
  poster: string;
  labels: WorkLabels;
}

function fileKey(src: string): string {
  const m = src.match(/\/([^/]+)\.\w+$/);
  return m ? m[1] : src;
}

export const WORK_ITEMS: WorkItem[] = getAllItems()
  .filter((it) => it.categorySlug === "ugc" && it.type === "video")
  .map((it) => ({
    video: it.src,
    poster: it.poster,
    labels:
      UGC_LABELS[fileKey(it.src)] ?? {
        format: "AI UGC",
        style: "UGC Ad",
        angle: "Direct Response",
      },
  }));

/** Curated primary categories shown in the Work section beyond the UGC grid. */
export const WORK_CATEGORIES: { slug: string; displayName: string; blurb: string }[] = [
  { slug: "vsl", displayName: "VSL Creative", blurb: "Long-form video sales letters built to hold attention and convert." },
  { slug: "shorts-affiliate", displayName: "Social Ads", blurb: "Platform-native short-form product creative for the feed." },
  { slug: "graphics-designs", displayName: "Static & Graphic", blurb: "Ad graphics and static creative to round out a testing mix." },
];

/** Experimental formats — demonstrate range without diluting the positioning. */
export const CREATIVE_LAB_SLUGS = [
  "3d-pixar",
  "claymation",
  "music-video-3d",
  "podcast",
  "news-style",
  "skeleton",
  "real-estate-walkthrough",
];

export function getWorkCategoryItems(slug: string): MediaItem[] {
  return getCategory(slug)?.items ?? [];
}

/* ─── Creative strategy demonstration ──────────────────────────────────────
   Shows how a piece of creative is thought through before it is produced.
   Labeled a Creative Demonstration — it illustrates our process and makes
   no client or performance claims. */

export const STRATEGY_DEMO = {
  eyebrow: "Creative Demonstration",
  heading: "Before we make the ad, we figure out why it should exist.",
  note: "A walkthrough of the thinking behind one piece from our portfolio. It illustrates our strategy process and makes no client or performance claims.",
  video: "/portfolio/media/ugc/9.mp4",
  poster: "/portfolio/media/ugc/9.jpg",
  fields: [
    { label: "Product", value: "Natural tallow-based skincare balm" },
    { label: "Audience", value: "Skincare buyers who distrust long ingredient lists and lookalike claims" },
    { label: "Problem", value: "The feed is saturated with identical moisturizer promises, so another 'hydrating cream' ad is invisible" },
    { label: "Desire", value: "Simple, effective skincare made from ingredients they can actually recognize" },
    { label: "Objection", value: "Why would this work when everything else I tried did not?" },
    { label: "Creative Angle", value: "Expert authority with a contrarian confession: credibility first, product second" },
    { label: "Hook", value: "“Every moisturizer I recommended…”, an unfinished confession that makes the viewer wait for the turn" },
    { label: "Concept", value: "A dermatologist-style expert rethinks the standard recommendation, then reframes the product's simplicity as the reason it works" },
  ],
};

/* ─── Results framework (future-ready, never fabricated) ──────────────────── */

export const RESULTS_FRAMEWORK = {
  eyebrow: "Results",
  heading: "Built to perform. Measured by what happens after launch.",
  copy: "Performance data will become part of the creative process as we build and iterate with real brands.",
  note: "We publish verified client results only. No projections, no borrowed numbers.",
};

/* ─── Testimonial framework (placeholders only, never fabricated) ─────────── */

export interface TestimonialEntry {
  quote: string | null;
  name: string | null;
  brand: string | null;
  role: string | null;
  headshot: string | null;
  logo: string | null;
}

export const TESTIMONIALS = {
  eyebrow: "Client Feedback",
  heading: "What our clients say.",
  placeholder: "Testimonials from our founding client collaborations will appear here.",
  /** Fill with real, approved words only. */
  entries: [] as TestimonialEntry[],
};

/* ─── Engagement packages (no public pricing yet) ─────────────────────────── */

export const PACKAGES = [
  {
    number: "01",
    name: "Creative Sprint",
    audience: "For brands that want a focused creative test.",
    includes: [
      "Creative strategy",
      "Creative concepts",
      "Hooks",
      "Scripts",
      "AI UGC / creative production",
      "Editing",
      "Final delivery",
    ],
  },
  {
    number: "02",
    name: "Creative Testing System",
    audience: "For brands that need ongoing creative volume.",
    includes: [
      "Ongoing creative strategy",
      "Multiple creative concepts",
      "Multiple hooks",
      "Multiple formats",
      "AI UGC",
      "Product creative",
      "Iteration",
      "Testing recommendations",
    ],
  },
  {
    number: "03",
    name: "Custom / Launch",
    audience: "For larger or specialized campaigns.",
    includes: ["Custom creative scope based on campaign requirements."],
  },
];

export const PACKAGES_PRICING_NOTE = "Custom pricing based on scope.";

/* ─── Client fit ──────────────────────────────────────────────────────────── */

export const CLIENT_FIT = {
  eyebrow: "Client Fit",
  heading: "Is ALTARIS AI the right fit?",
  goodFit: [
    "eCommerce and DTC brands",
    "Brands running or preparing to run paid social",
    "Brands that need more creative variations",
    "Brands that value strategy as much as production",
    "Brands willing to test and iterate",
    "Brands with a clear product and offer",
  ],
  notFit: [
    "Businesses looking only for the cheapest video production",
    "Brands expecting guaranteed advertising results",
    "Businesses unwilling to provide product or brand information",
    "Projects where creative testing is not a priority",
    "Clients looking only for generic AI-generated videos",
  ],
};

/* ─── Agency partnerships ─────────────────────────────────────────────────── */

export const AGENCY = {
  eyebrow: "For Agencies",
  heading: "Your creative production partner.",
  copy: "ALTARIS AI works with agencies that need additional creative production capacity without building an internal AI production team.",
  benefits: [
    "White-label creative production",
    "Client-ready deliverables",
    "Consistent production workflow",
    "AI-powered production capacity",
    "Strategy and creative support",
    "Scalable creative output",
  ],
  ctaLabel: "Discuss an Agency Partnership",
};

/* ─── Founding creative program ───────────────────────────────────────────── */

export const FOUNDING_PROGRAM = {
  eyebrow: "Limited Program",
  heading: "ALTARIS AI Founding Creative Program",
  copy: "We're working with a limited group of eCommerce brands to develop and test our next generation of AI-powered advertising creative. Selected brands receive a complimentary creative pilot in exchange for honest feedback and permission to showcase approved work.",
};

/* ─── Technology (production pipeline framing) ────────────────────────────── */

export const TECH_STACK = [
  { name: "Claude", role: "Research, strategy & scripts" },
  { name: "Seedance 2.5", role: "AI video generation" },
  { name: "GPT Image 2.5", role: "AI image generation" },
  { name: "ElevenLabs", role: "Voiceover & sound" },
  { name: "Adobe Premiere Pro", role: "Editing & captions" },
];

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */

export const FAQS = [
  {
    q: "How long does production take?",
    a: "Most ad packages are delivered within 3 to 7 business days, depending on scope. A single UGC-style ad with hook variations typically ships in 3 to 4 days; full launch packages take about a week.",
  },
  {
    q: "Can you match our brand's look and style?",
    a: "Yes. Brand matching is step one. We work from your brand guidelines, existing creative, and product imagery, so everything we deliver looks like it came from your own team.",
  },
  {
    q: "Is everything made with AI?",
    a: "Generation is AI-powered; the thinking is not. Strategy, scripts, direction, curation, and editing are human work. AI replaces the camera and the studio, not the marketer.",
  },
  {
    q: "Can I request revisions?",
    a: "Absolutely. Every project includes revision rounds, and direction-level feedback is usually turned around within a day. The goal is an ad you are confident putting real spend behind.",
  },
  {
    q: "Can you create multiple ad variations?",
    a: "That is the core advantage. Hooks, angles, and CTA variations are delivered as structured test sets, one variable per cell, so your testing actually produces answers.",
  },
  {
    q: "Do you provide scripts and storyboards?",
    a: "Yes. Every video is built on a beat-timed script and a visual storyboard that you approve before production. You will always know exactly what is being made.",
  },
  {
    q: "Can you work with our existing footage?",
    a: "Yes. Existing footage, product shots, and past creative can be edited, extended, or blended with AI-generated scenes to get more from what you already have.",
  },
];

/* ─── Contact ─────────────────────────────────────────────────────────────── */

export const CONTACT_SECTION = {
  eyebrow: "Let's Talk",
  heading: "Let's build your next creative test.",
  copy: "Tell us about your product, audience, and creative goals. We'll review the opportunity and determine whether ALTARIS AI is a good fit.",
};
