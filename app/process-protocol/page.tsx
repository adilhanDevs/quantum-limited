"use client";

import React from "react";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
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
      <main style={{ position: "relative", background: T.surface, paddingTop: "78px" }}>
        <HeroSection />
        <PhasesSection />
        <CTASection />
        <Footer />
      </main>

      <style>{`
        .process-hero-head-wrap h1 {
          filter: drop-shadow(0 0 40px rgba(255, 87, 8, 0.15));
        }
        @keyframes process-phase-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        [data-reveal] {
          animation: process-phase-fade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .process-phase-code-pair > div {
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .process-phase-code-pair > div:hover {
          border-color: ${T.primaryCtn} !important;
          transform: translateY(-2px);
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
          .process-phase5-row { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
          .process-phase-code-pair { grid-template-columns: 1fr !important; }
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
      <div style={{ position: "absolute", top: "10%", right: "-5%", opacity: 0.15, pointerEvents: "none", width: "60%" }}>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnI1y70S-9P0F6jAosJ4-6BOfQO7-59qC3V-6z2L7Xq99EwA49hZ9eY5vV9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5v9Y-5W5" 
          alt="Technical blueprint"
          style={{ width: "100%", height: "auto" }}
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
                142.5ms
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
          background: "rgba(255, 87, 8, 0.1)",
          padding: "4px 10px"
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
          style={{ 
            gridColumn: "span 4", 
            padding: "48px", 
            background: T.surface, 
            borderRight: "1px solid rgba(92,64,55,0.15)",
            borderBottom: "1px solid rgba(92,64,55,0.15)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "64px" }}>
            <PhaseLabel>PHASE_01</PhaseLabel>
            <span className="material-symbols-outlined" style={{ color: T.primaryCtn, fontVariationSettings: "'FILL' 1" }}>
              analytics
            </span>
          </div>
          <h3 
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
          <p style={{ color: "#71717a", marginBottom: "32px", lineHeight: 1.7 }}>
            {t("process.phase.0.desc")}
          </p>
          <div 
            style={{ 
              background: "#090909", 
              padding: "24px", 
              fontFamily: "monospace", 
              fontSize: "12px", 
              color: "rgba(255,181,156,0.7)", 
              lineHeight: 1.6 
            }}
          >
            <p style={{ marginBottom: "4px", color: T.primary }}>{t("process.phase.0.log.0")}</p>
            <p style={{ marginBottom: "4px" }}>{t("process.phase.0.log.1")}</p>
            <p style={{ marginBottom: "4px" }}>{t("process.phase.0.log.2")}</p>
            <p style={{ color: T.primaryCtn }}>{t("process.phase.0.log.3")}</p>
          </div>
        </div>

        {/* Phase 02 */}
        <div 
          style={{ 
            gridColumn: "span 8", 
            padding: "48px", 
            background: T.surfaceLow, 
            borderBottom: "1px solid rgba(92,64,55,0.15)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "absolute", right: 0, bottom: 0, opacity: 0.1, pointerEvents: "none", width: "50%" }}>
            <img 
              alt="Schematic" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwDqaWtK7x_AA48tLo-rcDOg5ypWd4RqrcyuOdbbHaxImISP6Ejodo9uj-oQ2Qz48JiFJSMSTUQRA2LCEQUxhwQRnj3o4QdHy1ooQxxVgbPE3OHm4-QUZ1npvu8cU-2eInEUiUbZfuTnbDpGMNWQtW53VZ-uKrzrminmq1wOF6Fq289aPK-p1YxsMKVfDA5lsdTDp9tjWnHCqPaqn2bcpH56dzDF0VL_FhJ4qfhtSaJEJIiWKSk7tx3wqiJaOsAB6tTSqvbe7SjGQ" 
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "64px", position: "relative", zIndex: 1 }}>
            <PhaseLabel>PHASE_02</PhaseLabel>
            <span className="material-symbols-outlined" style={{ color: T.primaryCtn, fontVariationSettings: "'FILL' 1" }}>
              architecture
            </span>
          </div>
          <div style={{ maxWidth: "min(680px, 100%)", position: "relative", zIndex: 1 }}>
            <h3 
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
            <p style={{ color: "#71717a", marginBottom: "32px", lineHeight: 1.7 }}>
              {t("process.phase.1.desc")}
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", fontFamily: "monospace", fontSize: "14px" }}>
              {[t("process.phase.1.list.0"), t("process.phase.1.list.1"), t("process.phase.1.list.2")].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "6px", height: "6px", background: T.primaryCtn }} />
                  <span style={{ color: T.onSurface }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phase 03 */}
        <div 
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "64px" }}>
            <PhaseLabel>PHASE_03</PhaseLabel>
            <span className="material-symbols-outlined" style={{ color: T.primaryCtn, fontVariationSettings: "'FILL' 1" }}>
              terminal
            </span>
          </div>
          <h3 
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
          <p style={{ color: "#71717a", marginBottom: "48px", lineHeight: 1.7 }}>
            {t("process.phase.2.desc")}
          </p>
          <div className="process-phase-code-pair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div 
              style={{ 
                background: "rgba(9,9,9,0.8)", 
                padding: "24px", 
                fontFamily: "monospace", 
                fontSize: "12px", 
                border: "1px solid rgba(92,64,55,0.2)" 
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px solid rgba(92,64,55,0.1)", paddingBottom: "8px" }}>
                <span style={{ color: "#71717a" }}>{t("process.phase.2.stream.a.name")}</span>
                <span style={{ color: T.primaryCtn }}>{t("process.phase.2.stream.a.status")}</span>
              </div>
              <p style={{ color: "#a1a1aa" }}>const kernel = new QuantumNode();</p>
              <p style={{ color: "#a1a1aa" }}>kernel.initialize({"{"}</p>
              <p style={{ color: "rgba(255,181,156,0.6)", paddingLeft: "16px" }}>mode: &apos;OVERCLOCK&apos;,</p>
              <p style={{ color: "rgba(255,181,156,0.6)", paddingLeft: "16px" }}>safety: false</p>
              <p style={{ color: "#a1a1aa" }}>{"});"}</p>
            </div>
            <div 
              style={{ 
                background: "rgba(9,9,9,0.8)", 
                padding: "24px", 
                fontFamily: "monospace", 
                fontSize: "12px", 
                border: "1px solid rgba(92,64,55,0.2)",
                opacity: 0.5 
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px solid rgba(92,64,55,0.1)", paddingBottom: "8px" }}>
                <span style={{ color: "#71717a" }}>{t("process.phase.2.stream.b.name")}</span>
                <span style={{ color: "#71717a" }}>{t("process.phase.2.stream.b.status")}</span>
              </div>
              <p style={{ color: "#71717a" }}>await stream.sync(kernel);</p>
              <p style={{ color: "#71717a" }}>deploy.now();</p>
            </div>
          </div>
        </div>

        {/* Phase 04 */}
        <div 
          style={{ 
            gridColumn: "span 5", 
            padding: "48px", 
            background: T.surfaceHigh, 
            borderBottom: "1px solid rgba(92,64,55,0.15)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "64px" }}>
            <PhaseLabel>PHASE_04</PhaseLabel>
            <span className="material-symbols-outlined" style={{ color: T.primaryCtn, fontVariationSettings: "'FILL' 1" }}>
              monitoring
            </span>
          </div>
          <h3 
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
          <p style={{ color: "#71717a", marginBottom: "32px", lineHeight: 1.7 }}>
            {t("process.phase.3.desc")}
          </p>
          <div 
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
          <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: "10px", color: "#71717a" }}>
            <span>{t("process.phase.3.monitor.0")}</span>
            <span>{t("process.phase.3.monitor.1")}</span>
            <span>{t("process.phase.3.monitor.2")}</span>
          </div>
        </div>

        {/* Phase 05 */}
        <div 
          style={{ 
            gridColumn: "span 12", 
            padding: "48px", 
            background: "#09090b",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }}>
            <img 
              alt="Global network" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBDwdtymjG6llRGJo_C6l07pc3Z2GFdo3fx72bC397eyoWWphwKsbckntEEMh9Xdjuo0TKfZtMX5ISnvPTk5HIwGty4YNBWclqHUnaSDpybQkA7PXcZERgGqqU13_Rw0yXb3ZfTe5PiusJ7lPuYOptagu57XfhlIjUC-6vPzi34aGRBrNeMp6EViJzTolNQ_Oa9z2SeS80DoFhdXnH4Wj6dnk-BGxmGutKtd3di_e-6JRyc2L9djuAAk_Hx5AfEDr1u_urmVQ3_c4" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="process-phase5-row" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "48px" }}>
            <div style={{ maxWidth: "min(960px, 100%)" }}>
              <span style={{ display: "block", marginBottom: "48px" }}>
                <PhaseLabel>{t("services.protocol.4.phase") || "PHASE_05"}</PhaseLabel>
              </span>
              <h3 
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
              <p style={{ color: "#a1a1aa", fontSize: "18px", lineHeight: 1.7 }}>
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
              <a 
                key={l} 
                href="#" 
                style={{ 
                  fontSize: "11px", 
                  letterSpacing: "0.15em", 
                  color: "#a1a1aa", 
                  textDecoration: "none", 
                  textTransform: "uppercase", 
                  fontWeight: 600 
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
