import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceIndex from "@/components/ui/ServiceIndex";
import SectorClosing from "@/components/ui/SectorClosing";
import { PlateLink } from "@/components/ui/BoltMark";
import { getServicesByCategory } from "@/data/services";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Industrial Electrical Services | RUS Electrical",
  description:
    "Industrial electrical solutions for maintenance, power distribution and compliance in Sandton and Johannesburg North.",
};

const focusAreas = [
  {
    title: "Maintenance",
    description:
      "Scheduled and reactive maintenance to prevent costly breakdowns and keep your facility running.",
  },
  {
    title: "Power Distribution",
    description:
      "Installation and maintenance of industrial power distribution systems, switchgear and panel boards.",
  },
  {
    title: "Compliance",
    description:
      "Electrical inspections and compliance support to meet regulatory and insurance requirements.",
  },
];

export default function IndustrialPage() {
  const industrialServices = getServicesByCategory("industrial");

  return (
    <>
      <PageHero
        eyebrow="Sector 03 — Industrial"
        title={
          <>
            Industrial power,
            <br />
            held to standard<span className="text-rus-yellow">.</span>
          </>
        }
        support="Electrical maintenance, power distribution and compliance for industrial facilities. Work done to standard, with minimal disruption to your operations."
        image={{
          src: "/assets/industrial-electrician.webp",
          alt: "RUS technician inspecting industrial switchgear",
          position: "75% center",
        }}
      >
        <PlateLink href="/contact#quote">Request assessment</PlateLink>
        <PlateLink href={business.primaryPhoneLink} variant="ghost">
          Call {business.primaryPhone}
        </PlateLink>
      </PageHero>

      <section className="bg-rus-black section-pad">
        <div className="container-rus">
          <p className="eyebrow mb-10">
            <span className="h-px w-8 bg-rus-yellow" aria-hidden="true" />
            02 — In scope
          </p>
          <ServiceIndex
            heading="Industrial services"
            items={industrialServices}
          />

          <div className="mt-20">
            <h2 className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-rus-grey/70">
              <span className="h-1.5 w-1.5 bg-rus-yellow" aria-hidden="true" />
              03 — Focus areas
            </h2>
            <ul className="mt-6 grid gap-px border border-rus-white/10 bg-rus-white/10 md:grid-cols-3">
              {focusAreas.map((area, i) => (
                <li key={area.title} className="bg-rus-black p-7">
                  <span className="font-mono text-sm font-bold tabular-nums text-rus-yellow/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-bold uppercase tracking-tight text-rus-white">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-rus-grey">
                    {area.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectorClosing sector="Industrial" />
    </>
  );
}
