import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceIndex from "@/components/ui/ServiceIndex";
import SectorClosing from "@/components/ui/SectorClosing";
import { PlateLink } from "@/components/ui/BoltMark";
import { getServicesByCategory } from "@/data/services";

export const metadata: Metadata = {
  title: "Commercial Electrical Services | RUS Electrical",
  description:
    "Commercial electrical services for offices, retail and industrial properties in Sandton and Johannesburg North. Maintenance, installations and compliance.",
};

const sectors = [
  {
    title: "Commercial Property",
    description:
      "Electrical maintenance, upgrades and compliance for managed commercial buildings.",
  },
  {
    title: "Offices",
    description:
      "Office electrical fit-outs, power distribution, lighting and data cabling support.",
  },
  {
    title: "Retail",
    description:
      "Retail electrical installations, display lighting and ongoing maintenance.",
  },
  {
    title: "Industrial",
    description:
      "Industrial power distribution, switchgear maintenance and compliance inspections.",
  },
];

export default function CommercialPage() {
  const commercialServices = getServicesByCategory("commercial");

  return (
    <>
      <PageHero
        eyebrow="Sector 02 — Commercial"
        title={
          <>
            Built for business
            <span className="text-rus-yellow">.</span>
          </>
        }
        support="We support commercial and industrial properties with electrical maintenance, installations and compliance work that keeps operations running."
        image={{
          src: "/assets/industrial-electrician.webp",
          alt: "RUS technician assessing a commercial electrical panel",
          position: "left center",
        }}
      >
        <PlateLink href="/contact#quote">Discuss your needs</PlateLink>
      </PageHero>

      <section className="bg-rus-black section-pad">
        <div className="container-rus">
          <p className="eyebrow">
            <span className="h-px w-8 bg-rus-yellow" aria-hidden="true" />
            02 — Sectors we serve
          </p>
          <ul className="mt-8 divide-y divide-rus-white/5 border-y border-rus-white/10">
            {sectors.map((sector, i) => (
              <li
                key={sector.title}
                className="grid gap-2 py-6 md:grid-cols-[64px_240px_1fr] md:items-baseline md:gap-10"
              >
                <span className="font-mono text-sm font-bold tabular-nums text-rus-yellow/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-bold uppercase tracking-tight text-rus-white">
                  {sector.title}
                </span>
                <span className="text-sm leading-relaxed text-rus-grey">
                  {sector.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-rus-black section-pad pt-0">
        <div className="container-rus">
          <p className="eyebrow mb-10">
            <span className="h-px w-8 bg-rus-yellow" aria-hidden="true" />
            03 — In scope
          </p>
          <ServiceIndex
            heading="Commercial services"
            items={commercialServices}
          />
        </div>
      </section>

      <SectorClosing sector="Commercial" />
    </>
  );
}
