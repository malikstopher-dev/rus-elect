/**
 * SectorClosing — the verified proof + coverage strip that closes sector
 * routes (residential / commercial / industrial). Verified data only:
 * service areas, primary phone, Google rating. No invented claims.
 */

import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { PlateLink } from "@/components/ui/BoltMark";
import { TraceRule } from "@/components/ui/Trace";
import { business } from "@/data/business";

export default function SectorClosing({ sector }: { sector: string }) {
  return (
    <section className="border-t border-rus-white/10 bg-rus-black section-pad-sm">
      <div className="container-rus">
        <p className="eyebrow-sm flex items-center gap-3">
          <TraceRule className="w-8" />
          Coverage — {sector}
        </p>
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {business.serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-rus-white"
              >
                <span className="h-1.5 w-1.5 bg-rus-yellow" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-rus-grey">
            <Star className="h-3.5 w-3.5 fill-rus-yellow text-rus-yellow" aria-hidden="true" />
            <span className="text-rus-yellow">{business.rating.value}/5</span>
            <span>· {business.rating.count} Google reviews</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <PlateLink href="/contact#quote">Request assessment</PlateLink>
          <Link
            href={business.primaryPhoneLink}
            className="inline-flex items-center gap-2.5 font-mono text-sm tracking-wider text-rus-grey transition-colors duration-200 hover:text-rus-white"
          >
            <Phone className="h-4 w-4 text-rus-yellow" aria-hidden="true" />
            {business.primaryPhone}
          </Link>
        </div>
      </div>
    </section>
  );
}
