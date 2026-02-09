import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group card overflow-hidden">
            {/* Image */}
            <div className="relative h-48 -mx-6 -mt-6 mb-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                    <span className="badge">{project.category}</span>
                </div>
            </div>

            {/* Content */}
            <div>
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                </h3>
                <p className="text-[var(--color-foreground-muted)] text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-md bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)]"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-xs px-2 py-1 rounded-md bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)]">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            <Github size={16} />
                            Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                    <Link
                        href={`/projects#${project.id}`}
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] ml-auto group-hover:gap-2 transition-all"
                    >
                        Details
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
