import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { BoltMark, PlateLink } from "@/components/ui/BoltMark";
import { projects, projectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Projects | RUS Electrical",
  description:
    "View recent electrical projects completed by RUS Electrical across residential, commercial and industrial properties.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Field record — Projects"
        title={
          <>
            Recent work<span className="text-rus-yellow">.</span>
          </>
        }
        support="A selection of recent electrical work completed across Sandton, Fourways, Bryanston and Johannesburg North."
      >
        <PlateLink href="/contact#quote">Discuss your project</PlateLink>
      </PageHero>

      <section className="bg-rus-black section-pad">
        <div className="container-rus">
          {/* Category legend */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-rus-white/10 pb-5">
            {projectCategories.map((cat) => (
              <span
                key={cat.slug}
                className="font-mono text-[10px] uppercase tracking-[0.28em] text-rus-grey/70"
              >
                {cat.label}
              </span>
            ))}
          </div>

          {/* Project grid — hard edges, no rounded cards */}
          <div className="mt-10 grid gap-px border border-rus-white/10 bg-rus-white/10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group bg-rus-black p-0 transition-colors duration-200 hover:bg-rus-graphite"
              >
                {project.image ? (
                  <div
                    className="relative h-48 w-full overflow-hidden"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 14px))",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="flex h-48 items-center justify-center border-b border-rus-white/5">
                    <BoltMark
                      className="h-16 w-auto text-rus-white/10"
                      shadow
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-rus-yellow/80">
                    {projectCategories.find((c) => c.slug === project.category)
                      ?.label ?? project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold uppercase leading-snug tracking-tight text-rus-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-rus-grey">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-rus-grey/60">
            Project images illustrative — scope and standards are representative of actual work
          </p>
        </div>
      </section>
    </>
  );
}
