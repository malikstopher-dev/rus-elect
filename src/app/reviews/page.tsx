import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { PlateLink } from "@/components/ui/BoltMark";
import { reviews, reviewStats } from "@/data/reviews";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Reviews | RUS Electrical",
  description:
    "Read verified client reviews for RUS Electrical. Trusted electrical services in Sandton and Johannesburg North.",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating
              ? "fill-rus-yellow text-rus-yellow"
              : "fill-rus-white/10 text-rus-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const featured = reviews.find((r) => r.featured);
  const otherReviews = reviews.filter((r) => !r.featured);

  return (
    <>
      <PageHero
        eyebrow={`Verified — ${reviewStats.source}`}
        title={
          <>
            Client reviews<span className="text-rus-yellow">.</span>
          </>
        }
        support={`${reviewStats.totalReviews} verified reviews. Average rating of ${reviewStats.averageRating}/5 on ${reviewStats.source}.`}
      >
        <PlateLink href="/contact#quote">Become the next review</PlateLink>
      </PageHero>

      <section className="bg-rus-black section-pad">
        <div className="container-rus">
          {/* Stats strip */}
          <div className="grid gap-px border border-rus-white/10 bg-rus-white/10 sm:grid-cols-3">
            {[
              [String(reviewStats.averageRating), "Average rating"],
              [String(reviewStats.totalReviews), "Verified reviews"],
              [reviewStats.source, "Review platform"],
            ].map(([value, label]) => (
              <div key={label} className="bg-rus-black px-7 py-6">
                <div className="text-3xl font-black tabular-nums tracking-tight text-rus-white">
                  {value}
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-rus-grey/70">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured review */}
          {featured && (
            <figure className="relative mt-14 border-l-2 border-rus-yellow pl-6 md:pl-10">
              <blockquote className="max-w-3xl text-xl font-semibold leading-relaxed text-rus-white md:text-2xl">
                &ldquo;{featured.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex flex-wrap items-center gap-3">
                <StarRating rating={featured.rating} />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-rus-grey/70">
                  {featured.author} · {featured.source}
                </span>
              </figcaption>
            </figure>
          )}

          {/* Remaining reviews — hairline grid */}
          <div className="mt-14 grid gap-px border border-rus-white/10 bg-rus-white/10 md:grid-cols-2">
            {otherReviews.map((review) => (
              <figure key={review.id} className="bg-rus-black p-7">
                <StarRating rating={review.rating} />
                <blockquote className="mt-4 leading-relaxed text-rus-grey">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-rus-grey/70">
                  {review.author} · {review.source} · {review.date}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
