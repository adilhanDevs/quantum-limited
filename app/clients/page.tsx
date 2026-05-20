"use client";

import React from "react";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { Footer as GlobalFooter } from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";
import { getProjects, type ApiPortfolioProject } from "../lib/website-api";

const T = {
  surface: "#131313",
  surfaceLow: "#1b1b1b",
  surfaceContainer: "#1f1f1f",
  surfaceHigh: "#2a2a2a",
  surfaceHighest: "#353535",
  onSurface: "#e2e2e2",
  onSurfaceVar: "#a1a1aa",
  primary: "#ffb59c",
  primaryCtn: "#ff5500",
  onPrimary: "#511500",
};

const marqueeItemKeys = [
  "clients.marquee.0",
  "clients.marquee.1",
  "clients.marquee.2",
  "clients.marquee.3",
  "clients.marquee.4",
  "clients.marquee.5",
];

const projectIcons = [
  "calendar_month",
  "dashboard",
  "contacts",
  "shopping_bag",
  "school",
  "smartphone",
  "analytics",
  "api",
  "automation",
  "language",
];

const projectPreviewStyles = [
  "radial-gradient(circle at 18% 22%, rgba(255,85,0,0.34), transparent 30%), linear-gradient(135deg, rgba(40,28,24,0.98), rgba(10,10,10,0.98))",
  "radial-gradient(circle at 82% 20%, rgba(255,181,156,0.22), transparent 28%), linear-gradient(145deg, rgba(20,20,22,0.98), rgba(55,31,20,0.72))",
  "radial-gradient(circle at 24% 80%, rgba(179,123,93,0.32), transparent 30%), linear-gradient(135deg, rgba(12,12,12,0.98), rgba(34,30,27,0.94))",
  "radial-gradient(circle at 78% 68%, rgba(255,85,0,0.26), transparent 32%), linear-gradient(150deg, rgba(30,22,20,0.98), rgba(9,9,9,0.98))",
  "radial-gradient(circle at 50% 20%, rgba(255,181,156,0.2), transparent 34%), linear-gradient(140deg, rgba(16,18,20,0.98), rgba(44,28,22,0.82))",
  "radial-gradient(circle at 70% 26%, rgba(255,85,0,0.3), transparent 30%), linear-gradient(135deg, rgba(10,10,10,0.98), rgba(38,34,32,0.92))",
  "radial-gradient(circle at 20% 72%, rgba(255,181,156,0.2), transparent 34%), linear-gradient(145deg, rgba(32,24,21,0.98), rgba(11,11,11,0.98))",
  "radial-gradient(circle at 80% 22%, rgba(255,85,0,0.24), transparent 28%), linear-gradient(135deg, rgba(18,18,20,0.98), rgba(42,26,20,0.8))",
  "radial-gradient(circle at 30% 28%, rgba(179,123,93,0.28), transparent 34%), linear-gradient(150deg, rgba(12,12,12,0.98), rgba(34,24,21,0.94))",
  "radial-gradient(circle at 75% 74%, rgba(255,85,0,0.24), transparent 32%), linear-gradient(145deg, rgba(22,18,16,0.98), rgba(8,8,8,0.98))",
];

type DisplayProject = {
  id: number | string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  tags: string[];
  outcome: string;
  status: string;
};

function apiProjectToDisplay(project: ApiPortfolioProject, index: number, t: (key: string) => string): DisplayProject {
  return {
    id: project.id,
    title: project.title,
    category: project.category,
    description: project.short_description,
    fullDescription: project.full_description,
    imageUrl: project.image_url,
    projectUrl: project.project_url,
    githubUrl: project.github_url,
    tags: [project.category],
    outcome: project.full_description || project.short_description,
    status: `${t("clients.project.api_status")} ${String(index + 1).padStart(2, "0")}`,
  };
}

export default function ClientsPage() {
  return (
    <>
      <SiteHeader active="clients" />
      <main style={{ position: "relative", background: T.surface, paddingTop: "var(--site-header-offset, 78px)" }}>
        <HeroSection />
        <MarqueeSection />
        <PortfolioSection />
      </main>
      <GlobalFooter />

      <style>{`
        .clients-hero-grid {
          background-image: radial-gradient(circle, rgba(92, 64, 55, 0.12) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes clients-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .clients-marquee-track {
          overflow: hidden;
          width: 100%;
        }
        .clients-marquee-inner {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: clients-marquee 34s linear infinite;
        }
        .clients-project-card {
          transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .clients-project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,85,0,0.34) !important;
          background: #201a18 !important;
          box-shadow: 0 22px 48px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,85,0,0.08);
        }
        .clients-project-card:hover .clients-project-preview::after {
          opacity: 0.42;
        }
        .clients-project-card:hover .clients-project-link {
          gap: 14px !important;
          color: #ffffff !important;
        }
        .clients-project-link:focus-visible,
        .clients-footer-link:focus-visible {
          outline: 2px solid rgba(255,181,156,0.9);
          outline-offset: 4px;
        }
        .clients-project-preview::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.22;
        }
        .clients-project-preview::after {
          content: "";
          position: absolute;
          inset: auto 0 0 0;
          height: 48%;
          background: linear-gradient(180deg, transparent, rgba(255,85,0,0.18));
          opacity: 0.24;
          transition: opacity 0.3s ease;
        }
        .clients-footer-link:hover {
          color: #a3a3a3 !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-marquee-inner {
            animation: none !important;
          }
          .clients-project-card,
          .clients-project-card:hover {
            transform: none !important;
          }
        }
        @media (max-width: 1000px) {
          .clients-hero-stats,
          .clients-portfolio-grid {
            grid-template-columns: 1fr !important;
          }
          .clients-hero-stats > div[aria-hidden="true"] {
            display: none !important;
          }
          .clients-portfolio-head {
            grid-template-columns: 1fr !important;
          }
          .clients-footer-grid {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 40px !important;
          }
          .clients-footer-status {
            width: 100% !important;
            min-width: 0 !important;
          }
        }
        @media (max-width: 640px) {
          .clients-hero-grid {
            min-height: auto !important;
            padding-top: 72px !important;
          }
          .clients-hero-title {
            font-size: clamp(38px, 13vw, 56px) !important;
            line-height: 0.96 !important;
          }
          .clients-hero-stats {
            gap: 28px !important;
            text-align: left !important;
          }
          .clients-project-card {
            padding: 20px !important;
          }
          .clients-project-preview {
            min-height: 190px !important;
          }
          .clients-project-meta {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .clients-project-title {
            font-size: 24px !important;
          }
          .clients-project-tags {
            gap: 8px !important;
          }
          .clients-footer-status {
            grid-template-columns: 1fr !important;
            padding: 28px 24px !important;
          }
        }
        @media (max-width: 390px) {
          .clients-project-card {
            padding: 18px !important;
          }
          .clients-project-preview {
            min-height: 170px !important;
          }
          .clients-marquee-inner {
            gap: 36px !important;
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
      className="clients-hero-grid"
      style={{
        position: "relative",
        minHeight: "min(860px, 90vh)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(88px, 14vw, 128px) clamp(24px, 3.5vw, 40px) 0",
        overflow: "hidden",
        background: T.surface,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "58%",
          height: "100%",
          background: "linear-gradient(270deg, rgba(255,85,0,0.14) 0%, transparent 74%)",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "min(1320px, 100%)", width: "100%", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <span style={{ width: "48px", height: "1px", background: T.primary }} />
          <span
            style={{
              color: T.primaryCtn,
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "13px",
              letterSpacing: "0.3em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {t("clients.hero.badge")}
          </span>
        </div>

        <h1
          className="clients-hero-title"
          style={{
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "clamp(48px, 7vw, 104px)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginBottom: "36px",
            color: T.onSurface,
            textTransform: "uppercase",
            maxWidth: "min(1120px, 100%)",
          }}
        >
          {t("clients.hero.title1")}{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${T.primary} 0%, ${T.primaryCtn} 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t("clients.hero.title2")}
          </span>{" "}
          {t("clients.hero.title3")}
        </h1>

        <p
          style={{
            color: T.onSurfaceVar,
            fontSize: "clamp(17px, 2vw, 20px)",
            maxWidth: "720px",
            lineHeight: 1.68,
            fontWeight: 300,
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            marginBottom: "56px",
          }}
        >
          {t("clients.hero.description")}
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid rgba(255,85,0,0.28)",
            background: "rgba(255,85,0,0.08)",
            color: T.primary,
            padding: "12px 16px",
            fontFamily: "ui-monospace, monospace",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          <span style={{ width: "7px", height: "7px", background: T.primaryCtn, boxShadow: "0 0 14px rgba(255,85,0,0.48)" }} />
          {t("clients.hero.placeholder_note")}
        </div>
      </div>

      <div
        style={{
          marginTop: "auto",
          borderTop: "1px solid rgba(92,64,55,0.35)",
          padding: "40px clamp(24px, 3.5vw, 40px) 48px",
          width: "100%",
        }}
      >
        <div
          className="clients-hero-stats"
          style={{
            maxWidth: "min(1320px, 100%)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <HeroMetric value={t("clients.hero.metric1.value")} label={t("clients.hero.metric1")} />
          <div style={{ width: "1px", height: "72px", background: "rgba(92,64,55,0.45)" }} aria-hidden={true} />
          <HeroMetric value={t("clients.hero.metric2.value")} label={t("clients.hero.metric2")} />
        </div>
      </div>
    </section>
  );
}

function HeroMetric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "clamp(38px, 5vw, 60px)",
          fontWeight: 900,
          color: T.primaryCtn,
          lineHeight: 1,
          marginBottom: "12px",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: "#ffffff",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function MarqueeSection() {
  const { t } = useLanguage();
  const loop = [...marqueeItemKeys, ...marqueeItemKeys];
  return (
    <section
      data-reveal
      style={{
        padding: "28px 0",
        background: T.surfaceLow,
        borderTop: "1px solid rgba(92,64,55,0.12)",
        borderBottom: "1px solid rgba(92,64,55,0.12)",
        overflow: "hidden",
      }}
    >
      <div className="clients-marquee-track">
        <div className="clients-marquee-inner">
          {loop.map((key, i) => (
            <span
              key={`${key}-${i}`}
              style={{
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 900,
                fontStyle: "italic",
                textTransform: "uppercase",
                color: "rgba(226,226,226,0.14)",
                whiteSpace: "nowrap",
              }}
            >
              {t(key)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const { t } = useLanguage();
  const [projects, setProjects] = React.useState<DisplayProject[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasApiError, setHasApiError] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    getProjects()
      .then((apiProjects) => {
        if (!isMounted) return;

        setProjects(apiProjects.map((project, index) => apiProjectToDisplay(project, index, t)));
        setHasApiError(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setProjects([]);
        setHasApiError(true);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [t]);

  return (
    <section data-reveal style={{ padding: "96px clamp(20px, 3.5vw, 40px) 112px", background: T.surface }}>
      <div style={{ maxWidth: "min(1320px, 100%)", margin: "0 auto" }}>
        <div
          className="clients-portfolio-head"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(260px, 0.8fr)",
            gap: "40px",
            alignItems: "end",
            marginBottom: "48px",
          }}
        >
          <div>
            <p
              style={{
                color: T.primaryCtn,
                fontFamily: "ui-monospace, monospace",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {t("clients.portfolio.badge")}
            </p>
            <h2
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
                fontSize: "clamp(34px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {t("clients.portfolio.title")}
            </h2>
          </div>
          <p
            style={{
              color: T.onSurfaceVar,
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "15px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {t("clients.portfolio.description")}
          </p>
        </div>

        <p
          style={{
            color: hasApiError ? "rgba(255,181,156,0.78)" : "rgba(161,161,170,0.62)",
            fontFamily: "ui-monospace, monospace",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            margin: "0 0 24px",
          }}
        >
          {isLoading
            ? t("clients.portfolio.loading")
            : hasApiError
              ? t("clients.portfolio.error")
              : projects.length === 0
                ? t("clients.portfolio.empty")
                : t("clients.portfolio.live")}
        </p>

        {projects.length > 0 ? (
          <div
            className="clients-portfolio-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "20px",
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} index={index} project={project} />
            ))}
          </div>
        ) : (
          <div
            style={{
              border: "1px solid rgba(255,181,156,0.16)",
              background: "rgba(255,255,255,0.025)",
              padding: "36px",
              color: "rgba(226,226,226,0.78)",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              lineHeight: 1.7,
            }}
          >
            {isLoading ? t("clients.portfolio.loading") : hasApiError ? t("clients.portfolio.error_detail") : t("clients.portfolio.empty_detail")}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ index, project }: { index: number; project: DisplayProject }) {
  const { t } = useLanguage();
  const previewStyle = project.imageUrl
    ? `linear-gradient(180deg, rgba(10,10,10,0.18), rgba(10,10,10,0.62)), url("${project.imageUrl}")`
    : projectPreviewStyles[index % projectPreviewStyles.length];
  const projectHref = project.projectUrl || project.githubUrl || "/contact";

  return (
    <article
      className="clients-project-card"
      style={{
        background: T.surfaceLow,
        border: "1px solid rgba(92,64,55,0.22)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <div
        className="clients-project-preview"
        style={{
          position: "relative",
          minHeight: "240px",
          overflow: "hidden",
          background: previewStyle,
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginBottom: "26px",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "22px",
            top: "22px",
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            background: "rgba(10,10,10,0.46)",
            border: "1px solid rgba(255,181,156,0.16)",
            color: T.primary,
            fontFamily: "ui-monospace, monospace",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "16px", color: T.primaryCtn }}>
            {projectIcons[index % projectIcons.length]}
          </span>
          {project.status}
        </div>
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: "24px",
            bottom: "22px",
            zIndex: 1,
            width: "min(44%, 190px)",
            height: "34%",
            border: "1px solid rgba(255,181,156,0.18)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,85,0,0.08))",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        />
      </div>

      <div className="clients-project-meta" style={{ display: "flex", justifyContent: "space-between", gap: "18px", alignItems: "flex-start", marginBottom: "18px" }}>
        <div>
          <p
            style={{
              color: T.primary,
              fontFamily: "ui-monospace, monospace",
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              margin: "0 0 10px",
            }}
          >
            {project.category}
          </p>
          <h3
            className="clients-project-title"
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "clamp(25px, 3vw, 34px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {project.title}
          </h3>
        </div>
        <span
          style={{
            color: "rgba(226,226,226,0.48)",
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "22px",
            fontWeight: 800,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p
        style={{
          color: T.onSurfaceVar,
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          fontSize: "15px",
          lineHeight: 1.7,
          margin: "0 0 24px",
        }}
      >
        {project.description}
      </p>

      <div className="clients-project-tags" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              border: "1px solid rgba(255,181,156,0.16)",
              color: "rgba(226,226,226,0.76)",
              background: "rgba(255,255,255,0.025)",
              padding: "8px 10px",
              fontFamily: "ui-monospace, monospace",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: "20px",
          borderTop: "1px solid rgba(92,64,55,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <div>
          <p
            style={{
              color: T.primaryCtn,
              fontFamily: "ui-monospace, monospace",
              fontSize: "10px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              margin: "0 0 8px",
            }}
          >
            {t("clients.project.outcome_label")}
          </p>
          <p
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontSize: "14px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {project.outcome}
          </p>
        </div>
        <Link
          href={projectHref}
          className="clients-project-link"
          target={projectHref.startsWith("http") ? "_blank" : undefined}
          rel={projectHref.startsWith("http") ? "noopener noreferrer" : undefined}
          style={{
            color: T.primary,
            display: "inline-flex",
            alignItems: "center",
            gap: "9px",
            fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "gap 0.25s ease, color 0.25s ease",
            alignSelf: "flex-start",
          }}
        >
          {t("clients.project.cta")}
          <span className="material-symbols-outlined" style={{ fontSize: "17px", color: T.primaryCtn }}>
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  );
}
