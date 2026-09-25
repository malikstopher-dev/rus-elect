/**
 * ServiceIndex — hairline index of services linking to detail pages.
 * Server-safe (no client JS): hover states are pure CSS. Used by the
 * residential, commercial and industrial sector routes.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceIndex({
  items,
  heading,
}: {
  items: Service[];
  heading: string;
}) {
  return (
    <div>
      <h2 className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-rus-grey/70">
        <span className="h-1.5 w-1.5 bg-rus-yellow" aria-hidden="true" />
        {heading}
      </h2>

      <ol className="mt-6 border-t border-rus-white/10">
        {items.map((service) => (
          <li key={service.id}>
            <Link
              href={`/services/${service.slug}`}
              className="group relative flex items-baseline gap-x-6 border-b border-rus-white/10 py-6 transition-colors duration-200 hover:bg-rus-white/[0.02] md:items-center"
            >
              <span
                className="absolute bottom-0 left-0 top-0 w-[2px] bg-rus-yellow opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="w-10 shrink-0 font-mono text-sm font-bold tabular-nums text-rus-yellow/80">
                {service.number}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-bold uppercase tracking-tight text-rus-white transition-transform duration-200 group-hover:translate-x-1 md:text-lg">
                  {service.shortTitle}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-rus-grey">
                  {service.description}
                </span>
              </span>
              <ArrowRight
                className="hidden h-5 w-5 shrink-0 text-rus-grey transition-all duration-200 group-hover:translate-x-1 group-hover:text-rus-yellow sm:block"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
