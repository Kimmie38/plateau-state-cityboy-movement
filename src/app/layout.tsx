import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LightboxProvider } from "@/components/Lightbox";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { chapter, heroBackgrounds } from "@/content/site";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${chapter.name} — ${chapter.chapter}`,
    template: `%s · City Boy Movement Plateau`,
  },
  description: chapter.whoWeAre,
  openGraph: {
    title: `${chapter.name} — ${chapter.chapter}`,
    description: chapter.about,
    images: [{ url: heroBackgrounds.home }],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e6b34",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <LightboxProvider>
          <span id="top-of-page" />
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ScrollAnimator />
        </LightboxProvider>
      </body>
    </html>
  );
}
