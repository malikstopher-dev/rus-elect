"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { services, serviceImages, serviceApplications } from "@/data/services";
import { BoltMark, CurrentLine } from "@/components/ui/BoltMark";
import { TraceRule } from "@/components/ui/Trace";
import { PlateReveal, SectionTrace } from "@/components/ui/Conductor";
import { useReducedMotion, easings } from "@/lib/motion";

/**
 * StageVisual — the right-hand panel for the service index.
 * Services WITH an approved photograph get the clipped image treatment.
 * Services whose imagery is not yet commissioned get a technical "spec
 * plate" (ghost number, circuit hairlines, mono annotation) instead of a
 * mismatched photo. See docs/image-assets-spec.md.
 */
function StageVisual({ slug, number }: { slug: string; number: string }) {
  const src = serviceImages[slug];

  if (src) {
    return (
      <>
        <Image
          src={src}
          alt={`${slug.replace(/-/g, " ")} — RUS Electrical`}
          fill
          className="object-cover object-center"
          sizes="60vw"
        />
        {/* Controlled overlay: legibility only at the content strip */}
        <div className="absolute inset-0 bg-gradient-to-t from-rus-black via-rus-black/25 to-rus-black/10" />
      </>
    );
  }

  return (
    <div className="absolute inset-0 bg-rus-graphite" aria-hidden="true">
      {/* Ghost number — the plate identity */}
      <span className="absolute right-8 top-1/2 -translate-y-1/2 select-none font-mono text-[11rem] font-black leading-none text-rus-white/[0.05]">
        {number}
      </span>
      {/* Circuit hairlines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-10 120 H260 L330 190 H810" fill="none" stroke="rgba(244,242,236,0.07)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M-10 470 H420 L470 520 H810" fill="none" stroke="rgba(244,242,236,0.05)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <BoltMark className="absolute left-10 top-10 h-20 w-auto text-rus-yellow opacity-[0.12]" />
      {/* Technical annotations */}
      <span className="cap-mono absolute bottom-32 right-8">REF RUS·{number}</span>
    </div>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const activeService = services[activeIndex];

  return (
    <section className="relative bg-rus-black section-pad overflow-hidden">
      <SectionTrace />
      {/* Schematic corner frame — sparse technical mark */}
      <div className="pointer-events-none absolute inset-4 lg:inset-6" aria-hidden="true">
        <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-rus-white/[0.07]" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-rus-white/[0.07]" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-rus-white/[0.07]" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-rus-white/[0.07]" />
      </div>
      <div className="container-rus">
        {/* ── Section header ─────────────────────────────────────── */}
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduced ? 0 : 0.7, ease: easings.smooth }}
        >
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-rus-grey">
              <TraceRule />
              <span>Capabilities — 01/10</span>
            </p>
            <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-rus-white sm:text-5xl lg:text-6xl">
              The service index<span className="text-rus-yellow">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-rus-grey">
            Ten disciplines across residential, commercial and industrial
            work. One standard for every job.
          </p>
        </motion.div>

        {/* ── Desktop: index + stage ─────────────────────────────── */}
        <div className="hidden gap-14 lg:grid lg:grid-cols-12">
          {/* Index */}
          <ul className="lg:col-span-5">
            {services.map((service, index) => {
              const active = activeIndex === index;
              return (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className="group relative flex items-center gap-5 border-t border-rus-white/10 py-4 transition-colors last:border-b"
                    aria-current={active ? "true" : undefined}
                  >
                    <motion.span
                      className="absolute left-0 top-0 h-full w-[2px] origin-top bg-rus-yellow"
                      initial={false}
                      animate={{ scaleY: active ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: easings.smooth }}
                      aria-hidden="true"
                    />
                    {/* Current travels along the top border toward the arrow */}
                    {active && !reduced && (
                      <span className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden" aria-hidden="true">
                        <motion.span
                          key={activeService.slug}
                          className="absolute top-0 h-[2px] w-10 bg-rus-yellow"
                          initial={{ left: "-3%" }}
                          animate={{ left: "94%" }}
                          transition={{ duration: 0.28, ease: "linear" }}
                        />
                      </span>
                    )}
                    <span
                      className={`font-mono text-base font-bold transition-colors duration-200 ${
                        active ? "text-rus-yellow" : "text-rus-grey/40"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span
                      className={`text-lg font-semibold tracking-tight transition-colors duration-200 xl:text-xl ${
                        active
                          ? "text-rus-white"
                          : "text-rus-grey group-hover:text-rus-white"
                      }`}
                    >
                      {service.title}
                    </span>
                    <ArrowRight
                      className={`ml-auto h-4 w-4 shrink-0 transition-all duration-200 ${
                        active
                          ? "translate-x-0 text-rus-yellow opacity-100"
                          : "-translate-x-2 text-rus-grey/40 opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Stage */}
          <div className="lg:col-span-7">
            <div className="sticky top-24">
              <div
                className="relative aspect-[4/3] overflow-hidden bg-rus-graphite"
                style={{
                  clipPath: "polygon(4% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.slug}
                    className="absolute inset-0"
                    initial={reduced ? { opacity: 1 } : { opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0 }}
                    transition={{ duration: reduced ? 0 : 0.15, ease: easings.smooth }}
                  >
                    {/* Contactor-style plate reveal on every service switch */}
                    <PlateReveal reduced={reduced} plateClassName="bg-rus-graphite" key={`plates-${activeService.slug}`}>
                      <StageVisual slug={activeService.slug} number={activeService.number} />
                    </PlateReveal>
                  </motion.div>
                </AnimatePresence>

                {/* Ghost number over photography — plates carry their own */}
                {serviceImages[activeService.slug] && (
                  <span
                    className="pointer-events-none absolute right-6 top-2 select-none font-mono text-[9rem] font-black leading-none text-rus-white/[0.06]"
                    aria-hidden="true"
                  >
                    {activeService.number}
                  </span>
                )}

                {/* Animated line resets on every service change */}
                <svg
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full"
                  viewBox="0 0 800 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <CurrentLine
                    key={activeService.slug}
                    d="M800 8 L500 8 L420 92 L340 92"
                  />
                </svg>

                {/* On plates the content strip needs a grounding hairline */}
                {!serviceImages[activeService.slug] && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] border-t border-rus-white/10 bg-rus-black" aria-hidden="true" />
                )}

                {/* Stage content */}
                <div className="absolute inset-x-0 bottom-0 p-8 xl:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeService.slug}
                        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduced ? { opacity: 0 } : { opacity: 0 }}
                        transition={{ duration: reduced ? 0 : 0.4, ease: easings.smooth }}
                      >
                        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-rus-yellow">
                          {activeService.number} — {activeService.shortTitle}
                        </p>
                        <p className="mb-5 max-w-lg text-base leading-relaxed text-rus-grey">
                          {activeService.description}
                        </p>
                        <ul className="flex flex-wrap gap-x-6 gap-y-2">
                          {(serviceApplications[activeService.slug] || []).map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-rus-white/80"
                            >
                              <span className="h-1.5 w-1.5 bg-rus-yellow" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile: single-open switchboard accordion ───────────── */}
        <div className="lg:hidden">
          {services.map((service, index) => {
            const active = activeIndex === index;
            return (
              <div
                key={service.id}
                className="relative border-t border-rus-white/10 last:border-b"
              >
                {/* Current sweeps the row edge the moment the switch closes */}
                {active && !reduced && (
                  <span
                    className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden"
                    aria-hidden="true"
                  >
                    <motion.span
                      key={`sweep-${service.id}`}
                      className="absolute top-0 h-[2px] w-10 bg-rus-yellow"
                      initial={{ left: "-4%" }}
                      animate={{ left: "94%" }}
                      transition={{ duration: 0.28, ease: "linear" }}
                    />
                  </span>
                )}
                <button
                  onClick={() => setActiveIndex(active ? -1 : index)}
                  className="flex w-full items-baseline gap-4 py-5 text-left"
                  aria-expanded={active}
                >
                  <span
                    className={`font-mono text-xs font-bold transition-colors duration-200 ${
                      active ? "text-rus-yellow" : "text-rus-grey/50"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span
                    className={`flex-1 text-lg font-bold uppercase leading-tight tracking-tight transition-colors duration-200 ${
                      active ? "text-rus-white" : "text-rus-grey"
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center transition-colors duration-200 ${
                      active ? "text-rus-yellow" : "text-rus-grey/50"
                    }`}
                    aria-hidden="true"
                  >
                    <Plus
                      className={`h-5 w-5 transition-transform duration-200 ${
                        active ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reduced ? 0 : 0.24,
                        ease: easings.snappy,
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: reduced ? 0 : 0.22,
                          delay: reduced ? 0 : 0.1,
                          ease: easings.smooth,
                        }}
                        className="pb-7"
                      >
                        {serviceImages[service.slug] ? (
                          <div className="relative mb-5 aspect-[16/10] overflow-hidden">
                            <PlateReveal reduced={reduced}>
                              <Image
                                src={serviceImages[service.slug] as string}
                                alt={`${service.title} — RUS Electrical`}
                                fill
                                className="object-cover object-center"
                                sizes="100vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-rus-black/60 to-transparent" />
                            </PlateReveal>
                          </div>
                        ) : (
                          <div className="relative mb-5 flex h-28 items-end justify-between overflow-hidden bg-rus-graphite p-4">
                            <span
                              className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[7rem] font-black leading-none text-rus-white/[0.05]"
                              aria-hidden="true"
                            >
                              {service.number}
                            </span>
                            <BoltMark className="h-8 w-auto text-rus-yellow/40" />
                            <span className="cap-mono">REF RUS·{service.number}</span>
                          </div>
                        )}
                        <p className="mb-5 text-sm leading-relaxed text-rus-grey">
                          {service.description}
                        </p>
                        {/* Technical tags energise in sequence */}
                        <ul className="mb-6 flex flex-wrap gap-x-5 gap-y-2">
                          {(serviceApplications[service.slug] || [])
                            .slice(0, 3)
                            .map((item, tagIndex) => (
                              <motion.li
                                key={item}
                                initial={
                                  reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }
                                }
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: reduced ? 0 : 0.2,
                                  delay: reduced ? 0 : 0.16 + tagIndex * 0.05,
                                  ease: easings.smooth,
                                }}
                                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-rus-white/80"
                              >
                                <span
                                  className="h-1 w-1 bg-rus-yellow"
                                  aria-hidden="true"
                                />
                                {item}
                              </motion.li>
                            ))}
                        </ul>
                        <Link
                          href={`/services/${service.slug}`}
                          className="plate-cta flex min-h-[44px] items-center justify-center gap-3 border border-rus-white/25 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-rus-white transition-colors duration-200 active:border-rus-yellow/60 active:bg-rus-yellow/5"
                          style={{
                            clipPath:
                              "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                          }}
                        >
                          View service
                          <ArrowRight className="h-4 w-4 text-rus-yellow" aria-hidden="true" />
                          <span className="plate-rail" aria-hidden="true" />
                          <span className="plate-terminal" aria-hidden="true" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
