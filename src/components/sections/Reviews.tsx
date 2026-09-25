"use client";

import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { reviews, reviewStats } from "@/data/reviews";
import { BackgroundSystem } from "@/components/ui/BackgroundSystem";
import { useReducedMotion, fadeInUp, easings } from "@/lib/motion";

function StarRating({ rating, size = "md", className = "" }: { rating: number; size?: "sm" | "md" | "lg"; className?: string }) {
  const sizes = { sm: "w-3 h-3", md: "w-5 h-5", lg: "w-7 h-7" };
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={false}
          animate={{ scale: i < rating ? 1 : 0.8 }}
          transition={{ duration: 0.2, delay: i * 0.03 }}
          className={sizes[size]}
        >
          <Star
            className={`fill-rus-yellow text-rus-yellow ${
              i >= rating ? "opacity-20" : ""
            }`}
          />
        </motion.span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const verifiedReviews = reviews.filter((r) => r.verified);
  const featured = verifiedReviews.find((r) => r.featured);
  const supporting = verifiedReviews.filter((r) => !r.featured);
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-rus-graphite section-pad overflow-hidden">
      <BackgroundSystem variant="radial" intensity="subtle" />

      <div className="container-rus">
        <motion.div
          {...fadeInUp(reduced)}
          className="mb-10 lg:mb-14"
        >
          <span className="eyebrow-sm mb-4">
            Client Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rus-white leading-[1.02] tracking-tight max-w-2xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          {...fadeInUp(reduced)}
          style={{ transitionDelay: reduced ? "0s" : "0.1s" }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easings.gentle }}
            className="flex flex-col md:flex-row md:items-center gap-4 p-6 lg:p-8 bg-rus-black border border-rus-white/10"
          >
            <StarRating rating={reviewStats.averageRating} size="lg" />
            <div className="flex flex-col">
              <span className="text-rus-white text-4xl lg:text-5xl font-bold leading-none">
                {reviewStats.averageRating}
              </span>
              <span className="text-rus-grey text-sm">
                / 5 &middot; {reviewStats.totalReviews} verified reviews
              </span>
            </div>
            <div className="w-px h-10 bg-rus-white/10 mx-2 md:my-0" />
            <div className="text-center">
              <span className="text-rus-white text-lg font-bold">{reviewStats.source}</span>
              <p className="text-rus-grey/60 text-xs mt-0.5">Review Platform</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1"
          >
            <p className="text-rus-grey text-base md:text-lg leading-relaxed max-w-xl">
              Based on genuine Google reviews from homeowners, property managers and business clients across Sandton and Johannesburg North.
            </p>
          </motion.div>
        </motion.div>

        {featured && (
<motion.div
          {...fadeInUp(reduced)}
          style={{ transitionDelay: reduced ? "0s" : "0.15s" }}
          className="mb-16"
        >
            <div className="bg-rus-black border border-rus-white/10 p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32" style={{
                background: "linear-gradient(135deg, rgba(255,196,0,0.05) 0%, transparent 70%)",
                clipPath: "polygon(100% 0, 100% 100%, 0 0)",
              }} />
              <span className="eyebrow-sm mb-4">
                Featured Review
              </span>
              <StarRating rating={featured.rating} size="md" className="mb-6" />
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-rus-white text-lg md:text-xl leading-relaxed max-w-3xl relative"
              >
                <span className="text-rus-white/10 text-6xl font-bold absolute -top-4 -left-2">&ldquo;</span>
                <span className="relative z-10">&ldquo;{featured.text}&rdquo;</span>
              </motion.blockquote>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-rus-white/5 border border-rus-white/10 flex items-center justify-center">
                  <span className="text-rus-white font-bold text-lg">{featured.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-rus-white font-semibold text-sm">{featured.author}</p>
                  <p className="text-rus-grey/70 text-xs">{featured.source}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easings.smooth }}
        >
          {/* Supporting grid — desktop/tablet only */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {supporting.map((review, index) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: easings.smooth }}
                className="bg-rus-black border border-rus-white/10 p-6 lg:p-8 hover:border-rus-yellow/20 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <StarRating rating={review.rating} size="sm" className="mb-4" />
                <motion.blockquote
                  className="text-rus-white text-sm leading-relaxed relative"
                >
                  <span className="text-rus-white/10 text-5xl font-bold absolute -top-3 -left-2">&ldquo;</span>
                  <span className="relative z-10">&ldquo;{review.text}&rdquo;</span>
                </motion.blockquote>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-6 flex items-center gap-3 text-xs"
                >
                  <div className="w-7 h-7 rounded-full bg-rus-white/5 border border-rus-white/10 flex items-center justify-center">
                    <span className="text-rus-white font-bold">{review.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-rus-white font-medium">{review.author}</p>
                    <p className="text-rus-grey/60">{review.source} &middot; {review.date}</p>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>

          {/* Mobile: single supporting line + link to the full review set */}
          {supporting[0] && (
            <div className="md:hidden">
              <p className="border-l-2 border-rus-yellow/70 pl-4 text-sm italic leading-relaxed text-rus-grey">
                &ldquo;{supporting[0].text}&rdquo;
                <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] not-italic text-rus-grey/70">
                  {supporting[0].author} &middot; {supporting[0].source}
                </span>
              </p>
              <Link
                href="/reviews"
                className="plate-cta mt-6 flex min-h-[48px] w-full items-center justify-center gap-3 border border-rus-white/20 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-rus-white transition-colors hover:border-rus-yellow/50 hover:text-rus-yellow"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                View all reviews
                <ArrowRight className="h-4 w-4 text-rus-yellow" aria-hidden="true" />
                <span className="plate-rail" aria-hidden="true" />
                <span className="plate-terminal" aria-hidden="true" />
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}