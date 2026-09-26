"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { business } from "@/data/business";
import { BackgroundSystem } from "@/components/ui/BackgroundSystem";
import { useReducedMotion, fadeInUp, easings } from "@/lib/motion";

export default function ContactCTA() {
  const reduced = useReducedMotion();

  return (
    <section id="contact-cta" className="relative bg-rus-graphite section-pad overflow-hidden">
      <BackgroundSystem variant="radial" intensity="subtle" />
      {/* Schematic corner frame */}
      <div className="pointer-events-none absolute inset-4 lg:inset-6" aria-hidden="true">
        <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-rus-white/[0.07]" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-rus-white/[0.07]" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-rus-white/[0.07]" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-rus-white/[0.07]" />
      </div>

      <div className="container-rus">
        <motion.div
          {...fadeInUp(reduced)}
          className="max-w-3xl text-center lg:mx-auto"
        >
          <span className="eyebrow-sm mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-rus-yellow" aria-hidden="true" />
            Contact
            <span className="h-px w-6 bg-rus-yellow" aria-hidden="true" />
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-bold leading-[1.02] tracking-tight text-rus-white sm:text-5xl lg:mb-8 lg:text-6xl"
          >
            Get in Touch
          </motion.h2>

          {/* Mobile-first: immediate conversion state */}
          <motion.a
            href={business.primaryPhoneLink}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: easings.gentle }}
            className="mb-5 inline-block font-bold text-rus-white transition-colors hover:text-rus-yellow text-[clamp(1.75rem,9vw,3rem)] lg:mb-8"
          >
            {business.primaryPhone}
          </motion.a>
          <p className="mb-8 text-sm leading-relaxed text-rus-grey lg:mb-10">
            Open seven days across Sandton, Fourways, Bryanston and
            Johannesburg North.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: easings.smooth }}
            className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
          >
            <a
              href={business.primaryPhoneLink}
              className="call-cta plate-cta plate-cta-primary flex min-h-[52px] items-center justify-center gap-3 bg-rus-yellow px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-rus-black transition-all duration-200 hover:brightness-105"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              <span className="contactor-icon inline-flex">CALL</span>
              {business.primaryPhone}
              <span className="plate-rail" aria-hidden="true" />
              <span className="plate-terminal" aria-hidden="true" />
            </a>
            <Link
              href="/contact#quote"
              className="plate-cta flex min-h-[52px] items-center justify-center gap-3 border border-rus-white/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-rus-white transition-colors duration-200 hover:border-rus-yellow/60 hover:bg-rus-yellow/5"
              style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
            >
              Request a quote
              <span className="plate-rail" aria-hidden="true" />
              <span className="plate-terminal" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-x-3 font-mono text-[10px] uppercase tracking-[0.24em] text-rus-grey/70"
          >
            {business.serviceAreas.map((area, index) => (
              <span key={area} className="flex items-center gap-3">
                {index > 0 && <span className="h-1 w-1 bg-rus-yellow/60" aria-hidden="true" />}
                {area}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}