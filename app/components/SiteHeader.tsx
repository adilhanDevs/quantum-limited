import Link from "next/link";

/** Matches `Services` page nav: grid layout, Inter links, Space Grotesk logo & CTA. */
const T = {
  onSurface: "#e2e2e2",
  primaryCtn: "#ff5500",
  onPrimary: "#390c00",
};

export type SiteNavActive = "services" | "process-protocol" | "clients" | "contact" | null;

const NAV_LINKS: { label: string; href: string; key: NonNullable<SiteNavActive> }[] = [
  { label: "Services", href: "/services", key: "services" },
  { label: "Process", href: "/process-protocol", key: "process-protocol" },
  { label: "Clients", href: "/clients", key: "clients" },
  { label: "Contact", href: "/contact", key: "contact" },
];

function ctaLabel(active: SiteNavActive): string {
  if (active === "clients" || active === "contact") return "GET STARTED";
  if (active === null || active === "process-protocol") return "INQUIRY";
  return "INITIATE PROJECT";
}

export function SiteHeader({ active }: { active: SiteNavActive }) {
  return (
    <>
      <nav
        id="site-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(19,19,19,0.82)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid rgba(92,64,55,0.15)`,
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "0 28px",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            columnGap: "40px",
            height: "78px",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "18px",
              fontWeight: 700,
              color: T.onSurface,
              textDecoration: "none",
              letterSpacing: "0.18em",
              justifySelf: "start",
            }}
          >
            QUANTUM LIMITED
          </Link>

          <ul
            id="site-nav-links"
            style={{
              display: "flex",
              gap: "36px",
              listStyle: "none",
              alignItems: "center",
              justifyContent: "center",
              justifySelf: "center",
              width: "100%",
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.key;
              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="site-nav-link"
                    style={{
                      fontFamily: "var(--font-inter, Inter, sans-serif)",
                      fontSize: "12px",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? T.primaryCtn : "#9ca3af",
                      textDecoration: "none",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      paddingBottom: "6px",
                      borderBottom: isActive ? `2px solid ${T.primaryCtn}` : "2px solid transparent",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-space-grotesk, Space Grotesk, sans-serif)",
              fontSize: "12px",
              fontWeight: 700,
              color: T.onPrimary,
              background: T.primaryCtn,
              padding: "14px 26px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "inline-block",
              justifySelf: "end",
            }}
          >
            {ctaLabel(active)}
          </Link>
        </div>
      </nav>

      <style>{`
        .site-nav-link:hover {
          color: ${T.onSurface} !important;
        }
        @media (max-width: 900px) {
          #site-nav > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            height: auto !important;
            min-height: 0 !important;
            padding: 16px 20px !important;
            gap: 16px !important;
          }
          #site-nav-links {
            gap: 16px 20px !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
}
