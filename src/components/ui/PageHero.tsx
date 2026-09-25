"use client";

/**
 * PageHero — the Current System route header.
 *
 * Every non-homepage route opens with this: mono eyebrow line (yellow rule),
 * uppercase black-weight display headline, supporting line, optional CTAs,
 * and an optional right-side image panel cut on the bolt's diagonal. A bolt
 * watermark sits behind the copy at field opacity; a current line travels
 * the bottom hairline.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import { BoltMark, CurrentLine } from "@/components/ui/BoltMark";
import { TraceRule } from "@/components/ui/Trace";
import { useReducedMotion, easings } from "@/lib/motion";

export default function PageHero({
  eyebrow,
  title,
  support,
  image,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  support?: string;
  image?: { src: string; alt: string; position?: string };
  children?: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: easings.smooth },
        };

  return (
    <section className="relative overflow-hidden border-b border-rus-white/10 bg-rus-black">
      {/* Bolt field — right side, very low opacity */}
      <BoltMark
        className={`pointer-events-none absolute -right-10 top-1/2 h-[130%] w-auto -translate-y-1/2 rotate-6 ${
          image ? "opacity-[0.02]" : "opacity-[0.045]"
        }`}
      />

      {/* Optional right-side image panel, cut on the bolt diagonal */}
      {image && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <div
            className="relative h-full w-full"
            style={{
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="object-cover"
              style={image.position ? { objectPosition: image.position } : undefined}
              sizes="(min-width: 1024px) 42vw, 0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-rus-black via-rus-black/30 to-rus-black/40" />
          </div>
          {/* Yellow seam along the diagonal cut */}
          <svg
            className="absolute inset-y-0 left-0 h-full w-16"
            viewBox="0 0 16 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="13"
              y1="0"
              x2="3"
              y2="200"
              stroke="#FFC400"
              strokeWidth="2"
              opacity="0.85"
            />
          </svg>
        </div>
      )}

      <div className="container-rus relative py-20 lg:py-28">
        <motion.div {...fadeUp(0)} className="flex items-center gap-3">
          <TraceRule className="w-10" />
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-rus-yellow">
            {eyebrow}
          </p>
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className={`mt-6 max-w-4xl text-[clamp(2.4rem,5.5vw,4.5rem)] font-black uppercase leading-[0.98] tracking-tight text-rus-white ${
            image ? "lg:max-w-[56%]" : ""
          }`}
        >
          {title}
        </motion.h1>

        {support && (
          <motion.p
            {...fadeUp(0.18)}
            className={`mt-6 max-w-2xl text-lg leading-relaxed text-rus-grey ${
              image ? "lg:max-w-[52%]" : ""
            }`}
          >
            {support}
          </motion.p>
        )}

        {children && (
          <motion.div
            {...fadeUp(0.28)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {children}
          </motion.div>
        )}

        {/* Mobile image band */}
        {image && (
          <motion.div
            {...fadeUp(0.32)}
            className="relative mt-10 aspect-[16/9] w-full lg:hidden"
            style={{
              clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="object-cover"
              style={image.position ? { objectPosition: image.position } : undefined}
              sizes="100vw"
            />
          </motion.div>
        )}
      </div>

      {/* Current line along the bottom edge */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full"
        viewBox="0 0 1440 1"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0.5"
          x2="1440"
          y2="0.5"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <CurrentLine d="M0 0.5 H1440" strokeWidth={1.5} />
      </svg>
    </section>
  );
}
