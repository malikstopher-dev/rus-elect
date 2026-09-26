/**
 * Footer — Current System chrome.
 *
 * Four hairline-separated columns on black: wordmark + tagline, services,
 * company, contact. Mono labels, yellow square ticks, no rounded corners.
 * The same notched-plate CTA that opens the nav closes the page here.
 */

import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { RusWordmark, PlateLink } from "@/components/ui/BoltMark";
import { business } from "@/data/business";

const SERVICE_LINKS: Array<[string, string]> = [
  ["/services", "All services"],
  ["/residential", "Residential"],
  ["/commercial", "Commercial"],
  ["/industrial", "Industrial"],
  ["/compliance", "Compliance"],
];

const COMPANY_LINKS: Array<[string, string]> = [
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/reviews", "Reviews"],
  ["/contact", "Contact"],
];

function FooterNav({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <nav aria-label={title}>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.34em] text-rus-grey/70">
        {title}
      </h3>
      <ul className="mt-6 divide-y divide-rus-white/5 border-t border-rus-white/10">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex items-center gap-3 py-3 text-sm text-rus-grey transition-colors duration-200 hover:text-rus-white"
            >
              <span
                className="h-1.5 w-1.5 bg-rus-yellow/0 transition-colors duration-200 group-hover:bg-rus-yellow"
                aria-hidden="true"
              />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-rus-white/10 bg-rus-black">
      <div className="container-rus pt-6 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <div className="order-1 lg:order-none lg:pr-8">
            <Link href="/" aria-label="RUS Electrical home" className="inline-flex py-1">
              <RusWordmark showTagline />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-rus-grey lg:mt-6 lg:text-base">
              Electrical work, done in a proper way. Serving Sandton, Fourways,
              Bryanston and Johannesburg North.
            </p>
            <div className="mt-7 lg:mt-8">
              <PlateLink href="/contact#quote" variant="primary">
                Request assessment
              </PlateLink>
            </div>
          </div>

          {/* Contact — one big action row on mobile */}
          <div className="order-2 lg:order-none">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.34em] text-rus-grey/70">
              Contact
            </h3>
            <address className="mt-5 space-y-5 border-t border-rus-white/10 pt-5 not-italic text-sm lg:mt-6 lg:space-y-6">
              <a
                href={business.primaryPhoneLink}
                className="call-cta group flex min-h-[48px] items-center gap-3 border border-rus-white/15 px-4 py-3 text-rus-grey transition-colors duration-200 hover:border-rus-yellow/40 hover:text-rus-white lg:border-0 lg:p-0 lg:hover:border-transparent"
                style={{ clipPath: "polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)" }}
              >
                <Phone
                  className="contactor-icon h-5 w-5 shrink-0 text-rus-yellow lg:h-4 lg:w-4"
                  aria-hidden="true"
                />
                <span className="font-semibold text-rus-white text-lg tracking-wide lg:text-sm">
                  {business.primaryPhone}
                </span>
              </a>
              <div className="flex items-start gap-3 text-rus-grey">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-rus-yellow"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rus-grey/70">
                    Service areas
                  </p>
                  <p className="mt-1.5 leading-relaxed">
                    {business.serviceAreas.join(" · ")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-rus-grey">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-rus-yellow"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rus-grey/70">
                    Hours
                  </p>
                  <p className="mt-1.5 whitespace-pre-line leading-relaxed">
                    Mon – Fri: 08:00 – 17:30{"\n"}Sat: 08:30 – 16:00{"\n"}Sun:
                    09:30 – 14:00
                  </p>
                </div>
              </div>
            </address>
          </div>

          {/* Nav — paired columns on mobile, two grid items on desktop */}
          <div className="order-3 grid grid-cols-2 gap-x-6 gap-y-8 lg:order-none lg:contents">
            <FooterNav title="Services" links={SERVICE_LINKS} />
            <FooterNav title="Company" links={COMPANY_LINKS} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-rus-white/10 pt-7 sm:flex-row sm:items-center lg:mt-16 lg:pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rus-grey/60">
            &copy; {new Date().getFullYear()} RUS Electrical. All rights
            reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rus-grey/60">
            Concept &amp; Web Design{" "}
            <span className="text-rus-white">SMK Web Design</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
