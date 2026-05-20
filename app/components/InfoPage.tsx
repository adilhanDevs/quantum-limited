"use client";

import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";
import { useLanguage } from "../i18n/LanguageContext";

type InfoPageProps = {
  titleKey: string;
  eyebrowKey: string;
  bodyKey: string;
};

export function InfoPage({ titleKey, eyebrowKey, bodyKey }: InfoPageProps) {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader active={null} />
      <main
        style={{
          minHeight: "100vh",
          background: "#0a0a0a",
          paddingTop: "var(--site-header-offset, 78px)",
        }}
      >
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "clamp(88px, 13vw, 150px) clamp(20px, 5vw, 56px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 18%, rgba(255,85,0,0.18), transparent 30%), linear-gradient(140deg, rgba(22,18,16,0.72), rgba(10,10,10,0.98))",
            }}
          />
          <div style={{ position: "relative", maxWidth: "920px", margin: "0 auto" }}>
            <p
              style={{
                color: "#ff5500",
                fontFamily: "ui-monospace, monospace",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                margin: "0 0 24px",
              }}
            >
              {t(eyebrowKey)}
            </p>
            <h1
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "clamp(42px, 8vw, 96px)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 0.92,
                textTransform: "uppercase",
                margin: "0 0 32px",
              }}
            >
              {t(titleKey)}
            </h1>
            <p
              style={{
                color: "rgba(226,226,226,0.78)",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: 1.75,
                maxWidth: "680px",
                margin: "0 0 40px",
              }}
            >
              {t(bodyKey)}
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                background: "#ff5500",
                color: "#ffffff",
                padding: "16px 24px",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.16em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              {t("global.footer.page_cta")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
