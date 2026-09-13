export const SITE = {
  name: "Altaris AI",
  tagline: "AI Video Ad Studio",
  description:
    "AI-powered video ad creatives for eCommerce and DTC brands: UGC-style ads, product commercials, and creative testing assets built to convert.",
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

/* ─── Social profiles (placeholder hrefs — replace "#" with real URLs) ─────── */

export const SOCIALS = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Threads", href: "#", icon: "threads" },
  { label: "TikTok", href: "#", icon: "tiktok" },
  { label: "X", href: "#", icon: "x" },
] as const;

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
    "We help eCommerce and DTC brands ship high-converting ad creatives: strategy, script, and final cut in days, not weeks. No studios, no shoot days, no production bottleneck.",
  status: "Available for projects · GMT+8",
};

/* ─── Value proposition ───────────────────────────────────────────────────── */

export const VALUE_PROPS = [
  {
    title: "Strategy before pixels",
    description:
      "Every ad starts with research, customer psychology, and a hook plan, not a prompt. The creative is engineered to convert before a single frame is generated.",
    icon: "Target",
  },
  {
    title: "Production quality, AI speed",
    description:
      "Commercial-grade visuals without casting, studios, or shoot days. Concepts become finished ads in days, so you can test more angles for less.",
    icon: "Zap",
  },
  {
    title: "Built for testing",
    description:
      "Hooks, scripts, and variations delivered as structured test cells, so your media buyer learns something from every dollar spent.",
    icon: "FlaskConical",
  },
];

/* ─── Who I help ──────────────────────────────────────────────────────────── */

export const AUDIENCES = [
  {
    title: "eCommerce & DTC Brands",
    description:
      "You need a steady stream of fresh ad creative to fight fatigue, without burning budget on monthly shoots.",
    icon: "ShoppingBag",
  },
  {
    title: "Shopify Stores",
    description:
      "You're scaling paid social and the bottleneck isn't media buying, it's creative volume and iteration speed.",
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
      "You need a reliable creative partner who delivers client-ready ad assets on agency timelines, white-label friendly.",
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
  "Tech",
  "SaaS",
];

/* ─── Services (outcome-focused) ──────────────────────────────────────────── */

export const SERVICES = [
  {
    title: "AI UGC Ads",
    icon: "Users",
    problem: "Real UGC is slow, inconsistent, and expensive to source at volume.",
    solution:
      "Authentic-feeling, UGC-style video ads generated and edited to platform-native standards, ready for Meta and TikTok.",
    benefits: ["Native feel that earns watch time", "Unlimited talent variety", "Days, not weeks"],
    deliverables: ["9:16 UGC ads", "Hook variations", "Caption versions"],
  },
  {
    title: "AI Product Commercials",
    icon: "Clapperboard",
    problem: "Commercial production quality is priced out of reach for most growing brands.",
    solution:
      "Cinematic product spots (macro shots, dynamic scenes, brand-grade polish) produced entirely through an AI pipeline.",
    benefits: ["Broadcast-level visuals", "No studio or crew costs", "Full creative control"],
    deliverables: ["Hero commercial", "16:9 + 9:16 versions", "Cutdowns"],
  },
  {
    title: "Social Media Ads",
    icon: "Smartphone",
    problem: "Feeds move fast. Last month's creative is already invisible.",
    solution:
      "Platform-tuned ad creatives built for the scroll: thumb-stopping openers, tight pacing, and sound-off-safe storytelling.",
    benefits: ["Placement-optimized formats", "Fresh angles monthly", "Consistent brand system"],
    deliverables: ["Feed + Stories + Reels formats", "Multiple aspect ratios", "Text-overlay variants"],
  },
  {
    title: "Product Launch Videos",
    icon: "Rocket",
    problem: "Launches get one first impression. Most products waste it on a spec list.",
    solution:
      "A launch package that makes the product feel inevitable: hero film for the moment, cutdowns for the campaign that follows.",
    benefits: ["One cohesive launch story", "Assets for every channel", "Momentum past day one"],
    deliverables: ["Launch film", "Feature cutdowns", "Teaser assets"],
  },
  {
    title: "Creative Strategy",
    icon: "Compass",
    problem: "Great production wasted on the wrong angle still doesn't convert.",
    solution:
      "Research-driven creative direction: competitor analysis, customer psychology, and angle mapping before anything is produced.",
    benefits: ["Angles grounded in research", "Clear testing roadmap", "No guesswork creative"],
    deliverables: ["Creative brief", "Angle map", "Testing plan"],
  },
  {
    title: "Scriptwriting & Storyboards",
    icon: "PenLine",
    problem: "Weak scripts make even beautiful footage forgettable.",
    solution:
      "Conversion-focused scripts with beat-by-beat timing, plus visual storyboards that lock the creative before production.",
    benefits: ["Hooks engineered first", "Every second accounted for", "Alignment before production"],
    deliverables: ["Full scripts", "Storyboard frames", "Hook alternatives"],
  },
  {
    title: "AI Image & Video Production",
    icon: "Sparkles",
    problem: "Brands need constant visual content, but shoots don't scale.",
    solution:
      "A full AI production pipeline (product imagery, lifestyle scenes, and video generation) matched to your brand's look.",
    benefits: ["Brand-consistent output", "Any scene, any setting", "Volume without fatigue"],
    deliverables: ["Product imagery sets", "Lifestyle scenes", "Generated video"],
  },
  {
    title: "Editing & Post-Production",
    icon: "Scissors",
    problem: "Raw generative output isn't an ad. The edit is where it converts.",
    solution:
      "Professional editing: pacing, sound design, captions, color, and platform-specific finishing on every deliverable.",
    benefits: ["Retention-focused pacing", "Sound-off optimized", "Polished final delivery"],
    deliverables: ["Final edits", "Caption styling", "Format exports"],
  },
  {
    title: "Creative Testing Assets",
    icon: "FlaskConical",
    problem: "One ad tells you nothing. Structured variation is how accounts scale.",
    solution:
      "Variant sets built for clean testing: one variable per cell across hooks, angles, and CTAs, mapped in a testing matrix.",
    benefits: ["Readable test results", "Faster winning-ad discovery", "Efficient iteration loop"],
    deliverables: ["Variant sets", "Testing matrix", "Iteration recommendations"],
  },
];

/* ─── Creative workflow (12 steps) ────────────────────────────────────────── */

export const WORKFLOW_STEPS = [
  { step: "01", title: "Discovery", description: "Brand, product, offer, and goals, aligned before anything is made." },
  { step: "02", title: "Product Research", description: "Reviews, objections, and use cases mined for creative raw material." },
  { step: "03", title: "Competitor Research", description: "What the market is running, what's saturated, and where the gaps are." },
  { step: "04", title: "Customer Psychology", description: "The real reason people buy, mapped into angles that resonate." },
  { step: "05", title: "Creative Strategy", description: "Angles, formats, and a testing plan grounded in the research." },
  { step: "06", title: "Hooks", description: "The first two seconds, engineered, with multiple openers per concept." },
  { step: "07", title: "Script", description: "Beat-by-beat scripts where every line earns the next second of watch time." },
  { step: "08", title: "Storyboard", description: "The full ad visualized frame by frame before production begins." },
  { step: "09", title: "AI Images", description: "Product and scene imagery generated to match your brand's look." },
  { step: "10", title: "AI Video", description: "Scenes brought to motion through a professional AI video pipeline." },
  { step: "11", title: "Editing", description: "Pacing, sound design, captions, and grade: where the ad becomes an ad." },
  { step: "12", title: "Final Delivery", description: "Every format, ratio, and variant, organized and ready to launch." },
];

/* ─── Why work with me ────────────────────────────────────────────────────── */

export const WHY_ME = [
  {
    title: "A marketer first",
    description:
      "The goal is never 'impressive AI'. It's ads that convert. Every creative decision traces back to customer psychology and performance.",
  },
  {
    title: "Full pipeline, one team",
    description:
      "Strategy, script, visuals, edit, delivery: no handoffs, no telephone game, no waiting on a production chain.",
  },
  {
    title: "Testing velocity",
    description:
      "AI production means more concepts tested per month. More tests, faster learning, quicker path to your winning creative.",
  },
  {
    title: "Direct collaboration",
    description:
      "You work directly with the team making your ads. Feedback lands directly on the work, usually turned around within a day.",
  },
];

export const ABOUT = {
  paragraphs: [
    "We build advertising creatives, not AI demos. Since 2022 we've worked across the full generative stack (images, video, voice) with one lens: does this make someone stop, watch, and buy?",
    "Today we run a complete AI production pipeline for eCommerce and DTC brands: research-backed creative strategy in, finished ad creatives out. The tools change monthly. The marketing thinking is what compounds.",
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
    a: "Most ad packages are delivered within 3–7 business days depending on scope. A single UGC-style ad with hook variations typically ships in 3–4 days; full launch packages take about a week.",
  },
  {
    q: "Can you match our brand's look and style?",
    a: "Yes, brand matching is step one. We work from your brand guidelines, existing creative, and product imagery so everything delivered looks like it came from your team.",
  },
  {
    q: "Is everything made with AI?",
    a: "Generation is AI-powered; the thinking isn't. Strategy, scripts, direction, curation, and editing are human work. AI replaces the camera and the studio, not the marketer.",
  },
  {
    q: "Can I request revisions?",
    a: "Of course. Every project includes revision rounds, and direction-level feedback is usually turned around within a day. The goal is an ad you're confident putting spend behind.",
  },
  {
    q: "Can you create multiple ad variations?",
    a: "That's the core advantage. Hooks, angles, and CTA variations are delivered as structured test sets (one variable per cell) so your testing actually produces answers.",
  },
  {
    q: "Do you provide scripts and storyboards?",
    a: "Yes. Every video is built on a beat-timed script and a visual storyboard, which you approve before production. You'll always know exactly what's being made.",
  },
  {
    q: "Can you work with our existing footage?",
    a: "Yes, existing footage, product shots, and past creative can be edited, extended, or blended with AI-generated scenes to stretch what you already have.",
  },
];

/* ─── Testimonials (placeholders only, never fabricated) ─────────────────── */

export const TESTIMONIAL_PLACEHOLDERS = [
  { quote: null, author: null, role: "eCommerce Brand · Coming Soon" },
  { quote: null, author: null, role: "Marketing Agency · Coming Soon" },
  { quote: null, author: null, role: "DTC Founder · Coming Soon" },
];
