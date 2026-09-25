import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import QuoteForm from "@/components/sections/QuoteForm";
import { business } from "@/data/business";
import { Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | RUS Electrical",
  description:
    "Get in touch with RUS Electrical. Call, email or request a quote for electrical services in Sandton and Johannesburg North.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact — RUS Electrical"
        title={
          <>
            Let&apos;s get it
            <br />
            done properly<span className="text-rus-yellow">.</span>
          </>
        }
        support="Give us a call or fill in the form — we'll get back to you. Verified contact line below; secondary details pending owner confirmation."
      />

      <section className="bg-rus-black section-pad">
        <div className="container-rus grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Channels */}
          <div>
            <h2 className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-rus-grey/70">
              <span className="h-1.5 w-1.5 bg-rus-yellow" aria-hidden="true" />
              Direct lines
            </h2>
            <div className="mt-6 divide-y divide-rus-white/5 border-y border-rus-white/10">
              <a
                href={business.primaryPhoneLink}
                className="group flex items-center gap-4 py-5"
              >
                <Phone className="h-5 w-5 shrink-0 text-rus-yellow" aria-hidden="true" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-rus-grey/70">
                    Primary phone
                  </div>
                  <div className="mt-0.5 text-lg font-semibold text-rus-white transition-colors group-hover:text-rus-yellow">
                    {business.primaryPhone}
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4 py-5">
                <MapPin className="h-5 w-5 shrink-0 text-rus-yellow" aria-hidden="true" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-rus-grey/70">
                    Service areas
                  </div>
                  <div className="mt-0.5 text-rus-white">
                    {business.serviceAreas.join(" · ")}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-5">
                <Clock className="h-5 w-5 shrink-0 text-rus-yellow" aria-hidden="true" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-rus-grey/70">
                    Hours
                  </div>
                  <div className="mt-0.5 text-rus-white">
                    {business.hours.display}
                  </div>
                </div>
              </div>
            </div>

            {/* Pending-confirmation note */}
            <div className="mt-8 border border-rus-white/10 border-l-2 border-l-rus-yellow bg-rus-graphite p-5">
              <p className="text-sm leading-relaxed text-rus-grey">
                Secondary phone and email details are awaiting confirmation from
                the business owner. Please use the primary phone number above.
              </p>
            </div>
          </div>

          {/* Quote form */}
          <div id="quote">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
