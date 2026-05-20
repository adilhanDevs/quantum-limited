"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";
import { getContactInfo, type ApiContactInfo } from "../lib/website-api";

const footerLinks = [
  { href: "/privacy-policy", labelKey: "global.footer.link.privacy" },
  { href: "/terms-of-service", labelKey: "global.footer.link.terms" },
  { href: "/delivery-coverage", labelKey: "global.footer.link.coverage" },
  { href: "/project-scope", labelKey: "global.footer.link.scope" },
];

export function Footer() {
  const { t } = useLanguage();
  const [contactInfo, setContactInfo] = React.useState<ApiContactInfo | null>(null);
  const [isLoadingContact, setIsLoadingContact] = React.useState(true);
  const [hasContactError, setHasContactError] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    getContactInfo()
      .then((data) => {
        if (isMounted) {
          setContactInfo(data);
          setHasContactError(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setContactInfo(null);
          setHasContactError(true);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingContact(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const contactLinks = contactInfo ? [
    {
      href: contactInfo.phone_href || "",
      labelKey: "global.footer.contact.phone",
      value: contactInfo.phone,
    },
    {
      href: contactInfo.instagram_url || "",
      labelKey: "global.footer.contact.instagram",
      value: contactInfo.instagram,
    },
    {
      href: contactInfo.telegram_url || "",
      labelKey: "global.footer.contact.telegram",
      value: contactInfo.telegram,
    },
  ].filter((item) => item.href && item.value) : [];

  return (
    <footer className="global-footer">
      <div className="global-footer__inner">
        <div className="global-footer__brand-block">
          <Link href="/" className="global-footer__brand">
            {t("global.footer.brand")}
          </Link>
          <p className="global-footer__tagline">{t("global.footer.tagline")}</p>
          <p className="global-footer__copy">{t("global.footer.copy")}</p>
        </div>

        <div className="global-footer__contact-block" aria-label={t("global.footer.contacts_label")}>
          <p className="global-footer__eyebrow">{t("global.footer.contacts_label")}</p>
          <div className="global-footer__contacts">
            {isLoadingContact ? (
              <p className="global-footer__contact-status">{t("global.footer.contact.loading")}</p>
            ) : hasContactError ? (
              <p className="global-footer__contact-status">{t("global.footer.contact.error")}</p>
            ) : contactLinks.length > 0 ? contactLinks.map((item) => (
              <a
                key={item.href}
                className="global-footer__contact-link"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{t(item.labelKey)}</span>
                <strong>{item.value}</strong>
              </a>
            )) : (
              <p className="global-footer__contact-status">{t("global.footer.contact.empty")}</p>
            )}
          </div>
        </div>

        <nav className="global-footer__nav" aria-label={t("global.footer.nav_label")}>
          <p className="global-footer__eyebrow">{t("global.footer.nav_label")}</p>
          <div className="global-footer__links">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="global-footer__link">
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <style jsx>{`
        .global-footer {
          background: #0a0a0a;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 64px clamp(20px, 4vw, 48px) 48px;
        }
        .global-footer__inner {
          max-width: min(1480px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(220px, 1.15fr) minmax(260px, 1fr) minmax(220px, 0.85fr);
          gap: 40px clamp(32px, 5vw, 72px);
          align-items: start;
        }
        .global-footer__brand,
        .global-footer__link,
        .global-footer__contact-link {
          text-decoration: none;
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .global-footer__brand {
          display: inline-flex;
          margin-bottom: 18px;
          color: #ffffff;
          font-family: var(--font-space-grotesk, Space Grotesk, sans-serif);
          font-size: 17px;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .global-footer__tagline,
        .global-footer__copy,
        .global-footer__eyebrow,
        .global-footer__link,
        .global-footer__contact-link {
          font-family: var(--font-inter, Inter, sans-serif);
          text-transform: uppercase;
        }
        .global-footer__tagline {
          max-width: 34ch;
          margin: 0 0 18px;
          color: rgba(255, 181, 156, 0.82);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          line-height: 1.7;
        }
        .global-footer__copy {
          margin: 0;
          color: rgba(161, 161, 170, 0.62);
          font-size: 10px;
          letter-spacing: 0.16em;
          line-height: 1.7;
        }
        .global-footer__eyebrow {
          margin: 0 0 18px;
          color: #ff5500;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.24em;
        }
        .global-footer__contacts,
        .global-footer__links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px 18px;
        }
        .global-footer__contact-link {
          min-width: min(100%, 210px);
          padding: 14px 16px;
          border: 1px solid rgba(255, 85, 0, 0.12);
          background: rgba(255, 255, 255, 0.025);
          color: rgba(161, 161, 170, 0.78);
          font-size: 10px;
          letter-spacing: 0.14em;
          line-height: 1.5;
        }
        .global-footer__contact-link span {
          display: block;
          margin-bottom: 6px;
          color: rgba(255, 181, 156, 0.72);
          font-weight: 700;
        }
        .global-footer__contact-link strong {
          display: block;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          overflow-wrap: anywhere;
        }
        .global-footer__link {
          color: rgba(161, 161, 170, 0.76);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          line-height: 1.6;
        }
        .global-footer__contact-status {
          margin: 0;
          color: rgba(161, 161, 170, 0.72);
          font-family: var(--font-inter, Inter, sans-serif);
          font-size: 11px;
          letter-spacing: 0.14em;
          line-height: 1.7;
          text-transform: uppercase;
        }
        .global-footer__brand:hover,
        .global-footer__link:hover,
        .global-footer__contact-link:hover {
          color: #ff5500;
        }
        .global-footer__contact-link:hover {
          border-color: rgba(255, 85, 0, 0.34);
          transform: translateY(-1px);
        }
        .global-footer__brand:focus-visible,
        .global-footer__link:focus-visible,
        .global-footer__contact-link:focus-visible {
          outline: 2px solid rgba(255, 181, 156, 0.92);
          outline-offset: 4px;
        }
        @media (max-width: 960px) {
          .global-footer__inner {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 560px) {
          .global-footer {
            padding-top: 48px;
          }
          .global-footer__contacts,
          .global-footer__links {
            flex-direction: column;
            align-items: stretch;
          }
          .global-footer__contact-link {
            min-width: 0;
          }
        }
      `}</style>
    </footer>
  );
}
