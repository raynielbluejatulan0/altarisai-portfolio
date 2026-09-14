import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Bodoni_Moda, Manrope, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SITE, CONTACT, SOCIALS, FOUNDER } from "@/lib/constants";
import { INTEGRATIONS } from "@/lib/config";
import "./globals.css";

// Display: high-contrast Didone — cinematic film-title character
// (weights trimmed to the cuts actually used: regular, semibold, bold + italic)
const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body: clean geometric grotesque
const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Labels: technical / cinema-slate monospace
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const TITLE = "ALTARIS AI | AI-Powered Creative Production for eCommerce";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Advertising",
  verification: {
    google: "a_VZktDjEQWhQXEoSXs84oZnNNJ3-pAUBibZf7alTsc",
  },
  keywords: [
    "AI creative production",
    "AI video ads",
    "AI UGC ads",
    "AI product commercials",
    "eCommerce video ads",
    "DTC video ads",
    "performance creative",
    "creative testing",
    "creative strategy",
    "AI video production",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE.description,
  },
};

const socialLinks = SOCIALS.filter((s) => s.icon !== "whatsapp").map((s) => s.href);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      slogan: SITE.positioning,
      description: SITE.description,
      email: `mailto:${CONTACT.email}`,
      founder: {
        "@type": "Person",
        name: FOUNDER.name,
        jobTitle: "Founder & Creative Director",
      },
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.png`,
        width: 716,
        height: 716,
      },
      ...(socialLinks.length ? { sameAs: socialLinks } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#service`,
      name: `${SITE.name} · ${SITE.tagline}`,
      url: SITE.url,
      description: SITE.description,
      serviceType: "AI-Powered Creative Production",
      areaServed: "Worldwide",
      provider: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" dir="ltr">
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-accent focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <Navbar />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <Analytics />
        {/* GA4 — loads only once NEXT_PUBLIC_GA_ID is configured (see lib/config.ts) */}
        {INTEGRATIONS.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${INTEGRATIONS.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${INTEGRATIONS.gaId}');`}
            </Script>
          </>
        )}
        {/* Meta Pixel — loads only once NEXT_PUBLIC_META_PIXEL_ID is configured */}
        {INTEGRATIONS.metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${INTEGRATIONS.metaPixelId}');
              fbq('track', 'PageView');`}
          </Script>
        )}
      </body>
    </html>
  );
}
