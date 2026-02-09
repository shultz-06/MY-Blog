import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { SkillBar } from '@/components/ui';
import { personalInfo, experience, education, skills, certifications } from '@/data/personalInfo';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'View and download my professional resume. Full Stack Developer with expertise in React, Node.js, and cloud technologies.',
};

export default function ResumePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section bg-gradient-to-b from-[var(--color-background-alt)] to-[var(--color-background)]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            My <span className="gradient-text">Resume</span>
                        </h1>
                        <p className="text-lg text-[var(--color-foreground-muted)] mb-8">
                            Full Stack Developer with expertise in building scalable web applications
                        </p>
                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <Download size={18} />
                            Download PDF
                        </a>
                    </div>
                </div>
            </section>

            {/* Resume Content */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Header Card */}
                        <div className="card mb-8">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white text-2xl font-bold">
                                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="text-center md:text-left flex-1">
                                    <h2 className="text-2xl font-bold text-[var(--color-foreground)]">{personalInfo.name}</h2>
                                    <p className="text-[var(--color-primary)] font-medium mb-2">{personalInfo.role}</p>
                                    <p className="text-[var(--color-foreground-muted)] text-sm mb-4">{personalInfo.location}</p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                                        <a href={`mailto:${personalInfo.email}`} className="text-[var(--color-primary)] hover:underline">
                                            {personalInfo.email}
                                        </a>
                                        <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                                            LinkedIn
                                        </a>
                                        <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Column */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Experience */}
                                <div className="card">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                            <Briefcase size={20} />
                                        </span>
                                        Work Experience
                                    </h3>
                                    <div className="space-y-6">
                                        {experience.map((exp, index) => (
                                            <div key={index} className="relative pl-6 border-l-2 border-[var(--color-border)] last:border-transparent">
                                                <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-[var(--color-primary)]" />
                                                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                                    <div>
                                                        <h4 className="font-bold text-[var(--color-foreground)]">{exp.title}</h4>
                                                        <p className="text-[var(--color-primary)] text-sm font-medium">{exp.company}</p>
                                                    </div>
                                                    <span className="text-xs text-[var(--color-foreground-muted)] bg-[var(--color-background-alt)] px-2 py-1 rounded">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-[var(--color-foreground-muted)] mb-2">{exp.description}</p>
                                                <ul className="space-y-1">
                                                    {exp.highlights.map((highlight, idx) => (
                                                        <li key={idx} className="text-sm text-[var(--color-foreground-muted)] flex items-start gap-2">
                                                            <span className="text-[var(--color-primary)] mt-1">•</span>
                                                            {highlight}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Education */}
                                <div className="card">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                                            <GraduationCap size={20} />
                                        </span>
                                        Education
                                    </h3>
                                    <div className="space-y-6">
                                        {education.map((edu, index) => (
                                            <div key={index} className="relative pl-6 border-l-2 border-[var(--color-border)] last:border-transparent">
                                                <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-[var(--color-secondary)]" />
                                                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                                    <div>
                                                        <h4 className="font-bold text-[var(--color-foreground)]">{edu.degree}</h4>
                                                        <p className="text-[var(--color-secondary)] text-sm font-medium">{edu.school}</p>
                                                    </div>
                                                    <span className="text-xs text-[var(--color-foreground-muted)] bg-[var(--color-background-alt)] px-2 py-1 rounded">
                                                        {edu.period}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-[var(--color-foreground-muted)]">{edu.description}</p>
                                                <p className="text-sm font-medium text-[var(--color-foreground)] mt-1">GPA: {edu.gpa}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Column */}
                            <div className="space-y-8">
                                {/* Skills */}
                                <div className="card">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                                            <Code size={20} />
                                        </span>
                                        Skills
                                    </h3>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-sm font-semibold text-[var(--color-foreground-muted)] uppercase mb-3">Frontend</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.frontend.map((skill) => (
                                                    <span key={skill.name} className="text-xs px-2 py-1 rounded bg-[var(--color-background-alt)] text-[var(--color-foreground)]">
                                                        {skill.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-[var(--color-foreground-muted)] uppercase mb-3">Backend</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.backend.map((skill) => (
                                                    <span key={skill.name} className="text-xs px-2 py-1 rounded bg-[var(--color-background-alt)] text-[var(--color-foreground)]">
                                                        {skill.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-[var(--color-foreground-muted)] uppercase mb-3">DevOps</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.devops.map((skill) => (
                                                    <span key={skill.name} className="text-xs px-2 py-1 rounded bg-[var(--color-background-alt)] text-[var(--color-foreground)]">
                                                        {skill.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Certifications */}
                                <div className="card">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                                            <Award size={20} />
                                        </span>
                                        Certifications
                                    </h3>
                                    <div className="space-y-4">
                                        {certifications.map((cert, index) => (
                                            <div key={index} className="pb-4 border-b border-[var(--color-border)] last:border-0 last:pb-0">
                                                <h4 className="font-medium text-[var(--color-foreground)] text-sm">{cert.name}</h4>
                                                <p className="text-xs text-[var(--color-foreground-muted)]">{cert.issuer} • {cert.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Download CTA */}
                        <div className="mt-12 text-center">
                            <p className="text-[var(--color-foreground-muted)] mb-4">
                                Want a copy for your records?
                            </p>
                            <a
                                href={personalInfo.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <Download size={18} />
                                Download Full Resume (PDF)
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
