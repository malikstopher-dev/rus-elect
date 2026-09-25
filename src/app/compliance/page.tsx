import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { PlateLink } from "@/components/ui/BoltMark";
import { business } from "@/data/business";
import { Phone, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Electrical Compliance & Inspections | RUS Electrical",
  description:
    "Electrical compliance inspections and COC support in Sandton and Johannesburg North. We help ensure your property meets electrical safety requirements.",
};

const coverage = [
  "Condition and safety of wiring",
  "Earthing systems",
  "Circuit breakers & distribution boards",
  "Overall installation safety",
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance — Inspections & COC"
        title={
          <>
            Inspections &amp;
            <br />
            compliance<span className="text-rus-yellow">.</span>
          </>
        }
        support="Electrical inspections and support for compliance documentation — covering wiring, earthing, circuit breakers and overall installation safety."
      >
        <PlateLink href="/contact#quote">Enquire now</PlateLink>
        <PlateLink href={business.primaryPhoneLink} variant="ghost">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {business.primaryPhone}
        </PlateLink>
      </PageHero>

      <section className="bg-rus-black section-pad">
        <div className="container-rus grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2 className="border-l-2 border-rus-yellow pl-5 text-2xl font-bold uppercase tracking-tight text-rus-white">
              About compliance inspections
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-rus-grey">
              <p>
                Electrical compliance certificates are typically required for
                property transfers, insurance claims and rental agreements. We
                carry out thorough inspections of your electrical installation
                and provide guidance on the necessary documentation.
              </p>
              <p>
                Our inspection process covers the condition of wiring, earthing
                systems, circuit breakers, distribution boards and the overall
                safety of the electrical installation.
              </p>
            </div>

            <h3 className="mt-12 font-mono text-[10px] uppercase tracking-[0.34em] text-rus-grey/70">
              Inspection coverage
            </h3>
            <ul className="mt-5 divide-y divide-rus-white/5 border-y border-rus-white/10">
              {coverage.map((item, i) => (
                <li key={item} className="flex items-baseline gap-4 py-3.5">
                  <span className="font-mono text-[10px] tabular-nums text-rus-yellow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-rus-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Registration note — hairline plate with yellow rail */}
            <div className="border border-rus-white/10 border-l-2 border-l-rus-yellow bg-rus-graphite p-7">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 shrink-0 text-rus-yellow"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-rus-white">
                    Registration details
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-rus-grey">
                    Specific compliance credentials and registration details are
                    subject to owner confirmation. Please contact us directly to
                    discuss your compliance requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <PlateLink href="/contact#quote">
                Discuss your compliance needs
              </PlateLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
