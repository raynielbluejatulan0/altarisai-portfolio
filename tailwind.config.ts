import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#FFFFFF",
          600: "#E5E5E5",
          700: "#D4D4D4",
          800: "#A3A3A3",
          900: "#737373",
        },
        secondary: {
          DEFAULT: "#A3A3A3",
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#D4D4D4",
          300: "#A3A3A3",
          400: "#737373",
          500: "#A3A3A3",
          600: "#737373",
          700: "#525252",
          800: "#404040",
          900: "#262626",
        },
        // Brand: gold accent (precious, used sparingly)
        accent: {
          DEFAULT: "#CBA35A",
          muted: "#8C7A55",
          faint: "rgba(203, 163, 90, 0.12)",
        },
        // Brand: metallic silver
        silver: {
          DEFAULT: "#C7CAD1",
          light: "#ECECEE",
          muted: "#A6ABB3",
          dim: "#8A8E96",
        },
        // Brand: black base
        background: "#0A0A0A",
        surface: {
          DEFAULT: "#141414",
          50: "#222222",
          100: "#1E1E1E",
          200: "#1C1C1C",
        },
        foreground: {
          DEFAULT: "#E4E4E7",
          // Neutral silver
          muted: "#A6ABB3",
          // Dim silver — clears WCAG 4.5:1 on the near-black bg
          dim: "#8A8E96",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontSize: {
        "display-3xl": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-2xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-xl": ["1.25rem", { lineHeight: "1.75" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.65" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5" }],
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      // Sharp editorial corners — no glassy rounding
      borderRadius: {
        "2xl": "3px",
        "3xl": "4px",
        "4xl": "6px",
      },
      // Flat, crisp elevation — no glow
      boxShadow: {
        "card": "0 18px 44px -26px rgba(0, 0, 0, 0.75)",
        "card-hover": "0 26px 64px -28px rgba(0, 0, 0, 0.85)",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 30s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
        "float": "float 4s ease-in-out infinite",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
export default config;
