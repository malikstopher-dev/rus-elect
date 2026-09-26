"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CurrentLine } from "@/components/ui/BoltMark";
import { useReducedMotion, easings } from "@/lib/motion";

const categories = [
  "Commercial property electrical",
  "Office & workspace fit-outs",
  "Retail installations",
  "Industrial environments",
  "Planned maintenance programs",
  "Power distribution",
  "Compliance & COC",
];

/**
 * Full-bleed technical band. The industrial photograph fills the viewport
 * width; overlays borrow from technical drawings — thin grid, one live
 * circuit path, mono labels. No invented engineering data.
 */
export default function Commercial() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-rus-black">
      {/* ── The band ─────────────────────────────────────────────── */}
      <div className="relative h-[52svh] overflow-hidden lg:h-[88svh]">
        <motion.div
          className="absolute inset-[-6%]"
          initial={reduced ? { scale: 1 } : { scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 1.4, ease: easings.smooth }}
        >
          <Image
            src="/assets/industrial-electrician.webp"
            alt="RUS Electrical technician working on industrial electrical equipment"
            fill
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
        </motion.div>

        {/* Density: deep overlay — this section is deliberately darker */}
        <div className="absolute inset-0 bg-rus-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-rus-black via-transparent to-rus-black/60" />

        {/* Technical drawing grid */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,242,236,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,236,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Live circuit path with terminal nodes */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 150 H360 L430 220 H980"
            fill="none"
            stroke="rgba(244,242,236,0.14)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M1440 640 H1080 L1010 570 H620"
            fill="none"
            stroke="rgba(244,242,236,0.14)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <CurrentLine d="M0 150 H360 L430 220 H980" />
          <CurrentLine d="M1440 640 H1080 L1010 570 H620" />
          <rect x="425" y="215" width="10" height="10" fill="#050505" stroke="rgba(255,196,0,0.6)" strokeWidth="1" />
          <rect x="1005" y="565" width="10" height="10" fill="#050505" stroke="rgba(255,196,0,0.6)" strokeWidth="1" />
        </svg>

        {/* Corner labels */}
        <motion.p
          className="absolute left-5 top-6 font-mono text-[10px] uppercase tracking-[0.3em] text-rus-white/60 lg:left-14 lg:top-10"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.3 }}
        >
          02 — Commercial + Industrial
        </motion.p>
        <motion.p
          className="absolute right-5 top-6 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-rus-white/60 sm:block lg:right-14 lg:top-10"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.35 }}
        >
          Sandton — JHB North
        </motion.p>
        <motion.p
          className="absolute bottom-6 right-5 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-rus-white/60 sm:block lg:bottom-10 lg:right-14"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.4 }}
        >
          Maintenance / Distribution / Compliance
        </motion.p>
      </div>

      {/* ── Content plate — bottom-left, over the band ────────────── */}
      <div className="container-rus relative z-10">
        <motion.div
          className="-mt-16 max-w-2xl bg-rus-black/95 p-7 backdrop-blur-sm sm:p-8 lg:-mt-40 lg:p-10"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.2, ease: easings.smooth }}
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-rus-yellow" aria-hidden="true" />
          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight text-rus-white sm:text-4xl lg:text-5xl">
            Built for demanding environments<span className="text-rus-yellow">.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-rus-grey">
            Commercial and industrial properties run on systems that cannot
            afford failure. We work with property managers, business owners
            and facility teams to keep those systems performing.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {categories.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] leading-relaxed text-rus-grey"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-rus-yellow" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/commercial"
              className="inline-flex items-center justify-center gap-3 bg-rus-yellow px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-rus-black transition-all duration-200 hover:-translate-y-px hover:brightness-105"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
              }}
            >
              Commercial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/industrial"
              className="inline-flex items-center justify-center gap-3 border border-rus-white/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-rus-white transition-colors duration-200 hover:border-rus-yellow/60 hover:bg-rus-yellow/5"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
              }}
            >
              Industrial
              <ArrowRight className="h-4 w-4 text-rus-yellow" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="py-8 lg:py-16" aria-hidden="true" />
    </section>
  );
}
