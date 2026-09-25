"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useReducedMotion, easings } from "@/lib/motion";
import { TraceRule } from "@/components/ui/Trace";

const scope = [
  "Fault finding and diagnostics",
  "Distribution board work",
  "Complete and partial rewiring",
  "Lighting design and installation",
  "Backup power solutions",
  "Scheduled electrical maintenance",
];

export default function Residential() {
  const reduced = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: reduced ? 0 : 0.8, delay: reduced ? 0 : delay, ease: easings.smooth },
  });

  return (
    <section className="relative overflow-hidden bg-rus-graphite">
      <div className="container-rus section-pad">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-center">
          {/* ── Copy — first on mobile (label → headline → text → scope) ── */}
          <motion.div
            className="relative z-10 order-1 lg:order-2 lg:col-span-5"
            {...enter(0.15)}
          >
            <div className="bg-rus-black p-7 sm:p-8 lg:-ml-24 lg:p-10">
              <p className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-rus-grey">
                <TraceRule className="w-7" />
                Where people live
              </p>
              <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight text-rus-white sm:text-4xl lg:text-5xl">
                Power for the way people live<span className="text-rus-yellow">.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-rus-grey lg:mt-6">
                Your home&apos;s electrical system should be safe, reliable and
                built for modern demand. We handle the full range of
                residential electrical work across Sandton and Johannesburg
                North.
              </p>

              <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:mt-8">
                {scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-snug text-rus-grey"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-rus-yellow" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/residential"
                className="plate-cta mt-8 inline-flex min-h-[48px] items-center justify-center gap-3 border border-rus-white/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-rus-white transition-colors duration-200 hover:border-rus-yellow/60 hover:bg-rus-yellow/5 lg:mt-9"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                Residential electrical
                <ArrowRight className="h-4 w-4 text-rus-yellow" aria-hidden="true" />
                <span className="plate-rail" aria-hidden="true" />
                <span className="plate-terminal" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* ── Image — below the copy plate on mobile ────────────── */}
          <motion.div
            className="relative order-2 -mt-5 lg:order-1 lg:mt-0 lg:col-span-7"
            {...enter(0)}
          >
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[16/11]">
              <Image
                src="/assets/customer-consultation.webp"
                alt="RUS Electrical technician walking a homeowner through her distribution board"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rus-black/35 via-transparent to-rus-black/10" />
            </div>
            {/* Editorial overlay */}
            <div className="absolute left-0 top-0 flex items-center gap-3 bg-rus-black px-4 py-3">
              <span className="h-1.5 w-1.5 bg-rus-yellow" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-rus-white">
                Residential / 01
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
