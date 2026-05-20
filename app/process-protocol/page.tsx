"use client";

import React from "react";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { Footer as GlobalFooter } from "../components/Footer";
import { RemoteImageWithFallback } from "../components/RemoteImageWithFallback";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  surface: "#0a0a0a",
  surfaceLow: "#111113",
  surfaceHigh: "#18181b",
  onSurface: "#fafafa",
  primaryCtn: "#ff5708",
  primary: "#ffb59c",
};

export default function ProcessPage() {
  return (
    <>
      <SiteHeader active="process-protocol" />
      <main style={{ position: "relative", background: T.surface, paddingTop: "var(--site-header-offset, 78px)" }}>
        <HeroSection />
        <PhasesSection />
        <CTASection />
        <GlobalFooter />
      </main>

      <style>{`
        .process-hero-head-wrap h1 {
          filter: drop-shadow(0 0 40px rgba(255, 87, 8, 0.15));
        }
        .process-roadmap {
          position: relative;
          min-height: 1580px;
          padding: 20px 0;
          isolation: isolate;
        }
        .process-roadmap::before {
          content: "";
          position: absolute;
          inset: -28px 0;
          background:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse at center, black 0%, transparent 72%);
          opacity: 0.44;
          pointer-events: none;
          z-index: 0;
        }
        .process-roadmap-route {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: visible;
        }
        .process-roadmap-route path {
          fill: none;
          vector-effect: non-scaling-stroke;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .process-roadmap-card {
          position: absolute;
          left: var(--card-x);
          top: var(--card-y);
          width: var(--card-w);
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: clamp(28px, 3vw, 40px);
          min-height: 220px;
          background:
            radial-gradient(circle at top left, rgba(255, 87, 8, 0.08), transparent 34%),
            linear-gradient(180deg, rgba(20, 20, 22, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
          overflow: hidden;
          z-index: 2;
        }
        .process-roadmap-card > * {
          position: relative;
          z-index: 2;
        }
        .process-roadmap-card-map {
          position: absolute;
          inset: 0;
          opacity: 0.24;
          pointer-events: none;
          z-index: 0;
        }
        .process-roadmap-card-map::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(9, 9, 11, 0.9) 0%, rgba(9, 9, 11, 0.54) 45%, rgba(9, 9, 11, 0.88) 100%),
            radial-gradient(circle at 70% 28%, rgba(255, 87, 8, 0.18), transparent 34%);
        }
        .process-roadmap-card[data-map="true"] {
          min-height: 300px;
          justify-content: center;
          background: #09090b !important;
          border-color: rgba(255, 87, 8, 0.16);
        }
        .process-roadmap-title {
          max-width: min(16ch, 100%);
          margin: 0;
          line-height: 1.08;
        }
        .process-roadmap-body {
          margin: 0;
          max-width: 42ch;
          color: rgba(161, 161, 170, 0.9);
          line-height: 1.72;
        }
        .process-roadmap-checkpoint {
          fill: rgba(10, 10, 10, 0.9);
          stroke: ${T.primaryCtn};
          stroke-width: 0.72;
          filter: drop-shadow(0 0 7px rgba(255, 87, 8, 0.3));
        }
        .process-roadmap-checkpoint-text {
          fill: ${T.primary};
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
          font-size: 4px;
          font-weight: 700;
          text-anchor: middle;
          dominant-baseline: central;
        }
        @keyframes process-phase-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        [data-reveal] {
          animation: process-phase-fade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .process-cta-btn:hover {
          background: #ffffff !important;
          color: #000000 !important;
          box-shadow: 0 0 30px rgba(255,255,255,0.2);
        }
        @media (max-width: 1024px) {
          .process-roadmap {
            display: flex;
            flex-direction: column;
            gap: 28px;
            min-height: 0;
            padding: 18px 0 18px 72px;
          }
          .process-roadmap-route {
            left: 0;
            width: 54px;
          }
          .process-roadmap-card {
            position: relative;
            left: auto;
            top: auto;
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          .process-roadmap {
            gap: 24px;
            padding-left: 58px;
          }
          .process-roadmap-card {
            min-height: 0;
            padding: 28px 22px;
            gap: 16px;
          }
          .process-roadmap-card[data-map="true"] {
            min-height: 260px;
          }
          .process-roadmap-title {
            font-size: 28px !important;
            max-width: 100%;
          }
        }
        @media (max-width: 430px) {
          .process-roadmap-route {
            width: 44px;
          }
          .process-roadmap-card {
            padding: 24px 18px;
          }
          .process-roadmap-title {
            font-size: 24px !important;
          }
          .process-roadmap-body {
            font-size: 15px !important;
          }
        }
      `}</style>
    </>
  );
}

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section 
      style={{ 
        padding: "clamp(64px, 15vw, 160px) clamp(24px, 5vw, 48px) 80px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ position: "absolute", top: "8%", right: "-2%", opacity: 0.18, pointerEvents: "none", width: "58%" }}>
        <RemoteImageWithFallback
          alt={t("media.alt.process_schematic")}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwDqaWtK7x_AA48tLo-rcDOg5ypWd4RqrcyuOdbbHaxImISP6Ejodo9uj-oQ2Qz48JiFJSMSTUQRA2LCEQUxhwQRnj3o4QdHy1ooQxxVgbPE3OHm4-QUZ1npvu8cU-2eInEUiUbZfuTnbDpGMNWQtW53VZ-uKrzrminmq1wOF6Fq289aPK-p1YxsMKVfDA5lsdTDp9tjWnHCqPaqn2bcpH56dzDF0VL_FhJ4qfhtSaJEJIiWKSk7tx3wqiJaOsAB6tTSqvbe7SjGQ"
          wrapperStyle={{ width: "100%", aspectRatio: "16 / 10" }}
          imgStyle={{ objectFit: "cover" }}
          fallbackStyle={{
            background:
              "radial-gradient(circle at 22% 28%, rgba(255,87,8,0.2), transparent 28%), linear-gradient(140deg, rgba(24,24,27,0.96) 0%, rgba(10,10,10,0.98) 100%)",
          }}
        />
      </div>
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <span style={{ width: "48px", height: "1px", background: T.primaryCtn }} />
          <span style={{ fontSize: "11px", letterSpacing: "0.45em", color: T.primaryCtn, fontWeight: 700, textTransform: "uppercase" }}>
            {t("process.hero.badge")}
          </span>
        </div>
        
        <div className="process-hero-head-wrap">
          <h1 
            style={{ 
              fontSize: "clamp(48px, 9vw, 140px)", 
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
              fontWeight: 900, 
              lineHeight: 0.88, 
              letterSpacing: "-0.05em", 
              margin: 0,
              textTransform: "uppercase",
              color: T.onSurface
            }}
          >
            {t("process.hero.title1")}
            <br />
            <span style={{ color: T.primaryCtn, textShadow: "0 0 18px rgba(255, 87, 8, 0.35)" }}>{t("process.hero.title2")}</span>
          </h1>
        </div>

        <p 
          style={{ 
            fontSize: "clamp(18px, 2vw, 24px)", 
            color: "#a1a1aa", 
            maxWidth: "720px", 
            lineHeight: 1.6, 
            fontWeight: 300, 
            marginTop: "48px" 
          }}
        >
          {t("process.hero.description")}
        </p>

        <div style={{ marginTop: "48px", display: "flex", gap: "16px" }}>
          <div 
            style={{ 
              padding: "16px 24px", 
              background: "#121214", 
              borderLeft: `4px solid ${T.primaryCtn}`,
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <span style={{ fontSize: "10px", letterSpacing: "0.2em", color: T.primaryCtn, fontWeight: 700, textTransform: "uppercase" }}>
              {t("process.hero.status")}
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
              <span 
                style={{ 
                  fontSize: "24px", 
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
                  fontWeight: 700, 
                  color: "#fff" 
                }}
              >
                {t("process.hero.metric_value")}
              </span>
              <span style={{ fontSize: "10px", color: "#71717a", textTransform: "uppercase" }}>{t("process.hero.latency")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhasesSection() {
  const { t } = useLanguage();
  const routePath =
    "M 38 12 C 55 13, 73 18, 66 27 C 58 38, 43 37, 36 45 C 29 53, 39 61, 54 58 C 66 56, 68 51, 61 49 C 55 49, 54 60, 61 67 C 66 73, 58 79, 50 83";
  const checkpoints = [
    { number: 1, x: 38, y: 12 },
    { number: 2, x: 66, y: 27 },
    { number: 3, x: 36, y: 45 },
    { number: 4, x: 61, y: 49 },
    { number: 5, x: 50, y: 83 },
  ];
  const cardLayout = [
    { x: "0%", y: "0%", w: "32%" },
    { x: "70%", y: "16%", w: "30%" },
    { x: "0%", y: "34%", w: "32%" },
    { x: "66%", y: "49%", w: "31%" },
    { x: "14%", y: "88%", w: "58%" },
  ];
  const phases = [0, 1, 2, 3, 4].map((index) => ({
    index,
    title: t(`process.phase.${index}.title`),
    desc: t(`process.phase.${index}.desc`),
    layout: cardLayout[index],
  }));

  return (
    <section style={{ padding: "0 clamp(24px, 5vw, 48px) 120px" }}>
      <div
        className="process-roadmap"
        style={{
          maxWidth: "min(1480px, 100%)",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <svg className="process-roadmap-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            d={routePath}
            stroke="rgba(255, 87, 8, 0.14)"
            strokeWidth="18"
          />
          <path
            d={routePath}
            stroke="rgba(255, 87, 8, 0.64)"
            strokeWidth="2"
            strokeDasharray="6 7"
          />
          <path
            d={routePath}
            stroke="rgba(255, 181, 156, 0.22)"
            strokeWidth="1"
          />
          {checkpoints.map((checkpoint) => (
            <g key={checkpoint.number}>
              <circle
                className="process-roadmap-checkpoint"
                cx={checkpoint.x}
                cy={checkpoint.y}
                r="3.35"
              />
              <text
                className="process-roadmap-checkpoint-text"
                x={checkpoint.x}
                y={checkpoint.y}
              >
                {checkpoint.number}
              </text>
            </g>
          ))}
        </svg>
        {phases.map((item) => (
          <article
            key={item.title}
            className="process-roadmap-card"
            data-reveal
            data-map={item.index === 4 ? "true" : undefined}
            style={{
              "--card-x": item.layout.x,
              "--card-y": item.layout.y,
              "--card-w": item.layout.w,
              background:
                item.index % 2 === 0
                  ? "radial-gradient(circle at top left, rgba(255, 87, 8, 0.08), transparent 34%), linear-gradient(180deg, rgba(17, 17, 19, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%)"
                  : "radial-gradient(circle at top right, rgba(255, 87, 8, 0.08), transparent 34%), linear-gradient(180deg, rgba(24, 24, 27, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%)",
            } as React.CSSProperties}
          >
              {item.index === 4 ? (
                <div className="process-roadmap-card-map" aria-hidden="true">
                  <RemoteImageWithFallback
                    alt={t("media.alt.process_global_network")}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBDwdtymjG6llRGJo_C6l07pc3Z2GFdo3fx72bC397eyoWWphwKsbckntEEMh9Xdjuo0TKfZtMX5ISnvPTk5HIwGty4YNBWclqHUnaSDpybQkA7PXcZERgGqqU13_Rw0yXb3ZfTe5PiusJ7lPuYOptagu57XfhlIjUC-6vPzi34aGRBrNeMp6EViJzTolNQ_Oa9z2SeS80DoFhdXnH4Wj6dnk-BGxmGutKtd3di_e-6JRyc2L9djuAAk_Hx5AfEDr1u_urmVQ3_c4"
                    wrapperStyle={{ width: "100%", height: "100%" }}
                    imgStyle={{ objectFit: "cover" }}
                    fallbackStyle={{
                      background:
                        "radial-gradient(circle at 50% 22%, rgba(255,87,8,0.16), transparent 32%), linear-gradient(145deg, rgba(16,16,18,0.96) 0%, rgba(9,9,11,0.98) 100%)",
                    }}
                  />
                </div>
              ) : null}
              <h3
                className="process-roadmap-title"
                style={{
                  fontSize: "clamp(32px, 3.3vw, 46px)",
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  color: T.onSurface,
                }}
              >
                {item.title}
              </h3>
              <p
                className="process-roadmap-body"
                style={{
                  fontSize: "clamp(16px, 1.35vw, 19px)",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                {item.desc}
              </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useLanguage();
  return (
    <section 
      style={{ 
        padding: "120px clamp(24px, 5vw, 48px)", 
        background: T.surface, 
        borderTop: "1px solid rgba(92,64,55,0.1)" 
      }}
    >
      <div style={{ width: "100%", maxWidth: "min(1920px, 100%)", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 
          style={{ 
            fontSize: "clamp(48px, 10vw, 160px)", 
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
            fontWeight: 900, 
            letterSpacing: "-0.06em", 
            lineHeight: 0.85, 
            textAlign: "center", 
            margin: "0 0 64px 0",
            textTransform: "uppercase",
            color: T.onSurface
          }}
        >
          {t("process.cta.title1")} <span style={{ color: T.primaryCtn }}>{t("process.cta.title2")}</span>
        </h2>
        <Link 
          href="/contact" 
          className="process-cta-btn"
          style={{ 
            background: T.primaryCtn, 
            color: "#fff", 
            padding: "28px 64px", 
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
            fontWeight: 700, 
            fontSize: "18px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            textDecoration: "none",
            transition: "all 0.3s ease" 
          }}
        >
          {t("process.cta.button")}
        </Link>
        <p style={{ marginTop: "32px", fontSize: "12px", letterSpacing: "0.4em", color: "#71717a", textTransform: "uppercase", fontWeight: 700 }}>
          {t("process.cta.note")}
        </p>
      </div>
    </section>
  );
}

