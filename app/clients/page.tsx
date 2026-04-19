import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Quantum Limited | Clients",
  description:
    "Trusted by the architects of the future. Enterprise nodes, global regions, and encrypted client feedback.",
};

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

function HeroSection() {
  return (
    <section
      className="clients-hero-grid"
      style={{
        position: "relative",
        minHeight: "min(921px, 92vh)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 80px 0",
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

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
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
            Global Network V.04
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(40px, 7vw, 96px)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            marginBottom: "40px",
            color: T.onSurface,
            textTransform: "uppercase",
            maxWidth: "1100px",
          }}
        >
          Trusted By The{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${T.primary} 0%, ${T.primaryCtn} 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Architects
          </span>{" "}
          Of The Future
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
          We provide the substrate for the next generation of industrial automation and cyber-physical systems.
          Precision engineering meets quantum-ready security.
        </p>
      </div>

      <div
        style={{
          marginTop: "auto",
          borderTop: `1px solid rgba(92,64,55,0.35)`,
          padding: "48px 80px 56px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
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
                fontSize: "clamp(48px, 6vw, 72px)",
                fontWeight: 900,
                color: T.primaryCtn,
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              400+
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
              Enterprise Nodes
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
                fontSize: "clamp(48px, 6vw, 72px)",
                fontWeight: 900,
                color: T.primaryCtn,
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              12
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
              Global Regions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const marqueeItems = [
  "APEX_SYSTEMS",
  "VOID.LOGIC",
  "TECH_CORP",
  "CYBER-DYNAMICS",
  "APEX_SYSTEMS",
  "VOID.LOGIC",
  "TECH_CORP",
  "CYBER-DYNAMICS",
];

function MarqueeSection() {
  return (
    <section
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
                fontSize: "clamp(22px, 3.5vw, 32px)",
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
          fontSize: "clamp(40px, 5vw, 56px)",
          fontWeight: 900,
          color: T.primary,
          lineHeight: 1,
          marginBottom: "12px",
          position: "relative",
          zIndex: 1,
        }}
      >
        99.9%
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
        System Uptime
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
        Continuous delivery metrics sustained across high-load global cluster deployments since inception.
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
          fontSize: "clamp(40px, 5vw, 56px)",
          fontWeight: 900,
          color: T.primary,
          lineHeight: 1,
          marginBottom: "12px",
        }}
      >
        100K+
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
        Deployments
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
        Automated provisioning and scaling for micro-infrastructure units across planetary networks.
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
            fontSize: "clamp(40px, 5vw, 56px)",
            fontWeight: 900,
            color: T.primary,
            lineHeight: 0.9,
          }}
        >
          2.4
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
          MS
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
        Avg Latency
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
        Optimized edge processing ensuring near-instantaneous command execution for critical robotics.
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
    <section style={{ padding: "96px 32px", background: T.surface }}>
      <div
        style={{
          maxWidth: "1200px",
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

/** Copper accent for transmission / terminal UI (closer to reference). */
const COPPER = "#b37b5d";

function CaseStudySection() {
  return (
    <section style={{ padding: "0 32px 96px", background: T.surface }}>
      <div
        className="clients-case-study"
        style={{
          maxWidth: "1200px",
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CASE_STUDY_IMAGE}
            alt="Data center corridor — case study"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              filter: "grayscale(100%)",
              transition: "filter 0.55s ease",
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
            Case Study: Cyber-Dynamics
          </div>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 700,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.06,
              marginBottom: "24px",
            }}
          >
            Scaling The Neural
            <br />
            Grid For
            <br />
            Autonomous Cities
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
            Discover how Quantum Limited architected a zero-trust network fabric that supports over 1.2 million
            concurrent IoT nodes with sub-millisecond jitter.
          </p>
          <Link
            href="#"
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
            Read Specifications
            <span aria-hidden style={{ fontSize: "16px" }}>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    trace: "TRACE_ID: 9822-TECH",
    quote:
      "The integration of the Quantum fabric into our global operations was seamless. Their architectural precision is unmatched in the industry today.",
    role: "Chief Architect",
    org: "TECH_CORP GLOBAL",
  },
  {
    trace: "TRACE_ID: 1109-VOID",
    quote:
      "Quantum Limited doesn't just build software; they engineer digital environments that are resilient enough for high-stakes autonomous logic.",
    role: "System Director",
    org: "VOID.LOGIC",
  },
];

function TransmissionSection() {
  return (
    <section style={{ padding: "96px 32px", background: T.surface, borderTop: `1px solid rgba(92,64,55,0.12)` }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
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
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                marginBottom: "10px",
                lineHeight: 1.05,
              }}
            >
              Transmission_Logs
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
              Encrypted Feedback Reception [Secure]
            </p>
          </div>
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              color: "rgba(161,161,170,0.65)",
              letterSpacing: "0.1em",
              alignSelf: "flex-end",
            }}
          >
            0X4F92A // PKT_RECV // 200_OK
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
          {testimonials.map((t) => (
            <div
              key={t.trace}
              className="clients-tm-cell"
              style={{
                background: T.surfaceLow,
                padding: "44px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                  {t.trace}
                </span>
              </div>
              <blockquote
                style={{
                  fontFamily: 'Georgia, "Times New Roman", ui-serif, serif',
                  fontSize: "clamp(17px, 2vw, 19px)",
                  fontStyle: "italic",
                  color: "rgba(232,232,232,0.92)",
                  lineHeight: 1.65,
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "auto" }}>
                <div
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
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      color: "#ffffff",
                      textTransform: "uppercase",
                    }}
                  >
                    {t.role}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: COPPER,
                      textTransform: "uppercase",
                    }}
                  >
                    {t.org}
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
  return (
    <footer
      style={{
        background: FOOTER_BG,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "72px 32px 56px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
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
            Quantum Limited
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px 48px",
              marginBottom: "18px",
            }}
          >
            {["Privacy Policy", "Terms of Service", "Global Offices"].map((l) => (
              <Link
                key={l}
                href="#"
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
                {l}
              </Link>
            ))}
          </div>

          <div style={{ marginBottom: "36px" }}>
            <Link
              href="#"
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
              Technical Specifications
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
            © 2024 Quantum Limited. Precision Engineered.
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
              HQ_Latitude
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontSize: "15px",
                fontWeight: 500,
                color: "#ffffff",
                lineHeight: 1.55,
                letterSpacing: "0.02em",
              }}
            >
              40.7128° N
              <br />
              74.0060° W
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
              Status
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
                All Systems Nominal
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ClientsPage() {
  return (
    <>
      <SiteHeader active="clients" />
      <main style={{ position: "relative", background: T.surface, paddingTop: "78px" }}>
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
        .clients-metric-card:hover .clients-metric-deco {
          filter: grayscale(0%) !important;
        }
        .clients-case-study:hover .clients-case-study-image img {
          filter: grayscale(0%) !important;
        }
        .clients-tm-cell:first-child {
          border-right: 1px solid rgba(92,64,55,0.22);
        }
        .clients-case-study-cta:hover {
          opacity: 0.85;
        }
        .clients-footer-link:hover {
          color: #a3a3a3 !important;
        }
        @media (max-width: 900px) {
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
        }
      `}</style>
    </>
  );
}
