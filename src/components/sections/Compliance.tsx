"use client";

import { motion } from "framer-motion";
import { Check, AlertTriangle } from "lucide-react";
import { BackgroundSystem } from "@/components/ui/BackgroundSystem";
import { SectionTrace } from "@/components/ui/Conductor";
import { useReducedMotion, fadeInUp, easings } from "@/lib/motion";

const items = [
  "Electrical inspection of your full installation",
  "Identification of non-compliant components",
  "Support with Certificate of Compliance (COC) documentation",
  "Guidance on required remedial work",
  "Assistance for property transfers, insurance and rentals",
];

const processSteps = [
  { number: "01", title: "Schedule inspection", desc: "Arrange a convenient time for our technician to visit" },
  { number: "02", title: "Full assessment", desc: "Complete evaluation against current electrical standards" },
  { number: "03", title: "Detailed report", desc: "Clear findings with any required remedial work outlined" },
  { number: "04", title: "COC support", desc: "Assistance with Certificate of Compliance documentation" },
];

export default function Compliance() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-rus-graphite section-pad overflow-hidden">
      <SectionTrace />
      <BackgroundSystem variant="lines" intensity="subtle" />

      <div className="container-rus">
        <motion.div
          {...fadeInUp(reduced)}
          className="mb-10 lg:mb-14 text-center"
        >
          <span className="eyebrow-sm mb-4">
            Compliance
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rus-white leading-[1.02] tracking-tight max-w-3xl mx-auto"
          >
            Electrical inspections and compliance support.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
          <motion.div
            {...fadeInUp(reduced)}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduced ? 0 : 0.1 }}
              className="text-rus-grey text-lg leading-relaxed"
            >
              Electrical compliance certificates are often required for property transfers, insurance requirements and rental agreements. We carry out inspections and provide support with the documentation process.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduced ? 0 : 0.2 }}
              className="space-y-4"
            >
              {items.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.06, ease: easings.gentle }}
                  className="flex items-start gap-3 py-4 border-b border-rus-white/10"
                  whileHover={{ x: 4 }}
                >
                  <Check className="w-5 h-5 text-rus-yellow mt-0.5 shrink-0" />
                  <span className="text-rus-grey text-base leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduced ? 0 : 0.6 }}
              className="bg-rus-black border border-rus-white/10 p-5 rounded-none"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rus-yellow mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-rus-white font-semibold mb-1">
                    Registration Details
                  </h3>
                  <p className="text-rus-grey/80 text-sm">
                    Specific compliance credentials and registration details are subject to owner confirmation. Please contact us directly to discuss your compliance requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            {...fadeInUp(reduced)}
            style={{ transitionDelay: reduced ? "0s" : "0.15s" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easings.gentle }}
              className="bg-rus-black border border-rus-white/10 p-8 lg:p-12 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easings.gentle }}
                className="w-16 h-16 rounded-none bg-rus-graphite border border-rus-white/15 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-rus-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-rus-white text-xl lg:text-2xl font-semibold"
              >
                Compliance Process
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-5 text-rus-grey text-sm leading-relaxed"
              >
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08, ease: easings.gentle }}
                    className="flex gap-4"
                  >
                    <span className="text-rus-yellow font-mono shrink-0 text-lg">{step.number}</span>
                    <div>
                      <p className="font-medium text-rus-white">{step.title}</p>
                      <p className="text-rus-grey text-sm mt-0.5">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}