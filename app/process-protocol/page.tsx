import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Quantum Limited | The Execution Protocol",
};

const T = {
  surface: "#131313",
  surfaceLow: "#1b1b1b",
  surfaceContainer: "#1f1f1f",
  surfaceHigh: "#2a2a2a",
  surfaceHighest: "#353535",
  onSurface: "#e2e2e2",
  onSurfaceVar: "#c9b0a8",
  primary: "#ffb59c",
  primaryCtn: "#ff5500",
  onPrimary: "#390c00",
  outline: "#ac897e",
  outlineVar: "#5c4037",
};

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "921px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 80px",
        overflow: "hidden",
        background: T.surface,
      }}
      className="micro-grid"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: `linear-gradient(90deg, ${T.surface} 0%, transparent 50%, ${T.surfaceLow} 100%)`,
          opacity: 0.4,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "50%",
          height: "100%",
          zIndex: 0,
          opacity: 0.3,
          mixBlendMode: "screen",
        }}
      >
        <img
          alt="Technical blueprint"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCklpc1dNAEcUVn6XQL3__mjsokj0h5-VOiQcLTMkYpOu6qdC4MOar4MxOwyrhB7Zhv2cipKmb2qwColH6mtAJ_EyXUTTSoil0ezkFJsrHc2Y9_I-YtzCl2Mozh3IapP1ae9d-YaCuBj_s3FJHWkTiGCtJhCno_Vm-Kph2AOy_HeCkj1LVE-S2whF4q02Ul0eT6pnLsXihMcb_y6QavlPexpMAIHGsQ8aWtVW6iZE8IOtCtdHQiegOd8x0GeX8keM6HdrN-Bm3n6XI"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "960px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <span style={{ width: "48px", height: "1px", background: T.primaryCtn }} />
          <span
            style={{
              color: T.primary,
              fontFamily: "monospace",
              fontSize: "14px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            High-Velocity Engineering
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(64px, 8vw, 128px)",
            fontWeight: 700,
            lineHeight: 0.94,
            letterSpacing: "-0.05em",
            marginBottom: "32px",
            color: T.onSurface,
            textTransform: "uppercase",
          }}
        >
          THE EXECUTION <br />
          <span style={{ color: T.primaryCtn, textShadow: "0 0 15px rgba(255, 87, 8, 0.4)" }}>PROTOCOL</span>
        </h1>

        <p
          style={{
            color: T.onSurfaceVar,
            fontSize: "20px",
            maxWidth: "760px",
            lineHeight: 1.7,
            fontWeight: 300,
            fontFamily: "var(--font-inter, Inter, sans-serif)",
          }}
        >
          We bridge the gap between abstract architectural vision and mission-critical performance through a rigid,
          data-driven deployment framework.
        </p>

        <div style={{ marginTop: "48px", display: "flex", gap: "16px" }}>
          <div
            style={{
              padding: "16px",
              background: T.surfaceLow,
              borderLeft: `4px solid ${T.primaryCtn}`,
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "11px",
                fontFamily: "monospace",
                color: T.primary,
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Status: Operational
            </span>
            <span
              style={{
                fontSize: "32px",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontWeight: 700,
                color: T.onSurface,
              }}
            >
              142.5ms
            </span>
            <span
              style={{
                display: "block",
                fontSize: "11px",
                fontFamily: "monospace",
                color: "#71717a",
                textTransform: "uppercase",
              }}
            >
              Avg. Response Latency
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "monospace",
        fontSize: "13px",
        color: T.primary,
        letterSpacing: "0.14em",
      }}
    >
      {children}
    </span>
  );
}

function PhasesSection() {
  return (
    <section
      style={{
        padding: "96px 32px",
        background: T.surface,
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gap: 0,
          borderTop: "1px solid rgba(92,64,55,0.15)",
        }}
      >
        <div
          style={{
            gridColumn: "span 4",
            padding: "48px",
            background: "#0e0e0e",
            borderRight: "1px solid rgba(92,64,55,0.15)",
            borderBottom: "1px solid rgba(92,64,55,0.15)",
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
              color: T.onSurface,
            }}
          >
            Analysis & Discovery
          </h3>
          <p style={{ color: "#71717a", marginBottom: "32px", lineHeight: 1.7 }}>
            System-wide forensic analysis and stakeholder intent mapping.
          </p>
          <div
            style={{
              background: "#090909",
              padding: "24px",
              fontFamily: "monospace",
              fontSize: "12px",
              color: "rgba(255,181,156,0.7)",
              lineHeight: 1.6,
            }}
          >
            <p style={{ marginBottom: "4px", color: T.primary }}>&gt; INITIALIZING_SYSTEM_SCAN...</p>
            <p style={{ marginBottom: "4px" }}>&gt; SCANNING ENTITIES [842/842]</p>
            <p style={{ marginBottom: "4px" }}>&gt; DETECTING BOTTLENECKS: FOUND(3)</p>
            <p style={{ color: T.primaryCtn }}>&gt; STATUS: OPTIMIZING_STRATEGY</p>
          </div>
        </div>

        <div
          style={{
            gridColumn: "span 8",
            padding: "48px",
            background: T.surfaceLow,
            borderBottom: "1px solid rgba(92,64,55,0.15)",
            position: "relative",
            overflow: "hidden",
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
          <div style={{ maxWidth: "520px", position: "relative", zIndex: 1 }}>
            <h3
              style={{
                fontSize: "34px",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: "16px",
                letterSpacing: "-0.03em",
                color: T.onSurface,
              }}
            >
              Architectural Design
            </h3>
            <p style={{ color: "#71717a", marginBottom: "32px", lineHeight: 1.7 }}>
              High-fidelity schematics mapping the core infrastructure and redundant data flows.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "16px", fontFamily: "monospace", fontSize: "14px" }}>
              {["COMPONENT_RELATION_MAP_V2", "LOAD_BALANCER_HIERARCHY", "ENCRYPTION_LAYER_PROTOCOL"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "6px", height: "6px", background: T.primaryCtn }} />
                  <span style={{ color: T.onSurface }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            gridColumn: "span 7",
            padding: "48px",
            background: T.surface,
            borderRight: "1px solid rgba(92,64,55,0.15)",
            borderBottom: "1px solid rgba(92,64,55,0.15)",
            position: "relative",
            overflow: "hidden",
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
              color: T.onSurface,
            }}
          >
            Rapid Engineering
          </h3>
          <p style={{ color: "#71717a", marginBottom: "48px", lineHeight: 1.7 }}>
            Concurrent build streams utilizing proprietary framework injectors for extreme speed.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div
              style={{
                background: "rgba(9,9,9,0.8)",
                padding: "24px",
                fontFamily: "monospace",
                fontSize: "12px",
                border: "1px solid rgba(92,64,55,0.2)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px solid rgba(92,64,55,0.1)", paddingBottom: "8px" }}>
                <span style={{ color: "#71717a" }}>BUILD_STREAM_ALPHA</span>
                <span style={{ color: T.primaryCtn }}>ACTIVE</span>
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
                opacity: 0.5,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px solid rgba(92,64,55,0.1)", paddingBottom: "8px" }}>
                <span style={{ color: "#71717a" }}>BUILD_STREAM_BETA</span>
                <span style={{ color: "#71717a" }}>PENDING</span>
              </div>
              <p style={{ color: "#71717a" }}>await stream.sync(kernel);</p>
              <p style={{ color: "#71717a" }}>deploy.now();</p>
            </div>
          </div>
        </div>

        <div
          style={{
            gridColumn: "span 5",
            padding: "48px",
            background: T.surfaceHigh,
            borderBottom: "1px solid rgba(92,64,55,0.15)",
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
              color: T.onSurface,
            }}
          >
            Stress Testing
          </h3>
          <p style={{ color: "#71717a", marginBottom: "32px", lineHeight: 1.7 }}>
            Simulated load peaks reaching 1,000% capacity to ensure ultimate resilience.
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
              position: "relative",
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
                  opacity: v === 95 ? 1 : 0.2 + i * 0.1,
                  boxShadow: v === 95 ? `0 0 10px ${T.primaryCtn}` : "none",
                }}
              />
            ))}
          </div>
          <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: "10px", color: "#71717a" }}>
            <span>T-MINUS 24H</span>
            <span>LIVE_MONITOR</span>
            <span>0.00ms JITTER</span>
          </div>
        </div>

        <div
          style={{
            gridColumn: "span 12",
            padding: "48px",
            background: "#09090b",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }}>
            <img
              alt="Global network"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBDwdtymjG6llRGJo_C6l07pc3Z2GFdo3fx72bC397eyoWWphwKsbckntEEMh9Xdjuo0TKfZtMX5ISnvPTk5HIwGty4YNBWclqHUnaSDpybQkA7PXcZERgGqqU13_Rw0yXb3ZfTe5PiusJ7lPuYOptagu57XfhlIjUC-6vPzi34aGRBrNeMp6EViJzTolNQ_Oa9z2SeS80DoFhdXnH4Wj6dnk-BGxmGutKtd3di_e-6JRyc2L9djuAAk_Hx5AfEDr1u_urmVQ3_c4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "48px" }}>
            <div style={{ maxWidth: "720px" }}>
              <span style={{ display: "block", marginBottom: "48px" }}>
                <PhaseLabel>PHASE_05</PhaseLabel>
              </span>
              <h3
                style={{
                  fontSize: "clamp(40px, 5vw, 56px)",
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "24px",
                  letterSpacing: "-0.04em",
                  color: T.onSurface,
                }}
              >
                Deployment &amp; Scaling
              </h3>
              <p style={{ color: "#a1a1aa", fontSize: "18px", lineHeight: 1.7 }}>
                Universal propagation across our private multi-cloud fabric. Zero downtime. Infinite capacity.
              </p>
            </div>
            <div style={{ display: "flex", gap: "48px" }}>
              {[
                ["99.99%", "Uptime Sla"],
                ["256+", "Edge Nodes"],
              ].map(([value, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "40px",
                      fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                      fontWeight: 700,
                      color: T.onSurface,
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
  return (
    <section
      id="contact"
      className="micro-grid"
      style={{
        padding: "128px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: T.surfaceLow,
        borderTop: "1px solid rgba(92,64,55,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(48px, 7vw, 88px)",
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          marginBottom: "48px",
          textTransform: "uppercase",
          lineHeight: 1,
          color: T.onSurface,
        }}
      >
        READY TO <span style={{ color: T.primaryCtn }}>INITIALIZE?</span>
      </h2>
      <button
        className="process-cta"
        style={{
          position: "relative",
          padding: "24px 48px",
          background: T.primaryCtn,
          color: "#ffffff",
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontWeight: 700,
          fontSize: "20px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          transition: "all 0.3s ease",
          border: "none",
          cursor: "pointer",
        }}
      >
        START PROTOCOL
        <span
          className="process-cta-outline"
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid #ffffff",
            opacity: 0,
            transform: "scale(1)",
            transition: "all 0.3s ease",
            pointerEvents: "none",
          }}
        />
      </button>
      <p style={{ marginTop: "32px", fontFamily: "monospace", color: "#71717a", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.14em" }}>
        Awaiting system signal...
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "#18181b",
        width: "100%",
        borderTop: "1px solid rgba(39,39,42,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "64px 48px",
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          gap: "24px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 900,
              color: "#ffffff",
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "8px",
            }}
          >
            QUANTUM LIMITED
          </div>
          <div
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "14px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#71717a",
            }}
          >
            © 2024 QUANTUM LIMITED. PRECISION ENGINEERED.
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
          {["Privacy Policy", "Terms of Service", "Architecture", "GitHub"].map((item) => (
            <a
              key={item}
              href="#"
              className="process-footer-link"
              style={{
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontSize: "14px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#71717a",
                textDecoration: "none",
                opacity: 0.8,
                transition: "color 0.2s, opacity 0.2s",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function ProcessPage() {
  return (
    <>
      <SiteHeader active="process-protocol" />
      <main style={{ position: "relative", background: T.surface, paddingTop: "78px" }}>
        <HeroSection />
        <PhasesSection />
        <CTASection />
      </main>
      <Footer />

      <style>{`
        .process-footer-link:hover {
          color: ${T.primaryCtn} !important;
          opacity: 1 !important;
        }
        .process-cta:hover {
          letter-spacing: 0.2em !important;
        }
        .process-cta:hover .process-cta-outline {
          opacity: 1 !important;
          transform: scale(1.1) !important;
        }
      `}</style>
    </>
  );
}
