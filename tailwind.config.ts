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
          DEFAULT: "#00D4BE",
          50: "#E0FFFC",
          100: "#BDFDF8",
          200: "#7AFBF1",
          300: "#3AF5E9",
          400: "#10E8DA",
          500: "#00D4BE",
          600: "#00B3A0",
          700: "#008C7D",
          800: "#006560",
          900: "#003D3A",
        },
        secondary: {
          DEFAULT: "#00A896",
          50: "#E0FBF8",
          100: "#B3F5EE",
          200: "#7FEDE3",
          300: "#4BE3D6",
          400: "#21D8CC",
          500: "#00A896",
          600: "#008A7B",
          700: "#006B60",
          800: "#004D45",
          900: "#002E2A",
        },
        background: "#080808",
        surface: {
          DEFAULT: "#141414",
          50: "#1C1C1C",
          100: "#181818",
          200: "#161616",
        },
        foreground: {
          DEFAULT: "#E0E0E0",
          muted: "#A0A8B8",
          dim: "#6B7280",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontSize: {
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
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(0, 212, 190, 0.25)",
        "glow-md": "0 0 30px rgba(0, 212, 190, 0.3), 0 0 60px rgba(0, 212, 190, 0.1)",
        "glow-lg": "0 0 60px rgba(0, 212, 190, 0.35), 0 0 120px rgba(0, 212, 190, 0.12)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.5)",
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
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(0, 212, 190, 0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 190, 0.55)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 30s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse at top, rgba(255, 255, 255, 0.015) 0%, transparent 60%)",
        "card-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 100%)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
export default config;
