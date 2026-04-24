import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "./components/ScrollReveal";
import { LanguageProvider } from "./i18n/LanguageContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quantum Limited — Engineering The Future",
  description:
    "Technical architecture for visionaries. We build high-performance systems where speed meets architectural integrity.",
  keywords: ["software engineering", "cloud architecture", "neural integration", "quantum computing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          href="/Hero.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="stylesheet"

          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
        <LanguageProvider>
          <ScrollReveal />
          {children}
          <LanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  );
}
