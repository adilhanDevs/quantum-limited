import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "./components/ScrollReveal";
import { LanguageProvider } from "./i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Quantum Limited — Engineering The Future",
  description: "Technical architecture for visionaries.",
  keywords: ["software engineering", "cloud architecture", "neural integration", "quantum computing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"

          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body style={{ fontFamily: "var(--font-body)" }}>
        <LanguageProvider>
          <ScrollReveal />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
