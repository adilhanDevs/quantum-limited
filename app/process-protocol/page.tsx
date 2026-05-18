"use client";

import React from "react";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
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
        <Footer />
      </main>

      <style>{`
        .process-hero-head-wrap h1 {
          filter: drop-shadow(0 0 40px rgba(255, 87, 8, 0.15));
        }
        .process-phase-card {
          display: flex;
          flex-direction: column;
        }
        .process-phase-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 36px;
        }
        .process-phase-head .material-symbols-outlined {
          color: ${T.primaryCtn};
          opacity: 0.78;
          font-variation-settings: 'FILL' 1;
        }
        .process-phase-title {
          max-width: min(16ch, 100%);
          margin-bottom: 14px !important;
          line-height: 1.08 !important;
        }
        .process-phase-body {
          color: rgba(161, 161, 170, 0.9) !important;
          line-height: 1.75 !important;
        }
        .process-phase-artifact {
          margin-top: auto;
          background: rgba(9, 9, 9, 0.72);
          border: 1px solid rgba(92, 64, 55, 0.18);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
        }
        .process-phase-artifact-muted {
          opacity: 0.42 !important;
        }
        .process-phase-summary {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
        }
        .process-phase-summary-chip {
          border: 1px solid rgba(92,64,55,0.18);
          background: rgba(9, 9, 9, 0.72);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
          color: rgba(250,250,250,0.88);
        }
        .process-phase-list {
          gap: 14px !important;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .process-phase-list li span:last-child {
          color: rgba(250,250,250,0.9) !important;
        }
        .process-phase-code-pair {
          margin-top: auto;
        }
        @keyframes process-phase-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        [data-reveal] {
          animation: process-phase-fade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .process-phase-summary-chip {
          transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
        }
        .process-phase-summary-chip:hover {
          border-color: ${T.primaryCtn} !important;
          transform: translateY(-1px);
          background: rgba(12,12,12,0.92) !important;
        }
        .process-cta-btn:hover {
          background: #ffffff !important;
          color: #000000 !important;
          box-shadow: 0 0 30px rgba(255,255,255,0.2);
        }
        @media (max-width: 1024px) {
          .process-phases-grid { grid-template-columns: 1fr !important; }
          .process-phases-grid > div { grid-column: span 1 !important; }
        }
        @media (max-width: 768px) {
          .process-phase-card {
            padding: 36px 26px !important;
          }
          .process-phase-head {
            margin-bottom: 28px !important;
          }
          .process-phase-title {
            font-size: 28px !important;
            max-width: 100%;
          }
          .process-phase-body {
            margin-bottom: 24px !important;
          }
          .process-phase5-row { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
        }
        @media (max-width: 430px) {
          .process-phase-card {
            padding: 30px 20px !important;
          }
          .process-phase-title {
            font-size: 24px !important;
          }
          .process-phase-body {
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

function PhaseLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <span 
        style={{ 
          fontSize: "11px", 
          fontFamily: "monospace", 
          fontWeight: 700, 
          letterSpacing: "0.3em", 
          color: T.primaryCtn,
          background: "rgba(255, 87, 8, 0.08)",
          border: "1px solid rgba(255,87,8,0.18)",
          padding: "5px 10px"
        }}
      >
        {children}
      </span>
    </div>
  );
}

function PhasesSection() {
  const { t } = useLanguage();
  return (
    <section style={{ padding: "0 clamp(24px, 5vw, 48px) 120px" }}>
      <div 
        className="process-phases-grid"
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))", 
          gap: "1px", 
          background: "rgba(92,64,55,0.15)",
          border: "1px solid rgba(92,64,55,0.15)"
        }}
      >
        {/* Phase 01 */}
        <div 
          className="process-phase-card"
          style={{ 
            gridColumn: "span 4", 
            padding: "48px", 
            background: T.surface, 
            borderRight: "1px solid rgba(92,64,55,0.15)",
            borderBottom: "1px solid rgba(92,64,55,0.15)"
          }}
        >
          <div className="process-phase-head">
            <PhaseLabel>{t("services.protocol.0.phase")}</PhaseLabel>
            <span className="material-symbols-outlined">
              analytics
            </span>
          </div>
          <h3 
            className="process-phase-title"
            style={{ 
              fontSize: "34px", 
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
              fontWeight: 700, 
              textTransform: "uppercase", 
              marginBottom: "16px",
              letterSpacing: "-0.03em",
              color: T.onSurface
            }}
          >
            {t("process.phase.0.title")}
          </h3>
          <p className="process-phase-body" style={{ color: "#71717a", marginBottom: "28px", lineHeight: 1.7 }}>
            {t("process.phase.0.desc")}
          </p>
          <div className="process-phase-summary">
            {[t("common.status"), t("common.node"), t("process.hero.status")].map((item) => (
              <div
                key={item}
                className="process-phase-summary-chip"
                style={{
                  padding: "12px 14px",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Phase 02 */}
        <div 
          className="process-phase-card"
          style={{ 
            gridColumn: "span 8", 
            padding: "48px", 
            background: T.surfaceLow, 
            borderBottom: "1px solid rgba(92,64,55,0.15)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div className="process-phase-head" style={{ position: "relative", zIndex: 1 }}>
            <PhaseLabel>{t("services.protocol.1.phase")}</PhaseLabel>
            <span className="material-symbols-outlined">
              architecture
            </span>
          </div>
          <div style={{ maxWidth: "min(680px, 100%)", position: "relative", zIndex: 1 }}>
            <h3 
              className="process-phase-title"
              style={{ 
                fontSize: "34px", 
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
                fontWeight: 700, 
                textTransform: "uppercase", 
                marginBottom: "16px",
                letterSpacing: "-0.03em",
                color: T.onSurface
              }}
            >
              {t("process.phase.1.title")}
            </h3>
            <p className="process-phase-body" style={{ color: "#71717a", marginBottom: "28px", lineHeight: 1.7 }}>
              {t("process.phase.1.desc")}
            </p>
            <div className="process-phase-summary">
              {[t("services.protocol.1.title"), t("services.protocol.2.title")].map((item) => (
                <div
                  key={item}
                  className="process-phase-summary-chip"
                  style={{
                    padding: "12px 14px",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase 03 */}
        <div 
          className="process-phase-card"
          style={{ 
            gridColumn: "span 7", 
            padding: "48px", 
            background: T.surface, 
            borderRight: "1px solid rgba(92,64,55,0.15)",
            borderBottom: "1px solid rgba(92,64,55,0.15)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div className="process-phase-head">
            <PhaseLabel>{t("services.protocol.2.phase")}</PhaseLabel>
            <span className="material-symbols-outlined">
              terminal
            </span>
          </div>
          <h3 
            className="process-phase-title"
            style={{ 
              fontSize: "34px", 
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
              fontWeight: 700, 
              textTransform: "uppercase", 
              marginBottom: "16px",
              letterSpacing: "-0.03em",
              color: T.onSurface
            }}
            >
              {t("process.phase.2.title")}
          </h3>
          <p className="process-phase-body" style={{ color: "#71717a", marginBottom: "30px", lineHeight: 1.7 }}>
            {t("process.phase.2.desc")}
          </p>
          <div className="process-phase-summary">
            {[t("process.phase.2.title"), t("process.phase.3.title"), t("process.phase.4.title")].map((item) => (
              <div
                key={item}
                className="process-phase-summary-chip"
                style={{
                  padding: "12px 14px",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Phase 04 */}
        <div 
          className="process-phase-card"
          style={{ 
            gridColumn: "span 5", 
            padding: "48px", 
            background: T.surfaceHigh, 
            borderBottom: "1px solid rgba(92,64,55,0.15)"
          }}
        >
          <div className="process-phase-head">
            <PhaseLabel>{t("services.protocol.3.phase")}</PhaseLabel>
            <span className="material-symbols-outlined">
              monitoring
            </span>
          </div>
          <h3 
            className="process-phase-title"
            style={{ 
              fontSize: "34px", 
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
              fontWeight: 700, 
              textTransform: "uppercase", 
              marginBottom: "16px",
              letterSpacing: "-0.03em",
              color: T.onSurface
            }}
            >
              {t("process.phase.3.title")}
          </h3>
          <p className="process-phase-body" style={{ color: "#71717a", marginBottom: "28px", lineHeight: 1.7 }}>
            {t("process.phase.3.desc")}
          </p>
          <div 
            className="process-phase-artifact"
            style={{ 
              height: "160px", 
              display: "flex", 
              alignItems: "flex-end", 
              gap: "4px", 
              padding: "0 8px", 
              borderBottom: "1px solid rgba(92,64,55,0.3)",
              borderLeft: "1px solid rgba(92,64,55,0.3)",
              position: "relative" 
            }}
          >
            <div style={{ position: "absolute", left: "-44px", top: 0, fontSize: "10px", color: "#71717a", fontFamily: "monospace" }}>100%</div>
            <div style={{ position: "absolute", left: "-36px", bottom: 0, fontSize: "10px", color: "#71717a", fontFamily: "monospace" }}>0%</div>
            {[20, 35, 85, 45, 95, 65].map((v, i) => (
              <div 
                key={v + i} 
                style={{ 
                  width: "100%", 
                  height: `${v}%`, 
                  background: T.primaryCtn, 
                  opacity: v === 95 ? 1 : 0.2 + (i * 0.1),
                  boxShadow: v === 95 ? `0 0 10px ${T.primaryCtn}` : "none"
                }} 
              />
            ))}
          </div>
          <div style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: "10px", color: "#71717a", opacity: 0.86 }}>
            <span>{t("process.phase.3.monitor.0")}</span>
            <span>{t("process.phase.3.monitor.1")}</span>
            <span>{t("process.phase.3.monitor.2")}</span>
          </div>
        </div>

        {/* Phase 05 */}
        <div 
          className="process-phase-card"
          style={{ 
            gridColumn: "span 12", 
            padding: "48px", 
            background: "#09090b",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }}>
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
          <div className="process-phase5-row" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "48px" }}>
            <div style={{ maxWidth: "min(960px, 100%)" }}>
              <span style={{ display: "block", marginBottom: "28px" }}>
                <PhaseLabel>{t("services.protocol.4.phase")}</PhaseLabel>
              </span>
              <h3 
                className="process-phase-title"
                style={{ 
                  fontSize: "clamp(40px, 5vw, 56px)", 
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
                  fontWeight: 700, 
                  textTransform: "uppercase", 
                  marginBottom: "24px",
                  letterSpacing: "-0.04em",
                  color: T.onSurface
                }}
              >
                {t("process.phase.4.title")}
              </h3>
              <p className="process-phase-body" style={{ color: "#a1a1aa", fontSize: "18px", lineHeight: 1.7 }}>
                {t("process.phase.4.desc")}
              </p>
            </div>
            <div className="process-phase5-stats" style={{ display: "flex", gap: "48px", flexShrink: 0 }}>
              {[
                [t("process.phase.4.stat.0.value"), t("process.phase.4.stat.0.label")],
                [t("process.phase.4.stat.1.value"), t("process.phase.4.stat.1.label")],
              ].map(([value, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <span 
                    style={{ 
                      display: "block", 
                      fontSize: "40px", 
                      fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", 
                      fontWeight: 700, 
                      color: T.onSurface 
                    }}
                  >
                    {value}
                  </span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: T.primary, textTransform: "uppercase" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
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

function Footer() {
  const { t } = useLanguage();
  return (
    <footer 
      style={{ 
        padding: "80px clamp(24px, 5vw, 48px) 64px", 
        background: "#080809", 
        borderTop: "1px solid rgba(39,39,42,0.2)" 
      }}
    >
      <div style={{ maxWidth: "min(1920px, 100%)", margin: "0 auto" }}>
        <div 
          style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "64px clamp(24px, 4vw, 48px)", 
            gap: "48px" 
          }}
        >
          <div>
            <div 
              style={{ 
                fontSize: "18px", 
                fontWeight: 900, 
                color: "#fff", 
                letterSpacing: "0.2em", 
                marginBottom: "12px",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                textTransform: "uppercase" 
              }}
            >
              {t("process.footer.brand")}
            </div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#52525b", textTransform: "uppercase", fontWeight: 700, margin: 0 }}>
              {t("process.footer.copy")}
            </p>
          </div>
          
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
            {[t("process.footer.privacy"), t("process.footer.terms"), t("process.footer.network")].map(l => (
              <span
                key={l} 
                style={{ 
                  fontSize: "11px", 
                  letterSpacing: "0.15em", 
                  color: "rgba(161,161,170,0.78)", 
                  textTransform: "uppercase", 
                  fontWeight: 600,
                }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
