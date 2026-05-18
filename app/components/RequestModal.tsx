"use client";

import type { FormEvent, RefObject } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { ContactApiResponse } from "../lib/contact";
import { useLanguage } from "../i18n/LanguageContext";

const T = {
  onSurface: "#f2f2f4",
  onSurfaceVar: "#c9b0a8",
  primary: "#ff5500",
  onPrimary: "#390c00",
};

type RequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted?: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

export function RequestModal({ isOpen, onClose, onSubmitted, returnFocusRef }: RequestModalProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectName, setProjectName] = useState("");
  const [scope, setScope] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const bodyOverflowRef = useRef<string>("");

  const handleClose = useCallback(() => {
    setName("");
    setPhone("");
    setProjectName("");
    setScope("");
    setSubmitting(false);
    setSubmitted(false);
    setError(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const returnFocusNode = returnFocusRef.current;
    bodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = bodyOverflowRef.current;
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusNode?.focus();
    };
  }, [handleClose, isOpen, returnFocusRef]);

  if (!isOpen) {
    return null;
  }

  const validate = () => {
    if (name.trim().length < 2) return t("quickRequest.validation.name");
    if (phone.trim().length < 2) return t("quickRequest.validation.phone");
    if (projectName.trim().length < 3) return t("quickRequest.validation.project");
    if (scope.trim().length < 9) return t("quickRequest.validation.scope");
    return null;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
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
          name: name.trim(),
          phone: phone.trim(),
          projectName: projectName.trim(),
          scope: scope.trim(),
        }),
      });

      const result = (await response.json()) as ContactApiResponse;
      if (!response.ok || !result.ok) {
        if (!result.ok && result.errorCode === "INVALID_REQUEST") {
          setError(validate() ?? t("quickRequest.error"));
        } else if (!result.ok && result.errorCode === "NOT_CONFIGURED") {
          setError(t("common.form_error_not_configured"));
        } else {
          setError(t("quickRequest.error"));
        }
        return;
      }

      setSubmitted(true);
      onSubmitted?.();
      setName("");
      setPhone("");
      setProjectName("");
      setScope("");
    } catch {
      setError(t("quickRequest.error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="request-modal-overlay"
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2200,
        background: "rgba(5, 5, 5, 0.76)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(12px, 4vw, 32px)",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(event) => event.stopPropagation()}
        className="request-modal-panel"
        style={{
          width: "min(100%, 640px)",
          maxHeight: "min(100dvh - 24px, 820px)",
          overflowY: "auto",
          overflowX: "hidden",
          background: "linear-gradient(180deg, rgba(24,24,24,0.98), rgba(12,12,12,0.98))",
          border: "1px solid rgba(255,85,0,0.18)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
          color: T.onSurface,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            padding: "clamp(20px, 4vw, 30px) clamp(18px, 4vw, 30px) 0",
          }}
        >
          <div>
            <p
              id={descriptionId}
              style={{
                margin: "0 0 12px",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: T.onSurfaceVar,
              }}
            >
              {t("quickRequest.subtitle")}
            </p>
            <h2
              id={titleId}
              style={{
                margin: 0,
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "clamp(28px, 5vw, 40px)",
                lineHeight: 1,
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
              }}
            >
              {t("quickRequest.title")}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label={t("quickRequest.close")}
            className="request-modal-close"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
              color: T.onSurface,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {"\u00d7"}
          </button>
        </div>

        <div style={{ padding: "18px clamp(18px, 4vw, 30px) clamp(20px, 4vw, 30px)" }}>
          {submitted ? (
            <div
              style={{
                padding: "22px 18px",
                border: "1px solid rgba(255,85,0,0.18)",
                background: "rgba(255,85,0,0.08)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: T.onSurface,
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  lineHeight: 1.65,
                }}
              >
                {t("quickRequest.success")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
              <ModalField
                label={t("quickRequest.field.name")}
                placeholder={t("quickRequest.placeholder.name")}
                value={name}
                onChange={setName}
                autoComplete="name"
              />
              <ModalField
                label={t("quickRequest.field.phone")}
                placeholder={t("quickRequest.placeholder.phone")}
                value={phone}
                onChange={setPhone}
                autoComplete="tel"
              />
              <ModalField
                label={t("quickRequest.field.project")}
                placeholder={t("quickRequest.placeholder.project")}
                value={projectName}
                onChange={setProjectName}
                autoComplete="organization-title"
              />
              <ModalTextarea
                label={t("quickRequest.field.scope")}
                placeholder={t("quickRequest.placeholder.scope")}
                value={scope}
                onChange={setScope}
              />

              {error ? (
                <p
                  style={{
                    margin: 0,
                    padding: "12px 14px",
                    border: "1px solid rgba(255,180,171,0.25)",
                    background: "rgba(255,180,171,0.08)",
                    color: "#ffb4ab",
                    lineHeight: 1.6,
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    fontSize: "14px",
                  }}
                >
                  {error}
                </p>
              ) : null}

              <div style={{ display: "flex", justifyContent: "flex-start", paddingTop: "6px" }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="request-modal-submit"
                  style={{
                    minHeight: "48px",
                    padding: "14px 24px",
                    border: "none",
                    background: T.primary,
                    color: T.onPrimary,
                    fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: submitting ? "progress" : "pointer",
                    opacity: submitting ? 0.82 : 1,
                  }}
                >
                  {submitting ? t("quickRequest.submitting") : t("quickRequest.submit")}
                </button>
              </div>
            </form>
          )}
        </div>

        <style>{`
          .request-modal-close:focus-visible,
          .request-modal-submit:focus-visible,
          .request-modal-input:focus-visible,
          .request-modal-textarea:focus-visible {
            outline: 2px solid rgba(255, 181, 156, 0.92);
            outline-offset: 3px;
          }
          .request-modal-close:hover {
            border-color: rgba(255, 85, 0, 0.35) !important;
            background: rgba(255, 255, 255, 0.06) !important;
          }
          .request-modal-submit:hover {
            filter: brightness(1.06);
            box-shadow: 0 14px 30px rgba(255,85,0,0.18);
          }
          .request-modal-input,
          .request-modal-textarea {
            width: 100%;
            border: 1px solid rgba(92,64,55,0.34);
            background: rgba(12,12,12,0.72);
            color: ${T.onSurface};
            font-family: var(--font-inter, Inter, sans-serif);
            font-size: 15px;
            line-height: 1.5;
            padding: 14px 15px;
          }
          .request-modal-input::placeholder,
          .request-modal-textarea::placeholder {
            color: rgba(201,176,168,0.42);
          }
          .request-modal-input:hover,
          .request-modal-textarea:hover {
            background: rgba(12,12,12,0.84);
          }
          .request-modal-input:focus,
          .request-modal-textarea:focus {
            border-color: rgba(255,85,0,0.5);
            box-shadow: 0 0 0 1px rgba(255,85,0,0.2);
          }
          @media (max-width: 640px) {
            .request-modal-overlay {
              align-items: flex-start !important;
              padding: 12px !important;
            }
            .request-modal-panel {
              width: 100% !important;
              max-height: calc(100dvh - 24px) !important;
            }
            .request-modal-submit {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function ModalField({
  label,
  placeholder,
  value,
  onChange,
  autoComplete,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
}) {
  return (
    <label style={{ display: "grid", gap: "8px" }}>
      <span
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "rgba(201,176,168,0.82)",
        }}
      >
        {label}
      </span>
      <input
        className="request-modal-input"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </label>
  );
}

function ModalTextarea({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label style={{ display: "grid", gap: "8px" }}>
      <span
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "rgba(201,176,168,0.82)",
        }}
      >
        {label}
      </span>
      <textarea
        className="request-modal-textarea"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
        style={{ resize: "vertical", minHeight: "140px" }}
      />
    </label>
  );
}
