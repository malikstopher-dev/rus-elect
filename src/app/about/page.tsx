import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { PlateLink } from "@/components/ui/BoltMark";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "About | RUS Electrical",
  description:
    "About RUS Electrical. Professional electrical services for Sandton, Fourways, Bryanston and Johannesburg North.",
};

const values = [
  {
    title: "Done Properly",
    description:
      "We do the job right the first time. No shortcuts, no temporary patches. Proper electrical work that meets standard.",
  },
  {
    title: "Honest Communication",
    description:
      "We explain the problem and the solution clearly before starting work. You know what to expect and what it costs.",
  },
  {
    title: "Reliable Service",
    description:
      "We show up on time and complete work as agreed. Our clients trust us because we are consistent and dependable.",
  },
  {
    title: "Safety First",
    description:
      "Every job is carried out with safety as the priority. We follow electrical standards and best practices throughout.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About — RUS Electrical"
        title={
          <>
            {business.refinedTagline}
            <span className="text-rus-yellow">.</span>
          </>
        }
        support="Professional electrical services for residential, commercial and industrial properties across Sandton, Fourways, Bryanston and Johannesburg North."
      />

      {/* Who we are */}
      <section className="bg-rus-black section-pad">
        <div className="container-rus grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="border-l-2 border-rus-yellow pl-5 text-2xl font-bold uppercase tracking-tight text-rus-white">
              Who we are
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-rus-grey">
              <p>
                RUS Electrical provides professional electrical services for
                residential, commercial and industrial properties across Sandton,
                Fourways, Bryanston and Johannesburg North.
              </p>
              <p>
                We handle everything from fault finding and repairs to full
                electrical installations, rewiring, compliance inspections and
                backup power solutions. Every job is carried out with attention
                to safety, code compliance and long-term reliability.
              </p>
            </div>

            <div className="mt-8 divide-y divide-rus-white/5 border-y border-rus-white/10">
              {Object.entries(business.verifiedFacts)
                .filter(([key]) => key !== "tagline")
                .map(
                ([key, verified]) =>
                  verified && (
                    <div key={key} className="flex items-center gap-3 py-3">
                      <CheckCircle
                        className="h-4 w-4 shrink-0 text-rus-yellow"
                        aria-hidden="true"
                      />
                      <span className="text-sm capitalize text-rus-white">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.24em] text-rus-grey/60">
                        Verified
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>

          <div
            className="relative aspect-[4/3] w-full"
            style={{ clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src="/assets/service-van-team.webp"
              alt="RUS Electrical service vehicle and team"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-rus-black section-pad pt-0">
        <div className="container-rus">
          <h2 className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-rus-grey/70">
            <span className="h-1.5 w-1.5 bg-rus-yellow" aria-hidden="true" />
            Operating values
          </h2>
          <ul className="mt-6 grid gap-px border border-rus-white/10 bg-rus-white/10 md:grid-cols-2">
            {values.map((value, i) => (
              <li key={value.title} className="bg-rus-black p-7">
                <span className="font-mono text-sm font-bold tabular-nums text-rus-yellow/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold uppercase tracking-tight text-rus-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-rus-grey">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <PlateLink href="/contact#quote">Work with us</PlateLink>
          </div>
        </div>
      </section>
    </>
  );
}
