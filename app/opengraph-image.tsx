import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

// Edge runtime: @vercel/og fails to prerender in the Node runtime on Windows
export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(160deg, #121212 0%, #070707 55%, #101010 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#C8A96E",
            fontSize: 24,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 48, height: 2, background: "#C8A96E", display: "flex" }} />
          {SITE.tagline}
        </div>
        <div
          style={{
            marginTop: 40,
            color: "#FFFFFF",
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          AI video ads that stop the scroll — and sell.
        </div>
        <div
          style={{
            marginTop: 48,
            color: "#A0A8B8",
            fontSize: 30,
          }}
        >
          {SITE.name} · altarisai.online
        </div>
      </div>
    ),
    size
  );
}
