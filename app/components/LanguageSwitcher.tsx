"use client";

import { SUPPORTED_LANGUAGES, useLanguage } from "../i18n/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="site-language-switcher"
      role="group"
      aria-label={t("lang.switcher.aria")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid rgba(255,85,0,0.2)",
        background: "rgba(12,12,12,0.82)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
        minHeight: "44px",
      }}
    >
      {SUPPORTED_LANGUAGES.map((lang, index) => {
        const selected = lang === language;

        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-label={`${t("lang.switcher.aria")}: ${t(`lang.name.${lang}`)}`}
            aria-pressed={selected}
            aria-current={selected ? "true" : undefined}
            lang={lang}
            className="site-language-button"
            style={{
              border: "none",
              borderRight:
                index < SUPPORTED_LANGUAGES.length - 1
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "none",
              background: selected ? "rgba(255,85,0,0.18)" : "transparent",
              color: selected ? "#ffffff" : "#c9c9cf",
              padding: "0 12px",
              minWidth: "48px",
              minHeight: "42px",
              fontSize: "11px",
              fontWeight: selected ? 700 : 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              cursor: "pointer",
              transition: "background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
              boxShadow: selected ? "inset 0 0 0 1px rgba(255,85,0,0.28)" : "none",
            }}
          >
            {lang.toUpperCase()}
          </button>
        );
      })}

      <style>{`
        .site-language-button:hover {
          background: rgba(255,255,255,0.05) !important;
          color: #ffffff !important;
        }
        .site-language-button[aria-pressed="true"]:hover {
          background: rgba(255,85,0,0.22) !important;
        }
        .site-language-button:focus-visible {
          outline: 2px solid rgba(255, 181, 156, 0.92);
          outline-offset: -2px;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 640px) {
          .site-language-switcher {
            min-height: 38px !important;
          }
          .site-language-button {
            min-height: 36px !important;
            min-width: 42px !important;
            padding: 0 10px !important;
            font-size: 10px !important;
            letter-spacing: 0.14em !important;
          }
        }
      `}</style>
    </div>
  );
}
