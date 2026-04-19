"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const ATTR = "data-reveal";
const VISIBLE = "data-reveal-visible";

function isRoughlyInView(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 800;
  return rect.top < vh * 0.94 && rect.bottom > -48;
}

export function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll(`[${ATTR}]`));
    if (nodes.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach((el) => el.setAttribute(VISIBLE, "true"));
      return;
    }

    for (const el of nodes) {
      if (isRoughlyInView(el)) {
        el.setAttribute(VISIBLE, "true");
      }
    }

    root.classList.add("reveal-enabled");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute(VISIBLE, "true");
          if (entry.target.getAttribute("data-reveal-once") !== "false") {
            io.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0.04 }
    );

    for (const el of nodes) {
      if (!el.hasAttribute(VISIBLE)) {
        io.observe(el);
      }
    }

    return () => {
      io.disconnect();
      root.classList.remove("reveal-enabled");
    };
  }, [pathname]);

  return null;
}
