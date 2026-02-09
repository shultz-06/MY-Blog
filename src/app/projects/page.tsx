'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects, getCategories } from '@/data/projects';

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = getCategories();

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section bg-gradient-to-b from-[var(--color-background-alt)] to-[var(--color-background)]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            My <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-lg text-[var(--color-foreground-muted)]">
                            A collection of projects I&apos;ve built - from full-stack applications to open-source contributions
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 border-b border-[var(--color-border)] sticky top-20 bg-[var(--color-background)]/80 backdrop-blur-lg z-30">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 overflow-x-auto pb-2">
                        <span className="text-[var(--color-foreground-muted)] flex items-center gap-2 flex-shrink-0">
                            <Filter size={18} />
                            Filter:
                        </span>
                        <div className="flex gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === category
                                            ? 'bg-[var(--color-primary)] text-white'
                                            : 'bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:bg-[var(--color-border)]'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredProjects.map((project) => (
                            <article
                                key={project.id}
                                id={project.id}
                                className="group card overflow-hidden scroll-mt-40"
                            >
                                {/* Project Image */}
                                <div className="relative h-56 -mx-6 -mt-6 mb-6 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-6xl opacity-50">💻</span>
                                    </div>
                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'completed'
                                                ? 'bg-green-500/20 text-green-400'
                                                : project.status === 'in-progress'
                                                    ? 'bg-yellow-500/20 text-yellow-400'
                                                    : 'bg-gray-500/20 text-gray-400'
                                            }`}>
                                            {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                        </span>
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="badge">{project.category}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                        {project.title}
                                    </h2>

                                    <p className="text-[var(--color-foreground-muted)] mb-4">
                                        {project.description}
                                    </p>

                                    {/* Long Description */}
                                    <details className="mb-4">
                                        <summary className="text-sm text-[var(--color-primary)] cursor-pointer hover:underline">
                                            Read more
                                        </summary>
                                        <div className="mt-3 text-sm text-[var(--color-foreground-muted)] whitespace-pre-line pl-4 border-l-2 border-[var(--color-border)]">
                                            {project.longDescription}
                                        </div>
                                    </details>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-3 py-1.5 rounded-md bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Timeline */}
                                    <p className="text-xs text-[var(--color-foreground-muted)] mb-4">
                                        📅 {project.startDate} {project.endDate ? `- ${project.endDate}` : '- Present'}
                                    </p>

                                    {/* Links */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border)]">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-background-alt)] text-[var(--color-foreground)] hover:bg-[var(--color-border)] transition-colors text-sm font-medium"
                                            >
                                                <Github size={18} />
                                                View Code
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:opacity-90 transition-opacity text-sm font-medium"
                                            >
                                                <ExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-[var(--color-foreground-muted)]">
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
