"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useReducedMotion, easings } from "@/lib/motion";
import { business } from "@/data/business";

/**
 * The service van as a cinematic band. The image owns the section; a small
 * notched plate carries the message. Parallax is suppressed for
 * reduced-motion users.
 */
export default function ServiceVehicle() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-rus-black">
      <div className="relative h-[64svh] lg:h-[86svh]">
        {/* Image with controlled parallax */}
        <motion.div
          className="absolute inset-[-8%]"
          style={reduced ? undefined : { y }}
        >
          <Image
            src="/assets/service-van-team.webp"
            alt="RUS Electrical branded service vehicle and team on site"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-rus-black/80 via-transparent to-rus-black/30" />

        {/* Mono labels */}
        <motion.p
          className="absolute left-5 top-6 font-mono text-[10px] uppercase tracking-[0.3em] text-rus-white/60 lg:left-14 lg:top-10"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.25 }}
        >
          Service vehicle — Sandton / JHB North
        </motion.p>

        {/* ── The plate ─────────────────────────────────────────── */}
        <div className="container-rus absolute inset-x-0 bottom-0">
          <motion.div
            className="relative mb-10 max-w-md bg-rus-black/90 p-8 backdrop-blur-sm lg:mb-14 lg:p-10"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
            }}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.15, ease: easings.smooth }}
          >
            <span className="absolute inset-y-0 left-0 w-[2px] bg-rus-yellow" aria-hidden="true" />
            <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight text-rus-white sm:text-4xl">
              Ready for the job<span className="text-rus-yellow">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-rus-grey">
              Stocked, equipped and local. The team arrives prepared and
              finishes properly.
            </p>
            <a
              href={business.primaryPhoneLink}
              className="mt-6 inline-flex min-h-[44px] items-center gap-3 py-3 font-mono text-sm tracking-wider text-rus-white transition-colors hover:text-rus-yellow"
            >
              <Phone className="h-4 w-4 text-rus-yellow" aria-hidden="true" />
              {business.primaryPhone}
            </a>
          </motion.div>
        </div>
      </div>

      <p className="container-rus pb-4 pt-4 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-rus-grey/50">
        Illustrative imagery for proposal purposes.
      </p>
    </section>
  );
}
