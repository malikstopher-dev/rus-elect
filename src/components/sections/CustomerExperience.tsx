"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion, easings } from "@/lib/motion";
import { TraceRule } from "@/components/ui/Trace";
import { business } from "@/data/business";

const principles = [
  {
    title: "Transparent pricing",
    description: "You approve the scope and price before work begins.",
  },
  {
    title: "On-time arrival",
    description: "Your time is respected — we arrive when we say we will.",
  },
  {
    title: "Clean work sites",
    description: "We leave spaces the way we found them, or better.",
  },
];

/**
 * The human section. One large statement, one honest photograph, verified
 * trust signals only. No cards, no noise.
 */
export default function CustomerExperience() {
  const reduced = useReducedMotion();
  // Mobile proof lines: first proof open by default, tap to latch/unlatch
  const [openIdx, setOpenIdx] = useState(0);

  const enter = (delay: number) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: reduced ? 0 : 0.8, delay: reduced ? 0 : delay, ease: easings.smooth },
  });

  return (
    <section className="relative overflow-hidden bg-rus-black section-pad">
      <div className="container-rus">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
          {/* ── Statement ───────────────────────────────────────── */}
          <div className="order-1 lg:col-span-7 lg:row-start-1">
            <motion.p
              {...enter(0)}
              className="mb-5 flex items-center gap-3 lg:mb-6"
            >
              <TraceRule />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-rus-grey">
                Trust
              </span>
            </motion.p>

            <motion.h2
              {...enter(0.1)}
              className="text-[2.15rem] font-black uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block text-rus-white">The work matters.</span>
              <span className="text-outline-warm block">
                So does how we explain it.
              </span>
            </motion.h2>
          </div>

          {/* ── Proof points — compact rows, second on mobile ────── */}
          <div className="order-2 mt-9 lg:col-span-7 lg:row-start-3 lg:mt-0">
            <motion.div {...enter(0.3)}>
              {principles.map((item, index) => {
                const isOpen = openIdx === index;
                return (
                  <div
                    key={item.title}
                    className="border-t border-rus-white/10 last:border-b"
                  >
                    {/* Mobile: tap the proof line to latch it open */}
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-3 py-4 text-left sm:hidden"
                    >
                      <span className="font-mono text-xs text-rus-yellow">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-semibold text-rus-white">
                        {item.title}
                      </span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center font-mono text-sm transition-colors duration-200 ${
                          isOpen ? "text-rus-yellow" : "text-rus-grey/50"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: reduced ? 0 : 0.22,
                            ease: easings.snappy,
                          }}
                          className="overflow-hidden sm:hidden"
                        >
                          <p className="pb-4 pl-7 pr-8 text-sm leading-relaxed text-rus-grey">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Static row: tablet and desktop keep the approved layout */}
                    <div className="hidden gap-1 py-4 sm:flex sm:flex-row sm:items-baseline sm:gap-5">
                      <span className="font-mono text-xs text-rus-yellow">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold text-rus-white sm:w-44 sm:shrink-0">
                        {item.title}
                      </span>
                      <span className="text-sm leading-relaxed text-rus-grey">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Verified trust line */}
            <motion.div
              {...enter(0.4)}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-rus-grey lg:mt-8 lg:gap-x-8"
            >
              <span>
                <span className="text-rus-yellow">{business.rating.value}/5</span>
                {" "}&mdash; Google rating
              </span>
              <span>
                <span className="text-rus-yellow">{business.rating.count}</span>
                {" "}verified reviews
              </span>
              <span>Sandton &middot; JHB North</span>
            </motion.div>
          </div>

          {/* ── The work, in frame — third on mobile ────────────── */}
          <motion.div
            className="relative order-3 mt-9 lg:col-span-5 lg:row-span-3 lg:row-start-1 lg:mt-0"
            {...enter(0.2)}
          >
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:sticky lg:top-24 lg:aspect-[4/3]">
              <Image
                src="/assets/hero-residential-electrician.webp"
                alt="RUS Electrical technician carrying out board work in a residential interior"
                fill
                className="object-cover object-[70%_center]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rus-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-rus-black px-4 py-3">
                <span className="h-1.5 w-1.5 bg-rus-yellow" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-rus-white">
                  On site
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Body copy — last on mobile, mid-column on desktop ── */}
          <motion.div
            {...enter(0.2)}
            className="order-4 mt-8 max-w-xl lg:col-span-7 lg:row-start-2 lg:mt-8"
          >
            <p className="text-lg leading-relaxed text-rus-grey">
              Good electrical work is not only about fixing the problem —
              it is about making sure you understand what was done and why.
              Our technicians take the time to explain the work, the
              options and the reasoning behind every decision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
