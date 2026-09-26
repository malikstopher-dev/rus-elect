"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BackgroundSystem } from "@/components/ui/BackgroundSystem";
import { SectionTrace } from "@/components/ui/Conductor";
import { useReducedMotion, fadeInUp, easings } from "@/lib/motion";

export default function ProjectsPreview() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-rus-black section-pad overflow-hidden">
      <SectionTrace />
      <BackgroundSystem variant="dots" intensity="subtle" />
      {/* Schematic corner frame — very low-key technical detail */}
      <div className="pointer-events-none absolute inset-4 lg:inset-6" aria-hidden="true">
        <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-rus-white/[0.07]" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-rus-white/[0.07]" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-rus-white/[0.07]" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-rus-white/[0.07]" />
      </div>

      <div className="container-rus">
        <motion.div
          {...fadeInUp(reduced)}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-14"
        >
          <div>
            <span className="eyebrow-sm mb-4">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rus-white leading-[1.02] tracking-tight max-w-xl">
              Representative Capabilities
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="outline" size="sm" href="/projects" icon="arrow">
              View all capabilities →
            </Button>
          </motion.div>
        </motion.div>

        {/* Desktop/tablet: grid. Mobile: snap-scrolling capability rail */}
        <motion.div
          className="rail-snap -mx-5 flex gap-4 overflow-x-auto px-5 pb-3 sm:gap-5 md:mx-0 md:grid md:grid-cols-[1fr_1fr] md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-8"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.2, ease: easings.smooth }}
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: easings.smooth }}
              whileHover={{ y: -4 }}
              className="group relative w-[85vw] max-w-[360px] shrink-0 snap-center bg-rus-graphite border border-rus-white/5 overflow-hidden transition-all duration-500 hover:border-rus-yellow/20 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)] md:w-auto md:max-w-none md:shrink md:snap-align-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-rus-yellow/10 to-rus-red/5 flex items-center justify-center">
                    <span className="text-5xl font-bold text-rus-yellow/20">
                      {project.id.padStart(2, "0")}
                    </span>
                  </div>
                )}
                {/* Scrim only where desktop overlays text — mobile keeps the plate clean */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-rus-black/70 via-transparent to-transparent" />
                <div className="hidden md:block absolute inset-0" style={{
                  backgroundImage: `
                    radial-gradient(
                      ellipse at bottom,
                      rgba(255,196,0,0.05) 0%,
                      transparent 60%
                    )
                  `,
                }} />
              </div>

              {/* Editorial meta block — in-flow below the image on mobile,
                  overlaid on the image from tablet up */}
              <div className="relative border-t border-rus-white/10 p-5 md:absolute md:bottom-0 md:left-0 md:right-0 md:border-t-0 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="font-mono text-[10px] uppercase tracking-[0.25em] text-rus-grey"
                  >
                    {String(index + 1).padStart(2, "0")} / {project.category.replace("-", " ")}
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="w-8 h-8 rounded-none flex items-center justify-center text-rus-grey group-hover:text-rus-yellow transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </motion.div>
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="text-rus-white text-xl lg:text-2xl font-bold leading-tight group-hover:text-rus-yellow transition-colors"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-rus-grey text-sm mt-2 leading-relaxed"
                >
                  {project.description}
                </motion.p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rus-yellow/30 to-transparent"
                initial={{ scaleX: 0, originX: "left" }}
                animate={{ scaleX: 1, originX: "left" }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05, ease: easings.smooth }}
              />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.8 }}
          className="mt-12 text-center md:hidden"
        >
<Button variant="outline" size="md" href="/projects" icon="arrow">
              View all capabilities →
            </Button>
        </motion.div>
      </div>
    </section>
  );
}