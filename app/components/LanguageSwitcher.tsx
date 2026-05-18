"use client";

import type { KeyboardEvent } from "react";
import { useEffect, useId, useRef, useState } from "react";
import { SUPPORTED_LANGUAGES, useLanguage } from "../i18n/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      buttonRef.current?.focus();
    }
  };

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      buttonRef.current?.focus();
    }
  };

  return (
    <div
      ref={rootRef}
      className="site-language-switcher"
      data-open={isOpen ? "true" : "false"}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        flexShrink: 0,
        paddingBottom: "10px",
        marginBottom: "-10px",
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="site-language-trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? t("lang.switcher.close") : t("lang.switcher.open")}
        onClick={toggleMenu}
        onKeyDown={handleTriggerKeyDown}
      >
        <span>{t("lang.switcher.trigger")}</span>
        <span className="site-language-trigger-icon" aria-hidden="true">
          {"\u25BE"}
        </span>
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={t("lang.switcher.aria")}
        className="site-language-menu"
        data-open={isOpen ? "true" : "false"}
        onKeyDown={handleMenuKeyDown}
      >
        {SUPPORTED_LANGUAGES.map((lang) => {
          const selected = lang === language;

          return (
            <button
              key={lang}
              type="button"
              role="menuitemradio"
              aria-checked={selected}
              lang={lang}
              className="site-language-option"
              data-active={selected ? "true" : "false"}
              onClick={() => {
                setLanguage(lang);
                closeMenu();
              }}
            >
              {t(`lang.name.${lang}`)}
            </button>
          );
        })}
      </div>

      <style>{`
        .site-language-trigger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          background: rgba(12, 12, 12, 0.82);
          color: #f1f1f4;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 10px 30px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          font-family: var(--font-inter, Inter, sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }
        .site-language-trigger:hover,
        .site-language-switcher[data-open="true"] .site-language-trigger {
          border-color: rgba(255, 85, 0, 0.4);
          background: rgba(22, 22, 22, 0.92);
          color: #ffffff;
        }
        .site-language-trigger:focus-visible,
        .site-language-option:focus-visible {
          outline: 2px solid rgba(255, 181, 156, 0.92);
          outline-offset: 2px;
        }
        .site-language-trigger-icon {
          font-size: 10px;
          transition: transform 0.2s ease;
        }
        .site-language-switcher[data-open="true"] .site-language-trigger-icon {
          transform: rotate(180deg);
        }
        .site-language-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          display: grid;
          gap: 4px;
          min-width: min(180px, calc(100vw - 28px));
          max-width: min(200px, calc(100vw - 28px));
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          background: rgba(14, 14, 14, 0.96);
          box-shadow:
            0 22px 55px rgba(0, 0, 0, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          opacity: 0;
          pointer-events: none;
          transform: translateY(-6px);
          transition: opacity 0.18s ease, transform 0.18s ease;
          z-index: 1200;
        }
        .site-language-switcher::after {
          content: "";
          position: absolute;
          top: 100%;
          right: 0;
          width: 100%;
          height: 12px;
        }
        .site-language-menu[data-open="true"] {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .site-language-option {
          width: 100%;
          min-height: 40px;
          padding: 0 12px;
          border: 1px solid transparent;
          border-radius: 12px;
          background: transparent;
          color: #d0d0d6;
          font-family: var(--font-inter, Inter, sans-serif);
          font-size: 14px;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .site-language-option:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }
        .site-language-option[data-active="true"] {
          border-color: rgba(255, 85, 0, 0.24);
          background: rgba(255, 85, 0, 0.16);
          color: #ffffff;
          font-weight: 700;
        }
        @media (hover: hover) and (pointer: fine) {
          .site-language-switcher:hover .site-language-menu {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }
          .site-language-switcher:hover .site-language-trigger {
            border-color: rgba(255, 85, 0, 0.4);
            background: rgba(22, 22, 22, 0.92);
            color: #ffffff;
          }
          .site-language-switcher:hover .site-language-trigger-icon {
            transform: rotate(180deg);
          }
        }
        @media (max-width: 640px) {
          .site-language-trigger {
            min-height: 38px;
            padding: 0 12px;
            font-size: 10px;
            letter-spacing: 0.07em;
          }
          .site-language-menu {
            top: calc(100% + 8px);
            right: 0;
            min-width: min(164px, calc(100vw - 24px));
            max-width: min(176px, calc(100vw - 24px));
            padding: 6px;
          }
          .site-language-option {
            min-height: 36px;
            padding: 0 10px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
