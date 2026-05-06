"use client";

import React from "react";
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
  onPrimary: "#511500",
  outline: "#ac897e",
  outlineVar: "rgba(92,64,55,0.3)",
};

const serviceIcons = [
  "developer_mode_tv",
  "cloud_done",
  "neurology",
  "precision_manufacturing",
];

const protocolImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSn--JFlMPSBvi_EnY0ljxDoKJnbzt3onWqr9xSD_13OKqmKNtupjfI5HVqOIP2sx36YmvT8l-kP9oGGOIW6ch4DYTNx0yxrzkyodvJqVc2D7v36ZVf_Y0OnU9owE1YRlzOfIDgu4Y9SxznCnUHEHCY2bMCdEsDAkVytB5cNA374LLt85jKuxd2aSkpAkQnln_NJLyXI3CglPb_RJGIU4nBRRGYx_OaiUfV8WZEB_mJN5gH28l3sAaSeC6Y0s2Ovg1u8JDhgXoSDI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDrpYaA6xCcGbaX9vf8Mhq6w-fxyzcMHnFxS3Y1ktvgRC4x9cMLc1CNek8dxf70MkvN81_IAY77J3JqHkWMPiefcevCiYn6XGfhvsDlCook9XwgHKiSeMIKSHXPcq97Nn504-kK2nO_53gunGzoWsNITvcWr_W0M8gWTY7VyPrgsi-Sr9pGJSm71FnDxzJbRpkxKWBK1JgNvy0aYjM2MZ0ZyecUyfnq57NTmVFagCsvtart_q55vE_ZQTu_KVF01bol4eIfgakWUKQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnbuZXqigG8X3ZNgeVNFt7UvjMpo8JxuBwjw2wornLjOLRVBatADchP7US7Mq3TbFlWT0XqvBhSBkvwZp1KqJSZUIUqaLJL7E0AKf8UPps5g3I793e0P9oJquNvw_9QhMbeey0h2xk6WLISGVEneoPxmgW7dI1J3vEllb-1Eo-36OYhe9tZyVgtospHmBSfuUTLY4WL_AcxPY2hUyWBLnbSifTw4q5z_iA2Fw5zqQNDh0p6-QEqnF4ji37vDRi7Spjogy09_7pmHg",
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader active="services" />
      <main style={{ background: T.surface, minHeight: "100vh", paddingTop: "78px" }}>
        <HeroSection />
        <ModulesSection />
        <ProtocolSection />
        <ContactSection />
        <Footer />
      </main>

      <style>{`
        #services-hero {
          background-image: radial-gradient(circle at 2px 2px, rgba(92,64,55,0.12) 1px, transparent 0);
          background-size: 40px 40px;
        }
        .services-card {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease;
          border: 1px solid rgba(92,64,55,0.1);
        }
        .services-card:hover {
          transform: translateY(-4px);
          background: #231d1b !important;
          border-color: rgba(255,85,0,0.25);
        }
        .service-link:hover { gap: 12px !important; }
        .protocol-row-image img {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .protocol-row:hover .protocol-row-image img {
          transform: scale(1.04);
        }
        .services-contact-input:focus {
          border-bottom-color: ${T.primaryCtn} !important;
        }
        .services-contact-btn:hover {
          filter: brightness(1.1);
        }
        @media (max-width: 1100px) {
          .services-hero-grid { grid-template-columns: 1fr !important; gap: 64px !important; }
          .services-hero-image-wrap { max-width: 600px; margin: 0 auto; }
        }
        @media (max-width: 900px) {
          .services-modules-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .protocol-row { flex-direction: column !important; gap: 40px !important; }
          .protocol-row-content { 
            max-width: 100% !important; 
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

function HeroSection() {
  const { t } = useLanguage();
  return (
    <section
      data-reveal
      id="services-hero"
      style={{
        padding: "clamp(64px, 12vw, 120px) clamp(24px, 4vw, 48px)",
        borderBottom: `1px solid rgba(92,64,55,0.1)`,
      }}
    >
      <div
        className="services-hero-grid"
        style={{
          maxWidth: "min(1920px, 100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          alignItems: "center",
          gap: "96px",
        }}
      >
        <div>
          <Label letterSpacing="0.4em">{t("services.hero.badge")}</Label>
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(48px, 8vw, 120px)",
              fontWeight: 700,
              lineHeight: 0.9,
              color: T.onSurface,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "32px 0 40px",
            }}
          >
            {t("services.hero.title1")}
            <br />
            {t("services.hero.title2")}
            <br />
            <span style={{ color: T.primaryCtn }}>{t("services.hero.title3")}</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.6,
              color: T.onSurfaceVar,
              maxWidth: "600px",
              fontWeight: 300,
              marginBottom: "56px",
            }}
          >
            {t("services.hero.description")}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
            <Metric label={t("services.hero.metric1")} value="99.99%" />
            <Metric label={t("services.hero.metric2")} value="<2MS" />
          </div>
        </div>

        <div className="services-hero-image-wrap" style={{ position: "relative" }}>
          <div
            style={{
              padding: "1px",
              background: `linear-gradient(135deg, rgba(255,85,0,0.3) 0%, transparent 100%)`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
              {t("services.hero.render_label")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
          {serviceIcons.map((icon, i) => (
            <ServiceCard key={i} index={i} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  index,
  icon,
}: {
  index: number;
  icon: string;
}) {
  const { t } = useLanguage();
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
          {t(`services.card.${index}.mod`)}
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
        {t(`services.card.${index}.title`)}
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
        {t(`services.card.${index}.desc`)}
      </p>

      <div className="services-card-metrics" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "34px" }}>
        <MetricBox label={t(`services.card.${index}.statA.label`)} value={t(`services.card.${index}.statA.value`)} />
        <MetricBox label={t(`services.card.${index}.statB.label`)} value={t(`services.card.${index}.statB.value`)} />
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
        {t("services.card.view_protocol")}
        <span className="material-symbols-outlined" style={{ color: T.primaryCtn, fontSize: "16px" }}>
          arrow_forward
        </span>
      </a>
    </article>
  );
}

function ProtocolSection() {
  const { t } = useLanguage();
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
          {t("services.protocol.title")}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(72px, 8vw, 112px)" }}>
          {[0, 1, 2].map((i) => (
            <ProtocolRow
              key={i}
              phase={t(`services.protocol.${i}.phase`)}
              title={t(`services.protocol.${i}.title`)}
              desc={t(`services.protocol.${i}.desc`)}
              image={protocolImages[i]}
              imageLeft={i === 1}
            />
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
  imageLeft = false,
}: {
  phase: string;
  title: string;
  desc: string;
  image: string;
  imageLeft?: boolean;
}) {
  return (
    <div
      className="protocol-row"
      style={{
        display: "flex",
        flexDirection: imageLeft ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "64px",
      }}
    >
      <div
        className="protocol-row-content"
        style={{
          flex: "1 1 50%",
          maxWidth: "520px",
          textAlign: "left",
        }}
      >
        <Label color={T.primaryCtn} letterSpacing="0.22em">
          {phase}
        </Label>
        <h3
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 700,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            margin: "24px 0 28px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontSize: "17px",
            lineHeight: 1.7,
            color: T.onSurfaceVar,
            margin: 0,
          }}
        >
          {desc}
        </p>
      </div>

      <div
        className="protocol-row-image"
        style={{
          flex: "1 1 50%",
          padding: imageLeft ? "0 48px 0 0" : "0 0 0 48px",
        }}
      >
        <div style={{ position: "relative", padding: "1px", background: `rgba(92,64,55,0.15)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              aspectRatio: "16 / 10",
              objectFit: "cover",
              filter: "grayscale(1) brightness(0.85)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const { t } = useLanguage();
  return (
    <section
      data-reveal
      style={{
        padding: "clamp(80px, 10vw, 120px) clamp(24px, 4vw, 48px)",
        background: "#0d0d0d",
        borderTop: `1px solid rgba(92,64,55,0.1)`,
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 700,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          {t("services.contact.title")}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontSize: "18px",
            color: T.onSurfaceVar,
            lineHeight: 1.6,
            marginBottom: "48px",
          }}
        >
          {t("services.contact.description")}
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          <input
            className="services-contact-input"
            type="email"
            placeholder={t("services.contact.placeholder")}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: `1px solid rgba(92,64,55,0.4)`,
              padding: "16px 0",
              color: "#ffffff",
              fontFamily: "ui-monospace, monospace",
              fontSize: "14px",
              outline: "none",
              textAlign: "center",
              transition: "border-color 0.3s ease",
            }}
          />
          <button
            className="services-contact-btn"
            style={{
              background: T.primaryCtn,
              color: T.onPrimary,
              padding: "18px",
              border: "none",
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "filter 0.3s ease",
            }}
          >
            {t("services.contact.execute")}
          </button>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "rgba(172, 137, 126, 0.45)",
              textTransform: "uppercase",
              marginTop: "12px",
            }}
          >
            {t("services.contact.note")}
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      style={{
        padding: "64px clamp(24px, 4vw, 48px) 48px",
        background: T.surface,
        borderTop: `1px solid rgba(92,64,55,0.08)`,
      }}
    >
      <div
        style={{
          maxWidth: "min(1920px, 100%)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "16px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.1em",
              marginBottom: "12px",
            }}
          >
            {t("services.footer.brand")}
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "12px",
              color: "rgba(161, 161, 170, 0.6)",
              margin: 0,
            }}
          >
            {t("services.footer.copy")}
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
          {[t("services.footer.privacy"), t("services.footer.sla"), t("services.footer.network")].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(161, 161, 170, 0.7)",
                textDecoration: "none",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Label({
  children,
  color = T.primary,
  letterSpacing = "0.3em",
}: {
  children: React.ReactNode;
  color?: string;
  letterSpacing?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <span
        style={{
          fontFamily: "ui-monospace, monospace",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing,
          color: color,
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
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
