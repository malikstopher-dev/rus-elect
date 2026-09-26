import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { PlateLink } from "@/components/ui/BoltMark";
import { services, serviceApplications } from "@/data/services";

export const metadata: Metadata = {
  title: "Electrical Services | RUS Electrical",
  description:
    "Full range of electrical services for Sandton and Johannesburg North. Repairs, installations, rewiring, compliance, backup power and more.",
};

const CATEGORY_LABEL: Record<string, string> = {
  residential: "RES",
  commercial: "COM",
  industrial: "IND",
  general: "GEN",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Index — Capabilities"
        title={
          <>
            Services<span className="text-rus-yellow">.</span>
          </>
        }
        support="Ten disciplines, one standard. Every service below is carried out to the same principle: diagnosed properly, executed properly, explained plainly."
      >
        <PlateLink href="/contact#quote">Request assessment</PlateLink>
        <PlateLink href="tel:+27721326098" variant="ghost">
          Call 072 132 6098
        </PlateLink>
      </PageHero>

      <section className="bg-rus-black section-pad">
        <div className="container-rus">
          <ol className="border-t border-rus-white/10">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-rus-white/10 py-7 transition-colors duration-200 hover:bg-rus-white/[0.02] md:grid-cols-[72px_1.3fr_1fr_auto] md:items-center md:gap-x-10"
                >
                  {/* Yellow rail — energises on hover */}
                  <span
                    className="absolute bottom-0 left-0 top-0 w-[2px] bg-rus-yellow opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <span className="font-mono text-sm font-bold tabular-nums text-rus-yellow/80">
                    {service.number}
                  </span>

                  <span>
                    <span className="block text-lg font-bold uppercase tracking-tight text-rus-white transition-transform duration-200 group-hover:translate-x-1 md:text-xl">
                      {service.shortTitle}
                    </span>
                    <span className="mt-1.5 flex flex-wrap gap-x-2 gap-y-1">
                      {service.category.map((c) => (
                        <span
                          key={c}
                          className="font-mono text-[9px] uppercase tracking-[0.22em] text-rus-grey/60"
                        >
                          {CATEGORY_LABEL[c]}
                        </span>
                      ))}
                    </span>
                  </span>

                  <span className="col-span-2 mt-3 text-sm leading-relaxed text-rus-grey md:col-span-1 md:mt-0">
                    {(serviceApplications[service.slug] || []).join(" · ")}
                  </span>

                  <ArrowRight
                    className="hidden h-5 w-5 text-rus-grey transition-all duration-200 group-hover:translate-x-1 group-hover:text-rus-yellow md:block"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ol>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-rus-grey/60">
            Full descriptions on each service page
          </p>
        </div>
      </section>
    </>
  );
}
