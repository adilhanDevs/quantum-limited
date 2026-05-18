"use client";

import React, { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import type { ContactApiResponse } from "../lib/contact";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  surface: "#131313",
  surfaceContainer: "#1f1f1f",
  surfaceHighest: "#353535",
  onSurface: "#e2e2e2",
  onSurfaceVar: "#c9b0a8",
  primary: "#ffb59c",
  primaryCtn: "#ff5500",
  onPrimary: "#511500",
};

export default function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectName, setProjectName] = useState("");
  const [scope, setScope] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length <= 1) {
      setError(t("contact.simple.validation.name"));
      return;
    }
    if (phone.trim().length <= 1) {
      setError(t("contact.simple.validation.phone"));
      return;
    }
    if (projectName.trim().length <= 2) {
      setError(t("contact.simple.validation.project"));
      return;
    }
    if (scope.trim().length <= 8) {
      setError(t("contact.simple.validation.scope"));
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
          source: "quick_request",
          entryPoint: "contact",
          name: name.trim(),
          phone: phone.trim(),
          projectName: projectName.trim(),
          scope: scope.trim(),
        }),
      });

      const result = (await response.json()) as ContactApiResponse;
      if (!response.ok || !result.ok) {
        if (!result.ok && result.errorCode === "NOT_CONFIGURED") {
          setError(t("common.form_error_not_configured"));
        } else if (!result.ok && result.errorCode === "INVALID_REQUEST") {
          if (name.trim().length <= 1) {
            setError(t("contact.simple.validation.name"));
          } else if (phone.trim().length <= 1) {
            setError(t("contact.simple.validation.phone"));
          } else if (projectName.trim().length <= 2) {
            setError(t("contact.simple.validation.project"));
          } else {
            setError(t("contact.simple.validation.scope"));
          }
        } else {
          setError(t("contact.simple.error"));
        }
        return;
      }

      setSubmitted(true);
      setName("");
      setPhone("");
      setProjectName("");
      setScope("");
    } catch {
      setError(t("contact.simple.error"));
    } finally {
      setSubmitting(false);
    }
  };

  const fieldBorder = (field: string, invalid = false) => {
    if (invalid) return `1px solid rgba(255,180,171,0.65)`;
    return focused === field
      ? `1px solid rgba(255,85,0,0.7)`
      : "1px solid rgba(92,64,55,0.32)";
  };

  return (
    <>
      <SiteHeader active="contact" />
      <main
        className="contact-main-bg"
        style={{
          minHeight: "100vh",
          paddingTop: "max(var(--site-header-offset, 78px), clamp(88px, 14vw, 120px))",
        }}
      >
        <section
          data-reveal
          style={{
            padding: "0 clamp(16px, 4vw, 32px) 64px",
            maxWidth: "1920px",
            margin: "0 auto",
          }}
        >
          <div
            className="contact-hero-row"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "32px",
              marginBottom: "48px",
            }}
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
              className="contact-hero-aside"
              style={{
                flex: "0 1 340px",
                color: T.onSurfaceVar,
                fontSize: "17px",
                fontWeight: 300,
                lineHeight: 1.65,
                borderLeft: "1px solid rgba(92,64,55,0.35)",
                paddingLeft: "32px",
                paddingBottom: "8px",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              {t("contact.hero.description")}
            </div>
          </div>

          <div
            className="contact-form-shell"
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              background:
                "linear-gradient(180deg, rgba(19,19,19,0.96), rgba(16,16,16,0.98))",
              border: "1px solid rgba(92,64,55,0.18)",
              boxShadow:
                "0 22px 54px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.02)",
              position: "relative",
            }}
          >
            <div
              className="contact-form-canvas"
              style={{
                padding: "64px clamp(24px, 5vw, 56px)",
                position: "relative",
              }}
            >
              {submitted ? (
                <div
                  className="contact-success-panel"
                  style={{
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
                    {t("contact.simple.success_title")}
                  </h2>
                  <p
                    style={{
                      color: T.onSurfaceVar,
                      fontSize: "16px",
                      lineHeight: 1.65,
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                      margin: 0,
                    }}
                  >
                    {t("contact.simple.success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <p
                      style={{
                        margin: 0,
                        color: T.primaryCtn,
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-inter, Inter, sans-serif)",
                      }}
                    >
                      {t("contact.simple.eyebrow")}
                    </p>
                    <h2
                      className="contact-step-heading"
                      style={{
                        marginBottom: "8px",
                        fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                        fontSize: "clamp(28px, 4vw, 40px)",
                        fontWeight: 700,
                        color: "#ffffff",
                        textTransform: "uppercase",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {t("contact.simple.title")}
                    </h2>
                    <p
                      style={{
                        margin: 0,
                        maxWidth: "620px",
                        color: T.onSurfaceVar,
                        fontSize: "16px",
                        lineHeight: 1.7,
                        fontFamily: "var(--font-inter, Inter, sans-serif)",
                      }}
                    >
                      {t("contact.simple.description")}
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "20px",
                      }}
                    >
                      <Field
                        id="contact_name"
                        label={t("contact.simple.field.name")}
                        placeholder={t("contact.simple.placeholder.name")}
                        value={name}
                        invalid={!!error && name.trim().length <= 1}
                        focused={focused === "contact_name"}
                        onFocus={() => setFocused("contact_name")}
                        onBlur={() => setFocused(null)}
                        onChange={setName}
                        border={fieldBorder("contact_name", !!error && name.trim().length <= 1)}
                      />
                      <Field
                        id="contact_phone"
                        label={t("contact.simple.field.phone")}
                        placeholder={t("contact.simple.placeholder.phone")}
                        value={phone}
                        invalid={!!error && phone.trim().length <= 1}
                        focused={focused === "contact_phone"}
                        onFocus={() => setFocused("contact_phone")}
                        onBlur={() => setFocused(null)}
                        onChange={setPhone}
                        border={fieldBorder("contact_phone", !!error && phone.trim().length <= 1)}
                        fontFamily="var(--font-inter, Inter, sans-serif)"
                        fontSize="16px"
                      />
                    </div>

                    <Field
                      id="project_name"
                      label={t("contact.simple.field.project")}
                      placeholder={t("contact.simple.placeholder.project")}
                      value={projectName}
                      invalid={!!error && projectName.trim().length <= 2}
                      focused={focused === "project_name"}
                      onFocus={() => setFocused("project_name")}
                      onBlur={() => setFocused(null)}
                      onChange={setProjectName}
                      border={fieldBorder("project_name", !!error && projectName.trim().length <= 2)}
                    />

                    <label className="contact-field-shell" style={{ position: "relative", paddingTop: "12px" }}>
                      <span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          fontSize: "10px",
                          textTransform: "uppercase",
                          letterSpacing: "0.3em",
                          color:
                            !!error && scope.trim().length <= 8
                              ? "#ffb4ab"
                              : focused === "description"
                                ? T.primary
                                : "rgba(201,176,168,0.78)",
                          fontWeight: 700,
                          fontFamily: "var(--font-inter, Inter, sans-serif)",
                        }}
                      >
                        {t("contact.simple.field.scope")}
                      </span>
                      <textarea
                        id="description"
                        required
                        aria-invalid={!!error && scope.trim().length <= 8}
                        aria-describedby={!!error && scope.trim().length <= 8 ? "contact-form-error" : undefined}
                        rows={5}
                        value={scope}
                        onChange={(e) => setScope(e.target.value)}
                        onFocus={() => setFocused("description")}
                        onBlur={() => setFocused(null)}
                        placeholder={t("contact.simple.placeholder.scope")}
                        style={{
                          width: "100%",
                          background: "rgba(8,8,8,0.38)",
                          border: fieldBorder("description", !!error && scope.trim().length <= 8),
                          padding: "18px 18px 16px",
                          color: "#ffffff",
                          fontSize: "15px",
                          fontFamily: "var(--font-inter, Inter, sans-serif)",
                          outline: "none",
                          resize: "vertical",
                          minHeight: "168px",
                          lineHeight: 1.7,
                          transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                        }}
                        className="contact-textarea-input"
                      />
                    </label>
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
                      {t("contact.simple.note")}
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
                        transition:
                          "transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
                      }}
                      className="contact-submit-btn"
                    >
                      {submitting ? t("quickRequest.submitting") : t("contact.simple.submit")}
                    </button>
                  </div>

                  {error ? (
                    <p
                      id="contact-form-error"
                      className="contact-form-feedback contact-form-error"
                      style={{
                        color: "#ffb4ab",
                        margin: 0,
                        fontSize: "12px",
                        fontFamily: "var(--font-inter, Inter, sans-serif)",
                      }}
                    >
                      {error}
                    </p>
                  ) : null}
                </form>
              )}
            </div>
          </div>
        </section>

        <section
          data-reveal
          style={{
            padding: "96px clamp(16px, 4vw, 32px) 120px",
            background: "#0a0a0a",
            borderTop: "1px solid rgba(92,64,55,0.15)",
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
                  marginBottom: "12px",
                }}
              >
                {t("contact.nodes.title")}
              </h2>
              <p
                style={{
                  color: T.onSurfaceVar,
                  fontSize: "16px",
                  margin: 0,
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                {t("contact.nodes.subtitle")}
              </p>
            </div>

            <div
              className="contact-nodes-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "24px",
                marginBottom: "72px",
              }}
            >
              {[0, 1, 2].map((index) => (
                <article
                  key={index}
                  className="contact-node-card"
                  style={{
                    background: T.surfaceContainer,
                    border: "1px solid rgba(92,64,55,0.16)",
                    padding: "28px",
                  }}
                >
                  <p
                    style={{
                      color: T.primaryCtn,
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      margin: "0 0 14px",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                    }}
                  >
                    {t(`contact.node.${index}.id`)}
                  </p>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                      fontSize: "24px",
                      textTransform: "uppercase",
                      margin: "0 0 18px",
                    }}
                  >
                    {t(`contact.node.${index}.city`)}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      color: T.onSurfaceVar,
                      fontSize: "13px",
                      lineHeight: 1.7,
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                    }}
                  >
                    <p style={{ margin: 0 }}>{t(`contact.node.${index}.line.0`)}</p>
                    <p style={{ margin: 0 }}>{t(`contact.node.${index}.line.1`)}</p>
                    <p style={{ margin: 0 }}>{t(`contact.node.${index}.line.2`)}</p>
                  </div>
                </article>
              ))}
            </div>

            <div
              className="contact-terminal-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "40px",
                alignItems: "start",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "#ffffff",
                    fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                    fontSize: "32px",
                    textTransform: "uppercase",
                    margin: "0 0 18px",
                  }}
                >
                  {t("contact.direct.title")}
                </h3>
                <p
                  style={{
                    color: T.onSurfaceVar,
                    fontSize: "16px",
                    lineHeight: 1.7,
                    margin: "0 0 28px",
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
                      background: T.primaryCtn,
                      color: T.onPrimary,
                      border: "none",
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                      fontSize: "12px",
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
                  <p style={{ margin: 0, color: T.primaryCtn, opacity: 0.65 }}>{t("contact.terminal.auth")}</p>
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
          </div>
        </section>

        <footer data-reveal style={{ background: "#1b1b1b", width: "100%", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div
            className="contact-footer-grid"
            style={{
              maxWidth: "1920px",
              margin: "0 auto",
              padding: "clamp(40px, 6vw, 64px) clamp(20px, 4vw, 48px) 48px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "20px",
                  textTransform: "uppercase",
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
        .contact-textarea-input:focus {
          background: rgba(12,12,12,0.54) !important;
          box-shadow: 0 0 0 1px rgba(255,85,0,0.22) !important;
        }
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
        .contact-footer-link:hover {
          color: #ffffff !important;
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
          .contact-terminal-grid {
            gap: 28px !important;
          }
          .contact-text-input,
          .contact-textarea-input {
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
          .contact-terminal-panel {
            padding: 22px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-node-card {
            transition: background 0.2s ease !important;
          }
          .contact-node-card:hover {
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  invalid,
  focused,
  onFocus,
  onBlur,
  onChange,
  border,
  fontFamily = "var(--font-space-grotesk, Space Grotesk, sans-serif)",
  fontSize = "18px",
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  invalid: boolean;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: string) => void;
  border: string;
  fontFamily?: string;
  fontSize?: string;
}) {
  return (
    <label className="contact-field-shell" style={{ position: "relative", paddingTop: "12px" }}>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: invalid ? "#ffb4ab" : focused ? T.primary : "rgba(201,176,168,0.78)",
          fontWeight: 700,
          fontFamily: "var(--font-inter, Inter, sans-serif)",
        }}
      >
        {label}
      </span>
      <input
        id={id}
        type="text"
        required
        aria-invalid={invalid}
        aria-describedby={invalid ? "contact-form-error" : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        style={{
          width: "100%",
          background: "rgba(8,8,8,0.38)",
          border,
          padding: "18px 18px 16px",
          color: "#ffffff",
          fontSize,
          fontFamily,
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
        }}
        className="contact-text-input"
      />
    </label>
  );
}
