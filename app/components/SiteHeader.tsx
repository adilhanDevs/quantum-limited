"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { RequestModal } from "./RequestModal";
import { useLanguage } from "../i18n/LanguageContext";

/** Matches `Services` page nav: grid layout, Inter links, Space Grotesk logo & CTA. */
const T = {
  onSurface: "#e2e2e2",
  primaryCtn: "#ff5500",
  onPrimary: "#390c00",
};

const REQUEST_MODAL_AUTO_SHOWN_KEY = "requestModalAutoShown";
const REQUEST_MODAL_DISMISSED_KEY = "requestModalDismissed";
const REQUEST_MODAL_SUBMITTED_KEY = "requestModalSubmitted";

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
  const pathname = usePathname();
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const requestButtonRef = useRef<HTMLButtonElement>(null);
  const isRequestModalOpenRef = useRef(false);

  useEffect(() => {
    isRequestModalOpenRef.current = isRequestModalOpen;
  }, [isRequestModalOpen]);

  useEffect(() => {
    if (pathname === "/contact") {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const alreadyShown = sessionStorage.getItem(REQUEST_MODAL_AUTO_SHOWN_KEY) === "true";
    const dismissed = sessionStorage.getItem(REQUEST_MODAL_DISMISSED_KEY) === "true";
    const submitted = sessionStorage.getItem(REQUEST_MODAL_SUBMITTED_KEY) === "true";

    if (alreadyShown || dismissed || submitted) {
      return;
    }

    const timerId = window.setTimeout(() => {
      const autoShownNow = sessionStorage.getItem(REQUEST_MODAL_AUTO_SHOWN_KEY) === "true";
      const dismissedNow = sessionStorage.getItem(REQUEST_MODAL_DISMISSED_KEY) === "true";
      const submittedNow = sessionStorage.getItem(REQUEST_MODAL_SUBMITTED_KEY) === "true";

      if (isRequestModalOpenRef.current || autoShownNow || dismissedNow || submittedNow) {
        return;
      }

      sessionStorage.setItem(REQUEST_MODAL_AUTO_SHOWN_KEY, "true");
      setIsRequestModalOpen(true);
    }, 30_000);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [pathname]);

  const openRequestModal = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(REQUEST_MODAL_AUTO_SHOWN_KEY, "true");
    }
    setIsRequestModalOpen(true);
  };

  const closeRequestModal = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(REQUEST_MODAL_DISMISSED_KEY, "true");
    }
    setIsRequestModalOpen(false);
  };

  const handleRequestSubmitted = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(REQUEST_MODAL_SUBMITTED_KEY, "true");
    }
  };

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
          ["--site-header-offset" as string]: "78px",
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
            gridTemplateColumns: "auto minmax(0, 1fr) auto",
            alignItems: "center",
            columnGap: "clamp(12px, 3vw, 40px)",
            minHeight: "78px",
          }}
          className="site-nav-inner"
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
              minHeight: "44px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {t("header.brand")}
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
                      minHeight: "36px",
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "6px 0",
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

          <div
            className="site-nav-actions"
            style={{
              alignItems: "center",
              display: "inline-flex",
              gap: "12px",
              justifySelf: "end",
            }}
          >
            <LanguageSwitcher />
            <button
              ref={requestButtonRef}
              type="button"
              onClick={openRequestModal}
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
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "44px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {ctaLabel(active, t)}
            </button>
          </div>
        </div>
      </nav>

      <RequestModal
        isOpen={isRequestModalOpen}
        onClose={closeRequestModal}
        onSubmitted={handleRequestSubmitted}
        returnFocusRef={requestButtonRef}
      />

      <style>{`
        .site-nav-link:hover {
          color: ${T.onSurface} !important;
        }
        .site-logo-link:focus-visible,
        .site-nav-link:focus-visible,
        .site-nav-cta:focus-visible {
          outline: 2px solid rgba(255, 85, 0, 0.9);
          outline-offset: 3px;
        }
        .site-nav-actions {
          min-width: 0;
        }
        @media (max-width: 900px) {
          #site-nav {
            --site-header-offset: 118px;
          }
          .site-nav-inner {
            grid-template-columns: minmax(0, 1fr) auto !important;
            grid-template-areas:
              "logo actions"
              "links links";
            align-items: center !important;
            column-gap: 16px !important;
            row-gap: 10px !important;
            min-height: 0 !important;
            padding: 12px 16px 10px !important;
          }
          .site-logo-link {
            grid-area: logo;
            font-size: 12px !important;
            letter-spacing: 0.16em !important;
            min-width: 0;
          }
          .site-nav-actions {
            grid-area: actions;
            gap: 8px !important;
          }
          #site-nav-links {
            grid-area: links;
            gap: 10px 18px !important;
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            padding-bottom: 4px !important;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          #site-nav-links::-webkit-scrollbar {
            display: none;
          }
          .site-nav-link {
            font-size: 11px !important;
            letter-spacing: 0.1em !important;
            white-space: nowrap;
            min-height: 32px !important;
          }
          .site-nav-cta {
            font-size: 11px !important;
            padding: 10px 14px !important;
            justify-self: end !important;
            white-space: nowrap;
          }
        }
        @media (max-width: 640px) {
          #site-nav {
            --site-header-offset: 114px;
          }
          .site-nav-inner {
            row-gap: 8px !important;
            padding: 10px 14px 8px !important;
          }
          .site-logo-link {
            font-size: 11px !important;
          }
          #site-nav-links {
            gap: 8px 14px !important;
          }
          .site-nav-actions {
            gap: 6px !important;
          }
          .site-nav-cta {
            font-size: 10px !important;
            padding: 9px 12px !important;
          }
        }
        @media (max-width: 520px) {
          #site-nav {
            --site-header-offset: 110px;
          }
          .site-nav-cta {
            min-height: 36px !important;
            padding: 8px 10px !important;
          }
        }
      `}</style>
    </>
  );
}
