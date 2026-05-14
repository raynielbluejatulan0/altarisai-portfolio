export const SITE = {
  name: "Rayniel Blue Jatulan",
  tagline: "AI Content Creator",
  description:
    "AI Content Creator specializing in AI-generated images, videos, and social media content. Helping brands create stunning visuals at scale. GMT+8.",
  url: "https://altarisai.online",
};

export const NAV_LINKS = [
  { label: "Marketing", href: "#marketing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Cinematic", href: "#cinematic" },
  { label: "Animation", href: "#animation" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  email: "raynielbluejatulan0@gmail.com",
  whatsapp: "https://wa.me/639171425738",
  whatsappDisplay: "+63 917 142 5738",
};

export const CONTENT_TYPES = [
  {
    title: "AI Image Generation",
    description:
      "Stunning product shots, concept art, social media visuals, and brand imagery — generated at scale using Midjourney, DALL-E, and Stable Diffusion.",
    icon: "Image",
    examples: ["Product Photography", "Concept Art", "Brand Visuals", "Ad Creatives"],
  },
  {
    title: "AI Video Creation",
    description:
      "Short-form video content, animated ads, and cinematic clips created with Runway, Pika, and Kling AI for social media and marketing campaigns.",
    icon: "Video",
    examples: ["Social Media Reels", "Product Demos", "Animated Ads", "Cinematic Clips"],
  },
  {
    title: "Social Media Content",
    description:
      "Consistent, on-brand content packs for Instagram, TikTok, Facebook, and LinkedIn — ready to post, generated in bulk.",
    icon: "Layout",
    examples: ["Instagram Posts", "TikTok Videos", "Story Templates", "Carousel Posts"],
  },
  {
    title: "YouTube Thumbnails & Assets",
    description:
      "Eye-catching thumbnails, channel art, and video graphics that drive clicks and build a recognizable brand presence on YouTube.",
    icon: "Youtube",
    examples: ["Thumbnails", "Channel Art", "End Screens", "Lower Thirds"],
  },
  {
    title: "AI UGC Content",
    description:
      "Authentic-looking user-generated content and testimonial-style videos created with AI avatars and voiceovers — no filming required.",
    icon: "Users",
    examples: ["AI Testimonials", "Unboxing Videos", "Review Content", "Lifestyle Shots"],
  },
  {
    title: "Brand Identity Visuals",
    description:
      "Logos, color palettes, mood boards, and full visual identity systems created with AI tools and refined for professional use.",
    icon: "Palette",
    examples: ["Logo Concepts", "Mood Boards", "Color Palettes", "Brand Guidelines"],
  },
];

export const TOOLS_USED = [
  { name: "Midjourney", category: "Image" },
  { name: "DALL-E 3", category: "Image" },
  { name: "Stable Diffusion", category: "Image" },
  { name: "Runway ML", category: "Video" },
  { name: "Pika Labs", category: "Video" },
  { name: "Kling AI", category: "Video" },
  { name: "Higgsfield AI", category: "Video" },
  { name: "ElevenLabs", category: "Audio" },
  { name: "HeyGen", category: "Avatar" },
  { name: "CapCut", category: "Editing" },
  { name: "Adobe Firefly", category: "Image" },
  { name: "Canva AI", category: "Design" },
  { name: "Leonardo AI", category: "Image" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Brief & Direction",
    description:
      "We align on your brand, audience, and content goals. I map out the visual direction, tone, and formats before generating a single pixel.",
  },
  {
    step: "02",
    title: "AI Generation",
    description:
      "I engineer precise prompts across multiple AI tools to generate high-quality images and videos that match your brand identity.",
  },
  {
    step: "03",
    title: "Curation & Refinement",
    description:
      "From hundreds of outputs, I select and refine the best results — upscaling, editing, and polishing until every asset is production-ready.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Final assets delivered in your required formats, organized and ready to publish. Fast turnaround, unlimited revisions on direction.",
  },
];

export const IMPACT_STATS = [
  { value: "500+", label: "AI Images Created" },
  { value: "52+", label: "AI Videos Produced" },
  { value: "4+", label: "Years in AI Content" },
  { value: "10+", label: "Brands Served" },
];

export const IMAGE_GALLERY: { src: string; alt: string; category: string }[] = [
  { src: "", alt: "Futuristic product shot — hero angle with studio lighting", category: "Product" },
  { src: "", alt: "Cyberpunk cityscape concept art at dusk", category: "Concept Art" },
  { src: "", alt: "Bold social media visual for lifestyle brand", category: "Social Media" },
  { src: "", alt: "Minimalist brand identity visual with purple tones", category: "Brand" },
  { src: "", alt: "High-converting ad creative for e-commerce", category: "Ad Creative" },
  { src: "", alt: "Golden hour lifestyle photography — AI generated", category: "Lifestyle" },
  { src: "", alt: "Cinematic AI portrait — dramatic lighting", category: "Portrait" },
  { src: "", alt: "Fantasy world illustration with epic atmosphere", category: "Fantasy" },
  { src: "", alt: "Futuristic architecture visualization — exterior view", category: "Architecture" },
  { src: "", alt: "Product flat-lay — clean white background", category: "Product" },
  { src: "", alt: "Abstract brand visual — gradient and geometry", category: "Brand" },
  { src: "", alt: "TikTok-ready vertical social media graphic", category: "Social Media" },
];

// kept for backwards compatibility — no longer used in page.tsx
export const VIDEO_GALLERY: { src: string; poster: string; title: string; category: string }[] = [];

// ─── Marketing Studio Videos ──────────────────────────────────────────────────

export type MarketingVideoCategory =
  | "UGC"
  | "Tryons"
  | "Hypermotion"
  | "Commercial"
  | "Hooks"
  | "Realistic Scene"
  | "Unrealistic Scene";

export type MarketingVideo = {
  src: string;
  title: string;
  category: MarketingVideoCategory;
};

// Round-robin interleave by category — computed once at module load, never reshuffled
function interleaveByCategory<T extends { category: string }>(items: T[]): T[] {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    if (!groups.has(item.category)) groups.set(item.category, []);
    groups.get(item.category)!.push(item);
  }
  const buckets = Array.from(groups.values());
  const indices = new Array(buckets.length).fill(0);
  const result: T[] = [];
  let added = true;
  while (added) {
    added = false;
    for (let b = 0; b < buckets.length; b++) {
      if (indices[b] < buckets[b].length) {
        result.push(buckets[b][indices[b]++]);
        added = true;
      }
    }
  }
  return result;
}

export const MARKETING_VIDEO_CATEGORIES: MarketingVideoCategory[] = [
  "UGC",
  "Tryons",
  "Hypermotion",
  "Commercial",
  "Hooks",
  "Realistic Scene",
  "Unrealistic Scene",
];

export const MARKETING_VIDEOS: MarketingVideo[] = [
  // ── UGC ───────────────────────────────────────────────────────────────────
  { src: "/videos/format-ugc-1.mp4",      title: "UGC",      category: "UGC" },
  { src: "/videos/format-ugc-2.mp4",      title: "UGC",      category: "UGC" },
  { src: "/videos/format-ugc-3.mp4",      title: "UGC",      category: "UGC" },
  { src: "/videos/format-ugc-4.mp4",      title: "UGC",      category: "UGC" },
  { src: "/videos/format-ugc-5.mp4",      title: "UGC",      category: "UGC" },
  { src: "/videos/format-ugc-6.mp4",      title: "UGC",      category: "UGC" },
  { src: "/videos/format-ugc-7.mp4",      title: "UGC",      category: "UGC" },
  { src: "/videos/format-tutorial-1.mp4", title: "Tutorial", category: "UGC" },
  { src: "/videos/format-tutorial-2.mp4", title: "Tutorial", category: "UGC" },
  { src: "/videos/format-unboxing-1.mp4", title: "Unboxing", category: "UGC" },
  { src: "/videos/format-unboxing-2.mp4", title: "Unboxing", category: "UGC" },
  { src: "/videos/format-unboxing-3.mp4", title: "Unboxing", category: "UGC" },
  { src: "/videos/format-unboxing-4.mp4", title: "Unboxing", category: "UGC" },
  { src: "/videos/format-unboxing-5.mp4", title: "Unboxing", category: "UGC" },
  // ── Tryons ────────────────────────────────────────────────────────────────
  { src: "/videos/format-virtual-tryon-1.mp4", title: "Virtual Try On", category: "Tryons" },
  { src: "/videos/format-virtual-tryon-2.mp4", title: "Virtual Try On", category: "Tryons" },
  { src: "/videos/format-virtual-tryon-3.mp4", title: "Virtual Try On", category: "Tryons" },
  { src: "/videos/format-virtual-tryon-4.mp4", title: "Virtual Try On", category: "Tryons" },
  { src: "/videos/format-virtual-tryon-5.mp4", title: "Virtual Try On", category: "Tryons" },
  { src: "/videos/format-virtual-tryon-6.mp4", title: "Virtual Try On", category: "Tryons" },
  { src: "/videos/format-pro-tryon-1.mp4",     title: "Pro Try On",     category: "Tryons" },
  // ── Hypermotion ───────────────────────────────────────────────────────────
  { src: "/videos/format-hyper-motion-1.mp4", title: "Hyper Motion", category: "Hypermotion" },
  { src: "/videos/format-hyper-motion-2.mp4", title: "Hyper Motion", category: "Hypermotion" },
  { src: "/videos/format-hyper-motion-3.mp4", title: "Hyper Motion", category: "Hypermotion" },
  { src: "/videos/format-hyper-motion-4.mp4", title: "Hyper Motion", category: "Hypermotion" },
  // ── Commercial ────────────────────────────────────────────────────────────
  { src: "/videos/format-tv-spot-1.mp4",   title: "TV Spot",   category: "Commercial" },
  { src: "/videos/format-tv-spot-2.mp4",   title: "TV Spot",   category: "Commercial" },
  { src: "/videos/format-wild-card-1.mp4", title: "Wild Card", category: "Commercial" },
  // ── Hooks ─────────────────────────────────────────────────────────────────
  { src: "/videos/hooks_product_hit-1.mp4",       title: "Product Hit",       category: "Hooks" },
  { src: "/videos/hooks_random_object_mic-1.mp4", title: "Random Object Mic", category: "Hooks" },
  { src: "/videos/hooks_blizzard-1.mp4",          title: "Blizzard",          category: "Hooks" },
  { src: "/videos/hooks_product_crash-1.mp4",     title: "Product Crash",     category: "Hooks" },
  { src: "/videos/hooks_product_dodge-1.mp4",     title: "Product Dodge",     category: "Hooks" },
  { src: "/videos/hooks_camera_bump-1.mp4",       title: "Camera Bump",       category: "Hooks" },
  { src: "/videos/hooks_epic_fail-1.mp4",         title: "Epic Fail",         category: "Hooks" },
  { src: "/videos/hooks_spicy-1.mp4",             title: "Spicy",             category: "Hooks" },
  { src: "/videos/hooks_interview-1.mp4",         title: "Interview",         category: "Hooks" },
  // ── Realistic Scene ───────────────────────────────────────────────────────
  { src: "/videos/setting-bedroom-1.mp4",  title: "Bedroom",  category: "Realistic Scene" },
  { src: "/videos/setting-nature-1.mp4",   title: "Nature",   category: "Realistic Scene" },
  { src: "/videos/setting-gym-1.mp4",      title: "Gym",      category: "Realistic Scene" },
  { src: "/videos/setting-bathroom-1.mp4", title: "Bathroom", category: "Realistic Scene" },
  { src: "/videos/setting-kitchen-1.mp4",  title: "Kitchen",  category: "Realistic Scene" },
  { src: "/videos/setting-car_roof-1.mp4", title: "Car Roof", category: "Realistic Scene" },
  { src: "/videos/setting-in_car-1.mp4",   title: "In Car",   category: "Realistic Scene" },
  { src: "/videos/setting-street-1.mp4",   title: "Street",   category: "Realistic Scene" },
  { src: "/videos/setting-office-1.mp4",   title: "Office",   category: "Realistic Scene" },
  // ── Unrealistic Scene ─────────────────────────────────────────────────────
  { src: "/videos/setting-airplane_wing-1.mp4", title: "Airplane Wing", category: "Unrealistic Scene" },
  { src: "/videos/setting-roofing-1.mp4",       title: "Roofing",       category: "Unrealistic Scene" },
  { src: "/videos/setting-volcano_rim-1.mp4",   title: "Volcano Rim",   category: "Unrealistic Scene" },
  { src: "/videos/setting-tiny_reviewer-1.mp4", title: "Tiny Reviewer", category: "Unrealistic Scene" },
  { src: "/videos/setting-train_surf-1.mp4",    title: "Train Surf",    category: "Unrealistic Scene" },
];

// Fixed interleaved order for "All" view — mixes categories, never changes on refresh
export const MARKETING_VIDEOS_MIXED = interleaveByCategory(MARKETING_VIDEOS);
