"use client";

import React, { useState } from "react";

type RemoteImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  wrapperStyle?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  fallbackStyle?: React.CSSProperties;
};

const DEFAULT_FALLBACK: React.CSSProperties = {
  background:
    "radial-gradient(circle at 20% 22%, rgba(255,85,0,0.2), transparent 34%), radial-gradient(circle at 78% 18%, rgba(255,181,156,0.14), transparent 32%), linear-gradient(145deg, rgba(19,19,19,0.98) 0%, rgba(10,10,10,0.98) 100%)",
};

const DEFAULT_FALLBACK_OVERLAY: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(92,64,55,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(92,64,55,0.16) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  mixBlendMode: "screen",
  opacity: 0.42,
};

export function RemoteImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
  wrapperStyle,
  imgStyle,
  fallbackStyle,
}: RemoteImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
        ...wrapperStyle,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          ...DEFAULT_FALLBACK,
          ...fallbackStyle,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          ...DEFAULT_FALLBACK_OVERLAY,
        }}
      />
      {!failed ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className={imgClassName}
            onError={() => setFailed(true)}
            style={{
              position: "relative",
              zIndex: 1,
              display: "block",
              width: "100%",
              height: "100%",
              ...imgStyle,
            }}
          />
        </>
      ) : null}
    </div>
  );
}
