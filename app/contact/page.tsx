"use client";

import React, { useEffect, useRef, useState } from "react";
import { RemoteImageWithFallback } from "../components/RemoteImageWithFallback";
import { SiteHeader } from "../components/SiteHeader";
import { isValidEmail, type ContactApiResponse } from "../lib/contact";
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
  outlineVar: "rgba(92,64,55,0.3)",
};

const SERVER_ROOM_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAeVeJBm0rxkvJbh-pus8hOy0LmLaJKWu3A-RBBZ0sl_zwbFdvMViZORDoF0y5tYKbxPyHhRKWIi-bSqg5BMa-NcG1go5ROB8mdJYVwV_RhdaNwzl2wKRKldsZ9N2D88RzdhBQrvYpLY3zTNTd4ewMkeAX7YYnF6FSQxzzhNHU4x5qcvu4fFXgLJIkEpaN8riI9hgjizkECHK4MNTFj0jdPzDDadlJ-hALWGwnvrrhGFdeN1UI7nDtZN3E1G2y6GtJS5-gck2YIV5E";

const DROPDOWN_HIGHLIGHT = "rgba(255,85,0,0.16)";
const DROPDOWN_MUTED = "rgba(201,176,168,0.82)";

export default function ContactPage() {
  const { t } = useLanguage();
  const [service, setService] = useState<"neural" | "quantum">("neural");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectName, setProjectName] = useState("");
  const [scope, setScope] = useState("");
  const [priority, setPriority] = useState<"" | "alpha" | "beta" | "gamma">("");
  const [repo, setRepo] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailIsValid = isValidEmail(email.trim());
    const isValid =
      name.trim().length > 1 &&
      emailIsValid &&
      projectName.trim().length > 2 &&
      scope.trim().length > 8 &&
      priority.trim().length > 0;

    if (!emailIsValid) {
      setError(t("common.form_error_invalid_email"));
      return;
    }

    if (!isValid) {
      setError(t("common.form_error_required_priority"));
      setPriorityMenuOpen(true);
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
          source: "contact",
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          service: service.trim(),
          projectName: projectName.trim(),
          scope: scope.trim(),
          priority: priority.trim(),
          repo: repo.trim(),
        }),
      });

      const result = (await response.json()) as ContactApiResponse;
      if (!response.ok || !result.ok) {
        if (!result.ok && result.errorCode === "NOT_CONFIGURED") {
          setError(t("common.form_error_not_configured"));
        } else if (!result.ok && result.errorCode === "INVALID_REQUEST") {
          if (!isValidEmail(email.trim())) {
            setError(t("common.form_error_invalid_email"));
          } else {
            setError(t("common.form_error_required_priority"));
            setPriorityMenuOpen(true);
          }
        } else {
          setError(t("common.form_error_submit"));
        }
        return;
      }

      setSubmitted(true);
    } catch {
      setError(t("common.form_error_submit"));
    } finally {
      setSubmitting(false);
    }
  };

  const priorityTriggerLabel = priority
    ? t(`contact.form.priority.${priority}`)
    : t("contact.form.priority.placeholder");

  const nameInvalid = !!error && name.trim().length <= 1;
  const emailInvalid = !!error && !isValidEmail(email.trim());
  const projectInvalid = !!error && projectName.trim().length <= 2;
  const scopeInvalid = !!error && scope.trim().length <= 8;
  const priorityInvalid = !!error && priority.trim().length === 0;

  const fieldBorder = (field: string, invalid = false) => {
    if (invalid) return `1px solid rgba(255,180,171,0.65)`;
    return focused === field
      ? `1px solid rgba(255,85,0,0.7)`
      : "1px solid rgba(92,64,55,0.32)";
  };

  const fieldLabelColor = (field: string, invalid = false) => {
    if (invalid) return "#ffb4ab";
    return focused === field ? T.primary : "rgba(201,176,168,0.78)";
  };

  return (
    <>
      <SiteHeader active="contact" />
      <main className="contact-main-bg" style={{ minHeight: "100vh", paddingTop: "max(var(--site-header-offset, 78px), clamp(88px, 14vw, 120px))" }}>
        {/* Hero */}
        <section data-reveal style={{ padding: "0 clamp(16px, 4vw, 32px) 48px", maxWidth: "1920px", margin: "0 auto" }}>
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
                {t("contact.hero.badge")}
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
                {t("contact.hero.title1")}
                <br />
                {t("contact.hero.title2")}
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
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
              className="contact-hero-aside"
            >
              {t("contact.hero.description")}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              gap: "1px",
              background: "rgba(92,64,55,0.15)",
              border: "1px solid rgba(92,64,55,0.15)",
            }}
            className="contact-form-grid"
          >
            {/* Sidebar */}
            <div
              style={{
                gridColumn: "span 4",
                background: "#0c0c0c",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              className="contact-sidebar"
            >
                <div style={{ padding: "48px 40px" }} className="contact-sidebar-steps">
                  <h3
                    style={{
                    fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: T.primaryCtn,
                    textTransform: "uppercase",
                    marginBottom: "40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{ width: "24px", height: "1px", background: T.primaryCtn }}
                  />
                  {t("contact.flow.title")}
                </h3>
                {[
                  { n: "01", title: t("contact.flow.step.0.title"), sub: t("contact.flow.step.0.sub"), active: true },
                  { n: "02", title: t("contact.flow.step.1.title"), sub: t("contact.flow.step.1.sub"), active: false },
                  { n: "03", title: t("contact.flow.step.2.title"), sub: t("contact.flow.step.2.sub"), active: false },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="contact-sidebar-step"
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
                <RemoteImageWithFallback
                  src={SERVER_ROOM_IMG}
                  alt={t("media.alt.contact_server_room")}
                  wrapperStyle={{ width: "100%", height: "320px" }}
                  imgStyle={{
                    objectFit: "cover",
                    filter: "grayscale(1) brightness(0.55) contrast(1.15)",
                  }}
                  fallbackStyle={{
                    background:
                      "radial-gradient(circle at 18% 18%, rgba(255,85,0,0.18), transparent 30%), linear-gradient(160deg, rgba(18,18,18,0.98) 0%, rgba(10,10,10,1) 100%)",
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
                    {t("common.node")}
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
                    {t("common.status")}: {t("contact.node.status_value")}
                  </h4>
                </div>
              </div>
            </div>

            {/* Form Canvas */}
            <div
              style={{
                gridColumn: "span 8",
                background: "linear-gradient(180deg, rgba(19,19,19,0.96), rgba(16,16,16,0.98))",
                padding: "64px clamp(24px, 5vw, 56px)",
                position: "relative",
              }}
              className="contact-form-canvas"
            >
              {submitted ? (
                <div
                  className="contact-success-panel"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "rgba(255,85,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "32px",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "40px", color: T.primaryCtn }}
                    >
                      check_circle
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                      fontSize: "32px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "16px",
                    }}
                  >
                    {t("contact.success.title")}
                  </h2>
                  <p
                    style={{
                      color: T.onSurfaceVar,
                      fontSize: "16px",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                    }}
                  >
                    {t("contact.success.description")}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "64px" }}
                >
                  {/* Step 1 */}
                  <div>
                    <h2
                      className="contact-step-heading"
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
                      01 {t("contact.flow.step.0.title")}
                    </h2>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "20px",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setService("neural")}
                        className="contact-service-card"
                        style={{
                          padding: "24px",
                          background: "rgba(255,255,255,0.02)",
                          textAlign: "left",
                          border:
                            service === "neural"
                              ? `1px solid ${T.primaryCtn}`
                              : "1px solid rgba(92,64,55,0.08)",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "28px", color: T.primaryCtn }}
                          >
                            neurology
                          </span>
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              background: service === "neural" ? T.primaryCtn : "transparent",
                              border: service === "neural" ? "none" : `1px solid rgba(92,64,55,0.35)`,
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
                          {t("contact.form.service.neural.title")}
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
                          {t("contact.form.service.neural.desc")}
                        </p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setService("quantum")}
                        className="contact-service-card"
                        style={{
                          padding: "24px",
                          background: "rgba(255,255,255,0.02)",
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
                          {t("contact.form.service.quantum.title")}
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
                          {t("contact.form.service.quantum.desc")}
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h2
                      className="contact-step-heading"
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
                      02 {t("contact.flow.step.1.title")}
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                          gap: "20px",
                        }}
                      >
                        <div className="contact-field-shell" style={{ position: "relative", paddingTop: "12px" }}>
                          <label
                            htmlFor="contact_name"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              letterSpacing: "0.3em",
                              color: fieldLabelColor("contact_name", nameInvalid),
                              fontWeight: 700,
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            {t("contact.form.label.name")}
                          </label>
                          <input
                            id="contact_name"
                            type="text"
                            required
                            aria-invalid={nameInvalid}
                            aria-describedby={nameInvalid ? "contact-form-error" : undefined}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onFocus={() => setFocused("contact_name")}
                            onBlur={() => setFocused(null)}
                            placeholder={t("contact.form.placeholder.name")}
                            style={{
                              width: "100%",
                              background: "rgba(8,8,8,0.38)",
                              border: fieldBorder("contact_name", nameInvalid),
                              padding: "18px 18px 16px",
                              color: "#ffffff",
                              fontSize: "18px",
                              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                              outline: "none",
                              transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                            }}
                            className="contact-text-input"
                          />
                        </div>
                        <div className="contact-field-shell" style={{ position: "relative", paddingTop: "12px" }}>
                          <label
                            htmlFor="contact_email"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              fontSize: "10px",
                              textTransform: "uppercase",
                              letterSpacing: "0.3em",
                              color: fieldLabelColor("contact_email", emailInvalid),
                              fontWeight: 700,
                              fontFamily: "var(--font-inter, Inter, sans-serif)",
                            }}
                          >
                            {t("contact.form.label.email")}
                          </label>
                          <input
                            id="contact_email"
                            type="email"
                            required
                            aria-invalid={emailInvalid}
                            aria-describedby={emailInvalid ? "contact-form-error" : undefined}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setFocused("contact_email")}
                            onBlur={() => setFocused(null)}
                            placeholder={t("contact.form.placeholder.email")}
                            style={{
                              width: "100%",
                              background: "rgba(8,8,8,0.38)",
                              border: fieldBorder("contact_email", emailInvalid),
                              padding: "18px 18px 16px",
                              color: "#ffffff",
                              fontSize: "18px",
                              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                              outline: "none",
                              transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                            }}
                            className="contact-text-input"
                          />
                        </div>
                      </div>
                      <div className="contact-field-shell" style={{ position: "relative", paddingTop: "12px" }}>
                        <label
                          htmlFor="contact_phone"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            fontSize: "10px",
                            textTransform: "uppercase",
                            letterSpacing: "0.3em",
                            color: fieldLabelColor("contact_phone"),
                            fontWeight: 700,
                            fontFamily: "var(--font-inter, Inter, sans-serif)",
                          }}
                        >
                          {t("contact.form.label.phone")}
                        </label>
                        <input
                          id="contact_phone"
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onFocus={() => setFocused("contact_phone")}
                          onBlur={() => setFocused(null)}
                          placeholder={t("contact.form.placeholder.phone")}
                          style={{
                            width: "100%",
                            background: "rgba(8,8,8,0.38)",
                            border: fieldBorder("contact_phone"),
                            padding: "18px 18px 16px",
                            color: "#ffffff",
                            fontSize: "16px",
                            fontFamily: "var(--font-inter, Inter, sans-serif)",
                            outline: "none",
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                          }}
                          className="contact-text-input"
                        />
                      </div>
                      <div className="contact-field-shell" style={{ position: "relative", paddingTop: "12px" }}>
                        <label
                          htmlFor="project_name"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            fontSize: "10px",
                            textTransform: "uppercase",
                            letterSpacing: "0.3em",
                            color: fieldLabelColor("project_name", projectInvalid),
                            fontWeight: 700,
                            fontFamily: "var(--font-inter, Inter, sans-serif)",
                          }}
                        >
                          {t("contact.form.label.project")}
                        </label>
                        <input
                          id="project_name"
                          required
                          aria-invalid={projectInvalid}
                          aria-describedby={projectInvalid ? "contact-form-error" : undefined}
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                          onFocus={() => setFocused("project_name")}
                          onBlur={() => setFocused(null)}
                          placeholder={t("contact.form.placeholder.project")}
                          style={{
                            width: "100%",
                            background: "rgba(8,8,8,0.38)",
                            border: fieldBorder("project_name", projectInvalid),
                            padding: "18px 18px 16px",
                            color: "#ffffff",
                            fontSize: "20px",
                            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                            outline: "none",
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                          }}
                          className="contact-text-input"
                        />
                      </div>
                      <div className="contact-field-shell" style={{ position: "relative", paddingTop: "12px" }}>
                        <label
                          htmlFor="description"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            fontSize: "10px",
                            textTransform: "uppercase",
                            letterSpacing: "0.3em",
                            color: fieldLabelColor("description", scopeInvalid),
                            fontWeight: 700,
                            fontFamily: "var(--font-inter, Inter, sans-serif)",
                          }}
                        >
                          {t("contact.form.label.scope")}
                        </label>
                        <textarea
                          id="description"
                          required
                          aria-invalid={scopeInvalid}
                          aria-describedby={scopeInvalid ? "contact-form-error" : undefined}
                          rows={4}
                          value={scope}
                          onChange={(e) => setScope(e.target.value)}
                          onFocus={() => setFocused("description")}
                          onBlur={() => setFocused(null)}
                          placeholder={t("contact.form.placeholder.scope")}
                          style={{
                            width: "100%",
                            background: "rgba(8,8,8,0.38)",
                            border: fieldBorder("description", scopeInvalid),
                            padding: "18px 18px 16px",
                            color: "#ffffff",
                            fontSize: "15px",
                            fontFamily: "var(--font-inter, Inter, sans-serif)",
                            outline: "none",
                            resize: "none",
                            lineHeight: 1.7,
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                          }}
                          className="contact-textarea-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <h2
                      className="contact-step-heading"
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
                      03 {t("contact.flow.step.2.title")}
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
                        className="contact-field-shell"
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
                            color: fieldLabelColor("priority", priorityInvalid),
                            fontWeight: 700,
                            fontFamily: "var(--font-inter, Inter, sans-serif)",
                          }}
                        >
                          {t("contact.form.label.priority")}
                        </label>
                        <button
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded={priorityMenuOpen}
                          aria-labelledby="priority-label"
                          aria-describedby={priorityInvalid ? "contact-form-error" : undefined}
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
                            background: "rgba(8,8,8,0.38)",
                            border: fieldBorder("priority", priorityInvalid),
                            boxShadow:
                              focused === "priority" || priorityMenuOpen
                                ? "0 0 0 1px rgba(255,85,0,0.22)"
                                : "none",
                            padding: "18px 18px 16px",
                            color: "#ffffff",
                            fontSize: "13px",
                            textTransform: "uppercase",
                            letterSpacing: "0.14em",
                            cursor: "pointer",
                            outline: "none",
                            fontFamily: "var(--font-inter, Inter, sans-serif)",
                            fontWeight: 600,
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                          }}
                          className="contact-priority-trigger"
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
                              background: "rgba(16,16,16,0.98)",
                              boxShadow: "0 18px 40px rgba(0,0,0,0.42)",
                              border: "1px solid rgba(92,64,55,0.42)",
                              backdropFilter: "blur(12px)",
                              WebkitBackdropFilter: "blur(12px)",
                              overflow: "hidden",
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
                              {[
                                { value: "", label: t("contact.form.priority.placeholder") },
                                { value: "alpha", label: t("contact.form.priority.alpha") },
                                { value: "beta", label: t("contact.form.priority.beta") },
                                { value: "gamma", label: t("contact.form.priority.gamma") },
                              ].map((opt) => {
                                const selected = priority === opt.value;
                                return (
                                  <button
                                    key={opt.value || "empty"}
                                    type="button"
                                    role="option"
                                    aria-selected={selected}
                                    onClick={() => {
                                      setPriority(opt.value as "" | "alpha" | "beta" | "gamma");
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
                                      borderBottom: "1px solid rgba(92,64,55,0.12)",
                                      transition: "background 0.15s ease, color 0.15s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!selected) {
                                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                                        (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
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
                      <div className="contact-field-shell" style={{ position: "relative", paddingTop: "12px" }}>
                        <label
                          htmlFor="repo"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            fontSize: "10px",
                            textTransform: "uppercase",
                            letterSpacing: "0.3em",
                            color: fieldLabelColor("repo"),
                            fontWeight: 700,
                            fontFamily: "var(--font-inter, Inter, sans-serif)",
                          }}
                        >
                          {t("contact.form.label.repo")}
                        </label>
                        <input
                          id="repo"
                          type="text"
                          value={repo}
                          onChange={(e) => setRepo(e.target.value)}
                          onFocus={() => setFocused("repo")}
                          onBlur={() => setFocused(null)}
                          placeholder={t("contact.form.placeholder.repo")}
                          style={{
                            width: "100%",
                            background: "rgba(8,8,8,0.38)",
                            border: fieldBorder("repo"),
                            padding: "18px 18px 16px",
                            color: "#ffffff",
                            fontSize: "14px",
                            fontFamily: "ui-monospace, monospace",
                            outline: "none",
                            transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                          }}
                          className="contact-text-input"
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
                      {t("contact.form.note")}
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
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
                        opacity: submitting ? 0.75 : 1,
                        transition: "transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
                      }}
                      className="contact-submit-btn"
                    >
                      {submitting ? t("common.submitting") : t("contact.form.submit")}
                    </button>
                  </div>
                  {error ? (
                    <p
                      id="contact-form-error"
                      className="contact-form-feedback contact-form-error"
                      style={{ color: "#ffb4ab", margin: 0, fontSize: "12px", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      {error}
                    </p>
                  ) : null}
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Global Nodes */}
        <section
          data-reveal
          style={{
            padding: "96px clamp(16px, 4vw, 32px) 120px",
            background: "#0a0a0a",
            borderTop: `1px solid rgba(92,64,55,0.15)`,
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ marginBottom: "64px", textAlign: "center" }}>
              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "48px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "#ffffff",
                  letterSpacing: "-0.04em",
                  marginBottom: "12px",
                }}
              >
                {t("contact.nodes.title")}
              </h2>
              <p
                style={{
                  color: T.primaryCtn,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.45em",
                  fontWeight: 700,
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                {t("contact.nodes.subtitle")}
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
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
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
                      {t(`contact.node.${i === 0 ? "0" : i === 1 ? "1" : "2"}.id`)}
                    </span>
                    <span
                      className="material-symbols-outlined contact-node-icon"
                      style={{ fontSize: "26px", color: T.onSurfaceVar }}
                    >
                      {i === 0 ? "hub" : i === 1 ? "memory" : "language"}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                      fontSize: "clamp(28px, 4vw, 36px)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    {t(`contact.node.${i === 0 ? "0" : i === 1 ? "1" : "2"}.city`)}
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
                    {[0, 1, 2].map((lineIndex) => (
                      <p key={lineIndex} style={{ margin: 0 }}>
                        {t(`contact.node.${i === 0 ? "0" : i === 1 ? "1" : "2"}.line.${lineIndex}`)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portal Access */}
        <section
          data-reveal
          style={{
            padding: "96px clamp(24px, 5vw, 48px) 112px",
            background: T.surfaceLow,
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="contact-terminal-grid"
          >
            <div className="contact-portal-copy">
              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "36px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#ffffff",
                  marginBottom: "24px",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("contact.direct.title")}
              </h2>
              <p
                style={{
                  color: T.onSurfaceVar,
                  fontSize: "17px",
                  lineHeight: 1.7,
                  marginBottom: "40px",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                {t("contact.direct.description")}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <button
                  className="contact-portal-btn"
                  style={{
                    padding: "16px 32px",
                    background: "transparent",
                    color: "#ffffff",
                    border: "1px solid #ffffff",
                    fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {t("contact.direct.portal")}
                </button>
                <button
                  className="contact-recover-btn"
                  style={{
                    padding: "16px 32px",
                    background: "transparent",
                    color: T.onSurfaceVar,
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontSize: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {t("contact.direct.recover")}
                </button>
              </div>
            </div>

            <div
              className="contact-terminal-panel"
              style={{
                background: "rgba(0,0,0,0.45)",
                padding: "28px",
                fontFamily: "ui-monospace, monospace",
                fontSize: "13px",
                borderLeft: `2px solid ${T.primaryCtn}`,
              }}
            >
              <div className="contact-terminal-head" style={{ display: "flex", gap: "12px", marginBottom: "16px", color: T.primaryCtn }}>
                <span>{t("contact.terminal.system")}</span>
                <span style={{ color: "#ffffff" }}>{t("contact.terminal.awaiting")}</span>
              </div>
              <div className="contact-terminal-lines" style={{ color: T.onSurfaceVar, display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ margin: 0, color: T.primaryCtn, opacity: 0.65 }}>
                  {t("contact.terminal.auth")}
                </p>
                <p style={{ margin: 0 }}>{t("contact.terminal.validating")}</p>
                <p style={{ margin: 0 }}>{t("contact.terminal.granted")}</p>
                <p style={{ margin: 0 }}>{t("contact.terminal.available")}</p>
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
        </section>

        {/* Footer */}
        <footer data-reveal style={{ background: "#1b1b1b", width: "100%", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div
            style={{
              maxWidth: "1920px",
              margin: "0 auto",
              padding: "clamp(40px, 6vw, 64px) clamp(20px, 4vw, 48px) 48px",
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
                  textTransform: "uppercase"
                }}
              >
                {t("contact.footer.brand")}
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
                {t("contact.footer.tagline")}
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
                {t("contact.footer.description")}
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
                {[t("contact.footer.privacy"), t("contact.footer.terms")].map((label) => (
                  <span
                    key={label}
                    style={{
                      color: "rgba(156,163,175,0.82)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[t("contact.footer.offices"), t("contact.footer.specs")].map((label) => (
                  <span
                    key={label}
                    style={{
                      color: "rgba(156,163,175,0.82)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                    }}
                  >
                    {label}
                  </span>
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
              {t("contact.footer.copy")}
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
        .contact-sidebar-step {
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .contact-form-canvas::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255,85,0,0.06), transparent 20%);
        }
        .contact-step-heading {
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(92,64,55,0.16);
        }
        .contact-service-card {
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-service-card:hover,
        .contact-service-card:focus-visible {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(255,85,0,0.28) !important;
          transform: translateY(-1px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.16);
          outline: none;
        }
        .contact-field-shell {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .contact-text-input::placeholder,
        .contact-textarea-input::placeholder {
          color: rgba(201,176,168,0.38);
        }
        .contact-text-input:focus,
        .contact-textarea-input:focus,
        .contact-priority-trigger:focus-visible {
          background: rgba(12,12,12,0.54) !important;
          box-shadow: 0 0 0 1px rgba(255,85,0,0.22) !important;
        }
        .contact-priority-trigger:hover,
        .contact-text-input:hover,
        .contact-textarea-input:hover {
          background: rgba(12,12,12,0.46) !important;
        }
        .contact-success-panel {
          padding: 40px 28px;
          border: 1px solid rgba(92,64,55,0.2);
          background: linear-gradient(180deg, rgba(255,85,0,0.05), rgba(255,255,255,0.02));
        }
        .contact-form-feedback {
          padding: 12px 14px;
          border: 1px solid rgba(255,180,171,0.22);
          background: rgba(255,180,171,0.08);
          line-height: 1.6;
        }
        .contact-submit-btn:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
          box-shadow: 0 16px 30px rgba(255,85,0,0.18);
        }
        .contact-submit-btn:focus-visible {
          outline: 2px solid rgba(255,181,156,0.92);
          outline-offset: 4px;
        }
        .contact-submit-btn:disabled {
          cursor: progress;
          filter: saturate(0.9);
        }
        .contact-portal-btn:hover {
          background: ${T.primary} !important;
          color: ${T.onPrimary} !important;
        }
        .contact-portal-btn:focus-visible,
        .contact-recover-btn:focus-visible {
          outline: 2px solid rgba(255,181,156,0.92);
          outline-offset: 4px;
        }
        .contact-recover-btn:hover {
          border-color: ${T.primaryCtn} !important;
        }
        .contact-terminal-panel {
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
        }
        .contact-terminal-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,85,0,0.05), transparent 36%);
          pointer-events: none;
        }
        .contact-terminal-head {
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(92,64,55,0.2);
          position: relative;
        }
        .contact-terminal-lines {
          position: relative;
          padding-top: 4px;
        }
        .contact-node-card {
          transition:
            background 0.3s ease,
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .contact-node-card:hover {
          background: ${T.surfaceContainer} !important;
          transform: translateY(-3px);
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-node-card {
            transition: background 0.2s ease !important;
          }
          .contact-node-card:hover {
            transform: none !important;
          }
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
          .contact-hero-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
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
        @media (max-width: 640px) {
          .contact-step-heading {
            margin-bottom: 24px !important;
          }
          .contact-form-canvas {
            padding: 28px 18px !important;
          }
          .contact-sidebar-steps {
            padding: 28px 18px !important;
          }
          .contact-terminal-grid {
            gap: 28px !important;
          }
          .contact-text-input,
          .contact-textarea-input,
          .contact-priority-trigger {
            padding: 16px 14px 14px !important;
          }
          .contact-submit-btn {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 430px) {
          .contact-form-canvas {
            padding: 22px 14px !important;
          }
          .contact-sidebar-steps {
            padding: 22px 14px !important;
          }
          .contact-terminal-panel {
            padding: 22px !important;
          }
        }
      `}</style>
    </>
  );
}
