"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

/** Matches `Services` page nav: grid layout, Inter links, Space Grotesk logo & CTA. */
const T = {
  onSurface: "#e2e2e2",
  primaryCtn: "#ff5500",
  onPrimary: "#390c00",
};

export type SiteNavActive = "services" | "process-protocol" | "clients" | "contact" | null;

const NAV_LINKS: { labelKey: string; href: string; key: NonNullable<SiteNavActive> }[] = [
  { labelKey: "header.nav.services", href: "/services", key: "services" },
  { labelKey: "header.nav.process", href: "/process-protocol", key: "process-protocol" },
  { labelKey: "header.nav.clients", href: "/clients", key: "clients" },
  { labelKey: "header.nav.contact", href: "/contact", key: "contact" },
];

function ctaLabel(active: SiteNavActive, t: (key: string) => string): string {
  if (active === "clients" || active === "contact") return t("header.cta.getStarted");
  if (active === null || active === "process-protocol") return t("header.cta.inquiry");
  return t("header.cta.initiate");
}

export function SiteHeader({ active }: { active: SiteNavActive }) {
  const { t } = useLanguage();

  return (
    <>
      <nav
        id="site-nav"
        className="site-header-enter"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(19,19,19,0.82)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid rgba(92,64,55,0.15)`,
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "0 clamp(14px, 3vw, 28px)",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            columnGap: "clamp(12px, 3vw, 40px)",
            minHeight: "78px",
          }}
        >
          <Link
            href="/"
            className="site-logo-link"
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(10px, 2.6vw, 18px)",
              fontWeight: 700,
              color: T.onSurface,
              textDecoration: "none",
              letterSpacing: "0.18em",
              justifySelf: "start",
            }}
          >
            QUANTUM LIMITED
          </Link>

          <ul
            id="site-nav-links"
            style={{
              display: "flex",
              gap: "clamp(12px, 3vw, 36px)",
              listStyle: "none",
              alignItems: "center",
              justifyContent: "center",
              justifySelf: "center",
              width: "100%",
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.key;
              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="site-nav-link"
                    style={{
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                      fontSize: "clamp(10px, 2.2vw, 12px)",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? T.primaryCtn : "#9ca3af",
                      textDecoration: "none",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      paddingBottom: "6px",
                      borderBottom: isActive ? `2px solid ${T.primaryCtn}` : "2px solid transparent",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="site-nav-cta"
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(10px, 2.2vw, 12px)",
              fontWeight: 700,
              color: T.onPrimary,
              background: T.primaryCtn,
              padding: "clamp(10px, 2vw, 14px) clamp(14px, 3vw, 26px)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "inline-block",
              justifySelf: "end",
            }}
          >
            {ctaLabel(active, t)}
          </Link>
        </div>
      </nav>

      <style>{`
        .site-nav-link:hover {
          color: ${T.onSurface} !important;
        }
        @media (max-width: 900px) {
          #site-nav > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            height: auto !important;
            min-height: 0 !important;
            padding: 14px 16px 18px !important;
            gap: 14px !important;
          }
          #site-nav-links {
            gap: 12px 16px !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
