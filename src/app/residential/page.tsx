import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ServiceIndex from "@/components/ui/ServiceIndex";
import SectorClosing from "@/components/ui/SectorClosing";
import { PlateLink } from "@/components/ui/BoltMark";
import { getServicesByCategory } from "@/data/services";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Residential Electrical Services | RUS Electrical",
  description:
    "Expert residential electrical services in Sandton and Johannesburg North. Fault finding, rewiring, compliance, installations and more.",
};

const homeScope = [
  "Fault finding and diagnostics",
  "Distribution board work",
  "Complete and partial rewiring",
  "Lighting design and installation",
  "Backup power solutions",
  "Scheduled electrical maintenance",
];

export default function ResidentialPage() {
  const residentialServices = getServicesByCategory("residential");

  return (
    <>
      <PageHero
        eyebrow="Sector 01 — Residential"
        title={
          <>
            Homes, wired
            <br />
            properly<span className="text-rus-yellow">.</span>
          </>
        }
        support="Your home's electrical system should be safe, reliable and built to handle modern demands. We deliver residential electrical work that meets standard and lasts."
        image={{
          src: "/assets/hero-residential-electrician.webp",
          alt: "RUS Electrical technician working at a residential distribution board in Sandton",
        }}
      >
        <PlateLink href="/contact#quote">Request assessment</PlateLink>
        <PlateLink href={business.primaryPhoneLink} variant="ghost">
          Call {business.primaryPhone}
        </PlateLink>
      </PageHero>

      {/* ── 02 · Scope in the home ──────────────────────────────── */}
      <section className="bg-rus-black section-pad">
        <div className="container-rus grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-rus-yellow" aria-hidden="true" />
              02 — Scope in the home
            </p>
            <h2 className="display-2 mt-6">
              The full residential
              <br />
              circuit<span className="text-rus-yellow">.</span>
            </h2>
            <p className="lead mt-6">
              From the distribution board outward — every circuit, fitting and
              protective device in the home is in scope. Diagnosed before it is
              touched, and carried out to standard.
            </p>

            <ul className="mt-10 divide-y divide-rus-white/5 border-y border-rus-white/10">
              {homeScope.map((item, i) => (
                <li key={item} className="flex items-baseline gap-4 py-3.5">
                  <span className="font-mono text-[10px] tabular-nums text-rus-yellow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-rus-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative aspect-[16/11] w-full"
            style={{ clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src="/assets/customer-consultation.webp"
              alt="RUS Electrical technician inspecting and explaining a residential distribution board"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rus-black/40 via-transparent to-rus-black/10" />
            <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-rus-black px-4 py-3">
              <span className="h-1.5 w-1.5 bg-rus-yellow" aria-hidden="true" />
              <span className="cap-mono text-rus-white">Interior — residential</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 · Service index ──────────────────────────────────── */}
      <section className="border-t border-rus-white/10 bg-rus-black section-pad">
        <div className="container-rus">
          <p className="eyebrow mb-10">
            <span className="h-px w-8 bg-rus-yellow" aria-hidden="true" />
            03 — In scope
          </p>
          <ServiceIndex
            heading="Residential services"
            items={residentialServices}
          />
        </div>
      </section>

      <SectorClosing sector="Residential" />
    </>
  );
}
