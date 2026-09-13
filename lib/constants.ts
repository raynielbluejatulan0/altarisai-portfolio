import { getAllItems } from "./media";

export const SITE = {
  name: "Altaris AI",
  tagline: "AI Video Ad Studio",
  description:
    "A premium AI video ad studio for eCommerce and DTC brands: UGC-style ads, product commercials, and creative-testing systems engineered to convert.",
  url: "https://altarisai.online",
};

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const CONTACT = {
  email: "business.altarisai@gmail.com",
  whatsapp: "https://wa.me/639608688682",
  whatsappDisplay: "+63 960 868 8682",
};

/* ─── Social profiles ─────────────────────────────────────────────────────── */

type SocialIcon = "facebook" | "instagram" | "threads" | "tiktok" | "x";

export const SOCIALS: readonly { label: string; href: string; icon: SocialIcon }[] = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594000755438", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/business.altarisai/", icon: "instagram" },
  { label: "Threads", href: "https://www.threads.com/@business.altarisai", icon: "threads" },
  { label: "TikTok", href: "https://www.tiktok.com/@businessaltarisai", icon: "tiktok" },
  { label: "X", href: "https://x.com/altarisai", icon: "x" },
];

/* ─── CTAs (single swap point: replace href with Calendly URL later) ─────── */

export const CTA_PRIMARY = {
  label: "Book a Discovery Call",
  href: `mailto:${CONTACT.email}?subject=${encodeURIComponent("Discovery Call: AI Video Ads")}`,
};

export const CTA_SECONDARY = {
  label: "View Portfolio",
  href: "/portfolio",
};

/* ─── Hero ────────────────────────────────────────────────────────────────── */

export const HERO = {
  eyebrow: "AI Video Ad Studio",
  // headline is split so the accent word can be styled independently
  headlinePre: "AI video ads that",
  headlineAccent: "stop the scroll",
  headlinePost: "and sell.",
  subheadline:
    "We partner with eCommerce and DTC brands to produce high-converting video ads end to end: strategy, script, and final cut delivered in days, not weeks. No studios, no shoot days, no production bottlenecks.",
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

/* ─── Services (outcome-focused) ──────────────────────────────────────────── */

export const SERVICES = [
  {
    title: "AI UGC Ads",
    icon: "Users",
    problem: "Authentic UGC is slow to source, inconsistent in quality, and expensive to produce at volume.",
    solution:
      "Authentic-feeling, UGC-style video ads generated and edited to platform-native standards, ready to run on Meta and TikTok.",
    benefits: ["Native feel that earns watch time", "Unlimited talent variety", "Days, not weeks"],
    deliverables: ["9:16 UGC ads", "Hook variations", "Caption versions"],
  },
  {
    title: "AI Product Commercials",
    icon: "Clapperboard",
    problem: "Commercial-grade production has long been priced out of reach for most growing brands.",
    solution:
      "Cinematic product spots, from macro detail to dynamic scenes and brand-grade finishing, produced entirely through our AI pipeline.",
    benefits: ["Broadcast-level visuals", "No studio or crew costs", "Full creative control"],
    deliverables: ["Hero commercial", "16:9 + 9:16 versions", "Cutdowns"],
  },
  {
    title: "Social Media Ads",
    icon: "Smartphone",
    problem: "Feeds move fast. Last month's creative is already invisible.",
    solution:
      "Platform-tuned ad creatives engineered for the scroll: thumb-stopping openers, disciplined pacing, and sound-off storytelling.",
    benefits: ["Placement-optimized formats", "Fresh angles monthly", "Consistent brand system"],
    deliverables: ["Feed + Stories + Reels formats", "Multiple aspect ratios", "Text-overlay variants"],
  },
  {
    title: "Product Launch Videos",
    icon: "Rocket",
    problem: "A launch gets one first impression, and most products spend it on a spec list.",
    solution:
      "A launch suite that makes the product feel inevitable: a hero film for the moment, cutdowns for the campaign that follows.",
    benefits: ["One cohesive launch story", "Assets for every channel", "Momentum past day one"],
    deliverables: ["Launch film", "Feature cutdowns", "Teaser assets"],
  },
  {
    title: "Creative Strategy",
    icon: "Compass",
    problem: "Even flawless production fails when it is aimed at the wrong angle.",
    solution:
      "Research-led creative direction: competitor analysis, customer psychology, and angle mapping before anything goes into production.",
    benefits: ["Angles grounded in research", "Clear testing roadmap", "No guesswork creative"],
    deliverables: ["Creative brief", "Angle map", "Testing plan"],
  },
  {
    title: "Scriptwriting & Storyboards",
    icon: "PenLine",
    problem: "Weak scripts make even beautiful footage forgettable.",
    solution:
      "Conversion-focused scripts with beat-by-beat timing, paired with visual storyboards that lock the creative before production.",
    benefits: ["Hooks engineered first", "Every second accounted for", "Alignment before production"],
    deliverables: ["Full scripts", "Storyboard frames", "Hook alternatives"],
  },
  {
    title: "AI Image & Video Production",
    icon: "Sparkles",
    problem: "Brands need a constant flow of visual content, but traditional shoots do not scale.",
    solution:
      "A complete AI production pipeline, from product imagery to lifestyle scenes and video, matched precisely to your brand's look.",
    benefits: ["Brand-consistent output", "Any scene, any setting", "Volume without fatigue"],
    deliverables: ["Product imagery sets", "Lifestyle scenes", "Generated video"],
  },
  {
    title: "Editing & Post-Production",
    icon: "Scissors",
    problem: "Raw generative output is not an ad. The edit is where it converts.",
    solution:
      "Professional post: pacing, sound design, captions, color, and platform-specific finishing on every deliverable.",
    benefits: ["Retention-focused pacing", "Sound-off optimized", "Polished final delivery"],
    deliverables: ["Final edits", "Caption styling", "Format exports"],
  },
  {
    title: "Creative Testing Assets",
    icon: "FlaskConical",
    problem: "A single ad tells you nothing. Structured variation is how accounts scale.",
    solution:
      "Variant sets built for clean testing, one variable per cell across hooks, angles, and CTAs, mapped in a clear testing matrix.",
    benefits: ["Readable test results", "Faster winning-ad discovery", "Efficient iteration loop"],
    deliverables: ["Variant sets", "Testing matrix", "Iteration recommendations"],
  },
];

/* ─── Creative workflow (12 steps) ────────────────────────────────────────── */

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

export const ABOUT = {
  paragraphs: [
    "We build advertising creative, not AI demos. Since 2022 we have worked across the full generative stack, images, video, and voice, through a single lens: does this make someone stop, watch, and buy?",
    "Today we operate a complete AI production pipeline for eCommerce and DTC brands. Research-backed creative strategy in, finished ad creative out. The tools evolve monthly; the marketing thinking is what compounds.",
  ],
};

/* ─── Technology (production pipeline framing) ────────────────────────────── */

export const TECH_STACK = [
  { name: "Claude", role: "Research, strategy & scripts" },
  { name: "Google Flow", role: "Production orchestration" },
  { name: "Veo 3", role: "AI video generation" },
  { name: "Nano Banana Pro", role: "AI image generation" },
  { name: "ElevenLabs", role: "Voiceover & sound" },
  { name: "CapCut Pro", role: "Editing & captions" },
  { name: "Photoshop", role: "Finishing & retouch" },
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

/* ─── Client work (real UGC ads + approved testimonials) ──────────────────────
   INTERIM: featuring our 12 real UGC ads now; testimonial fields stay null
   until each client's REAL, APPROVED words are added (never fabricated).
   In ~1 week, replace each entry with the real brand, person, and quote. */

export interface ClientWork {
  brand: string | null;
  person: string | null; // name and/or role
  quote: string | null; // the client's real, approved words
  rating: number | null; // 1–5
  video: string | null;
  poster: string | null;
}

export const CLIENT_WORK: ClientWork[] = getAllItems()
  .filter((it) => it.categorySlug === "ugc" && it.type === "video")
  .slice(0, 12)
  .map((it) => ({
    brand: null,
    person: null,
    quote: null,
    rating: null,
    video: it.src,
    poster: it.poster,
  }));

/* ─── Testimonials (placeholders only, never fabricated) ─────────────────── */

export const TESTIMONIAL_PLACEHOLDERS = [
  { quote: null, author: null, role: "eCommerce Brand · Coming Soon" },
  { quote: null, author: null, role: "Marketing Agency · Coming Soon" },
  { quote: null, author: null, role: "DTC Founder · Coming Soon" },
];
