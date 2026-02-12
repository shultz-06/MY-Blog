import { siteInfo } from "@/data/siteData";
import { projects } from "@/data/projects";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectItem } from "@/components/project-item";

export const dynamic = "force-static";
export const revalidate = 30;

export default function Home() {
  const info = siteInfo;

  return (
    <main className="px-sides mb-24">
      {/* hero section */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden mb-24 p-[min(2vw,1.5rem)]">
        <div className="relative w-full h-full min-h-[70vh] lg:min-h-[80vh]">
          <HeroBackground src="/abstract.png" />
          <HeroSection />
        </div>
      </section>

      {/* showcase section */}
      {projects.length > 0 && (
        <section className="pt-12">
          {/* featured project */}
          <div className="mb-12">
            <ProjectItem project={projects[0]} mode="featured" />
          </div>

          {/* grid projects */}
          {projects.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap">
              {projects.slice(1).map((project) => (
                <ProjectItem
                  key={project._slug}
                  project={project}
                  mode="grid"
                />
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
