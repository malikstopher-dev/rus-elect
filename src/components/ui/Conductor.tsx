"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion, easings } from "@/lib/motion";

/**
 * SectionTrace — the signature RUS conductor.
 *
 * A coordinated section-boundary trace: as a section enters the viewport a
 * hairline energises left→right and the terminal node switches on, handing
 * "current" to the section that follows. Full-bleed, 1px, restrained —
 * this is the recurring visual grammar, not decoration on every element.
 *
 * Reduced motion: static hairline + lit terminal, no travel.
 */
export function SectionTrace({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 h-px ${className}`}
      aria-hidden="true"
    >
      {/* Dead rail */}
      <span className="absolute inset-0 bg-rus-white/10" />
      {/* Live current — draws once on enter, then settles to a quiet rest
          so the yellow reads as signal, never as a flood */}
      <motion.span
        className="absolute inset-y-0 left-0 w-full origin-left bg-rus-yellow/60"
        initial={reduced ? { scaleX: 1, opacity: 0.45 } : { scaleX: 0, opacity: 1 }}
        whileInView={{ scaleX: 1, opacity: 0.45 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={
          reduced
            ? { duration: 0 }
            : {
                scaleX: { duration: 0.7, ease: easings.smooth },
                opacity: { duration: 0.5, delay: 1.0, times: [0, 1] },
              }
        }
      />
      {/* Terminal node lands at the far end */}
      <motion.span
        className="absolute -top-[3px] right-0 h-[7px] w-[7px] bg-rus-yellow"
        initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 0.2, delay: 0.62, ease: easings.snappy }
        }
      />
    </div>
  );
}

/**
 * PlateReveal — image transition inspired by an isolator / contactor stroke.
 *
 * The photograph sits behind three horizontal plates. On activation the
 * plates snap open top→bottom in a 70ms cascade (each 160ms, snappy ease),
 * total ≈ 0.3s — a switching action, never a fade.
 *
 * Mount `children` inside; the plates run once on mount (accordion open,
 * keyed service change, in-view image reveal).
 */
export function PlateReveal({
  children,
  reduced,
  className = "",
  plateClassName = "bg-rus-black",
  delay = 0,
}: {
  children: ReactNode;
  reduced: boolean;
  className?: string;
  plateClassName?: string;
  delay?: number;
}) {
  const bands = [
    { top: "0%", origin: "top" as const, d: 0 },
    { top: "33.4%", origin: "bottom" as const, d: 0.07 },
    { top: "66.8%", origin: "top" as const, d: 0.14 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {children}
      {!reduced &&
        bands.map((band) => (
          <motion.span
            key={band.top}
            className={`absolute inset-x-0 h-[33.6%] ${plateClassName}`}
            style={{ top: band.top, transformOrigin: band.origin }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: 0.16,
              delay: delay + band.d,
              ease: easings.snappy,
            }}
            aria-hidden="true"
          />
        ))}
    </div>
  );
}
