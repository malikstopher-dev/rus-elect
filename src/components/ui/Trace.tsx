"use client";

/**
 * Circuit trace primitives — the site's section-transition language.
 *
 * TraceRule: drop-in replacement for the yellow rule span inside `.eyebrow`
 * labels. When the section enters the viewport (once), the line energises
 * left→right and the terminal square lights. Visually identical to the
 * static rule after the run — motion is the only addition.
 *
 * Energize: a labeled circuit trace (──────●── 01) for meaningful section
 * boundaries. The line draws, the terminal illuminates, the index activates.
 *
 * All motion disabled under prefers-reduced-motion (global CSS override).
 */

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/motion";

export function TraceRule({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      className={`relative h-px w-8 ${className}`}
      initial={reduced ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduced ? 0 : 0.45, ease: "linear" }}
      style={{ transformOrigin: "left" }}
      aria-hidden="true"
    >
      <span className="absolute inset-0 bg-rus-yellow" />
      <motion.span
        className="absolute -right-[3px] top-1/2 h-[5px] w-[5px] -translate-y-1/2 bg-rus-yellow"
        initial={reduced ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: reduced ? 0 : 0.18, delay: reduced ? 0 : 0.4 }}
      />
    </motion.span>
  );
}

/**
 * A full circuit trace: line energises, terminal illuminates, index
 * activates. Restrained — use only at real section boundaries.
 */
export function Energize({
  index,
  label,
  className = "",
}: {
  index?: string;
  label?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const t = (d: number) =>
    reduced ? { duration: 0 } : { duration: 0.4, delay: d, ease: "linear" as const };

  return (
    <span className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="relative h-px flex-1">
        <span className="absolute inset-0 bg-rus-white/10" />
        <motion.span
          className="absolute inset-y-0 left-0 w-full bg-rus-yellow/70"
          initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          style={{ transformOrigin: "left" }}
          transition={{ ...t(0), duration: reduced ? 0 : 0.5 }}
        />
        <motion.span
          className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 border border-rus-yellow/60 bg-rus-black"
          initial={reduced ? { opacity: 1 } : { opacity: 0.25 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={t(0.45)}
        />
      </span>
      {(index || label) && (
        <motion.span
          className="cap-mono shrink-0"
          initial={reduced ? { opacity: 1 } : { opacity: 0.2, color: "rgba(169,175,183,0.6)" }}
          whileInView={{ opacity: 1, color: "#FFC400" }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={t(0.5)}
        >
          {index}
          {label ? ` — ${label}` : ""}
        </motion.span>
      )}
    </span>
  );
}
