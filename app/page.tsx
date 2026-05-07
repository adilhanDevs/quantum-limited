"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { RemoteImageWithFallback } from "./components/RemoteImageWithFallback";
import type { ContactApiResponse } from "./lib/contact";
import { useLanguage } from "./i18n/LanguageContext";

const T = {
  surface: "#0a0a0a",
  surfaceLow: "#1b1b1b",
  surfaceLowest: "#0e0e0e",
  surfaceContainer: "#141414",
  surfaceHigh: "#2a2a2a",
  surfaceHighest: "#353535",
  onSurface: "#e2e2e2",
  onSurfaceVar: "#e5beb2",
  primary: "#ff5500",
  primarySoft: "#ffb59c",
  onPrimary: "#511500",
  outlineVar: "#5c4037",
  secondary: "#c6c6c7",
};

const METHODOLOGY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWzHSFIp4T9U3KZXG4D44r6WOzXQFA4oGUfAU0KkO5BGnOwhyYq99a6iXtYoEL6Psv2TyMUNk1tKbuNdCkzCnDDUDak1UfrytE13OTu4ZqiBI-PRyMtdq4_HgODq7wgD5m5EwQtoDpFeCuRjtsMekQ_mt8K_EXh6VjPUd2AnWmqyNvR8LbdaB02TQp4LqeOMpT-mifJtgghFyHrg0YEVGcytVGv1Yue1d94m4kCNSZGYM8xrVdSbsFpTAtBGAHA6PKTBQUvKzR8D8";

const TRUST_LOGOS = [
  "B2B PLATFORMS",
  "OPS TEAMS",
  "CLIENT PORTALS",
  "ADMIN SYSTEMS",
  "BOOKING FLOWS",
  "API PROGRAMS",
  "CLOUD DELIVERY",
];

const SECTION_TINT = "rgba(10,10,10,0.16)";

function HeroSection() {
  const { t } = useLanguage();
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [videoAvailable, setVideoAvailable] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoAvailable) {
      videoRef.current.play().catch(() => {
        setIsVideoFinished(true);
      });
    }
    const fallback = setTimeout(() => setIsVideoFinished(true), 1200);
    return () => clearTimeout(fallback);
  }, [videoAvailable]);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "clamp(520px, 88dvh, 921px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#060606",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        {videoAvailable ? (
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            src="/Hero.mp4"
            onEnded={() => setIsVideoFinished(true)}
            onError={() => {
              setVideoAvailable(false);
              setIsVideoFinished(true);
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isVideoFinished ? 0.35 : 0.7,
              filter: isVideoFinished ? "blur(3px)" : "none",
              transition: "opacity 1.2s ease, filter 1.2s ease",
              backgroundColor: "#060606",
            }}
          />
        ) : (
          <div
            aria-hidden
            style={{
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(circle at 25% 20%, rgba(255,85,0,0.18), rgba(6,6,6,0.1) 38%), linear-gradient(160deg, #060606 0%, #0e0e0e 100%)",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isVideoFinished 
              ? "radial-gradient(circle at 30% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 100%)"
              : "rgba(0,0,0,0.15)",
            zIndex: 1,
            transition: "background 1.2s ease",
          }}
        />
      </div>

      <div
        aria-hidden
        className="home-hero-energy"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div className="home-hero-orb home-hero-orb-primary" />
        <div className="home-hero-orb home-hero-orb-secondary" />
        <div className="home-hero-orb home-hero-orb-tertiary" />
        <div className="home-hero-beam" />
        <div className="home-hero-grid" />
        <div className="home-hero-scanband" />
      </div>

      <div 
        className="home-hero-inner" 
        style={{ 
          position: "relative", 
          zIndex: 2, 
          maxWidth: "1280px", 
          margin: "0 auto", 
          padding: "clamp(16px, 4vw, 36px) clamp(16px, 4vw, 32px) clamp(40px, 7vw, 72px)", 
          width: "100%"
        }}
      >
        <div 
          className={isVideoFinished ? "animate-fade-up" : ""}
          style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "18px", opacity: isVideoFinished ? 1 : 0, transition: "opacity 0.1s" }}
        >
          <span style={{ width: "48px", height: "1px", background: "#ff6a00" }} />
          <span
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.35em",
              color: "#ff6a00",
              textTransform: "uppercase",
            }}
          >
            {t("home.hero.badge")}
          </span>
        </div>

        <h1
          className={isVideoFinished ? "animate-fade-up animate-fade-up-delay-1" : ""}
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(48px, 9vw, 10rem)",
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            textTransform: "uppercase",
            marginBottom: "22px",
            opacity: isVideoFinished ? 1 : 0,
            transition: "opacity 0.1s",
            textShadow: "0 4px 30px rgba(0,0,0,0.8)",
            maxWidth: "min(980px, 100%)",
          }}
        >
          {t("home.hero.title1")}
          <br />
          {t("home.hero.title2")}
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: "28px 36px",
            maxWidth: "1020px",
          }}
          className="home-hero-cta-row"
        >
          <p
            className={isVideoFinished ? "animate-fade-up animate-fade-up-delay-2" : ""}
            style={{
              flex: "1 1 320px",
              maxWidth: "460px",
              color: T.onSurfaceVar,
              fontWeight: 300,
              lineHeight: 1.72,
              fontSize: "18px",
              fontStyle: "italic",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              margin: 0,
              opacity: isVideoFinished ? 1 : 0,
              transition: "opacity 0.1s"
            }}
          >
            {t("home.hero.description")}
          </p>
          <div 
            className={`home-hero-cta-cluster ${isVideoFinished ? "animate-fade-up animate-fade-up-delay-3" : ""}`.trim()}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              opacity: isVideoFinished ? 1 : 0,
              transition: "opacity 0.1s",
              padding: "18px 18px 16px",
              background: "linear-gradient(160deg, rgba(10,10,10,0.4), rgba(10,10,10,0.18))",
              border: "1px solid rgba(255,85,0,0.14)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              alignSelf: "flex-end",
              minWidth: "min(100%, 320px)",
            }}
          >
            <Link
              href="#contact"
              style={{
                background: T.primary,
                color: "#ffffff",
                padding: "18px 30px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                fontSize: "15px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                transition: "filter 0.2s, transform 0.15s, box-shadow 0.2s ease, border-color 0.2s ease",
                boxShadow: "0 16px 36px rgba(255,85,0,0.2)",
                border: "1px solid rgba(255,181,156,0.18)",
              }}
              className="home-start-dev"
            >
              {t("home.hero.cta")}
            </Link>
            <div
              className="home-hero-protocol"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "rgba(198,198,199,0.72)",
                textTransform: "uppercase",
                fontWeight: 700,
                opacity: 1,
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                padding: "10px 12px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                overflow: "hidden",
              }}
            >
              <span aria-hidden className="home-hero-protocol-sheen" />
              <span
                aria-hidden
                className="home-hero-protocol-dot"
                style={{
                  width: "7px",
                  height: "7px",
                  background: T.primary,
                  boxShadow: "0 0 16px rgba(255,85,0,0.45)",
                  flexShrink: 0,
                }}
              />
              <span className="material-symbols-outlined" style={{ fontSize: "15px", color: "rgba(255,181,156,0.78)" }}>
                terminal
              </span>
              {t("home.hero.protocol")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompetenciesSection() {
  const { t } = useLanguage();
  return (
    <section
      data-reveal
      id="services"
      className="home-blueprint home-micro-radial home-competencies"
      style={{
        position: "relative",
        padding: "clamp(64px, 12vw, 120px) clamp(16px, 4vw, 32px)",
        background: SECTION_TINT,
        overflow: "hidden",
      }}
    >
      <div className="home-tech-svg" aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.1 }}>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", maxWidth: "1200px", margin: "0 auto", display: "block" }}>
          <path d="M100 100 H900 V900 H100 Z" fill="none" stroke="#FF5500" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="400" fill="none" stroke="#FF5500" strokeDasharray="10 20" strokeWidth="0.5" />
          <path d="M100 500 H900 M500 100 V900" stroke="#FF5500" strokeWidth="0.2" fill="none" />
          <rect x="300" y="300" width="400" height="400" fill="none" stroke="#FF5500" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="150" fill="none" stroke="#FF5500" strokeDasharray="5 5" strokeWidth="2" />
        </svg>
      </div>

      <div className="home-competencies-inner" style={{ position: "relative", zIndex: 2, maxWidth: "1440px", margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "32px",
            marginBottom: "64px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span className="home-pulse-dot" style={{ width: "10px", height: "10px", background: T.primary, flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                  color: T.primarySoft,
                }}
              >
                {t("home.competencies.badge")}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#ffffff",
                margin: 0,
              }}
            >
              {t("home.competencies.title")}
            </h2>
          </div>
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              color: T.secondary,
              opacity: 0.6,
              textAlign: "right",
              lineHeight: 1.8,
              maxWidth: "220px",
            }}
          >
            {t("home.competencies.protocol.0")}
            <br />
            {t("home.competencies.protocol.1")}
            <br />
            {t("home.competencies.protocol.2")}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gap: "32px",
            alignItems: "stretch",
          }}
          className="home-comp-grid"
        >
          <div data-reveal data-reveal-delay="1" className="home-feature-card home-glass home-depth-reveal" style={{ gridColumn: "span 12", position: "relative", overflow: "hidden", padding: "1px" }}>
            <div className="home-scan-line" aria-hidden />
            <div style={{ position: "relative", zIndex: 2, padding: "clamp(32px, 4vw, 48px)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "420px" }}>
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "32px", justifyContent: "space-between" }}>
                <div style={{ flex: "1 1 280px", maxWidth: "520px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "16px",
                      border: "1px solid rgba(255,85,0,0.2)",
                      background: "rgba(255,85,0,0.05)",
                      marginBottom: "28px",
                    }}
                  >
                    <span className="material-symbols-outlined home-gear-icon" style={{ fontSize: "56px", color: T.primary, fontVariationSettings: "'FILL' 1" }}>
                      settings_suggest
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                      fontSize: "clamp(26px, 4vw, 48px)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#ffffff",
                      lineHeight: 1.1,
                      marginBottom: "20px",
                    }}
                  >
                    {t("home.feature.title1")} <span style={{ color: T.primary }}>{t("home.feature.title2")}</span>
                    <br />
                    {t("home.feature.title3")}
                  </h3>
                  <p
                    style={{
                      color: T.onSurfaceVar,
                      fontSize: "17px",
                      lineHeight: 1.65,
                      fontWeight: 300,
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                      margin: 0,
                    }}
                  >
                    {t("home.feature.description")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                  paddingTop: "40px",
                  marginTop: "auto",
                  borderTop: "1px solid rgba(255,85,0,0.1)",
                }}
              >
                <div style={{ display: "flex", gap: "40px" }}>
                  <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "10px", letterSpacing: "0.16em" }}>
                    <span style={{ color: T.primary, display: "block", marginBottom: "4px" }}>{t("common.status")}</span>
                    <span style={{ color: "#fff" }}>{t("common.operational")}</span>
                  </div>
                  <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "10px", letterSpacing: "0.16em" }}>
                    <span style={{ color: T.primary, display: "block", marginBottom: "4px" }}>{t("common.latency")}</span>
                    <span style={{ color: "#fff" }}>{t("common.latency_value")}</span>
                  </div>
                </div>
                <Link
                  href="/services"
                  style={{
                    background: "rgba(255,85,0,0.1)",
                    border: "1px solid rgba(255,85,0,0.35)",
                    color: T.primary,
                    padding: "10px 20px",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                  }}
                  className="home-schema-btn"
                >
                  {t("home.feature.cta")}
                </Link>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: "span 12", display: "flex", flexDirection: "column", gap: "32px" }} className="home-side-stack">
            {[
              {
                title: t("home.competencies.card1.title"),
                body: t("home.competencies.card1.body"),
                icon: "hub",
                tag: t("home.competencies.card1.tag"),
                scanDelay: "1.5s",
              },
              {
                title: t("home.competencies.card2.title"),
                body: t("home.competencies.card2.body"),
                icon: "memory",
                tag: t("home.competencies.card2.tag"),
                scanDelay: "3s",
              },
            ].map((card) => (
              <div key={card.tag} data-reveal data-reveal-delay="2" className="home-glass home-side-card home-depth-reveal" style={{ position: "relative", overflow: "hidden", padding: "1px", flex: 1 }}>
                <div className="home-scan-line" style={{ animationDelay: card.scanDelay }} aria-hidden />
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "200px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                          fontSize: "22px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "#fff",
                          marginBottom: "12px",
                        }}
                      >
                        {card.title}
                      </h3>
                      <p style={{ color: T.onSurfaceVar, fontSize: "14px", lineHeight: 1.65, margin: 0, maxWidth: "360px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{card.body}</p>
                    </div>
                    <span className="material-symbols-outlined home-side-icon" style={{ fontSize: "40px", color: T.primary, opacity: 0.5, flexShrink: 0, fontVariationSettings: "'FILL' 0" }}>
                      {card.icon}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "28px" }}>
                    <div style={{ flex: 1, height: "1px", background: "rgba(255,85,0,0.2)" }} />
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: "10px", color: T.primary, fontWeight: 700, letterSpacing: "0.16em" }}>{card.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodologySection() {
  const { t } = useLanguage();
  return (
    <section
      data-reveal
      id="process"
      style={{
        position: "relative",
        padding: "clamp(64px, 10vw, 120px) clamp(16px, 4vw, 32px)",
        overflow: "hidden",
        background: SECTION_TINT,
      }}
    >
      <div
        className="home-watermark"
        style={{
          position: "absolute",
          right: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "clamp(12rem, 28vw, 45rem)",
          fontWeight: 900,
          color: "rgba(92,64,55,0.06)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        01
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
        className="home-method-grid"
      >
        <div data-reveal data-reveal-delay="1" className="home-depth-reveal">
          <p
            style={{
              color: T.primary,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              fontSize: "11px",
              fontWeight: 700,
              marginBottom: "20px",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
            }}
          >
            {t("home.method.badge")}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "36px",
            }}
          >
            {t("home.method.title1")}
            <br />
            <span style={{ color: T.primary }}>{t("home.method.title2")}</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "520px" }}>
            <div style={{ borderLeft: `4px solid ${T.primary}`, paddingLeft: "22px", paddingTop: "4px", paddingBottom: "4px" }}>
              <p style={{ fontSize: "19px", fontWeight: 500, color: "#fff", marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.method.card1.title")}</p>
              <p style={{ color: T.onSurfaceVar, lineHeight: 1.65, margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                {t("home.method.card1.body")}
              </p>
            </div>
            <div style={{ borderLeft: `4px solid ${T.surfaceHighest}`, paddingLeft: "22px", paddingTop: "4px", paddingBottom: "4px" }}>
              <p style={{ fontSize: "19px", fontWeight: 500, color: "#fff", marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.method.card2.title")}</p>
              <p style={{ color: T.onSurfaceVar, lineHeight: 1.65, margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                {t("home.method.card2.body")}
              </p>
            </div>
          </div>
        </div>

        <div data-reveal data-reveal-delay="2" className="home-depth-reveal" style={{ position: "relative" }}>
          <div style={{ aspectRatio: "1", background: "rgba(10,10,10,0.18)", border: "1px solid rgba(92,64,55,0.2)", padding: "12px", position: "relative" }}>
            <RemoteImageWithFallback
              src={METHODOLOGY_IMG}
              alt=""
              wrapperStyle={{ width: "100%", height: "100%" }}
              imgStyle={{ objectFit: "cover", filter: "grayscale(1) brightness(0.75)" }}
              fallbackStyle={{
                background:
                  "radial-gradient(circle at 24% 24%, rgba(255,85,0,0.18), transparent 28%), linear-gradient(150deg, rgba(24,18,16,0.98) 0%, rgba(9,9,9,0.98) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "36px",
                left: "36px",
                background: "rgba(10,10,10,0.2)",
                padding: "22px 24px",
                border: "1px solid rgba(255,181,156,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p style={{ fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)", fontSize: "clamp(32px, 5vw, 40px)", fontWeight: 700, color: "#fff", margin: "0 0 6px 0" }}>99.99%</p>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, color: T.primarySoft, margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                {t("common.system_uptime_protocol")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustLogosSection() {
  const { t } = useLanguage();
  const loop = [...TRUST_LOGOS, ...TRUST_LOGOS];
  return (
    <section data-reveal style={{ padding: "72px 0", background: SECTION_TINT }}>
      <div style={{ padding: "0 32px 28px", maxWidth: "1440px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: T.secondary, fontWeight: 700, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.trusted.title")}</p>
      </div>
      <div className="home-trust-marquee-track">
        <div className="home-trust-marquee-inner">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="home-trust-marquee-item"
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "22px",
                fontWeight: 900,
                whiteSpace: "nowrap",
                color: "rgba(226,226,226,0.35)",
                flexShrink: 0,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", service: "", requirements: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const border = (f: string) => `2px solid ${focused === f ? T.primary : "rgba(92,64,55,0.35)"}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const isValid =
      form.name.trim().length > 1 &&
      emailIsValid &&
      form.service.trim().length > 0 &&
      form.requirements.trim().length > 8;
    if (!isValid) {
      setError(t("common.form_error_required"));
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: "home",
          name: form.name.trim(),
          email: form.email.trim(),
          service: form.service.trim(),
          requirements: form.requirements.trim(),
        }),
      });
      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok || !result.ok) {
        setError(
          result.ok
            ? t("common.form_error_submit")
            : result.errorCode === "NOT_CONFIGURED"
              ? t("common.form_error_not_configured")
              : result.errorCode === "INVALID_REQUEST"
                ? t("common.form_error_required")
                : t("common.form_error_submit")
        );
        return;
      }

      setSubmitted(true);
      setForm({ name: "", email: "", service: "", requirements: "" });
    } catch {
      setError(t("common.form_error_submit"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section data-reveal id="contact" style={{ padding: "clamp(64px, 10vw, 96px) clamp(16px, 4vw, 32px)", background: SECTION_TINT }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "56px" }} className="home-contact-grid">
        <div data-reveal data-reveal-delay="1" className="home-depth-reveal">
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            {t("home.contact.title1")} <span style={{ color: T.primary }}>{t("home.contact.title2")}</span>
          </h2>
          <p style={{ color: T.onSurfaceVar, fontSize: "17px", lineHeight: 1.65, marginBottom: "40px", maxWidth: "420px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
            {t("home.contact.description")}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,10,10,0.22)", border: "1px solid rgba(255,85,0,0.2)", color: T.primary }}>
                <span className="material-symbols-outlined">mail</span>
              </span>
              <div>
                <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: T.secondary, fontWeight: 700, margin: "0 0 4px 0", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.contact.inquiries")}</p>
                <p style={{ color: "#fff", fontWeight: 500, margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>engineering@quantumlimited.io</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,10,10,0.22)", border: "1px solid rgba(255,85,0,0.2)", color: T.primary }}>
                <span className="material-symbols-outlined">location_on</span>
              </span>
              <div>
                <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: T.secondary, fontWeight: 700, margin: "0 0 4px 0", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.contact.node")}</p>
                <p style={{ color: "#fff", fontWeight: 500, margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.contact.node_location")}</p>
              </div>
            </div>
          </div>
        </div>

        <div data-reveal data-reveal-delay="2" className="home-depth-reveal home-contact-panel" style={{ background: "rgba(10,10,10,0.2)", padding: "40px", border: "1px solid rgba(92,64,55,0.12)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: "rgba(255,85,0,0.45)" }} />
          {submitted ? (
            <p style={{ color: T.onSurfaceVar, textAlign: "center", padding: "40px 0", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.contact.success")}</p>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "28px", paddingLeft: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: focused === "name" ? T.primary : T.secondary, fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.contact.clientName")}</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder={t("home.contact.placeholder.name")}
                    style={{ width: "100%", border: "none", borderBottom: border("name"), background: "transparent", color: "#fff", padding: "8px 0", outline: "none", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: focused === "email" ? T.primary : T.secondary, fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.contact.emailAddress")}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder={t("home.contact.placeholder.email")}
                    style={{ width: "100%", border: "none", borderBottom: border("email"), background: "transparent", color: "#fff", padding: "8px 0", outline: "none", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: focused === "service" ? T.primary : T.secondary, fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.contact.serviceInterest")}</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused(null)}
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: border("service"),
                    background: "rgba(10,10,10,0.2)",
                    color: "#fff",
                    padding: "8px 0",
                    outline: "none",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <option value="">{t("home.contact.placeholder.service")}</option>
                  <option value="custom">{t("home.contact.service.custom")}</option>
                  <option value="cloud">{t("home.contact.service.cloud")}</option>
                  <option value="ai">{t("home.contact.service.ai")}</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: focused === "requirements" ? T.primary : T.secondary, fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.contact.requirements")}</label>
                <textarea
                  rows={4}
                  required
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  onFocus={() => setFocused("requirements")}
                  onBlur={() => setFocused(null)}
                  placeholder={t("home.contact.placeholder.requirements")}
                  style={{ width: "100%", border: "none", borderBottom: border("requirements"), background: "transparent", color: "#fff", padding: "8px 0", outline: "none", resize: "none", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  background: T.primary,
                  color: "#fff",
                  border: "none",
                  padding: "18px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  cursor: "pointer",
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  boxShadow: "0 8px 32px rgba(255,85,0,0.15)",
                  opacity: submitting ? 0.75 : 1,
                }}
                className="home-init-project"
              >
                {submitting ? t("common.submitting") : t("home.contact.submit")}
              </button>
              {error && (
                <p style={{ color: "#ffb4ab", fontSize: "12px", margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ background: SECTION_TINT, padding: "clamp(32px, 6vw, 48px) clamp(16px, 4vw, 32px)" }}>
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "32px",
        }}
        className="home-footer-flex"
      >
        <div>
          <div style={{ fontSize: "16px", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: "12px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>{t("home.footer.brand")}</div>
          <div style={{ fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#71717a", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
            {t("home.footer.copy")}
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 40px", justifyContent: "center" }}>
          {[t("home.footer.privacy"), t("home.footer.terms"), t("home.footer.architecture"), t("home.footer.github")].map((l) => (
            <span
              key={l}
              style={{ fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(113,113,122,0.78)", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function QuantumLimitedHome() {
  return (
    <>
      <SiteHeader active={null} />
      <main style={{ position: "relative", zIndex: 2, background: "transparent", paddingTop: "var(--site-header-offset, 78px)" }}>
        <HeroSection />
        <CompetenciesSection />
        <MethodologySection />
        <TrustLogosSection />
        <ContactSection />
        <Footer />
      </main>

      <style>{`
        .home-micro-radial {
          background-image: radial-gradient(circle, rgba(172, 137, 126, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .home-blueprint {
          background-image:
            linear-gradient(rgba(255, 85, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 85, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        html.reveal-enabled .home-depth-reveal[data-reveal]:not([data-reveal-visible="true"]) {
          opacity: 0;
          transform: translateY(32px) scale(0.975);
          filter: blur(10px);
        }
        html.reveal-enabled .home-depth-reveal[data-reveal] {
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
          will-change: opacity, transform, filter;
        }
        html.reveal-enabled .home-depth-reveal[data-reveal][data-reveal-visible="true"] {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }
        .home-tech-svg {
          mask-image: linear-gradient(to bottom, black, transparent);
        }
        .home-glass {
          background:
            linear-gradient(160deg, rgba(20, 16, 16, 0.68), rgba(12, 12, 12, 0.5)),
            radial-gradient(circle at top right, rgba(255,85,0,0.08), transparent 40%);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 85, 0, 0.16);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            background 0.35s ease;
        }
        .home-glass:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 85, 0, 0.38);
          background:
            linear-gradient(160deg, rgba(26, 20, 19, 0.78), rgba(15, 15, 15, 0.62)),
            radial-gradient(circle at top right, rgba(255,85,0,0.14), transparent 42%);
          box-shadow:
            0 18px 44px rgba(0,0,0,0.26),
            0 0 0 1px rgba(255,85,0,0.08),
            0 0 36px rgba(255,85,0,0.08);
        }
        @keyframes home-scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .home-scan-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff5500, transparent);
          z-index: 3;
          pointer-events: none;
          animation: home-scan 4s linear infinite;
        }
        @keyframes home-pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .home-pulse-dot {
          animation: home-pulse-dot 2s ease-in-out infinite;
        }
        .home-feature-card:hover .home-gear-icon {
          transform: rotate(12deg);
        }
        .home-gear-icon {
          display: inline-block;
          transition: transform 0.45s ease;
        }
        .home-side-card:hover .home-side-icon {
          opacity: 1 !important;
          transform: scale(1.08);
        }
        .home-side-icon {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        @keyframes home-trust-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .home-trust-marquee-track {
          overflow: hidden;
          width: 100%;
        }
        .home-trust-marquee-inner {
          display: flex;
          gap: 56px;
          width: max-content;
          animation: home-trust-marquee 30s linear infinite;
        }
        .home-trust-marquee-item {
          transition: color 0.5s ease;
        }
        .home-trust-marquee-inner:hover {
          animation-play-state: paused;
        }
        .home-trust-marquee-inner:hover .home-trust-marquee-item {
          color: rgba(226,226,226,0.85);
        }
        .home-start-dev:hover {
          filter: brightness(1.04);
          transform: translateY(-2px);
          box-shadow: 0 22px 48px rgba(255,85,0,0.28);
        }
        .home-start-dev:focus-visible {
          outline: 2px solid rgba(255,181,156,0.92);
          outline-offset: 3px;
          box-shadow: 0 0 0 4px rgba(255,85,0,0.18);
        }
        @keyframes home-hero-orb-primary {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.34; }
          50% { transform: translate3d(4%, -3%, 0) scale(1.08); opacity: 0.48; }
        }
        @keyframes home-hero-orb-secondary {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.18; }
          50% { transform: translate3d(-4%, 4%, 0) scale(1.06); opacity: 0.28; }
        }
        @keyframes home-hero-orb-tertiary {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.16; }
          50% { transform: translate3d(3%, -5%, 0) scale(1.12); opacity: 0.32; }
        }
        @keyframes home-hero-beam {
          0%, 100% { opacity: 0.16; transform: translateX(0) skewX(-10deg); }
          50% { opacity: 0.34; transform: translateX(-4%) skewX(-10deg); }
        }
        @keyframes home-hero-grid-drift {
          0% { transform: translate3d(0, 0, 0); opacity: 0.22; }
          50% { transform: translate3d(-10px, 8px, 0); opacity: 0.34; }
          100% { transform: translate3d(0, 0, 0); opacity: 0.22; }
        }
        @keyframes home-hero-scanband {
          0% { transform: translateY(-35%); opacity: 0; }
          18% { opacity: 0.18; }
          50% { opacity: 0.34; }
          82% { opacity: 0.18; }
          100% { transform: translateY(80%); opacity: 0; }
        }
        @keyframes home-hero-protocol-pulse {
          0%, 100% { opacity: 0.82; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.12); }
        }
        @keyframes home-hero-protocol-sheen {
          0% { transform: translateX(-130%); opacity: 0; }
          16% { opacity: 0.22; }
          28% { opacity: 0.35; }
          50%, 100% { transform: translateX(150%); opacity: 0; }
        }
        .home-hero-orb {
          position: absolute;
          border-radius: 999px !important;
          filter: blur(58px);
          will-change: transform, opacity;
        }
        .home-hero-orb-primary {
          width: min(52vw, 680px);
          height: min(52vw, 680px);
          left: -10%;
          top: 4%;
          background: radial-gradient(circle, rgba(255,85,0,0.46) 0%, rgba(255,85,0,0.22) 36%, rgba(255,85,0,0) 74%);
          animation: home-hero-orb-primary 12s ease-in-out infinite;
        }
        .home-hero-orb-secondary {
          width: min(40vw, 520px);
          height: min(40vw, 520px);
          right: 2%;
          bottom: 4%;
          background: radial-gradient(circle, rgba(255,181,156,0.3) 0%, rgba(255,181,156,0.12) 42%, rgba(255,181,156,0) 76%);
          animation: home-hero-orb-secondary 15s ease-in-out infinite;
        }
        .home-hero-orb-tertiary {
          width: min(34vw, 420px);
          height: min(34vw, 420px);
          left: 42%;
          top: 20%;
          background: radial-gradient(circle, rgba(255,85,0,0.22) 0%, rgba(255,85,0,0.09) 38%, rgba(255,85,0,0) 72%);
          animation: home-hero-orb-tertiary 13s ease-in-out infinite;
        }
        .home-hero-beam {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(116deg, rgba(255,85,0,0) 18%, rgba(255,85,0,0.14) 44%, rgba(255,181,156,0.14) 52%, rgba(255,85,0,0) 72%);
          mix-blend-mode: screen;
          animation: home-hero-beam 14s ease-in-out infinite;
        }
        .home-hero-grid {
          position: absolute;
          inset: -10%;
          background-image:
            linear-gradient(rgba(255,85,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,85,0,0.1) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 58%, transparent 86%);
          opacity: 0.22;
          animation: home-hero-grid-drift 14s ease-in-out infinite;
        }
        .home-hero-scanband {
          position: absolute;
          left: -8%;
          right: -8%;
          top: 0;
          height: 42%;
          background: linear-gradient(180deg, rgba(255,85,0,0), rgba(255,85,0,0.1), rgba(255,181,156,0.16), rgba(255,85,0,0));
          filter: blur(16px);
          mix-blend-mode: screen;
          animation: home-hero-scanband 8.5s linear infinite;
        }
        .home-hero-cta-cluster {
          box-shadow:
            0 18px 38px rgba(0,0,0,0.24),
            inset 0 1px 0 rgba(255,255,255,0.04);
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }
        .home-hero-cta-cluster:hover {
          transform: translateY(-3px);
          border-color: rgba(255,85,0,0.26) !important;
          background: linear-gradient(160deg, rgba(16,16,16,0.56), rgba(12,12,12,0.28)) !important;
          box-shadow:
            0 22px 44px rgba(0,0,0,0.28),
            0 0 30px rgba(255,85,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .home-hero-protocol-dot {
          animation: home-hero-protocol-pulse 2.2s ease-in-out infinite;
        }
        .home-hero-protocol-sheen {
          position: absolute;
          inset: -20% auto -20% -30%;
          width: 34%;
          background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,181,156,0.26), rgba(255,255,255,0));
          transform: skewX(-18deg);
          animation: home-hero-protocol-sheen 5.6s ease-in-out infinite;
          pointer-events: none;
        }
        .home-feature-card:hover .home-schema-btn {
          background: rgba(255,85,0,0.22) !important;
          color: #fff !important;
          border-color: rgba(255,181,156,0.34) !important;
          box-shadow: 0 12px 28px rgba(255,85,0,0.12);
        }
        .home-schema-btn:hover {
          background: rgba(255,85,0,0.25) !important;
          color: #fff !important;
        }
        .home-init-project:hover {
          filter: brightness(1.08);
          box-shadow: 0 18px 36px rgba(255,85,0,0.18);
        }
        .home-contact-panel {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .home-contact-panel:hover {
          transform: translateY(-3px);
          border-color: rgba(255,85,0,0.22) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.18), 0 0 34px rgba(255,85,0,0.06);
        }
        .home-footer-link:hover {
          color: #ff5500 !important;
        }
        @media (min-width: 1024px) {
          .home-comp-grid > div:first-child { grid-column: span 7 !important; }
          .home-side-stack { grid-column: span 5 !important; }
        }
        @media (max-width: 900px) {
          .home-hero-inner {
            padding-top: 24px !important;
            padding-bottom: 40px !important;
          }
          .home-hero-cta-row {
            gap: 24px !important;
          }
          .home-comp-grid {
            gap: 20px !important;
          }
          .home-competencies-inner > div:first-child {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .home-competencies-inner > div:first-child > div:last-child {
            text-align: left !important;
            max-width: 100% !important;
          }
          .home-method-grid {
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .home-hero-orb {
            filter: blur(38px);
          }
          .home-hero-orb-primary {
            width: 76vw;
            height: 76vw;
            left: -12%;
            top: 14%;
          }
          .home-hero-orb-secondary {
            width: 60vw;
            height: 60vw;
            right: -10%;
            bottom: 12%;
          }
          .home-hero-orb-tertiary {
            width: 48vw;
            height: 48vw;
            left: 34%;
            top: 26%;
          }
          .home-hero-grid {
            background-size: 52px 52px;
            opacity: 0.18;
          }
          .home-hero-scanband {
            height: 34%;
          }
          .home-hero-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 20px !important;
          }
          .home-hero-cta-cluster {
            align-self: stretch !important;
            min-width: 0 !important;
            padding: 14px !important;
          }
          .home-start-dev {
            width: 100% !important;
            padding: 17px 20px !important;
          }
          .home-hero-protocol {
            justify-content: center !important;
          }
          .home-footer-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
        }
        @media (max-width: 430px) {
          .home-hero-inner {
            padding-top: 18px !important;
            padding-bottom: 32px !important;
          }
          .home-hero-cta-cluster {
            gap: 12px !important;
          }
          .home-hero-protocol {
            font-size: 9px !important;
            letter-spacing: 0.16em !important;
            padding: 9px 10px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .home-hero-orb-primary,
          .home-hero-orb-secondary,
          .home-hero-orb-tertiary,
          .home-hero-beam,
          .home-hero-grid,
          .home-hero-scanband,
          .home-hero-protocol-sheen,
          .home-hero-protocol-dot {
            animation: none !important;
          }
          html.reveal-enabled .home-depth-reveal[data-reveal],
          html.reveal-enabled .home-depth-reveal[data-reveal][data-reveal-visible="true"] {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
          .home-glass:hover,
          .home-contact-panel:hover,
          .home-hero-cta-cluster:hover {
            transform: none !important;
          }
          .home-start-dev:hover {
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}
