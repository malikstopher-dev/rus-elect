"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useReducedMotion, easings } from "@/lib/motion";
import { TraceRule } from "@/components/ui/Trace";
import { SectionTrace } from "@/components/ui/Conductor";

const steps = [
  {
    number: "01",
    title: "Contact",
    description:
      "Call or send through the details of the work. We respond and arrange the next step.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We review your requirements and, where needed, assess the installation on site.",
  },
  {
    number: "03",
    title: "Scope",
    description:
      "You receive a clear scope of work with transparent pricing before anything begins.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "The work is carried out to standard, using proper materials and proven methods.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Everything is tested and verified. We walk you through the work before we leave.",
  },
];

const STEP_INTERVAL = 0.24; // seconds between nodes
const BASE_DELAY = 0.25;

/**
 * Relay-style terminal node. Energises once at `delay` after the section
 * enters the viewport: border switches to yellow, the number turns on, a
 * single contact pulse flashes and settles.
 */
function RelayNode({
  number,
  energized,
  delay,
  reduced,
  size = "h-14 w-14 text-lg",
}: {
  number: string;
  energized: boolean;
  delay: number;
  reduced: boolean;
  size?: string;
}) {
  const t = (d: number) =>
    reduced ? { duration: 0 } : { duration: 0.18, delay: d, ease: "easeOut" as const };

  return (
    <motion.span
      className={`relative flex ${size} items-center justify-center border bg-rus-black`}
      initial={
        reduced
          ? { borderColor: "rgba(255,196,0,0.6)" }
          : { borderColor: "rgba(255,196,0,0.12)" }
      }
      animate={energized ? { borderColor: "rgba(255,196,0,1)" } : {}}
      transition={t(BASE_DELAY + delay)}
    >
      {/* Contact pulse — lights once, settles */}
      <motion.span
        className="absolute inset-0"
        style={{ boxShadow: "0 0 16px rgba(255,196,0,0.5)" }}
        initial={{ opacity: 0 }}
        animate={
          energized && !reduced
            ? { opacity: [0, 0.9, 0.15] }
            : { opacity: 0 }
        }
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 0.4, delay: BASE_DELAY + delay, times: [0, 0.35, 1] }
        }
        aria-hidden="true"
      />
      <motion.span
        className="relative font-mono font-bold"
        initial={
          reduced
            ? { color: "#FFC400" }
            : { color: "rgba(169,175,183,0.55)" }
        }
        animate={energized ? { color: "#FFC400" } : {}}
        transition={t(BASE_DELAY + delay)}
      >
        {number}
      </motion.span>
    </motion.span>
  );
}

/**
 * Mobile process node — activates as the travelling current reaches it.
 * Border + number energise, text lifts to full opacity, and the node emits
 * a single contact pulse on arrival. Fully scroll-reversible, never loops.
 */
function MobileStep({
  step,
  index,
  total,
  progress,
  reduced,
}: {
  step: (typeof steps)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}) {
  const threshold = index / (total - 1);

  const borderColor = useTransform(
    progress,
    [threshold - 0.07, threshold],
    reduced
      ? ["rgba(255,196,0,1)", "rgba(255,196,0,1)"]
      : ["rgba(255,196,0,0.4)", "rgba(255,196,0,1)"]
  );
  const numberColor = useTransform(
    progress,
    [threshold - 0.07, threshold],
    reduced
      ? ["#FFC400", "#FFC400"]
      : ["rgba(169,175,183,0.6)", "#FFC400"]
  );
  const textOpacity = useTransform(
    progress,
    [threshold - 0.09, threshold + 0.015],
    reduced ? [1, 1] : [0.5, 1]
  );
  // Contact pulse flashes as the current lands on the node
  const pulseOpacity = useTransform(
    progress,
    [threshold - 0.025, threshold, threshold + 0.05],
    [0, 0.9, 0]
  );
  const nodeScale = useTransform(
    progress,
    [threshold - 0.02, threshold, threshold + 0.05],
    reduced ? [1, 1, 1] : [1, 1.1, 1]
  );

  return (
    <li className="relative flex gap-5 pb-9 last:pb-0">
      <motion.span
        className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border bg-rus-black"
        style={{ borderColor, scale: nodeScale }}
        aria-hidden="true"
      >
        <motion.span
          className="absolute inset-0"
          style={{
            boxShadow: "0 0 14px rgba(255,196,0,0.55)",
            opacity: pulseOpacity,
          }}
          aria-hidden="true"
        />
        <motion.span className="relative font-mono text-xs font-bold" style={{ color: numberColor }}>
          {step.number}
        </motion.span>
      </motion.span>
      <motion.div className="min-w-0 pt-0.5" style={{ opacity: textOpacity }}>
        <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-rus-white">
          {step.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-rus-grey">
          {step.description}
        </p>
      </motion.div>
    </li>
  );
}

export default function Process() {
  const reduced = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-25% 0px" });

  const mobileRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
    offset: ["start 0.85", "end 0.55"],
  });
  const lineY = useSpring(mobileProgress, { stiffness: 55, damping: 18 });
  const pulseTop = useTransform(lineY, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-rus-graphite section-pad overflow-hidden"
    >
      <SectionTrace />
      {/* Schematic corner frame — sparse technical mark */}
      <div className="pointer-events-none absolute inset-4 lg:inset-6" aria-hidden="true">
        <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-rus-white/[0.07]" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-rus-white/[0.07]" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-rus-white/[0.07]" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-rus-white/[0.07]" />
      </div>
      <div className="container-rus">
        <motion.div
          className="mb-12 lg:mb-14"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduced ? 0 : 0.7, ease: easings.smooth }}
        >
          <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-rus-grey">
            <TraceRule />
            Process — 05 steps
          </p>
          <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-rus-white sm:text-5xl lg:text-6xl">
            From first call to final test<span className="text-rus-yellow">.</span>
          </h2>
        </motion.div>

        {/* ── Desktop: one-shot relay sequence (runs once on enter) ── */}
        <ol className="relative hidden grid-cols-5 gap-10 lg:grid">
          {/* Dead rail */}
          <div className="absolute left-7 right-7 top-7 h-px bg-rus-white/10" aria-hidden="true" />

          {steps.map((step, index) => {
            const nodeDelay = index * STEP_INTERVAL;
            return (
              <li key={step.number} className="relative">
                {/* Live segment from this node to the next */}
                {index < steps.length - 1 && (
                  <motion.span
                    className="absolute left-7 top-7 h-px origin-left bg-rus-yellow"
                    style={{ right: "-4.25rem" }}
                    initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : {
                            duration: STEP_INTERVAL,
                            delay: BASE_DELAY + nodeDelay,
                            ease: "linear",
                          }
                    }
                    aria-hidden="true"
                  />
                )}
                <RelayNode
                  number={step.number}
                  energized={inView}
                  delay={index === 0 ? 0 : nodeDelay + STEP_INTERVAL * 0.7}
                  reduced={reduced}
                />
                <motion.div
                  initial={reduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 0.4, delay: BASE_DELAY + nodeDelay + 0.1, ease: easings.smooth }
                  }
                >
                  <h3 className="mt-6 font-mono text-sm font-bold uppercase tracking-[0.2em] text-rus-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-rus-grey">
                    {step.description}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>

        {/* ── Mobile: vertical distribution line, current flows on scroll ── */}
        <ol ref={mobileRef} className="relative lg:hidden">
          <div className="absolute bottom-8 left-[15px] top-8 w-px bg-rus-white/10" aria-hidden="true" />
          <motion.div
            className="absolute bottom-8 left-[15px] top-8 w-px origin-top bg-rus-yellow"
            style={{ scaleY: lineY }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-[15px] h-[5px] w-[5px] -translate-x-[2px] -translate-y-1/2 bg-rus-yellow"
            style={{ top: pulseTop, boxShadow: "0 0 10px rgba(255,196,0,0.7)" }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <MobileStep
              key={step.number}
              step={step}
              index={index}
              total={steps.length}
              progress={lineY}
              reduced={reduced}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
