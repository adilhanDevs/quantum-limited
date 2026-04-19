"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";

/* ─────────────────────────────────────────────────────────────────
   DESIGN TOKENS (inline for zero extra CSS specificity battles)
───────────────────────────────────────────────────────────────── */
const T = {
  surface:            "#131313",
  surfaceLow:         "#1b1b1b",
  surfaceContainer:   "#1f1f1f",
  surfaceHigh:        "#2a2a2a",
  surfaceHighest:     "#353535",
  onSurface:          "#e2e2e2",
  onSurfaceVar:       "#c9b0a8",
  primary:            "#ffb59c",
  primaryCtn:         "#ff5500",
  onPrimary:          "#390c00",
  outline:            "#ac897e",
  outlineVar:         "#5c4037",
};

/* ─────────────────────────────────────────────────────────────────
   REUSABLE PRIMITIVES
───────────────────────────────────────────────────────────────── */

/** Thin label — all-caps, spaced letters */
function Label({ children, color = T.onSurfaceVar }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color,
      }}
    >
      {children}
    </span>
  );
}

/** Orange accent line */
function AccentLine({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      style={{
        background: T.primaryCtn,
        width:  vertical ? "2px"  : "40px",
        height: vertical ? "40px" : "2px",
        flexShrink: 0,
      }}
    />
  );
}

/** Section wrapper */
function Section({
  children,
  bg = T.surface,
  id,
  style,
}: {
  children: React.ReactNode;
  bg?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      id={id}
      style={{
        background: bg,
        width: "100%",
        padding: "96px 0",
        ...style,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        {children}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────────── */
function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="grid-texture"
      style={{
        minHeight: "100vh",
        background: T.surface,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
        paddingTop: "78px",
      }}
    >
      {/* Scan-line effect */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${T.primaryCtn}40, transparent)`,
          animation: "scan-line 8s linear infinite",
          pointerEvents: "none",
        }}
      />

      {/* Ambient orange glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${T.primaryCtn}15 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Top-right system status */}
      <div
        style={{
          position: "absolute",
          top: "96px",
          right: "48px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 0.6s",
        }}
      >
        {[
          ["NODE", "01 — ZRH/REMOTE"],
          ["STATUS", "OPERATIONAL"],
          ["UPTIME", "99.99%"],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Label color={T.outlineVar}>{k}</Label>
            <Label color={T.onSurfaceVar}>{v}</Label>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px 96px",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}
        >
          <AccentLine />
          <Label>Digital Architecture / v2.0</Label>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            color: T.onSurface,
            maxWidth: "820px",
            marginBottom: "32px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          Engineering<br />
          <span style={{ color: T.primaryCtn }}>The Future</span>
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontSize: "18px",
            fontWeight: 400,
            color: T.onSurfaceVar,
            maxWidth: "520px",
            lineHeight: 1.7,
            marginBottom: "48px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s",
          }}
        >
          Technical architecture for visionaries. We build high-performance
          systems where speed meets architectural integrity.
        </p>

        {/* CTA row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}
        >
          <Link
            href="#contact"
            id="hero-cta-primary"
            style={{
              background: `linear-gradient(135deg, ${T.primaryCtn}, #c74000)`,
              color: T.onPrimary,
              padding: "16px 40px",
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textDecoration: "none",
              display: "inline-block",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            START A PROJECT
          </Link>

          <Link
            href="/services"
            id="hero-cta-secondary"
            style={{
              color: T.onSurface,
              padding: "16px 40px",
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              border: `1px solid rgba(92,64,55,0.35)`,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = T.primaryCtn;
              (e.currentTarget as HTMLElement).style.color = T.primaryCtn;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(92,64,55,0.35)";
              (e.currentTarget as HTMLElement).style.color = T.onSurface;
            }}
          >
            VIEW SERVICES
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom ticker */}
      <div
        style={{
          borderTop: `1px solid rgba(92,64,55,0.15)`,
          background: T.surfaceContainer,
          padding: "16px 48px",
          display: "flex",
          gap: "48px",
          overflowX: "auto",
        }}
      >
        {["Custom Software", "Cloud Architecture", "Neural Integration", "Secure Systems", "Data Pipelines"].map((s) => (
          <span
            key={s}
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: T.outlineVar,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   COMPETENCIES SECTION
───────────────────────────────────────────────────────────────── */
const competencies = [
  {
    id: "comp-custom",
    index: "01",
    title: "Custom Software Engineering",
    body: "End-to-end engineering of proprietary systems designed for extreme scale and high-frequency performance requirements. Our solutions are built with atomic precision and mathematical integrity.",
    tags: ["Rust", "Go", "TypeScript", "C++"],
  },
  {
    id: "comp-cloud",
    index: "02",
    title: "Cloud Architecture",
    body: "Redundant, distributed infrastructure deployment optimized for global availability and zero-latency access across all nodes. Multi-region failover is built-in, not bolted on.",
    tags: ["AWS", "GCP", "Terraform", "K8s"],
  },
  {
    id: "comp-neural",
    index: "03",
    title: "Neural Integration",
    body: "Seamless neural network implementation for automated decision-making and predictive analytics at the edge. Models trained on proprietary datasets yield non-replicable advantages.",
    tags: ["PyTorch", "CUDA", "ONNX", "MLOps"],
  },
];

function CompetencyCard({ item, index }: { item: typeof competencies[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={item.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? T.surfaceHigh : T.surfaceLow,
        padding: "40px",
        transition: "background 0.3s ease",
        animationDelay: `${index * 0.12}s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Index */}
      <div
        style={{
          position: "absolute",
          top: "32px",
          right: "32px",
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "48px",
          fontWeight: 700,
          color: `rgba(92,64,55,0.18)`,
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}
      >
        {item.index}
      </div>

      <div
        style={{
          width: "32px",
          height: "2px",
          background: hovered ? T.primaryCtn : T.outlineVar,
          marginBottom: "24px",
          transition: "background 0.3s",
        }}
      />

      <h3
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "22px",
          fontWeight: 600,
          color: T.onSurface,
          marginBottom: "16px",
          lineHeight: 1.2,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "15px",
          color: T.onSurfaceVar,
          lineHeight: 1.75,
          marginBottom: "32px",
        }}
      >
        {item.body}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {item.tags.map((t) => (
          <span
            key={t}
            style={{
              background: T.surfaceHighest,
              color: T.onSurfaceVar,
              padding: "4px 12px",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function CompetenciesSection() {
  return (
    <Section id="services" bg={T.surface}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <AccentLine />
            <Label>Technical Competencies</Label>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: T.onSurface,
              letterSpacing: "-0.02em",
              maxWidth: "480px",
              lineHeight: 1.05,
            }}
          >
            What We<br />
            <span style={{ color: T.primaryCtn }}>Engineer</span>
          </h2>
        </div>

        <p
          style={{
            maxWidth: "320px",
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontSize: "15px",
            color: T.onSurfaceVar,
            lineHeight: 1.7,
            textAlign: "right",
          }}
        >
          Three core disciplines. One engineering standard:
          atomic precision at every layer of the stack.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2px",
        }}
      >
        {competencies.map((c, i) => (
          <CompetencyCard key={c.id} item={c} index={i} />
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   METHODOLOGY SECTION
───────────────────────────────────────────────────────────────── */
const methodSteps = [
  {
    id: "method-01",
    step: "01",
    title: "Requirement Distillation",
    body: "We begin with a brutal clarity exercise. Every vague requirement is distilled into a binary: measurable or dismissed.",
  },
  {
    id: "method-02",
    step: "02",
    title: "Architecture Blueprint",
    body: "System diagrams are created using formal notation. No whiteboard sketches — only signed-off, version-controlled specs.",
  },
  {
    id: "method-03",
    step: "03",
    title: "Atomic Development",
    body: "Code is delivered in atomic commits. Peer review is mandatory. Every merge is a contract signed by two engineers.",
  },
  {
    id: "method-04",
    step: "04",
    title: "Stress Verification",
    body: "Systems are load-tested at 10× projected capacity before any production deployment. There are no surprises at scale.",
  },
];

function MethodologySection() {
  return (
    <Section id="process" bg={T.surfaceLow}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left col: heading */}
        <div style={{ position: "sticky", top: "120px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <AccentLine />
            <Label>The Methodology</Label>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(32px, 3.5vw, 52px)",
              fontWeight: 700,
              color: T.onSurface,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: "32px",
            }}
          >
            Precision Is<br />
            <span style={{ color: T.primaryCtn }}>Non-Negotiable</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "15px",
              color: T.onSurfaceVar,
              lineHeight: 1.75,
              marginBottom: "48px",
              maxWidth: "400px",
            }}
          >
            Our development process eliminates ambiguity at every stage.
            From specification to deployment, every phase has a defined
            entry criterion and signed-off exit condition.
          </p>

          {/* Tech tags */}
          <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
            {["Formal Verification", "Zero-Downtime Deploy", "Immutable Infra"].map((t) => (
              <span
                key={t}
                style={{
                  background: T.surfaceHighest,
                  color: T.onSurfaceVar,
                  padding: "8px 16px",
                  fontSize: "11px",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right col: steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {methodSteps.map((s, i) => (
            <MethodStep key={s.id} item={s} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function MethodStep({ item, index }: { item: typeof methodSteps[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      id={item.id}
      style={{
        background: open ? T.surfaceContainer : T.surfaceHighest,
        padding: "32px",
        cursor: "pointer",
        transition: "background 0.25s ease",
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "12px",
              fontWeight: 600,
              color: T.primaryCtn,
              letterSpacing: "0.08em",
            }}
          >
            {item.step}
          </span>
          <h3
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "17px",
              fontWeight: 600,
              color: T.onSurface,
            }}
          >
            {item.title}
          </h3>
        </div>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
            color: T.onSurfaceVar,
            flexShrink: 0,
          }}
        >
          <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>

      {open && (
        <p
          style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontSize: "14px",
            color: T.onSurfaceVar,
            lineHeight: 1.75,
            marginTop: "20px",
            paddingLeft: "34px",
            borderLeft: `2px solid ${T.primaryCtn}`,
          }}
        >
          {item.body}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   STATS / TRUST SECTION
───────────────────────────────────────────────────────────────── */
const stats = [
  { id: "stat-uptime",    value: "99.99%", label: "System Uptime Protocol",    sub: "12-month trailing avg" },
  { id: "stat-commits",  value: "∞",      label: "Atomic Commit Frequency",   sub: "Every line peer-reviewed" },
  { id: "stat-clients",  value: "40+",    label: "Trusted Industry Leaders",   sub: "Across 14 verticals" },
  { id: "stat-latency",  value: "<2ms",   label: "P99 Response Target",        sub: "Global edge deployment" },
];

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="clients"
      ref={ref}
      className="grid-texture"
      style={{
        background: T.surface,
        borderTop: `1px solid rgba(92,64,55,0.12)`,
        borderBottom: `1px solid rgba(92,64,55,0.12)`,
        padding: "80px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "64px" }}>
          <AccentLine />
          <Label>Mathematical Integrity</Label>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
        >
          {stats.map((s, i) => (
            <div
              id={s.id}
              key={s.id}
              style={{
                background: T.surfaceLow,
                padding: "40px 32px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 700,
                  color: T.primaryCtn,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: T.onSurface,
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  fontSize: "12px",
                  color: T.onSurfaceVar,
                  letterSpacing: "0.02em",
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CONTACT / FORM SECTION
───────────────────────────────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `2px solid ${focused === field ? T.primaryCtn : "rgba(92,64,55,0.3)"}`,
    color: T.onSurface,
    fontFamily: "var(--font-inter, Inter, sans-serif)",
    fontSize: "15px",
    padding: "14px 0",
    outline: "none",
    transition: "border-color 0.2s",
  });

  return (
    <Section id="contact" bg={T.surfaceLow}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "96px",
          alignItems: "start",
        }}
      >
        {/* Left info */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <AccentLine />
            <Label>Start a Project</Label>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: T.onSurface,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            Ready To<br />
            <span style={{ color: T.primaryCtn }}>Deploy?</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "16px",
              color: T.onSurfaceVar,
              lineHeight: 1.7,
              marginBottom: "56px",
              maxWidth: "380px",
            }}
          >
            Define your requirements and our lead architect will reach
            out within 24&nbsp;hours. Ready to deploy high-precision software?
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              { label: "Inquiries", value: "engineering@quantumlimited.io" },
              { label: "Node 01",   value: "Zurich, CH / Remote" },
            ].map((c) => (
              <div key={c.label}>
                <Label color={T.outlineVar}>{c.label}</Label>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: T.onSurface,
                    marginTop: "8px",
                  }}
                >
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div style={{ background: T.surface, padding: "48px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: T.primaryCtn,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke={T.onPrimary} strokeWidth="2"/>
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: T.onSurface,
                  marginBottom: "12px",
                }}
              >
                Transmission Received
              </h3>
              <p style={{ color: T.onSurfaceVar, fontSize: "14px" }}>
                Lead architect will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {[
                  { id: "form-name",    field: "name",    label: "Full Name",             type: "text" },
                  { id: "form-email",   field: "email",   label: "Email Address",          type: "email" },
                  { id: "form-budget",  field: "budget",  label: "Project Budget (USD)",   type: "text" },
                ].map(({ id, field, label, type }) => (
                  <div key={field} style={{ position: "relative" }}>
                    <label
                      htmlFor={id}
                      style={{
                        display: "block",
                        fontFamily: "var(--font-inter, Inter, sans-serif)",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: focused === field ? T.primaryCtn : T.outlineVar,
                        marginBottom: "8px",
                        transition: "color 0.2s",
                      }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required
                      value={form[field as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      style={inputStyle(field)}
                    />
                  </div>
                ))}

                {/* Message */}
                <div style={{ position: "relative" }}>
                  <label
                    htmlFor="form-message"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: focused === "message" ? T.primaryCtn : T.outlineVar,
                      marginBottom: "8px",
                      transition: "color 0.2s",
                    }}
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle("message"),
                      resize: "none",
                      display: "block",
                    }}
                  />
                </div>

                <button
                  id="form-submit"
                  type="submit"
                  style={{
                    width: "100%",
                    background: `linear-gradient(135deg, ${T.primaryCtn}, #c74000)`,
                    color: T.onPrimary,
                    padding: "18px",
                    fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    border: "none",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.88";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  Transmit Requirements →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        background: T.surfaceContainer,
        borderTop: `1px solid rgba(92,64,55,0.15)`,
        padding: "64px 0 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "20px",
                fontWeight: 700,
                color: T.onSurface,
                letterSpacing: "-0.01em",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <span style={{ width: "8px", height: "8px", background: T.primaryCtn, display: "inline-block" }} />
              QUANTUM<span style={{ color: T.primaryCtn }}>LIMITED</span>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontSize: "14px",
                color: T.onSurfaceVar,
                lineHeight: 1.7,
                maxWidth: "260px",
              }}
            >
              Technical architecture for visionaries. High-precision systems
              for demanding environments.
            </p>
          </div>

          {/* Links */}
          {[
            { heading: "Product",  links: ["Services", "Process", "Architecture", "Security"] },
            { heading: "Company",  links: ["About", "Clients", "Careers", "Blog"] },
            { heading: "Legal",    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
          ].map((col) => (
            <div key={col.heading}>
              <Label color={T.outlineVar}>{col.heading}</Label>
              <ul style={{ listStyle: "none", marginTop: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      href={l === "Services" ? "/services" : l === "Process" ? "/services#process" : "#"}
                      id={`footer-${l.toLowerCase().replace(/\s+/g, "-")}`}
                      style={{
                        fontFamily: "var(--font-inter, Inter, sans-serif)",
                        fontSize: "14px",
                        color: T.onSurfaceVar,
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = T.primary)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = T.onSurfaceVar)}
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid rgba(92,64,55,0.12)`,
            paddingTop: "32px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "12px",
              color: T.outlineVar,
              letterSpacing: "0.04em",
            }}
          >
            © 2026 QUANTUM LIMITED — ALL RIGHTS RESERVED
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {["GitHub", "LinkedIn", "X/Twitter"].map((s) => (
              <Link
                key={s}
                href="#"
                id={`footer-social-${s.toLowerCase().replace(/\//g, "-")}`}
                style={{
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: T.outlineVar,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = T.primary)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = T.outlineVar)}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────────────────────────── */
export default function QuantumLimitedHome() {
  return (
    <>
      <SiteHeader active={null} />
      <HeroSection />
      <CompetenciesSection />
      <MethodologySection />
      <StatsSection />
      <ContactSection />
      <Footer />

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes scan-line {
          from { transform: translateY(-200px); }
          to   { transform: translateY(100vh); }
        }
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .method-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
