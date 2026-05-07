"use client";

import Link from "next/link";
import { RemoteImageWithFallback } from "../components/RemoteImageWithFallback";
import { SiteHeader } from "../components/SiteHeader";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  surface: "#131313",
  surfaceLow: "#1b1b1b",
  surfaceContainer: "#1f1f1f",
  surfaceHigh: "#2a2a2a",
  surfaceHighest: "#353535",
  onSurface: "#e2e2e2",
  onSurfaceVar: "#a1a1aa",
  primary: "#ffb59c",
  primaryCtn: "#ff5500",
  onPrimary: "#511500",
  outline: "#ac897e",
  outlineVar: "#5c4037",
};

export default function ClientsPage() {
  return (
    <>
      <SiteHeader active="clients" />
      <main style={{ position: "relative", background: T.surface, paddingTop: "var(--site-header-offset, 78px)" }}>
        <HeroSection />
        <MarqueeSection />
        <MetricsSection />
        <CaseStudySection />
        <TransmissionSection />
      </main>
      <Footer />

      <style>{`
        .clients-hero-grid {
          background-image: radial-gradient(circle, rgba(92, 64, 55, 0.12) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes clients-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .clients-marquee-track {
          overflow: hidden;
          width: 100%;
        }
        .clients-marquee-inner {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: clients-marquee 32s linear infinite;
        }
        .clients-metric-card {
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .clients-metric-card:hover {
          transform: translateY(-2px);
        }
        .clients-metric-deco {
          transition: filter 0.55s ease;
        }
        .clients-metric-card:hover .clients-metric-deco {
          filter: grayscale(0%) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-metric-card {
            transition: none !important;
          }
          .clients-metric-card:hover {
            transform: none !important;
          }
        }
        .clients-case-study:hover .clients-case-study-image img {
          filter: grayscale(0%) !important;
        }
        .clients-transmission-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid rgba(92,64,55,0.24);
          background: rgba(255,255,255,0.02);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
        }
        .clients-transmission-status::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #34d399;
          box-shadow: 0 0 10px rgba(52,211,153,0.42);
          flex-shrink: 0;
        }
        .clients-tm-grid {
          background: rgba(92,64,55,0.18);
        }
        .clients-tm-cell:first-child {
          border-right: 1px solid rgba(92,64,55,0.22);
        }
        .clients-tm-cell {
          position: relative;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .clients-tm-cell:hover {
          background: #1f1a18 !important;
          transform: translateY(-1px);
        }
        .clients-tm-cell::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,85,0,0.42), rgba(255,85,0,0));
          opacity: 0.65;
        }
        .clients-tm-trace {
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(92,64,55,0.18);
        }
        .clients-tm-quote {
          position: relative;
          padding-left: 22px;
        }
        .clients-tm-quote::before {
          content: "“";
          position: absolute;
          left: 0;
          top: -8px;
          font-family: Georgia, "Times New Roman", ui-serif, serif;
          font-size: 36px;
          color: rgba(179,123,93,0.5);
          line-height: 1;
        }
        .clients-tm-meta {
          padding-top: 18px;
          border-top: 1px solid rgba(92,64,55,0.18);
        }
        .clients-tm-quote::before {
          content: "\\201C";
        }
        .clients-tm-avatar {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
        }
        .clients-case-study-cta:hover {
          opacity: 0.85;
        }
        .clients-footer-link:hover {
          color: #a3a3a3 !important;
        }
        @media (max-width: 900px) {
          .clients-transmission-head {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .clients-transmission-head > div:last-child {
            align-self: flex-start !important;
          }
          .clients-hero-stats {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .clients-hero-stats > div[aria-hidden="true"] {
            display: none !important;
          }
          .clients-metrics-grid {
            grid-template-columns: 1fr !important;
          }
          .clients-case-study {
            grid-template-columns: 1fr !important;
          }
          .clients-tm-cell:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(92,64,55,0.22) !important;
          }
          .clients-tm-grid {
            grid-template-columns: 1fr !important;
          }
          .clients-footer-grid {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 40px !important;
          }
          .clients-footer-status {
            width: 100% !important;
            min-width: 0 !important;
          }
          .clients-transmission-status {
            align-self: flex-start !important;
          }
        }
        @media (max-width: 600px) {
          .clients-tm-cell {
            padding: 32px 22px !important;
          }
        }
        @media (max-width: 430px) {
          .clients-tm-quote {
            padding-left: 18px !important;
          }
          .clients-tm-quote::before {
            font-size: 30px !important;
            top: -6px !important;
          }
          .clients-tm-meta {
            gap: 12px !important;
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
      data-reveal
      className="clients-hero-grid"
      style={{
        position: "relative",
        minHeight: "min(921px, 92vh)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(88px, 18vw, 120px) clamp(24px, 3.5vw, 40px) 0",
        overflow: "hidden",
        background: T.surface,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "50%",
          height: "100%",
          background: `linear-gradient(270deg, rgba(255,85,0,0.12) 0%, transparent 100%)`,
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "min(1320px, 100%)", width: "100%", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <span style={{ width: "48px", height: "1px", background: T.primary }} />
          <span
            style={{
              color: T.primaryCtn,
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "13px",
              letterSpacing: "0.3em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {t("clients.hero.badge")}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(36px, 6.2vw, 88px)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            marginBottom: "40px",
            color: T.onSurface,
            textTransform: "uppercase",
            maxWidth: "min(1100px, 100%)",
          }}
        >
          {t("clients.hero.title1")}{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${T.primary} 0%, ${T.primaryCtn} 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t("clients.hero.title2")}
          </span>{" "}
          {t("clients.hero.title3")}
        </h1>

        <p
          style={{
            color: T.onSurfaceVar,
            fontSize: "clamp(17px, 2vw, 20px)",
            maxWidth: "640px",
            lineHeight: 1.65,
            fontWeight: 300,
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            marginBottom: "64px",
          }}
        >
          {t("clients.hero.description")}
        </p>
      </div>

      <div
        style={{
          marginTop: "auto",
          borderTop: `1px solid rgba(92,64,55,0.35)`,
          padding: "48px clamp(24px, 3.5vw, 40px) 56px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "min(1320px, 100%)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: "48px",
          }}
          className="clients-hero-stats"
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "clamp(40px, 5.2vw, 64px)",
                fontWeight: 900,
                color: T.primaryCtn,
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              {t("clients.hero.metric1.value")}
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              {t("clients.hero.metric1")}
            </div>
          </div>

          <div
            style={{
              width: "1px",
              height: "72px",
              background: "rgba(92,64,55,0.45)",
            }}
            aria-hidden={true}
          />

          <div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "clamp(40px, 5.2vw, 64px)",
                fontWeight: 900,
                color: T.primaryCtn,
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              {t("clients.hero.metric2.value")}
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              {t("clients.hero.metric2")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const marqueeItems = [
  "INTERNAL DASHBOARDS",
  "BOOKING SYSTEMS",
  "CRM INTEGRATIONS",
  "CUSTOMER PORTALS",
  "INTERNAL DASHBOARDS",
  "BOOKING SYSTEMS",
  "CRM INTEGRATIONS",
  "CUSTOMER PORTALS",
];

function MarqueeSection() {
  return (
    <section
      data-reveal
      style={{
        padding: "28px 0",
        background: T.surfaceLow,
        borderTop: `1px solid rgba(92,64,55,0.12)`,
        borderBottom: `1px solid rgba(92,64,55,0.12)`,
        overflow: "hidden",
      }}
    >
      <div className="clients-marquee-track">
        <div className="clients-marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((label, i) => (
            <span
              key={`${label}-${i}`}
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 900,
                fontStyle: "italic",
                textTransform: "uppercase",
                color: "rgba(226,226,226,0.14)",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCardUptime() {
  const { t } = useLanguage();
  return (
    <div
      className="clients-metric-card"
      style={{
        background: T.surfaceLow,
        padding: "40px 36px 36px",
        position: "relative",
        overflow: "hidden",
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="clients-metric-deco"
        aria-hidden
        style={{
          position: "absolute",
          right: "12px",
          top: "20px",
          opacity: 0.22,
          filter: "grayscale(100%)",
          transition: "filter 0.45s ease",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" style={{ color: T.surfaceHighest }}>
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-2z" />
        </svg>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "clamp(34px, 4.25vw, 48px)",
          fontWeight: 900,
          color: T.primary,
          lineHeight: 1,
          marginBottom: "12px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {t("clients.metric.uptime.value")}
      </h3>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#ffffff",
          marginBottom: "16px",
        }}
      >
        {t("clients.metric.uptime.title")}
      </div>
      <p
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "14px",
          color: T.onSurfaceVar,
          lineHeight: 1.65,
          maxWidth: "320px",
          flex: 1,
        }}
      >
        {t("clients.metric.uptime.desc")}
      </p>
      <div
        style={{
          marginTop: "24px",
          height: "3px",
          width: "100%",
          background: T.primary,
          opacity: 0.85,
        }}
      />
    </div>
  );
}

function MetricCardDeployments() {
  const { t } = useLanguage();
  const bars = [0.35, 0.55, 0.25, 0.7, 0.4, 0.9, 0.3, 0.5];
  return (
    <div
      className="clients-metric-card"
      style={{
        background: T.surfaceHighest,
        padding: "40px 36px 36px",
        position: "relative",
        overflow: "hidden",
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "clamp(34px, 4.25vw, 48px)",
          fontWeight: 900,
          color: T.primary,
          lineHeight: 1,
          marginBottom: "12px",
        }}
      >
        {t("clients.metric.deployments.value")}
      </h3>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#ffffff",
          marginBottom: "16px",
        }}
      >
        {t("clients.metric.deployments.title")}
      </div>
      <p
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "14px",
          color: T.onSurfaceVar,
          lineHeight: 1.65,
          maxWidth: "320px",
          flex: 1,
        }}
      >
        {t("clients.metric.deployments.desc")}
      </p>
      <div
        className="clients-barcode clients-metric-deco"
        style={{
          marginTop: "28px",
          display: "flex",
          alignItems: "flex-end",
          gap: "4px",
          height: "48px",
          filter: "grayscale(100%)",
          transition: "filter 0.45s ease",
        }}
        aria-hidden
      >
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${Math.round(h * 48)}px`,
              background: i === 5 ? T.primary : `rgba(226,226,226,${0.15 + h * 0.35})`,
              minWidth: "4px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MetricCardLatency() {
  const { t } = useLanguage();
  return (
    <div
      className="clients-metric-card"
      style={{
        background: T.surfaceLow,
        padding: "40px 36px 36px",
        position: "relative",
        overflow: "hidden",
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: "12px" }}>
        <span
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(34px, 4.25vw, 48px)",
            fontWeight: 900,
            color: T.primary,
            lineHeight: 0.9,
          }}
        >
          {t("clients.metric.latency.value")}
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "18px",
            fontWeight: 700,
            color: T.primary,
            marginTop: "6px",
          }}
        >
          {t("clients.metric.latency.unit")}
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#ffffff",
          marginBottom: "16px",
        }}
      >
        {t("clients.metric.latency.title")}
      </div>
      <p
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "14px",
          color: T.onSurfaceVar,
          lineHeight: 1.65,
          maxWidth: "320px",
          flex: 1,
        }}
      >
        {t("clients.metric.latency.desc")}
      </p>
      <div
        className="clients-latency-bars clients-metric-deco"
        style={{
          marginTop: "28px",
          display: "flex",
          alignItems: "flex-end",
          gap: "8px",
          height: "56px",
          filter: "grayscale(100%)",
          transition: "filter 0.45s ease",
        }}
        aria-hidden
      >
        {[18, 27, 40, 31].map((h, i) => (
          <div
            key={i}
            style={{
              width: "14px",
              height: `${h}px`,
              background: i === 2 ? T.primary : "rgba(226,226,226,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MetricsSection() {
  return (
    <section data-reveal style={{ padding: "96px clamp(24px, 3.5vw, 40px)", background: T.surface }}>
      <div
        style={{
          maxWidth: "min(1320px, 100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "1px",
          background: "rgba(92,64,55,0.25)",
        }}
        className="clients-metrics-grid"
      >
        <MetricCardUptime />
        <MetricCardDeployments />
        <MetricCardLatency />
      </div>
    </section>
  );
}

const CASE_STUDY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDURAjrXGd3lzhq1hXzfDsW8R_JKSRWPW8ejJuS02w4VxFW0ILRIhUpMGNqm19vTUDlax_Ur983qXC7rqhw6jgU_lCLKRoTjvcuROYlDxVMUIMDL17GkbkODPOdjfoDrqlQSqfqGy37M-ZM_QwnSLaukt5wTD3KqkNCKDsAqW-rwXpZBO-SwV2bB7qcIpCTCJ9FwCer5Am533lUE2xqQ8qMCvpSduZ3sG5aveo2bFcRizPcnUUK17iUFd9olw_ONLqGaJcYWFpa4Cw";

const COPPER = "#b37b5d";

function CaseStudySection() {
  const { t } = useLanguage();
  return (
    <section data-reveal style={{ padding: "0 clamp(24px, 3.5vw, 40px) 96px", background: T.surface }}>
      <div
        className="clients-case-study"
        style={{
          maxWidth: "min(1320px, 100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "stretch",
          border: `1px solid rgba(92,64,55,0.25)`,
        }}
      >
        <div
          className="clients-case-study-image"
          style={{
            position: "relative",
            minHeight: "min(420px, 55vw)",
            overflow: "hidden",
            background: "#0a0a0a",
          }}
        >
          <RemoteImageWithFallback
            src={CASE_STUDY_IMAGE}
            alt={t("media.alt.case_study_corridor")}
            wrapperStyle={{ width: "100%", height: "100%" }}
            imgStyle={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "grayscale(100%)",
              transition: "filter 0.55s ease",
            }}
            fallbackStyle={{
              background:
                "radial-gradient(circle at 24% 18%, rgba(255,85,0,0.18), transparent 30%), linear-gradient(145deg, rgba(22,22,22,0.98) 0%, rgba(10,10,10,0.98) 100%)",
            }}
          />
        </div>

        <div
          style={{
            background: T.surfaceContainer,
            padding: "clamp(36px, 5vw, 56px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: T.primary,
              textTransform: "uppercase",
              marginBottom: "20px",
              paddingBottom: "10px",
              borderBottom: `1px solid ${T.primary}`,
              alignSelf: "flex-start",
            }}
          >
            {t("clients.case_study.badge")}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(22px, 2.65vw, 30px)",
              fontWeight: 700,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.06,
              marginBottom: "24px",
              whiteSpace: "pre-line",
            }}
          >
            {t("clients.case_study.title")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "15px",
              color: "#e8e8e8",
              lineHeight: 1.75,
              marginBottom: "32px",
              maxWidth: "42ch",
            }}
          >
            {t("clients.case_study.desc")}
          </p>
          <Link
            href="/contact"
            className="clients-case-study-cta"
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: T.primary,
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "opacity 0.2s ease",
            }}
          >
            {t("clients.case_study.cta")}
            <span aria-hidden style={{ fontSize: "16px" }}>
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TransmissionSection() {
  const { t } = useLanguage();
  return (
    <section data-reveal style={{ padding: "96px clamp(24px, 3.5vw, 40px)", background: T.surface, borderTop: `1px solid rgba(92,64,55,0.12)` }}>
      <div style={{ maxWidth: "min(1320px, 100%)", margin: "0 auto" }}>
        <div
          className="clients-transmission-head"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                marginBottom: "10px",
                lineHeight: 1.05,
              }}
            >
              {t("clients.transmission.title")}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: COPPER,
                textTransform: "uppercase",
              }}
            >
              {t("clients.transmission.subtitle")}
            </p>
          </div>
          <div
            className="clients-transmission-status"
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              color: "rgba(161,161,170,0.65)",
              letterSpacing: "0.1em",
              alignSelf: "flex-end",
              textTransform: "uppercase",
            }}
          >
            {t("clients.transmission.status")}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: `1px solid rgba(92,64,55,0.2)`,
          }}
          className="clients-tm-grid"
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              className="clients-tm-cell"
              style={{
                background: T.surfaceLow,
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div className="clients-tm-trace" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: COPPER,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    fontSize: "10px",
                    color: "rgba(161,161,170,0.75)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {t(`clients.testimonial.${i}.trace`)}
                </span>
              </div>
              <blockquote
                className="clients-tm-quote"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", ui-serif, serif',
                  fontSize: "clamp(18px, 2vw, 20px)",
                  fontStyle: "italic",
                  color: "rgba(232,232,232,0.96)",
                  lineHeight: 1.75,
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                &ldquo;{t(`clients.testimonial.${i}.quote`)}&rdquo;
              </blockquote>
              <div className="clients-tm-meta" style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "auto" }}>
                <div
                  className="clients-tm-avatar"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#0c0c0c",
                    border: `1px solid rgba(179,123,93,0.35)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "22px", color: COPPER }}>
                    person
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {t(`clients.testimonial.${i}.role`)}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      color: COPPER,
                      textTransform: "uppercase",
                    }}
                  >
                    {t(`clients.testimonial.${i}.org`)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FOOTER_BG = "#0a0a0a";
const FOOTER_MUTED = "#666666";
const FOOTER_STATUS_BG = "#1e1e1e";
const FOOTER_LABEL_PEACH = "#e9c4b1";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      data-reveal
      style={{
        background: FOOTER_BG,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "72px clamp(24px, 3.5vw, 40px) 56px",
      }}
    >
      <div
        style={{
          maxWidth: "min(1320px, 100%)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "64px",
          flexWrap: "wrap",
        }}
        className="clients-footer-grid"
      >
        <div style={{ flex: "1 1 280px", minWidth: "min(100%, 280px)" }}>
          <div
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "18px",
              fontWeight: 700,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "32px",
            }}
          >
            {t("clients.footer.brand")}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px 48px",
              marginBottom: "18px",
            }}
          >
            {[t("clients.footer.privacy"), t("clients.footer.terms"), t("clients.footer.offices")].map((l) => (
              <span
                key={l}
                style={{
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(102,102,102,0.88)",
                }}
              >
                {l}
              </span>
            ))}
          </div>

          <div style={{ marginBottom: "36px" }}>
            <Link
              href="/services"
              className="clients-footer-link"
              style={{
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: FOOTER_MUTED,
                textDecoration: "none",
              }}
            >
              {t("clients.footer.specs")}
            </Link>
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "10px",
              color: FOOTER_MUTED,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              lineHeight: 1.6,
            }}
          >
            {t("clients.footer.copy")}
          </p>
        </div>

        <div
          style={{
            background: FOOTER_STATUS_BG,
            padding: "36px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px 48px",
            alignContent: "center",
            minWidth: "min(100%, 380px)",
            flex: "0 1 auto",
          }}
          className="clients-footer-status"
        >
          <div>
            <div
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                color: FOOTER_LABEL_PEACH,
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              {t("clients.footer.hq_label")}
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontSize: "15px",
                fontWeight: 500,
                color: "#ffffff",
                lineHeight: 1.55,
                letterSpacing: "0.02em",
                whiteSpace: "pre-line",
              }}
            >
              {t("clients.footer.hq_value")}
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                color: FOOTER_LABEL_PEACH,
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              {t("clients.footer.status_label")}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#34d399",
                  flexShrink: 0,
                  boxShadow: "0 0 8px rgba(52,211,153,0.5)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#ffffff",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {t("clients.footer.status_value")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
