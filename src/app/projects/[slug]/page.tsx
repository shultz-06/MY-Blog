import { ProjectItemFragment } from "@/types/data";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Media } from "@/components/media";
import { NavigationButton } from "@/components/navigation-button";

export const dynamic = "force-static";
export const revalidate = 30;

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
    params: Params;
}): Promise<Metadata> {
    const params = await props.params;
    const project = projects.find((p) => p._slug === params.slug);

    if (!project) {
        return {
            title: "Not found",
            description: "Project not found",
        };
    }

    return {
        title: project._title,
        description: typeof project.description === 'string' ? project.description : project._title,
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project._slug,
    }));
}

export default async function Page(props: {
    params: Params;
}) {
    const params = await props.params;
    const currentProjectIndex = projects.findIndex(
        (project) => project._slug === params.slug
    );

    const project = projects[currentProjectIndex];

    if (!project) {
        return notFound();
    }

    const prevProjectSlug = projects[currentProjectIndex - 1]?._slug;
    const nextProjectSlug = projects[currentProjectIndex + 1]?._slug;

    return (
        <main className="px-sides my-24">
            <h1 className="text-heading font-black text-balance mb-12">
                {project._title}
            </h1>

            <div className="flex flex-col md:grid grid-cols-12 gap-6 md:gap-gap">
                <div className="col-span-12 md:col-span-5">
                    <ProjectAttributes project={project} />
                </div>
                <div className="col-span-12 md:col-span-7 text-base leading-[1.2] font-semibold text-pretty">
                    {typeof project.description === 'string' ? (
                        <p>{project.description}</p>
                    ) : (
                        // Fallback for rich text if implemented later
                        <p>{project._title}</p>
                    )}
                </div>
            </div>

            {/* Media Grid */}
            {project.media.items.length > 0 && (
                <div className="space-y-gap mt-16">
                    {(() => {
                        const rows = [];
                        let currentIndex = 0;
                        let rowIndex = 0;

                        while (currentIndex < project.media.items.length) {
                            const isEvenRow = rowIndex % 2 === 0;
                            const itemsPerRow = isEvenRow ? 2 : 3;
                            const colSpan = isEvenRow ? "col-span-6" : "col-span-4";

                            const rowItems = [];
                            for (let i = 0; i < itemsPerRow && currentIndex < project.media.items.length; i++) {
                                const mediaItem = project.media.items[currentIndex];
                                rowItems.push(
                                    <div key={currentIndex} className={colSpan}>
                                        <Media
                                            media={mediaItem.media}
                                            className="rounded-[6px] aspect-square hover:rounded-[18px] transition-[border-radius] duration-500 ease-quad-out w-full h-auto"
                                        />
                                    </div>
                                );
                                currentIndex++;
                            }

                            rows.push(
                                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-12 gap-gap">
                                    {rowItems}
                                </div>
                            );
                            rowIndex++;
                        }

                        return rows;
                    })()}
                </div>
            )}

            <div className="flex justify-between gap-gap mt-6 md:mt-12">
                <NavigationButton
                    href={prevProjectSlug ? `/projects/${prevProjectSlug}` : undefined}
                    variant="left"
                >
                    Previous
                </NavigationButton>
                <NavigationButton href="/">Back</NavigationButton>
                <NavigationButton
                    href={nextProjectSlug ? `/projects/${nextProjectSlug}` : undefined}
                    variant="right"
                >
                    Next
                </NavigationButton>
            </div>
        </main>
    );
}

const ProjectAttributes = ({ project }: { project: ProjectItemFragment }) => {
    const { year, client, category } = project;

    return (
        <div className="grid grid-cols-6 gap-x-gap space-y-4 text-base leading-[1.2] font-semibold">
            <div className="contents">
                <p className="opacity-30 col-span-2">Year</p>
                <p className="col-span-4">{year}</p>
            </div>

            {client && (
                <div className="contents">
                    <p className="opacity-30 col-span-2">Client</p>
                    <p className="col-span-4">{typeof client === 'string' ? client : 'Unknown'}</p>
                </div>
            )}

            {category && category.length > 0 && (
                <div className="contents">
                    <p className="opacity-30 col-span-2">Type</p>
                    <p className="col-span-4">{category.join(", ")}</p>
                </div>
            )}
        </div>
    );
};
