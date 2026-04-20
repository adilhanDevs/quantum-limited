"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";

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

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAAxclwxqWLrdG100nf-QYWrq7kwBiyM3sks1Fb9VF6GKupN6p1RpgoHnb0Kqy0GCqL19IwNnWAQYaV1nir4zEwxunl9NnGx3yE7mpbW_czmo0xlCAgQLUkahySS_Kl7wJZTgB7_86aIVGRWx9L7VsLe5-bI2T5Shusf0BIytQUBRfgCjtb-OffL-X9TKL1SJ0H1Adf-658_bbvwRuYJEbd85UKSD4lMH60qvZinb8FRlZYKluFRdWhOnEv4M8uPQ8Y4CukrcbJdVs";

const METHODOLOGY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWzHSFIp4T9U3KZXG4D44r6WOzXQFA4oGUfAU0KkO5BGnOwhyYq99a6iXtYoEL6Psv2TyMUNk1tKbuNdCkzCnDDUDak1UfrytE13OTu4ZqiBI-PRyMtdq4_HgODq7wgD5m5EwQtoDpFeCuRjtsMekQ_mt8K_EXh6VjPUd2AnWmqyNvR8LbdaB02TQp4LqeOMpT-mifJtgghFyHrg0YEVGcytVGv1Yue1d94m4kCNSZGYM8xrVdSbsFpTAtBGAHA6PKTBQUvKzR8D8";

const TRUST_LOGOS = [
  "TECH_CORP",
  "CYBER-DYNAMICS",
  "APEX_SYSTEMS",
  "VOID.LOGIC",
  "NEURAL_SYNC",
  "OMNI-CLOUD",
  "VERTEX_SOLUTIONS",
];

const SECTION_TINT = "rgba(10,10,10,0.16)";

function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "clamp(520px, 88dvh, 921px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: SECTION_TINT,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "transparent",
          }}
        />
      </div>

      <div className="home-hero-inner" style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px) clamp(48px, 8vw, 80px)", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <span style={{ width: "48px", height: "1px", background: T.primary }} />
          <span
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: T.primary,
              textTransform: "uppercase",
            }}
          >
            Precision Software Systems
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(48px, 9vw, 10rem)",
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Engineering
          <br />
          The Future
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-end",
            gap: "48px",
          }}
          className="home-hero-cta-row"
        >
          <p
            style={{
              flex: "1 1 280px",
              maxWidth: "420px",
              color: T.onSurfaceVar,
              fontWeight: 300,
              lineHeight: 1.65,
              fontSize: "18px",
              fontStyle: "italic",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              margin: 0,
            }}
          >
            Technical architecture for visionaries. We build high-performance systems where speed meets architectural
            integrity.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link
              href="#contact"
              style={{
                background: T.primary,
                color: "#ffffff",
                padding: "20px 40px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontSize: "15px",
                textDecoration: "none",
                display: "inline-block",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                transition: "filter 0.2s, transform 0.15s",
              }}
              className="home-start-dev"
            >
              Start Development
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: T.secondary,
                textTransform: "uppercase",
                fontWeight: 700,
                opacity: 0.5,
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                terminal
              </span>
              EST. 2024 / PROTOCOL ALPHA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompetenciesSection() {
  return (
    <section
      id="services"
      className="home-blueprint home-micro-radial home-competencies"
      style={{
        position: "relative",
        padding: "clamp(64px, 12vw, 120px) clamp(16px, 4vw, 32px)",
        background: SECTION_TINT,
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
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
                SYSTEM_MODULE:04 // CAPABILITIES
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
              Technical <span style={{ color: T.primary }}>Competencies</span>
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
            [01] ANALYSIS_PROTOCOL
            <br />
            [02] ARCHITECTURE_DESIGN
            <br />
            [03] DEPLOYMENT_STREAM
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
          {/* Featured card */}
          <div className="home-feature-card home-glass" style={{ gridColumn: "span 12", position: "relative", overflow: "hidden", padding: "1px" }}>
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
                    Custom <span style={{ color: T.primary }}>Software</span>
                    <br />
                    Engineering
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
                    End-to-end engineering of proprietary systems designed for extreme scale and high-frequency
                    performance requirements. Our solutions are built with atomic precision and mathematical integrity.
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
                    <span style={{ color: T.primary, display: "block", marginBottom: "4px" }}>STATUS</span>
                    <span style={{ color: "#fff" }}>OPERATIONAL</span>
                  </div>
                  <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "10px", letterSpacing: "0.16em" }}>
                    <span style={{ color: T.primary, display: "block", marginBottom: "4px" }}>LATENCY</span>
                    <span style={{ color: "#fff" }}>0.002MS</span>
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
                  VIEW SCHEMA_01
                </Link>
              </div>
            </div>
          </div>

          {/* Side stack */}
          <div style={{ gridColumn: "span 12", display: "flex", flexDirection: "column", gap: "32px" }} className="home-side-stack">
            {[
              {
                title: (
                  <>
                    Cloud <span style={{ color: T.primary }}>Architecture</span>
                  </>
                ),
                body: "Redundant, distributed infrastructure deployment optimized for global availability and zero-latency access across all nodes.",
                icon: "hub",
                tag: "INFRA_PROTOCOL.v2",
                scanDelay: "1.5s",
              },
              {
                title: (
                  <>
                    Neural <span style={{ color: T.primary }}>Integration</span>
                  </>
                ),
                body: "Seamless neural network implementation for automated decision-making and predictive analytics at the edge.",
                icon: "memory",
                tag: "NEURAL_SYNC_ACTIVE",
                scanDelay: "3s",
              },
            ].map((card) => (
              <div key={card.tag} className="home-glass home-side-card" style={{ position: "relative", overflow: "hidden", padding: "1px", flex: 1 }}>
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
  return (
    <section
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
        <div>
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
            The Methodology
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
            Precision is
            <br />
            <span style={{ color: T.primary }}>Non-Negotiable</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "520px" }}>
            <div style={{ borderLeft: `4px solid ${T.primary}`, paddingLeft: "22px", paddingTop: "4px", paddingBottom: "4px" }}>
              <p style={{ fontSize: "19px", fontWeight: 500, color: "#fff", marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Atomic Commit Frequency</p>
              <p style={{ color: T.onSurfaceVar, lineHeight: 1.65, margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                We maintain a relentless development cycle where every line of code is peer-reviewed and stress-tested before deployment.
              </p>
            </div>
            <div style={{ borderLeft: `4px solid ${T.surfaceHighest}`, paddingLeft: "22px", paddingTop: "4px", paddingBottom: "4px" }}>
              <p style={{ fontSize: "19px", fontWeight: 500, color: "#fff", marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Mathematical Integrity</p>
              <p style={{ color: T.onSurfaceVar, lineHeight: 1.65, margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                Our architecture is built on formal verification methods to ensure security and predictability at every scale.
              </p>
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ aspectRatio: "1", background: "rgba(10,10,10,0.18)", border: "1px solid rgba(92,64,55,0.2)", padding: "12px", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={METHODOLOGY_IMG} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.75)" }} />
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
                System Uptime Protocol
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustLogosSection() {
  const loop = [...TRUST_LOGOS, ...TRUST_LOGOS];
  return (
    <section style={{ padding: "72px 0", background: SECTION_TINT }}>
      <div style={{ padding: "0 32px 28px", maxWidth: "1440px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: T.secondary, fontWeight: 700, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Trusted by Industry Leaders</p>
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
  const [form, setForm] = useState({ name: "", email: "", service: "", requirements: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const border = (f: string) => `2px solid ${focused === f ? T.primary : "rgba(92,64,55,0.35)"}`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "clamp(64px, 10vw, 96px) clamp(16px, 4vw, 32px)", background: SECTION_TINT }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "56px" }} className="home-contact-grid">
        <div>
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
            Start a <span style={{ color: T.primary }}>Project</span>
          </h2>
          <p style={{ color: T.onSurfaceVar, fontSize: "17px", lineHeight: 1.65, marginBottom: "40px", maxWidth: "420px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
            Ready to deploy high-precision software? Define your requirements and our lead architect will reach out within 24 hours.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,10,10,0.22)", border: "1px solid rgba(255,85,0,0.2)", color: T.primary }}>
                <span className="material-symbols-outlined">mail</span>
              </span>
              <div>
                <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: T.secondary, fontWeight: 700, margin: "0 0 4px 0", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Inquiries</p>
                <p style={{ color: "#fff", fontWeight: 500, margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>engineering@quantumlimited.io</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,10,10,0.22)", border: "1px solid rgba(255,85,0,0.2)", color: T.primary }}>
                <span className="material-symbols-outlined">location_on</span>
              </span>
              <div>
                <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: T.secondary, fontWeight: 700, margin: "0 0 4px 0", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Node 01</p>
                <p style={{ color: "#fff", fontWeight: 500, margin: 0, fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Zurich, CH / Remote</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "rgba(10,10,10,0.2)", padding: "40px", border: "1px solid rgba(92,64,55,0.12)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: "rgba(255,85,0,0.45)" }} />
          {submitted ? (
            <p style={{ color: T.onSurfaceVar, textAlign: "center", padding: "40px 0", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Transmission received. We will respond within 24 hours.</p>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "28px", paddingLeft: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: focused === "name" ? T.primary : T.secondary, fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Client Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter name"
                    style={{ width: "100%", border: "none", borderBottom: border("name"), background: "transparent", color: "#fff", padding: "8px 0", outline: "none", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: focused === "email" ? T.primary : T.secondary, fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter email"
                    style={{ width: "100%", border: "none", borderBottom: border("email"), background: "transparent", color: "#fff", padding: "8px 0", outline: "none", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: focused === "service" ? T.primary : T.secondary, fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Service Interest</label>
                <select
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
                  <option value="">Select a service...</option>
                  <option value="custom">Custom Development</option>
                  <option value="cloud">Cloud Engineering</option>
                  <option value="ai">AI Integration</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: focused === "requirements" ? T.primary : T.secondary, fontWeight: 700, marginBottom: "8px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>Technical Requirements</label>
                <textarea
                  rows={4}
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  onFocus={() => setFocused("requirements")}
                  onBlur={() => setFocused(null)}
                  placeholder="Briefly describe your project goals"
                  style={{ width: "100%", border: "none", borderBottom: border("requirements"), background: "transparent", color: "#fff", padding: "8px 0", outline: "none", resize: "none", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                />
              </div>
              <button
                type="submit"
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
                }}
                className="home-init-project"
              >
                Initialize Project
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
          <div style={{ fontSize: "16px", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: "12px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>QUANTUM LIMITED</div>
          <div style={{ fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#71717a", fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
            {"\u00a9"} 2024 QUANTUM LIMITED. PRECISION ENGINEERED.
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 40px", justifyContent: "center" }}>
          {["Privacy Policy", "Terms of Service", "Architecture", "GitHub"].map((l) => (
            <Link key={l} href="#" style={{ fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#71717a", textDecoration: "none", fontFamily: "var(--font-inter, Inter, sans-serif)" }} className="home-footer-link">
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function QuantumLimitedHome() {
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const [videoDuration, setVideoDuration] = useState(1);
  const targetTimeRef = useRef(0);
  const smoothedTargetTimeRef = useRef(0);

  useEffect(() => {
    const video = backgroundVideoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        setVideoDuration(video.duration);
      }
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", onLoadedMetadata);
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    let raf = 0;
    let lastTs = 0;
    const video = backgroundVideoRef.current;
    if (!video) return;

    const readScrollTarget = () => {
      const doc = document.documentElement;
      const scrollable = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      targetTimeRef.current = progress * videoDuration;
    };

    const animateTowardsTarget = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;

      // Step 1: smooth the raw scroll target to reduce wheel/touch spikes.
      const targetFollow = 1 - Math.exp(-dt / 0.14);
      smoothedTargetTimeRef.current += (targetTimeRef.current - smoothedTargetTimeRef.current) * targetFollow;

      // Step 2: smoothly move video currentTime toward smoothed target.
      const diff = smoothedTargetTimeRef.current - video.currentTime;

      // Limit catch-up speed to avoid hard jumps on very fast scroll flicks.
      const maxSeekSpeedPerSecond = Math.max(videoDuration * 1.15, 3);
      const maxStep = maxSeekSpeedPerSecond * dt;
      const nextStep = Math.sign(diff) * Math.min(Math.abs(diff), maxStep);

      if (Math.abs(diff) > 0.004) {
        video.currentTime = video.currentTime + nextStep;
      }

      raf = window.requestAnimationFrame(animateTowardsTarget);
    };

    const onScrollOrResize = () => {
      readScrollTarget();
    };

    readScrollTarget();
    smoothedTargetTimeRef.current = targetTimeRef.current;
    raf = window.requestAnimationFrame(animateTowardsTarget);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [videoDuration]);

  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <video
          ref={backgroundVideoRef}
          src="/Hero.mp4"
          muted
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.34,
            filter: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(6,6,6,0.06)",
          }}
        />
      </div>
      <SiteHeader active={null} />
      <main style={{ position: "relative", zIndex: 2, background: "transparent", paddingTop: "78px" }}>
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
        .home-tech-svg {
          mask-image: linear-gradient(to bottom, black, transparent);
        }
        .home-glass {
          background: linear-gradient(160deg, rgba(16, 16, 16, 0.18), rgba(16, 16, 16, 0.12));
          backdrop-filter: blur(1px);
          border: 1px solid rgba(255, 85, 0, 0.2);
        }
        .home-glass:hover {
          border-color: rgba(255, 85, 0, 0.35);
          box-shadow: 0 0 30px rgba(255, 85, 0, 0.06);
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
          filter: brightness(1.08);
        }
        .home-schema-btn:hover {
          background: rgba(255,85,0,0.25) !important;
          color: #fff !important;
        }
        .home-init-project:hover {
          filter: brightness(1.08);
        }
        .home-footer-link:hover {
          color: #ff5500 !important;
        }
        @media (min-width: 1024px) {
          .home-comp-grid > div:first-child { grid-column: span 7 !important; }
          .home-side-stack { grid-column: span 5 !important; }
        }
        @media (max-width: 900px) {
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
          .home-hero-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .home-footer-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
        }
      `}</style>
    </>
  );
}
