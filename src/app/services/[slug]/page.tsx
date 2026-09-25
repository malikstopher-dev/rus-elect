import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { BoltMark, PlateLink } from "@/components/ui/BoltMark";
import {
  services,
  getServiceBySlug,
  serviceImages,
  serviceApplications,
} from "@/data/services";
import { business } from "@/data/business";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | RUS Electrical`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const related = services.filter(
    (s) =>
      s.id !== service.id &&
      s.category.some((c) => service.category.includes(c))
  );

  const applications = serviceApplications[service.slug] || [];
  const image = serviceImages[service.slug];

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number} — ${service.slug
          .split("-")
          .slice(0, 2)
          .join(" ")}`}
        title={
          <>
            {service.shortTitle}
            <span className="text-rus-yellow">.</span>
          </>
        }
        support={service.description}
        image={image ? { src: image, alt: service.title } : undefined}
      >
        <PlateLink href="/contact#quote">Request assessment</PlateLink>
        <PlateLink href={business.primaryPhoneLink} variant="ghost">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {business.primaryPhone}
        </PlateLink>
      </PageHero>

      <section className="bg-rus-black section-pad">
        <div className="container-rus grid gap-14 lg:grid-cols-[1fr_340px] lg:gap-20">
          {/* Body */}
          <div>
            {/* Ghost number */}
            <div className="relative mb-10 h-24 overflow-hidden" aria-hidden="true">
              <span className="absolute -top-6 left-0 select-none text-[8rem] font-black leading-none text-rus-white/5">
                {service.number}
              </span>
            </div>

            <h2 className="border-l-2 border-rus-yellow pl-5 text-2xl font-bold uppercase tracking-tight text-rus-white">
              Scope of work
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-rus-grey">
              {service.longDescription}
            </p>

            {applications.length > 0 && (
              <div className="mt-12">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.34em] text-rus-grey/70">
                  Key applications
                </h3>
                <ul className="mt-5 divide-y divide-rus-white/5 border-y border-rus-white/10">
                  {applications.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-4 py-3.5"
                    >
                      <span className="font-mono text-[10px] tabular-nums text-rus-yellow">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-rus-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12 flex flex-wrap gap-4">
              <PlateLink href="/contact#quote">Request assessment</PlateLink>
              <PlateLink href={business.primaryPhoneLink} variant="ghost">
                Call {business.primaryPhone}
              </PlateLink>
            </div>
          </div>

          {/* Related rail */}
          <aside>
            <div className="sticky top-28">
              <h3 className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-rus-grey/70">
                <BoltMark className="h-3.5 w-auto text-rus-yellow" />
                Related
              </h3>
              <ul className="mt-5 divide-y divide-rus-white/5 border-y border-rus-white/10">
                {related.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between gap-3 py-3.5"
                    >
                      <span>
                        <span className="block font-mono text-[10px] tabular-nums text-rus-grey/60">
                          {s.number}
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-rus-white transition-colors duration-200 group-hover:text-rus-yellow">
                          {s.shortTitle}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-rus-grey transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rus-yellow"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
