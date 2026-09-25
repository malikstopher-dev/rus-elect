"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { BoltMark } from "@/components/ui/BoltMark";
import { useReducedMotion, easings } from "@/lib/motion";
import { business } from "@/data/business";

const capabilities = [
  "Fault Finding",
  "Installations",
  "Rewiring",
  "Compliance",
  "Backup Power",
  "Maintenance",
];

const PLATE_CLIP =
  "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)";

/**
 * Hero power-up sequence (~1.3s total, never blocking):
 *  1. header/logo — global Navbar fade (mount)
 *  2. a single yellow trace energises the circuit line
 *  3. POWER / WITHOUT / COMPROMISE. masks up line by line;
 *     one controlled voltage flicker; the yellow terminal dot lights last
 *  4. hero image diagonally wipes in
 *  5. CTA rail activates
 * After the sequence the hero is static (only the trace loops once at load).
 */
export default function Hero() {
  const reduced = useReducedMotion();

  const t = (delay: number, duration = 0.5) => ({
    duration: reduced ? 0 : duration,
    delay: reduced ? 0 : delay,
    ease: easings.smooth,
  });

  /** Masked line reveal — the words rise out of an inline mask. */
  const line = (delay: number) => ({
    initial: reduced ? { y: 0 } : { y: "110%" },
    animate: { y: "0%" },
    transition: t(delay, 0.34),
  });

  return (
    <section className="relative overflow-hidden bg-rus-black">
      {/* ── The bolt field (desktop watermark) ────────────────────── */}
      <motion.div
        className="pointer-events-none absolute -left-[18vw] top-1/2 h-[118%] -translate-y-1/2 text-rus-white opacity-[0.045] sm:-left-[10vw] lg:left-[30%]"
        initial={reduced ? { opacity: 0.045 } : { opacity: 0 }}
        animate={{ opacity: 0.045 }}
        transition={{ duration: reduced ? 0 : 1.1, delay: reduced ? 0 : 0.9, ease: easings.gentle }}
        aria-hidden="true"
      >
        <BoltMark className="h-full w-auto" />
      </motion.div>

      {/* ── Circuit trace: energises once on power-up, then rests ──── */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M1442 64 H1180 L820 740 H420"
          fill="none"
          stroke="rgba(244,242,236,0.10)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d="M1442 64 H1180 L820 740 H420"
          fill="none"
          stroke="#FFC400"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          initial={reduced ? { strokeDashoffset: 0, opacity: 0.9 } : { strokeDasharray: "0.045 1", strokeDashoffset: 0.045, opacity: 0.9 }}
          animate={reduced ? { opacity: 0.9 } : { strokeDashoffset: -1 }}
          transition={reduced ? {} : { duration: 0.9, delay: 0.15, ease: "linear" }}
        />
        <motion.rect
          x="415"
          y="735"
          width="10"
          height="10"
          fill="none"
          stroke="#FFC400"
          initial={reduced ? { strokeOpacity: 0.5 } : { strokeOpacity: 0 }}
          animate={{ strokeOpacity: 0.5 }}
          transition={t(1.05, 0.2)}
        />
      </svg>

      {/* ── Technician image — diagonal wipe, desktop ─────────────── */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] lg:block" aria-hidden="true">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduced ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 0 0 100%)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={t(0.55, 0.55)}
          >
            <Image
              src="/assets/hero-residential-electrician.webp"
              alt="RUS Electrical technician working at a distribution board"
              fill
              priority
              className="object-cover object-center"
              sizes="45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-rus-black via-rus-black/15 to-transparent" />
            <div className="absolute inset-0 bg-rus-black/10" />
          </motion.div>

          {/* Yellow seam along the diagonal cut — energises after the wipe */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.line
              x1="14"
              y1="0"
              x2="0"
              y2="100"
              stroke="#FFC400"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              initial={reduced ? { pathLength: 1, strokeOpacity: 0.55 } : { pathLength: 0, strokeOpacity: 0.55 }}
              animate={{ pathLength: 1 }}
              transition={t(0.85, 0.3)}
            />
          </svg>

          <motion.p
            className="absolute bottom-6 left-24 font-mono text-[10px] uppercase tracking-[0.3em] text-rus-white/70"
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t(1.15, 0.3)}
          >
            RUS technician · on site
          </motion.p>
        </div>
      </div>

      {/* ── Composition ───────────────────────────────────────────── */}
      <div className="container-rus relative flex flex-col lg:min-h-[calc(100svh-4rem)]">
        <div className="relative z-10 pb-8 pt-9 lg:flex lg:flex-1 lg:items-center lg:py-0">
          <div className="w-full max-w-3xl">
            {/* Stage 2b — micro location line rides the first trace */}
            <motion.p
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={t(0.1, 0.35)}
              className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-rus-grey lg:mb-7 lg:text-[11px]"
            >
              <motion.span
                className="h-px w-10 origin-left bg-rus-yellow"
                initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={t(0.1, 0.4)}
                aria-hidden="true"
              />
              Sandton / Johannesburg North
            </motion.p>

            {/* Stage 3 — masked line reveal, flicker, terminal dot last */}
            <motion.h1
              initial={reduced ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={t(0.3, 0.15)}
              className="text-[clamp(2.55rem,12.4vw,6.75rem)] font-black uppercase leading-[0.92] tracking-[-0.015em] text-rus-white lg:text-[clamp(3.05rem,7.4vw,6.75rem)]"
            >
              <span className="block overflow-hidden">
                <motion.span className="block" {...line(0.32)}>Power</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block" {...line(0.42)}>without</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block" {...line(0.52)}>
                  <motion.span
                    initial={reduced ? {} : { opacity: 1 }}
                    animate={reduced ? {} : { opacity: [1, 0.35, 1, 0.5, 1] }}
                    transition={reduced ? {} : { duration: 0.22, delay: 0.95, times: [0, 0.25, 0.5, 0.75, 1] }}
                    className="inline-block"
                  >
                    compromise
                  </motion.span>
                  <motion.span
                    className="text-rus-yellow"
                    initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={t(1.12, 0.15)}
                  >
                    .
                  </motion.span>
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={t(0.72, 0.4)}
              className="mt-6 max-w-md text-base leading-relaxed text-rus-grey lg:mt-8 lg:text-lg"
            >
              Electrical systems for homes, businesses and demanding
              environments.
            </motion.p>

            <motion.p
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={t(0.8, 0.4)}
              className="mt-5 hidden items-center gap-3 text-sm text-rus-grey/90 sm:flex"
            >
              <BoltMark className="h-3.5 w-auto text-rus-yellow" aria-hidden="true" />
              <span>&ldquo;{business.tagline}&rdquo;</span>
            </motion.p>

            {/* Stage 5 — CTA rail activates */}
            <motion.div
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={t(0.95, 0.4)}
              className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10"
            >
              <Link
                href="/contact#quote"
                className="plate-cta plate-cta-primary inline-flex items-center justify-center gap-3 bg-rus-yellow px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-rus-black transition-all duration-200 hover:-translate-y-px hover:brightness-105 active:translate-y-0"
                style={{ clipPath: PLATE_CLIP }}
              >
                Request assessment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span className="plate-rail" aria-hidden="true" />
                <span className="plate-terminal" aria-hidden="true" />
              </Link>
              {/* Phone action moved to the sticky bottom bar on mobile —
                  this CTA returns in-flow from sm up */}
              <a
                href={business.primaryPhoneLink}
                className="call-cta plate-cta hidden items-center justify-center gap-3 border border-rus-white/25 px-8 py-4 font-mono text-sm tracking-wider text-rus-white transition-colors duration-200 hover:border-rus-yellow/60 hover:bg-rus-yellow/5 sm:inline-flex"
                style={{ clipPath: PLATE_CLIP }}
              >
                <Phone className="contactor-icon h-4 w-4 text-rus-yellow" aria-hidden="true" />
                {business.primaryPhone}
                <span className="plate-rail" aria-hidden="true" />
                <span className="plate-terminal" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── Mobile poster image — begins immediately after the fold ── */}
        <motion.div
          className="relative z-10 -mx-5 mb-8 aspect-[4/5] max-h-[58svh] overflow-hidden lg:hidden"
          style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)" }}
          initial={reduced ? { clipPath: "polygon(0 4%, 100% 0, 100% 4%, 0 8%)", opacity: 1 } : { clipPath: "polygon(0 4%, 100% 0, 100% 0, 0 4%)" }}
          animate={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)" }}
          transition={t(0.6, 0.5)}
        >
          <Image
            src="/assets/hero-residential-electrician.webp"
            alt="RUS Electrical technician working at a distribution board"
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rus-black/50 via-transparent to-rus-black/20" />
          <p className="absolute bottom-3 left-3 flex items-center gap-2 bg-rus-black/90 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.28em] text-rus-white/85">
            <span className="h-1 w-1 bg-rus-yellow" aria-hidden="true" />
            RUS technician · on site
          </p>
        </motion.div>
      </div>

      {/* ── Capability rail ───────────────────────────────────────── */}
      <div className="relative z-10 border-t border-rus-white/10 bg-rus-black">
        <motion.div
          className="container-rus flex items-center gap-8 overflow-x-auto py-5 no-scrollbar"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={t(1.1, 0.4)}
        >
          {capabilities.map((capability, index) => (
            <span key={capability} className="flex shrink-0 items-center gap-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-rus-grey">
                {capability}
              </span>
              {index < capabilities.length - 1 && (
                <BoltMark className="h-2.5 w-auto text-rus-yellow/50" aria-hidden="true" />
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
