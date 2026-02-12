import { projects } from "@/data/projects";
import { ProjectItem } from "@/components/project-item";

export const dynamic = "force-static";
export const revalidate = 30;

export default function Projects() {
    return (
        <main className="px-sides my-24 min-h-fold">
            <h1 className="text-heading font-black uppercase text-balance mb-12">
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap">
                {projects.map((project) => (
                    <ProjectItem
                        key={project._slug}
                        project={project}
                        mode="grid"
                    />
                ))}
            </div>
        </main>
    );
}
