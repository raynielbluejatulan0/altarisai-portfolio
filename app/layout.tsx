import type { Metadata } from "next";
import { Bodoni_Moda, Manrope, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SITE, CONTACT } from "@/lib/constants";
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
  openGraph: {
    title: `${SITE.name} · ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · ${SITE.tagline}`,
    description: SITE.description,
  },
};

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
      logo: `${SITE.url}/logo.png`,
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
