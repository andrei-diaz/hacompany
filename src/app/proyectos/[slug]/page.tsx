import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProject, projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.name,
    description: project.sub,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Header />
      <main className="flex-1">
        <section
          className="px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24"
          style={{ background: "var(--paper)", color: "var(--ink)" }}
        >
          <div className="max-w-[1280px] mx-auto">
            <Link
              href="/#proyectos"
              className="font-mono uppercase inline-flex items-center gap-2 mb-12 hover:opacity-60 transition-opacity"
              style={{ fontSize: 11, letterSpacing: "0.2em" }}
            >
              <span>←</span> Volver a proyectos
            </Link>

            <div
              className="font-mono uppercase mb-6"
              style={{
                fontSize: 11,
                color: "var(--orange)",
                letterSpacing: "0.2em",
              }}
            >
              Caso {project.n} · {project.kind} · {project.year}
            </div>

            <h1
              className="font-display italic uppercase m-0 mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 11vw, 168px)",
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
              }}
            >
              {project.name}
            </h1>

            <p
              className="italic max-w-2xl mb-10"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2vw, 26px)",
                lineHeight: 1.4,
                opacity: 0.8,
              }}
            >
              {project.sub}
            </p>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 font-semibold transition-transform hover:scale-[1.03]"
                style={{
                  padding: "16px 28px",
                  borderRadius: 999,
                  background: "var(--ink)",
                  color: "var(--paper)",
                  fontSize: 15,
                }}
              >
                <span className="size-1.5 rounded-full bg-acid" />
                Visitar sitio
                <span>↗</span>
              </a>
            )}
          </div>
        </section>

        {(project.url || project.image) && (
          <section
            className="px-4 sm:px-6 pb-16 sm:pb-24"
            style={{ background: "var(--paper)" }}
          >
            <div className="max-w-[1280px] mx-auto">
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: 28,
                  background: "#ece5dc",
                  boxShadow: "0 40px 80px rgba(10,10,10,0.18)",
                  aspectRatio: "16 / 10",
                }}
              >
                {project.url && project.embeddable !== false ? (
                  <>
                    <iframe
                      src={project.url}
                      title={`${project.name} preview`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className={
                        project.responsive === false
                          ? "hidden md:block absolute inset-0 w-full h-full"
                          : "absolute inset-0 w-full h-full"
                      }
                      style={{ border: "none" }}
                    />
                    {project.responsive === false && project.image && (
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 0px"
                        className="md:hidden"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        priority
                      />
                    )}
                  </>
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    priority
                  />
                ) : null}
              </div>
            </div>
          </section>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <section
            className="px-4 sm:px-6 pb-16 sm:pb-20"
            style={{ background: "var(--paper)", color: "var(--ink)" }}
          >
            <div className="max-w-[1280px] mx-auto">
              <div
                className="flex flex-wrap"
                style={{ background: "rgba(10,10,10,0.12)", gap: 1 }}
              >
                {project.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="p-5 sm:p-7 grow"
                    style={{
                      background: "var(--paper)",
                      flexBasis:
                        project.highlights!.length === 1
                          ? "100%"
                          : "calc(50% - 1px)",
                    }}
                  >
                    <div
                      className="font-display italic m-0 mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(26px, 3.5vw, 44px)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        overflowWrap: "anywhere",
                      }}
                    >
                      {h.value}
                    </div>
                    <div
                      className="font-mono uppercase"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        opacity: 0.6,
                      }}
                    >
                      {h.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          className="px-4 sm:px-6 py-16 sm:py-24"
          style={{ background: "var(--paper)", color: "var(--ink)" }}
        >
          <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16">
            <div>
              <div
                className="font-mono uppercase mb-4"
                style={{
                  fontSize: 11,
                  color: "var(--orange)",
                  letterSpacing: "0.2em",
                }}
              >
                El proyecto
              </div>
              <p
                className="m-0"
                style={{
                  fontSize: 19,
                  lineHeight: 1.55,
                  opacity: 0.85,
                }}
              >
                {project.description}
              </p>
            </div>

            <aside>
              <div
                className="font-mono uppercase mb-3"
                style={{
                  fontSize: 11,
                  color: "var(--orange)",
                  letterSpacing: "0.2em",
                }}
              >
                Rol
              </div>
              <p
                className="m-0"
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  opacity: 0.8,
                }}
              >
                {project.role}
              </p>
            </aside>
          </div>
        </section>

        <section
          className="px-4 sm:px-6 py-16 sm:py-24"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          <div className="max-w-[1280px] mx-auto flex flex-wrap items-end justify-between gap-8">
            <div>
              <div
                className="font-mono uppercase mb-4"
                style={{
                  fontSize: 11,
                  color: "var(--orange)",
                  letterSpacing: "0.2em",
                }}
              >
                Siguiente caso
              </div>
              <Link
                href={`/proyectos/${nextProject.slug}`}
                className="font-display italic uppercase block hover:text-orange transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 7vw, 96px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                }}
              >
                {nextProject.name} →
              </Link>
            </div>
            <Link
              href="/#proyectos"
              className="font-mono uppercase inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
              style={{ fontSize: 11, letterSpacing: "0.2em" }}
            >
              <span>←</span> Todos los proyectos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
