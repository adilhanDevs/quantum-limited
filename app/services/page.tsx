"use client";

import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { useLanguage } from "../i18n/LanguageContext";

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

function Label({
  children,
  color = T.onSurfaceVar,
  letterSpacing = "0.12em",
}: {
  children: React.ReactNode;
  color?: string;
  letterSpacing?: string;
}) {
  return (
    <span
      style={{
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing,
        textTransform: "uppercase",
        color,
      }}
    >
      {children}
    </span>
  );
}

function AccentLine() {
  return (
    <div
      style={{
        width: "40px",
        height: "2px",
        background: T.primaryCtn,
        flexShrink: 0,
      }}
    />
  );
}

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section
      data-reveal
      style={{
        minHeight: "clamp(560px, 78dvh, 820px)",
        background: T.surface,
        borderBottom: `1px solid rgba(92,64,55,0.15)`,
        position: "relative",
        overflow: "hidden",
        paddingTop: "78px",
      }}
    >
      <div className="micro-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div className="scan-line" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div
        className="services-hero-grid"
        style={{
          maxWidth: "min(1920px, 100%)",
          margin: "0 auto",
          padding: "0 clamp(24px, 4vw, 48px)",
          minHeight: "min(788px, 70dvh)",
          display: "grid",
          gridTemplateColumns: "1.18fr 0.82fr",
          gap: "clamp(48px, 6vw, 96px)",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
            <AccentLine />
            <Label color={T.primaryCtn} letterSpacing="0.32em">
              {t("services.hero.badge")}
            </Label>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(64px, 7vw, 96px)",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              color: T.onSurface,
              marginBottom: "36px",
            }}
          >
            {t("services.hero.title1")}
            <br />
            {t("services.hero.title2")} <span style={{ color: T.primaryCtn }}>{t("services.hero.title3")}</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "16px",
              fontWeight: 400,
              color: T.onSurfaceVar,
              maxWidth: "min(640px, 100%)",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            {t("services.hero.description")}
          </p>

          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
            <Metric label={t("services.hero.metric1")} value="99.9999%" />
            <Metric label={t("services.hero.metric2")} value="<1.2MS" />
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "14% 10%",
              background: `radial-gradient(circle, ${T.primaryCtn}18 0%, transparent 70%)`,
              filter: "blur(70px)",
            }}
          />
          <div
            style={{
              position: "relative",
              background: "#080808",
              border: `1px solid rgba(92,64,55,0.2)`,
              padding: "0",
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCttXQVEV3FwQ7cfpG2bHXL2J0OQ1MJqtlH_9rebYkFRa8b7bX64HD2KHYwCm4FYFghmRyTsT3YHwLmAUPWBxxQ0jGr_KEPyNN3c1TJMbDzMJK9LnkMSGlyrqFuCFrVVp0h_yohY7cmu34TOL9CAk1KRht9Q2kK_uix1Iv99SZria3XPRMSLT6ozgA3IrnOLn0oNW0o5XscfldShYC-szRhh2-d2GeVEbjBIVZOtskcZqkyvsJ8XeJHLMb_BcBIq2I4NxYdA-QhKpE"
              alt="Technical render"
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                filter: "grayscale(1) brightness(0.72) contrast(1.15)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "-16px",
                bottom: "-16px",
                background: T.surfaceHighest,
                border: `1px solid rgba(92,64,55,0.28)`,
                padding: "14px 18px",
                color: "#b8b8b8",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "10px",
                letterSpacing: "0.14em",
              }}
            >
              [OBJECT_RENDER_001]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ borderLeft: `2px solid ${T.primaryCtn}`, paddingLeft: "14px" }}>
      <div
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "10px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: T.primary,
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "30px",
          fontWeight: 700,
          color: T.onSurface,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
    </div>
  );
}

const serviceCards = [
  {
    mod: "MOD_01",
    icon: "developer_mode_tv",
    title: "Custom Software Engineering",
    desc: "High-scale, high-frequency execution environments tailored for financial markets and complex data processing pipelines.",
    statA: ["Throughput", "1.2M REQ/S"],
    statB: ["Architecture", "RUST/LLVM"],
  },
  {
    mod: "MOD_02",
    icon: "cloud_done",
    title: "Cloud Infrastructure",
    desc: "Redundant, zero-latency distributed systems with global failover and autonomous infrastructure scaling protocols.",
    statA: ["Global Latency", "<15MS AVG"],
    statB: ["Redundancy", "MULTI-AZ L3"],
  },
  {
    mod: "MOD_03",
    icon: "neurology",
    title: "AI & Neural Integration",
    desc: "Automated decision-making and predictive analytics at the edge, utilizing custom neural weights for industrial precision.",
    statA: ["Inference Time", "0.4MS"],
    statB: ["Precision", "FP16/INT8"],
  },
  {
    mod: "MOD_04",
    icon: "precision_manufacturing",
    title: "Cyber-Physical Systems",
    desc: "Bridging the gap between software and industrial hardware through robust PLC integrations and real-time SCADA systems.",
    statA: ["IO Sync", "10KHZ"],
    statB: ["Protocol", "ETHERCAT/MQTT"],
  },
];

function ModulesSection() {
  const { t } = useLanguage();
  return (
    <section
      data-reveal
      id="services"
      style={{
        background: "#15110f",
        padding: "96px clamp(24px, 4vw, 48px) 112px",
        borderTop: `1px solid rgba(92,64,55,0.08)`,
        borderBottom: `1px solid rgba(92,64,55,0.08)`,
      }}
    >
      <div style={{ maxWidth: "min(1920px, 100%)", margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", gap: "24px" }}>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "48px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: T.onSurface,
              textTransform: "uppercase",
            }}
          >
            {t("services.modules.title")}
          </h2>
          <Label letterSpacing="0.44em">{t("services.modules.status")}</Label>
        </div>

        <div
          className="services-modules-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(92,64,55,0.18)",
            border: "1px solid rgba(92,64,55,0.18)",
          }}
        >
          {serviceCards.map((card) => (
            <ServiceCard key={card.mod} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  mod,
  icon,
  title,
  desc,
  statA,
  statB,
}: {
  mod: string;
  icon: string;
  title: string;
  desc: string;
  statA: string[];
  statB: string[];
}) {
  return (
    <article className="services-card" style={{ background: "#1b1715", padding: "52px 40px 48px", minHeight: "430px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "44px" }}>
        <div
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: T.primaryCtn,
          }}
        >
          {mod}
        </div>
        <span
          className="material-symbols-outlined"
          style={{
            color: T.primaryCtn,
            fontSize: "28px",
            lineHeight: 1,
          }}
        >
          {icon}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "26px",
          fontWeight: 700,
          color: T.onSurface,
          lineHeight: 1.2,
          marginBottom: "18px",
          maxWidth: "360px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "15px",
          color: T.onSurfaceVar,
          lineHeight: 1.7,
          marginBottom: "28px",
          maxWidth: "420px",
        }}
      >
        {desc}
      </p>

      <div className="services-card-metrics" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "34px" }}>
        <MetricBox label={statA[0]} value={statA[1]} />
        <MetricBox label={statB[0]} value={statB[1]} />
      </div>

      <a
        href="/process-protocol"
        className="service-link"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: T.primary,
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "gap 0.3s ease",
        }}
      >
        View Protocol
        <span className="material-symbols-outlined" style={{ color: T.primaryCtn, fontSize: "16px" }}>
          arrow_forward
        </span>
      </a>
    </article>
  );
}

function MetricBox({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: T.surfaceContainer,
        border: `1px solid rgba(92,64,55,0.12)`,
        padding: "16px 18px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "9px",
          color: T.primaryCtn,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "8px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontWeight: 700,
          fontSize: "20px",
          color: T.onSurface,
        }}
      >
        {value}
      </div>
    </div>
  );
}

const protocolSteps = [
  {
    phase: "PHASE_01",
    title: "SYSTEM DISCOVERY",
    desc: "Deep analysis of operational requirements, data flow mapping, and performance bottleneck identification.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSn--JFlMPSBvi_EnY0ljxDoKJnbzt3onWqr9xSD_13OKqmKNtupjfI5HVqOIP2sx36YmvT8l-kP9oGGOIW6ch4DYTNx0yxrzkyodvJqVc2D7v36ZVf_Y0OnU9owE1YRlzOfIDgu4Y9SxznCnUHEHCY2bMCdEsDAkVytB5cNA374LLt85jKuxd2aSkpAkQnln_NJLyXI3CglPb_RJGIU4nBRRGYx_OaiUfV8WZEB_mJN5gH28l3sAaSeC6Y0s2Ovg1u8JDhgXoSDI",
    imageLeft: false,
  },
  {
    phase: "PHASE_02",
    title: "ENGINEERING",
    desc: "Implementation of core logic using performance-first languages and highly optimized data structures.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrpYaA6xCcGbaX9vf8Mhq6w-fxyzcMHnFxS3Y1ktvgRC4x9cMLc1CNek8dxf70MkvN81_IAY77J3JqHkWMPiefcevCiYn6XGfhvsDlCook9XwgHKiSeMIKSHXPcq97Nn504-kK2nO_53gunGzoWsNITvcWr_W0M8gWTY7VyPrgsi-Sr9pGJSm71FnDxzJbRpkxKWBK1JgNvy0aYjM2MZ0ZyecUyfnq57NTmVFagCsvtart_q55vE_ZQTu_KVF01bol4eIfgakWUKQ",
    imageLeft: true,
  },
  {
    phase: "PHASE_03",
    title: "STRESS TESTING",
    desc: "Synthetic load generation to test edge-case stability and system endurance under extreme conditions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnbuZXqigG8X3ZNgeVNFt7UvjMpo8JxuBwjw2wornLjOLRVBatADchP7US7Mq3TbFlWT0XqvBhSBkvwZp1KqJSZUIUqaLJL7E0AKf8UPps5g3I793e0P9oJquNvw_9QhMbeey0h2xk6WLISGVEneoPxmgW7dI1J3vEllb-1Eo-36OYhe9tZyVgtospHmBSfuUTLY4WL_AcxPY2hUyWBLnbSifTw4q5z_iA2Fw5zqQNDh0p6-QEqnF4ji37vDRi7Spjogy09_7pmHg",
    imageLeft: false,
  },
];

function ProtocolSection() {
  return (
    <section
      data-reveal
      id="process"
      style={{
        background: T.surface,
        padding: "96px clamp(24px, 4vw, 48px) 120px",
      }}
    >
      <div style={{ maxWidth: "min(1920px, 100%)", margin: "0 auto", width: "100%" }}>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(40px, 5vw, 60px)",
            fontWeight: 700,
            color: T.onSurface,
            letterSpacing: "-0.04em",
            textAlign: "left",
            marginBottom: "56px",
            textTransform: "uppercase",
            maxWidth: "min(1200px, 100%)",
          }}
        >
          The Architectural Protocol
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(72px, 8vw, 112px)" }}>
          {protocolSteps.map((step) => (
            <ProtocolRow key={step.phase} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProtocolRow({
  phase,
  title,
  desc,
  image,
  imageLeft,
}: {
  phase: string;
  title: string;
  desc: string;
  image: string;
  imageLeft: boolean;
}) {
  const textBlock = (
    <div
      className="protocol-row-text"
      style={{
        flex: "1 1 0",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: imageLeft ? "left" : "right",
        padding: imageLeft ? "16px 0 16px clamp(8px, 3vw, 48px)" : "16px clamp(8px, 3vw, 48px) 16px 0",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.34em",
          color: T.primaryCtn,
          marginBottom: "16px",
          textTransform: "uppercase",
        }}
      >
        {phase}
      </div>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "clamp(22px, 2.4vw, 30px)",
          fontWeight: 700,
          color: T.onSurface,
          marginBottom: "18px",
          textTransform: "uppercase",
          lineHeight: 1.15,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "16px",
          lineHeight: 1.75,
          color: T.onSurfaceVar,
          maxWidth: "min(100%, 580px)",
          marginLeft: imageLeft ? 0 : "auto",
        }}
      >
        {desc}
      </div>
    </div>
  );

  const imageBlock = (
    <div
      className="protocol-row-image"
      style={{
        flex: "1 1 0",
        minWidth: 0,
        padding: imageLeft ? "0 clamp(8px, 3vw, 40px) 0 0" : "0 0 0 clamp(8px, 3vw, 40px)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          display: "block",
          width: "100%",
          height: "clamp(240px, 28vw, 320px)",
          objectFit: "cover",
          border: `1px solid rgba(92,64,55,0.18)`,
          filter: "grayscale(1) brightness(0.78) contrast(1.05)",
        }}
      />
    </div>
  );

  return (
    <div
      className="protocol-row"
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: "clamp(28px, 4vw, 72px)",
      }}
    >
      {imageLeft ? imageBlock : textBlock}
      <div className="protocol-row-mid" style={{ flex: "0 0 40px", display: "flex", justifyContent: "center", alignSelf: "center" }}>
        <div style={{ width: "8px", height: "8px", background: T.primaryCtn }} />
      </div>
      {imageLeft ? textBlock : imageBlock}
    </div>
  );
}

function ContactSection() {
  const { t } = useLanguage();
  return (
    <section
      data-reveal
      id="contact"
      style={{
        background: "#191919",
        padding: "clamp(72px, 12vw, 120px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="micro-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div style={{ maxWidth: "min(1920px, 100%)", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)", position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ maxWidth: "min(720px, 100%)" }}>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(56px, 7vw, 78px)",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 0.96,
              color: T.onSurface,
              marginBottom: "24px",
              textTransform: "uppercase",
            }}
          >
            {t("services.contact.title")}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "16px",
              lineHeight: 1.7,
              color: T.onSurfaceVar,
              maxWidth: "640px",
              margin: "0 auto 44px",
            }}
          >
            {t("services.contact.description")}
          </p>

          <div
            className="services-contact-form"
            style={{
              maxWidth: "min(560px, 100%)",
              margin: "0 auto",
              border: `1px solid rgba(92,64,55,0.2)`,
              display: "grid",
              gridTemplateColumns: "1fr min(170px, 34%)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#111111",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "20px 18px",
              }}
            >
              <span
                style={{
                  color: T.primary,
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontWeight: 700,
                }}
              >
                &gt;
              </span>
              <input
                type="email"
                placeholder={t("services.contact.placeholder")}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: T.onSurface,
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                }}
              />
            </div>

            <button
              style={{
                background: T.primaryCtn,
                color: T.onPrimary,
                border: "none",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {t("services.contact.execute")}
            </button>
          </div>

          <div
            style={{
              marginTop: "20px",
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8a7c76",
            }}
          >
            {t("services.contact.note")}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      data-reveal
      id="footer"
      style={{
        background: "#191919",
        padding: "0 0 36px",
      }}
    >
      <div
        className="services-footer-inner"
        style={{
          maxWidth: "min(1920px, 100%)",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 48px)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "24px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "20px",
              fontWeight: 700,
              color: T.onSurface,
              letterSpacing: "0.12em",
              marginBottom: "10px",
            }}
          >
            {t("services.footer.brand")}
          </div>
          <div
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "10px",
              color: "#6f6763",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            {t("services.footer.copy")}
          </div>
        </div>

        <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          {[t("services.footer.privacy"), t("services.footer.sla"), t("services.footer.network")].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontSize: "10px",
                color: "#6f6763",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                textDecoration: "none",
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

export default function ServicesPage() {
  return (
    <>
      <SiteHeader active="services" />
      <HeroSection />
      <ModulesSection />
      <ProtocolSection />
      <ContactSection />
      <Footer />

      <style>{`
        .services-card {
          transition:
            background 0.35s ease,
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .services-card:hover {
          background: ${T.surfaceContainer} !important;
          transform: translateY(-3px);
        }
        .service-link {
          transition: gap 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .service-link:hover {
          gap: 16px !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .services-card {
            transition: background 0.2s ease !important;
          }
          .services-card:hover {
            transform: none !important;
          }
        }
        @media (max-width: 900px) {
          #site-nav {
            position: sticky !important;
          }
        }
        @media (max-width: 980px) {
          .services-hero-grid {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
          }
        }
        @media (max-width: 900px) {
          .services-modules-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .services-card-metrics {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .services-contact-form {
            grid-template-columns: 1fr !important;
          }
          .services-contact-form button {
            min-height: 48px;
          }
          .services-card {
            min-height: 0 !important;
            padding: 36px 22px 32px !important;
          }
        }
        @media (max-width: 640px) {
          .services-footer-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 900px) {
          .protocol-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 28px !important;
          }
          .protocol-row-mid {
            display: none !important;
          }
          .protocol-row-text {
            text-align: left !important;
            padding: 0 !important;
            order: 2;
          }
          .protocol-row-image {
            padding: 0 !important;
            order: 1;
          }
        }
      `}</style>
    </>
  );
}
