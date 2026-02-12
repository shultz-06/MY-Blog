import { siteInfo } from "@/data/siteData";
import { projects } from "@/data/projects";
import { SocialLinks } from "@/components/social-links";
import { ProjectItem } from "@/components/project-item";
import { BackgroundImage } from "@/components/background-image";

export const dynamic = "force-static";
export const revalidate = 30;

export default function Home() {
  const info = siteInfo;

  return (
    <main className="px-sides mb-24">
      {/* hero section */}
      <BackgroundImage
        src="/abstract.png"
        alt="Abstract background"
        className="relative -mx-[var(--gap)] px-[var(--gap)]"
      >
        <div className="pt-24 lg:pt-48 pb-24 flex flex-col lg:grid grid-cols-12 gap-gap relative z-10">
          <SocialLinks
            className="max-lg:hidden col-span-5"
            links={info.socialLinks.items}
          />
          <div className="col-span-7">
            <h1 className="text-heading font-black uppercase text-balance text-white drop-shadow-md">
              {info.heading}
            </h1>
          </div>
        </div>
      </BackgroundImage>

      {/* showcase section */}
      {projects.length > 0 && (
        <section className="pt-24">
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
