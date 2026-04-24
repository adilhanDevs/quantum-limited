"use client";

import { useEffect, useRef, useState } from "react";
import { SUPPORTED_LANGUAGES, useLanguage } from "../i18n/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "fixed", right: "16px", bottom: "16px", zIndex: 1200 }}>
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: "50px",
          minWidth: "132px",
          border: "1px solid rgba(255,85,0,0.22)",
          background: "rgba(18,18,18,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 16px 32px rgba(0,0,0,0.35)",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(8px) scale(0.96)",
          transformOrigin: "bottom right",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        {SUPPORTED_LANGUAGES.map((lang) => {
          const selected = lang === language;
          return (
            <button
              key={lang}
              type="button"
              onClick={() => {
                setLanguage(lang);
                setOpen(false);
              }}
              style={{
                width: "100%",
                textAlign: "left",
                border: "none",
                background: selected ? "rgba(255,85,0,0.15)" : "transparent",
                color: selected ? "#ffb59c" : "#d4d4d8",
                padding: "10px 12px",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                cursor: "pointer",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!selected) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                if (!selected) e.currentTarget.style.background = "transparent";
              }}
            >
              {lang === "zh" ? "中文" : lang.toUpperCase()} - {t(`lang.name.${lang}`)}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="lang-switcher-fab"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={open ? t("lang.switcher.close") : t("lang.switcher.open")}
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "999px",
          border: hovered ? "1px solid rgba(255,255,255,0.28)" : "1px solid rgba(255,255,255,0.16)",
          background: hovered ? "rgba(34,34,34,0.96)" : "rgba(12,12,12,0.94)",
          color: hovered ? "#ffffff" : "#e4e4e7",
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: hovered ? "0 10px 24px rgba(0,0,0,0.5)" : "0 8px 18px rgba(0,0,0,0.38)",
          transform: hovered ? "translateY(-1px)" : "translateY(0)",
          transition: "all 0.24s cubic-bezier(0.22, 1, 0.36, 1)",
          cursor: "pointer",
        }}
      >
        🌐
      </button>
    </div>
  );
}
