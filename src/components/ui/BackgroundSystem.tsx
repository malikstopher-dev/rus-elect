"use client";

import { useReducedMotion } from "@/lib/motion";
import { motion } from "framer-motion";

interface BackgroundSystemProps {
  variant?: "grid" | "diagonal" | "radial" | "lines" | "dots" | "none";
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
  children?: React.ReactNode;
}

const opacityMap = {
  grid: { subtle: 0.02, medium: 0.04, strong: 0.06 },
  diagonal: { subtle: 0.015, medium: 0.03, strong: 0.05 },
  radial: { subtle: 0.01, medium: 0.02, strong: 0.03 },
  lines: { subtle: 0.015, medium: 0.03, strong: 0.05 },
  dots: { subtle: 0.01, medium: 0.02, strong: 0.03 },
} as const;

type Variant = keyof typeof opacityMap;
type Intensity = keyof typeof opacityMap.grid;

export function BackgroundSystem({
  variant = "grid",
  intensity = "subtle",
  className = "",
  children,
}: BackgroundSystemProps) {
  const reduced = useReducedMotion();
  const opacity = opacityMap[variant as Variant][intensity as Intensity];

  if (variant === "none") return <>{children}</>;

  return (
    <div className={`relative ${className}`}>
      {children}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {variant === "grid" && (
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,196,0,${opacity}) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,196,0,${opacity}) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
            animate={reduced ? {} : { backgroundPosition: ["0 0", "80px 80px"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        )}
        {variant === "diagonal" && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(
                    45deg,
                    rgba(255,196,0,${opacity * 2}) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "60px 60px",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(
                    -45deg,
                    rgba(229,27,35,${opacity}) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "120px 120px",
              }}
            />
          </>
        )}
        {variant === "radial" && (
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
              style={{
                background: `radial-gradient(circle, rgba(255,196,0,${opacity * 3}) 0%, transparent 70%)`,
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
              style={{
                background: `radial-gradient(circle, rgba(229,27,35,${opacity * 2}) 0%, transparent 70%)`,
              }}
            />
          </div>
        )}
        {variant === "lines" && (
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(255,196,0,${opacity}) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "100% 40px",
            }}
            animate={reduced ? {} : { backgroundPositionY: ["0px", "40px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        )}
        {variant === "dots" && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(rgba(255,196,0,${opacity}) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
          }}
        />
      </div>
    </div>
  );
}

export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px ${className}`} aria-hidden="true">
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-rus-yellow/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rus-yellow" />
    </div>
  );
}

export function DiagonalAccent({ position = "top-right", className = "" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; className?: string }) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };
  return (
    <div
      className={`absolute ${positions[position]} w-32 h-32 ${className}`}
      aria-hidden="true"
      style={{
        clipPath: "polygon(0 0, 100% 0, 0 100%)",
        background: "linear-gradient(135deg, rgba(255,196,0,0.08) 0%, transparent 70%)",
      }}
    />
  );
}