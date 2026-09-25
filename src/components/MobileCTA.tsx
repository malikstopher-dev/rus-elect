"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { BoltMark } from "@/components/ui/BoltMark";
import { useReducedMotion, easings } from "@/lib/motion";

/**
 * Bottom action bar (mobile only). Compact, safe-area aware, and hides
 * itself when the footer or the on-page quote form is in view so it never
 * covers the conversion section it points at.
 */
export default function MobileCTA() {
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    const quote = document.getElementById("quote");
    const targets = [footer, quote].filter(
      (el): el is HTMLElement => el !== null
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setHidden(entries.some((e) => e.isIntersecting));
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={reduced ? {} : { y: 100 }}
          animate={{ y: 0 }}
          exit={reduced ? {} : { y: 100 }}
          transition={{ duration: reduced ? 0 : 0.35, ease: easings.smooth }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="border-t border-rus-white/15 bg-rus-black/95 backdrop-blur-md safe-pad-bottom">
            <div className="grid grid-cols-2">
              <motion.a
                href="tel:+27721326098"
                whileTap={reduced ? {} : { scale: 0.97 }}
                className="call-cta relative flex min-h-[52px] items-center justify-center gap-2.5 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-rus-white transition-colors active:bg-rus-graphite"
              >
                <Phone className="contactor-icon h-4 w-4 text-rus-yellow" aria-hidden="true" />
                Call
              </motion.a>
              <Link
                href="/contact#quote"
                className="relative flex min-h-[52px] items-center justify-center gap-2.5 bg-rus-yellow py-4 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-rus-black transition-colors active:brightness-90"
                style={{
                  clipPath: "polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)",
                }}
              >
                <motion.span
                  className="flex items-center justify-center gap-2.5"
                  whileTap={reduced ? {} : { scale: 0.97 }}
                >
                  <BoltMark className="h-4 w-auto" />
                  Quote
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
