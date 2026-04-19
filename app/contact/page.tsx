"use client";

import React, { useEffect, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";

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
  outlineVar: "rgba(92,64,55,0.3)",
};

const SERVER_ROOM_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAeVeJBm0rxkvJbh-pus8hOy0LmLaJKWu3A-RBBZ0sl_zwbFdvMViZORDoF0y5tYKbxPyHhRKWIi-bSqg5BMa-NcG1go5ROB8mdJYVwV_RhdaNwzl2wKRKldsZ9N2D88RzdhBQrvYpLY3zTNTd4ewMkeAX7YYnF6FSQxzzhNHU4x5qcvu4fFXgLJIkEpaN8riI9hgjizkECHK4MNTFj0jdPzDDadlJ-hALWGwnvrrhGFdeN1UI7nDtZN3E1G2y6GtJS5-gck2YIV5E";

const nodes = [
  {
    id: "NODE_01",
    city: "Zurich",
    icon: "hub",
    lines: ["COORD: 47.3769\u00b0 N, 8.5417\u00b0 E", "SYSTEM: NEURAL CORE HQ", "STATUS: OPERATIONAL [24/7]"],
  },
  {
    id: "NODE_02",
    city: "Singapore",
    icon: "memory",
    lines: ["COORD: 1.3521\u00b0 N, 103.8198\u00b0 E", "SYSTEM: DATA HARVEST HUB", "STATUS: OPERATIONAL [24/7]"],
  },
  {
    id: "NODE_03",
    city: "San Francisco",
    icon: "language",
    lines: ["COORD: 37.7749\u00b0 N, 122.4194\u00b0 W", "SYSTEM: LOGIC IMPLEMENTATION", "STATUS: OPERATIONAL [24/7]"],
  },
];

const PRIORITY_OPTIONS: { value: "" | "alpha" | "beta" | "gamma"; label: string }[] = [
  { value: "", label: "SELECT PRIORITY" },
  { value: "alpha", label: "ALPHA (CRITICAL)" },
  { value: "beta", label: "BETA (HIGH)" },
  { value: "gamma", label: "GAMMA (STANDARD)" },
];

const DROPDOWN_HIGHLIGHT = "#2563eb";
const DROPDOWN_MUTED = "#9ca3af";

export default function ContactPage() {
  const [service, setService] = useState<"neural" | "quantum">("neural");
  const [projectName, setProjectName] = useState("");
  const [scope, setScope] = useState("");
  const [priority, setPriority] = useState<"" | "alpha" | "beta" | "gamma">("");
  const [repo, setRepo] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [priorityMenuOpen, setPriorityMenuOpen] = useState(false);
  const priorityDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (priorityDropdownRef.current && !priorityDropdownRef.current.contains(e.target as Node)) {
        setPriorityMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!priority) {
      setPriorityMenuOpen(true);
      return;
    }
    setSubmitted(true);
  };

  const priorityTriggerLabel =
    PRIORITY_OPTIONS.find((o) => o.value === priority)?.label ?? "SELECT PRIORITY";

  const borderBottom = (field: string) =>
    `2px solid ${focused === field ? T.primaryCtn : "rgba(92,64,55,0.35)"}`;

  return (
    <>
      <SiteHeader active="contact" />
      <main className="contact-main-bg" style={{ minHeight: "100vh", paddingTop: "120px" }}>
        {/* Hero */}
        <section style={{ padding: "0 32px 48px", maxWidth: "1920px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "32px",
              marginBottom: "48px",
            }}
            className="contact-hero-row"
          >
            <div style={{ flex: "1 1 320px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(255,85,0,0.12)",
                  color: T.primaryCtn,
                  padding: "6px 14px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  marginBottom: "20px",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                SYSTEM.INIT()
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "clamp(40px, 7vw, 96px)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Initialize Connection
                <br />
                Protocol
                <span style={{ color: T.primaryCtn }}>_</span>
              </h1>
            </div>
            <div
              style={{
                flex: "0 1 340px",
                color: T.onSurfaceVar,
                fontSize: "17px",
                fontWeight: 300,
                lineHeight: 1.65,
                borderLeft: `1px solid rgba(92,64,55,0.35)`,
                paddingLeft: "32px",
                paddingBottom: "8px",
              }}
              className="contact-hero-aside"
            >
              Bridge the gap between vision and execution. Our engineering team is standing by to analyze your
              technical requirements.
            </div>
          </div>
        </section>

        {/* Form + sidebar */}
        <section style={{ padding: "0 32px 96px", maxWidth: "1920px", margin: "0 auto" }}>
          {submitted ? (
            <div
              style={{
                background: T.surfaceLow,
                border: `1px solid rgba(92,64,55,0.15)`,
                padding: "64px 48px",
                textAlign: "center",
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: T.onSurface,
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                Transmission Received
              </p>
              <p style={{ color: T.onSurfaceVar, fontSize: "15px" }}>Engineering will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
                  gap: "48px",
                  alignItems: "start",
                }}
                className="contact-form-grid"
              >
                {/* Left column */}
                <div style={{ gridColumn: "span 12" }} className="contact-sidebar">
                  <div
                    style={{
                      background: T.surfaceLow,
                      padding: "40px",
                      borderLeft: `4px solid ${T.primaryCtn}`,
                      marginBottom: "32px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#ffffff",
                        textTransform: "uppercase",
                        letterSpacing: "-0.02em",
                        marginBottom: "32px",
                      }}
                    >
                      Transmission Flow
                    </h3>
                    {[
                      { n: "01", title: "Service Selection", sub: "Identify required assets", active: true },
                      { n: "02", title: "Project Blueprint", sub: "Scope definition & goals", active: false },
                      { n: "03", title: "Technical Specs", sub: "Integration parameters", active: false },
                    ].map((step) => (
                      <div
                        key={step.n}
                        style={{
                          display: "flex",
                          gap: "24px",
                          alignItems: "center",
                          marginBottom: step.n !== "03" ? "32px" : 0,
                          opacity: step.active ? 1 : 0.4,
                        }}
                      >
                        <span
                          style={{
                            width: "48px",
                            height: "48px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: step.active ? T.primaryCtn : T.surfaceHighest,
                            color: step.active ? T.onPrimary : "#ffffff",
                            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                            fontWeight: 900,
                            fontSize: "18px",
                            flexShrink: 0,
                          }}
                        >
                          {step.n}
                        </span>
                        <div>
                          <p
                            style={{
                              color: "#ffffff",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              fontSize: "13px",
                              marginBottom: "4px",
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            {step.title}
                          </p>
                          <p
                            style={{
                              color: T.onSurfaceVar,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              letterSpacing: "0.2em",
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            {step.sub}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ position: "relative", overflow: "hidden", background: "#0a0a0a" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={SERVER_ROOM_IMG}
                      alt="Server room"
                      style={{
                        width: "100%",
                        height: "320px",
                        objectFit: "cover",
                        filter: "grayscale(1) brightness(0.55) contrast(1.15)",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, #131313 0%, transparent 55%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "32px",
                      }}
                    >
                      <span
                        style={{
                          color: T.primaryCtn,
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.3em",
                          textTransform: "uppercase",
                          marginBottom: "8px",
                          fontFamily: "var(--font-inter, Inter, sans-serif)",
                        }}
                      >
                        Core Server
                      </span>
                      <h4
                        style={{
                          color: "#ffffff",
                          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                          fontSize: "20px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        Uptime: 99.999%
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Form canvas */}
                <div
                  style={{
                    gridColumn: "span 12",
                    background: T.surfaceLow,
                    padding: "48px",
                    border: `1px solid rgba(92,64,55,0.12)`,
                  }}
                  className="contact-form-canvas"
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                    {/* Step 1 */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          marginBottom: "32px",
                          flexWrap: "wrap",
                          gap: "12px",
                        }}
                      >
                        <h2
                          style={{
                            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                            fontSize: "clamp(22px, 3vw, 28px)",
                            fontWeight: 700,
                            color: "#ffffff",
                            textTransform: "uppercase",
                            letterSpacing: "-0.02em",
                            margin: 0,
                          }}
                        >
                          01 Select Service
                        </h2>
                        <span
                          style={{
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "11px",
                            color: T.primaryCtn,
                          }}
                        >
                          [ STATUS: ACTIVE ]
                        </span>
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                          gap: "16px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setService("neural")}
                          style={{
                            padding: "24px",
                            background: T.surface,
                            textAlign: "left",
                            border:
                              service === "neural"
                                ? `1px solid ${T.primaryCtn}`
                                : "1px solid rgba(92,64,55,0.2)",
                            cursor: "pointer",
                            transition: "border-color 0.2s",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                            <span
                              className="material-symbols-outlined"
                              style={{
                                fontSize: "28px",
                                color: service === "neural" ? T.primaryCtn : T.onSurfaceVar,
                                fontVariationSettings: "'FILL' 1",
                              }}
                            >
                              dataset
                            </span>
                            <span
                              style={{
                                width: "10px",
                                height: "10px",
                                background: service === "neural" ? T.primaryCtn : "transparent",
                                border:
                                  service === "neural" ? "none" : `1px solid rgba(92,64,55,0.35)`,
                              }}
                            />
                          </div>
                          <h4
                            style={{
                              color: "#ffffff",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              fontSize: "14px",
                              marginBottom: "8px",
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            Neural Architecture
                          </h4>
                          <p
                            style={{
                              color: T.onSurfaceVar,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              letterSpacing: "0.18em",
                              lineHeight: 1.6,
                              margin: 0,
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            Design and implementation of complex AI infrastructure.
                          </p>
                        </button>
                        <button
                          type="button"
                          onClick={() => setService("quantum")}
                          style={{
                            padding: "24px",
                            background: "rgba(53,53,53,0.35)",
                            textAlign: "left",
                            border:
                              service === "quantum"
                                ? `1px solid ${T.primaryCtn}`
                                : "1px solid rgba(92,64,55,0.08)",
                            cursor: "pointer",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: "28px", color: T.onSurfaceVar }}
                            >
                              terminal
                            </span>
                            <span
                              style={{
                                width: "10px",
                                height: "10px",
                                background: service === "quantum" ? T.primaryCtn : "transparent",
                                border:
                                  service === "quantum" ? "none" : `1px solid rgba(92,64,55,0.35)`,
                              }}
                            />
                          </div>
                          <h4
                            style={{
                              color: service === "quantum" ? "#ffffff" : T.onSurfaceVar,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              fontSize: "14px",
                              marginBottom: "8px",
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            Quantum Simulation
                          </h4>
                          <p
                            style={{
                              color: T.onSurfaceVar,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              letterSpacing: "0.18em",
                              lineHeight: 1.6,
                              margin: 0,
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            High-fidelity predictive modeling for aerospace and energy.
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div>
                      <h2
                        style={{
                          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                          fontSize: "clamp(22px, 3vw, 28px)",
                          fontWeight: 700,
                          color: "#ffffff",
                          textTransform: "uppercase",
                          marginBottom: "32px",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        02 Project Blueprint
                      </h2>
                      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                        <div style={{ position: "relative", paddingTop: "12px" }}>
                          <label
                            htmlFor="project_name"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              letterSpacing: "0.3em",
                              color: T.primaryCtn,
                              fontWeight: 700,
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            Project Identification
                          </label>
                          <input
                            id="project_name"
                            required
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            onFocus={() => setFocused("project_name")}
                            onBlur={() => setFocused(null)}
                            placeholder="PROJECT CODENAME"
                            style={{
                              width: "100%",
                              background: "transparent",
                              border: "none",
                              borderBottom: borderBottom("project_name"),
                              padding: "16px 0",
                              color: "#ffffff",
                              fontSize: "20px",
                              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                              outline: "none",
                            }}
                          />
                        </div>
                        <div style={{ position: "relative", paddingTop: "12px" }}>
                          <label
                            htmlFor="description"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              letterSpacing: "0.3em",
                              color: T.primaryCtn,
                              fontWeight: 700,
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            Scope Parameters
                          </label>
                          <textarea
                            id="description"
                            required
                            rows={4}
                            value={scope}
                            onChange={(e) => setScope(e.target.value)}
                            onFocus={() => setFocused("description")}
                            onBlur={() => setFocused(null)}
                            placeholder="DESCRIBE THE CORE OBJECTIVES..."
                            style={{
                              width: "100%",
                              background: "transparent",
                              border: "none",
                              borderBottom: borderBottom("description"),
                              padding: "16px 0",
                              color: "#ffffff",
                              fontSize: "15px",
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                              outline: "none",
                              resize: "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div>
                      <h2
                        style={{
                          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                          fontSize: "clamp(22px, 3vw, 28px)",
                          fontWeight: 700,
                          color: "#ffffff",
                          textTransform: "uppercase",
                          marginBottom: "32px",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        03 Technical Specs
                      </h2>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                          gap: "32px",
                        }}
                      >
                        <div
                          ref={priorityDropdownRef}
                          style={{ position: "relative", paddingTop: "12px", zIndex: priorityMenuOpen ? 40 : 1 }}
                        >
                          <label
                            id="priority-label"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              letterSpacing: "0.3em",
                              color: T.primaryCtn,
                              fontWeight: 700,
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            Execution Priority
                          </label>
                          <button
                            type="button"
                            aria-haspopup="listbox"
                            aria-expanded={priorityMenuOpen}
                            aria-labelledby="priority-label"
                            onClick={() => {
                              setPriorityMenuOpen((o) => !o);
                              setFocused("priority");
                            }}
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "12px",
                              background: "transparent",
                              border: "none",
                              borderBottom: `2px solid ${
                                focused === "priority" || priorityMenuOpen ? T.primaryCtn : "rgba(92,64,55,0.35)"
                              }`,
                              padding: "16px 0 14px",
                              color: "#ffffff",
                              fontSize: "13px",
                              textTransform: "uppercase",
                              letterSpacing: "0.14em",
                              cursor: "pointer",
                              outline: "none",
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                              fontWeight: 600,
                            }}
                          >
                            <span style={{ textAlign: "left" }}>{priorityTriggerLabel}</span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden
                              style={{
                                flexShrink: 0,
                                color: "#ffffff",
                                transform: priorityMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                              }}
                            >
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                            </svg>
                          </button>

                          {priorityMenuOpen && (
                            <div
                              role="listbox"
                              aria-labelledby="priority-label"
                              style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                top: "100%",
                                marginTop: "6px",
                                background: "#ffffff",
                                boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
                                border: "1px solid rgba(0,0,0,0.06)",
                              }}
                            >
                              <div
                                style={{
                                  height: "2px",
                                  background: T.primaryCtn,
                                  width: "100%",
                                }}
                              />
                              <div style={{ padding: "4px 0" }}>
                                {PRIORITY_OPTIONS.map((opt) => {
                                  const selected = priority === opt.value;
                                  return (
                                    <button
                                      key={opt.value || "empty"}
                                      type="button"
                                      role="option"
                                      aria-selected={selected}
                                      onClick={() => {
                                        setPriority(opt.value);
                                        setPriorityMenuOpen(false);
                                        setFocused(null);
                                      }}
                                      style={{
                                        width: "100%",
                                        textAlign: "left",
                                        padding: "12px 16px",
                                        border: "none",
                                        cursor: "pointer",
                                        fontFamily: "var(--font-inter, Inter, sans-serif)",
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        background: selected ? DROPDOWN_HIGHLIGHT : "transparent",
                                        color: selected ? "#ffffff" : DROPDOWN_MUTED,
                                        transition: "background 0.15s ease, color 0.15s ease",
                                      }}
                                      onMouseEnter={(e) => {
                                        if (!selected) {
                                          (e.currentTarget as HTMLButtonElement).style.background = "#f4f4f5";
                                          (e.currentTarget as HTMLButtonElement).style.color = "#52525b";
                                        }
                                      }}
                                      onMouseLeave={(e) => {
                                        if (!selected) {
                                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                                          (e.currentTarget as HTMLButtonElement).style.color = DROPDOWN_MUTED;
                                        }
                                      }}
                                    >
                                      {opt.label}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                        <div style={{ position: "relative", paddingTop: "12px" }}>
                          <label
                            htmlFor="repo"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              letterSpacing: "0.3em",
                              color: T.primaryCtn,
                              fontWeight: 700,
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            Data Repository (Optional)
                          </label>
                          <input
                            id="repo"
                            type="text"
                            value={repo}
                            onChange={(e) => setRepo(e.target.value)}
                            onFocus={() => setFocused("repo")}
                            onBlur={() => setFocused(null)}
                            placeholder="GITHUB_REPO_OR_URL"
                            style={{
                              width: "100%",
                              background: "transparent",
                              border: "none",
                              borderBottom: borderBottom("repo"),
                              padding: "16px 0",
                              color: "#ffffff",
                              fontSize: "14px",
                              fontFamily: "ui-monospace, monospace",
                              outline: "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "24px",
                        paddingTop: "16px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "10px",
                          color: T.primaryCtn,
                          textTransform: "uppercase",
                          letterSpacing: "0.2em",
                          maxWidth: "360px",
                          lineHeight: 1.75,
                          margin: 0,
                          fontFamily: "var(--font-inter, Inter, sans-serif)",
                          fontWeight: 600,
                        }}
                      >
                        By executing this protocol, you agree to the Quantum Data Processing Standards.
                      </p>
                      <button
                        type="submit"
                        style={{
                          background: T.primaryCtn,
                          color: T.onPrimary,
                          padding: "20px 40px",
                          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                          fontWeight: 900,
                          fontSize: "15px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          border: "none",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                        className="contact-submit-btn"
                      >
                        Initiate Transmission
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </section>

        {/* Global Nodes */}
        <section
          style={{
            background: T.surfaceLow,
            padding: "96px 32px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ maxWidth: "1920px", margin: "0 auto" }}>
            <div style={{ marginBottom: "56px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 900,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  marginBottom: "12px",
                }}
              >
                Global Nodes
              </h2>
              <p
                style={{
                  color: T.primary,
                  letterSpacing: "0.35em",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                Precision Mapping of Quantum Labs
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "1px",
                background: "rgba(255,255,255,0.04)",
              }}
              className="contact-nodes-grid"
            >
              {nodes.map((n) => (
                <div
                  key={n.id}
                  className="contact-node-card"
                  style={{
                    background: T.surface,
                    padding: "48px",
                    transition: "background 0.25s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "48px" }}>
                    <span
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        fontSize: "11px",
                        color: T.primaryCtn,
                      }}
                    >
                      {n.id}
                    </span>
                    <span
                      className="material-symbols-outlined contact-node-icon"
                      style={{ fontSize: "26px", color: T.onSurfaceVar }}
                    >
                      {n.icon}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                      fontSize: "clamp(28px, 4vw, 36px)",
                      fontWeight: 700,
                      color: "#ffffff",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    {n.city}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      fontFamily: "ui-monospace, monospace",
                      fontSize: "11px",
                      color: T.onSurfaceVar,
                    }}
                  >
                    {n.lines.map((line) => (
                      <p key={line} style={{ margin: 0 }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Direct Link */}
        <section style={{ padding: "96px 32px", maxWidth: "1920px", margin: "0 auto" }}>
          <div
            style={{
              background: T.surfaceHighest,
              border: `1px solid rgba(255,181,156,0.2)`,
              padding: "clamp(32px, 5vw, 64px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: "24px", right: "24px", display: "flex", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", background: T.primaryCtn }} />
              <span style={{ width: "8px", height: "8px", background: T.surfaceLow }} />
              <span style={{ width: "8px", height: "8px", background: T.surfaceLow }} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
              className="contact-terminal-grid"
            >
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                    fontSize: "clamp(28px, 4vw, 36px)",
                    fontWeight: 700,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    marginBottom: "20px",
                  }}
                >
                  Client Direct Link
                </h2>
                <p
                  style={{
                    color: T.onSurfaceVar,
                    lineHeight: 1.75,
                    maxWidth: "420px",
                    marginBottom: "36px",
                    fontSize: "15px",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                  }}
                >
                  Already a part of the ecosystem? Authenticate your credentials to access the high-priority
                  engineering terminal.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  <button
                    type="button"
                    style={{
                      background: "#ffffff",
                      color: "#000000",
                      padding: "16px 28px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "12px",
                      letterSpacing: "0.14em",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                    }}
                    className="contact-portal-btn"
                  >
                    Access Portal
                  </button>
                  <button
                    type="button"
                    style={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#ffffff",
                      background: "transparent",
                      padding: "16px 28px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "12px",
                      letterSpacing: "0.14em",
                      cursor: "pointer",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                    }}
                    className="contact-recover-btn"
                  >
                    Recover Auth_Key
                  </button>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(0,0,0,0.45)",
                  padding: "28px",
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "13px",
                  borderLeft: `2px solid ${T.primaryCtn}`,
                }}
              >
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px", color: T.primaryCtn }}>
                  <span>[SYSTEM]:</span>
                  <span style={{ color: "#ffffff" }}>AWAITING INPUT...</span>
                </div>
                <div style={{ color: T.onSurfaceVar, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p style={{ margin: 0, color: T.primaryCtn, opacity: 0.65 }}>
                    &gt; quantum --authenticate user_id:8819
                  </p>
                  <p style={{ margin: 0 }}>&gt; validating biometric signature...</p>
                  <p style={{ margin: 0 }}>&gt; access granted to high-tier support</p>
                  <p style={{ margin: 0 }}>&gt; engineering team 04 is currently available</p>
                  <div style={{ display: "flex", gap: "4px", marginTop: "12px", alignItems: "center" }}>
                    <span
                      style={{
                        width: "8px",
                        height: "20px",
                        background: T.primaryCtn,
                        animation: "contact-cursor-pulse 1s ease-in-out infinite",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: "#1b1b1b", width: "100%", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div
            style={{
              maxWidth: "1920px",
              margin: "0 auto",
              padding: "64px 48px 48px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
            }}
            className="contact-footer-grid"
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "20px",
                }}
              >
                QUANTUM LIMITED
              </div>
              <p
                style={{
                  color: T.primaryCtn,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  marginBottom: "16px",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                Precision Engineered.
              </p>
              <p
                style={{
                  color: "rgba(156,163,175,0.9)",
                  fontSize: "14px",
                  lineHeight: 1.65,
                  maxWidth: "400px",
                  margin: 0,
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                Advancing the boundaries of technical infrastructure through rigorous logic and uncompromising
                execution.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Privacy Policy", "Terms of Service"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    style={{
                      color: "rgba(156,163,175,0.95)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      textDecoration: "none",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                    }}
                    className="contact-footer-link"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Global Offices", "Technical Specifications"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    style={{
                      color: "rgba(156,163,175,0.95)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      textDecoration: "none",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                    }}
                    className="contact-footer-link"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div
              style={{
                gridColumn: "1 / -1",
                paddingTop: "40px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                color: "rgba(156,163,175,0.85)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              {"\u00a9"} 2024 Quantum Limited. Precision Engineered.
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        .contact-main-bg {
          background-color: ${T.surface};
          background-image:
            linear-gradient(to right, rgba(92, 64, 55, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(92, 64, 55, 0.05) 1px, transparent 1px),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10L90 90M90 10L10 90' stroke='%23ff5708' stroke-opacity='0.03' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23ff5708' stroke-opacity='0.03' stroke-width='0.5'/%3E%3C/svg%3E");
          background-size: 40px 40px, 40px 40px, 100px 100px;
        }
        @keyframes contact-cursor-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .contact-submit-btn:hover {
          filter: brightness(1.08);
        }
        .contact-portal-btn:hover {
          background: ${T.primary} !important;
          color: ${T.onPrimary} !important;
        }
        .contact-recover-btn:hover {
          border-color: ${T.primaryCtn} !important;
        }
        .contact-node-card:hover {
          background: ${T.surfaceContainer} !important;
        }
        .contact-node-card:hover .contact-node-icon {
          color: ${T.primary} !important;
        }
        .contact-footer-link:hover {
          color: #ffffff !important;
        }
        @media (min-width: 1024px) {
          .contact-form-grid .contact-sidebar {
            grid-column: span 4 !important;
          }
          .contact-form-grid .contact-form-canvas {
            grid-column: span 8 !important;
          }
        }
        @media (max-width: 900px) {
          .contact-hero-aside {
            border-left: none !important;
            padding-left: 0 !important;
            padding-top: 16px;
            border-top: 1px solid rgba(92,64,55,0.35);
          }
          .contact-nodes-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
