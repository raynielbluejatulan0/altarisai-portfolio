import type { Metadata } from "next";
import { Bodoni_Moda, Manrope, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SITE, CONTACT, SOCIALS } from "@/lib/constants";
import "./globals.css";

// Display: high-contrast Didone — cinematic film-title character
const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body: clean geometric grotesque
const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Advertising",
  keywords: [
    "AI video ads",
    "AI video ad studio",
    "AI UGC ads",
    "AI product commercials",
    "eCommerce video ads",
    "DTC video ads",
    "AI video production",
    "creative testing",
    "performance creative",
    "video ad agency",
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
    title: `${SITE.name} · ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · ${SITE.tagline}`,
    description: SITE.description,
  },
};

const socialLinks = SOCIALS.filter((s) => s.href !== "#").map((s) => s.href);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      slogan: SITE.tagline,
      description: SITE.description,
      email: `mailto:${CONTACT.email}`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.png`,
        width: 1254,
        height: 1254,
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
      serviceType: "AI Video Advertising Production",
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
      </body>
    </html>
  );
}
