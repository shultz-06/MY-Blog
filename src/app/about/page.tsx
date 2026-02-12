import type { Metadata } from 'next';
import { ArrowRight, GraduationCap, Target, Heart, Award, CheckCircle } from 'lucide-react';
import { SkillBar } from '@/components/ui';
import { personalInfo, education, experience, skills, certifications, achievements } from '@/data/personalInfo';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about my background, skills, education, and professional experience.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section bg-gradient-to-b from-[var(--color-background-alt)] to-[var(--color-background)]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About <span className="gradient-text">Me</span>
                        </h1>
                        <p className="text-lg text-[var(--color-foreground-muted)] leading-relaxed">
                            {personalInfo.shortBio}
                        </p>
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Profile Card */}
                        <div className="lg:col-span-1">
                            <div className="card sticky top-24">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white">
                                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold text-center mb-1">{personalInfo.name}</h2>
                                <p className="text-[var(--color-foreground-muted)] text-center mb-4">{personalInfo.role}</p>
                                <p className="text-sm text-[var(--color-foreground-muted)] text-center">
                                    📍 {personalInfo.location}
                                </p>

                                <hr className="my-6 border-[var(--color-border)]" />

                                {/* Interests */}
                                <h3 className="text-sm font-semibold uppercase text-[var(--color-foreground-muted)] mb-3">
                                    Interests
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {personalInfo.interests.map((interest) => (
                                        <span
                                            key={interest.name}
                                            className="text-sm px-3 py-1.5 rounded-full bg-[var(--color-background-alt)] text-[var(--color-foreground)]"
                                        >
                                            {interest.icon} {interest.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bio Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Biography */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                        <Heart size={24} />
                                    </span>
                                    Biography
                                </h2>
                                <div className="prose max-w-none">
                                    {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-[var(--color-foreground-muted)] leading-relaxed mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Career Goals */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="p-2 rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                                        <Target size={24} />
                                    </span>
                                    Career Goals
                                </h2>
                                <ul className="space-y-3">
                                    {personalInfo.careerGoals.map((goal, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle size={20} className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                                            <span className="text-[var(--color-foreground-muted)]">{goal}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section bg-[var(--color-background-alt)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Skills & <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-[var(--color-foreground-muted)] max-w-2xl mx-auto">
                            A comprehensive overview of my professional skills and proficiency levels
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Finance */}
                        <div className="card">
                            <h3 className="text-lg font-semibold mb-6 text-[var(--color-primary)]">Finance</h3>
                            <div className="space-y-4">
                                {skills.finance.map((skill) => (
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                                ))}
                            </div>
                        </div>

                        {/* Operations */}
                        <div className="card">
                            <h3 className="text-lg font-semibold mb-6 text-[var(--color-secondary)]">Operations</h3>
                            <div className="space-y-4">
                                {skills.operations.map((skill) => (
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="card">
                            <h3 className="text-lg font-semibold mb-6 text-[var(--color-accent)]">Tools</h3>
                            <div className="space-y-4">
                                {skills.tools.map((skill) => (
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="card">
                            <h3 className="text-lg font-semibold mb-6 text-orange-500">Soft Skills</h3>
                            <div className="space-y-4">
                                {skills.soft.map((skill) => (
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Work <span className="gradient-text">Experience</span>
                        </h2>
                        <p className="text-[var(--color-foreground-muted)] max-w-2xl mx-auto">
                            My professional journey and key accomplishments
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {experience.map((exp, index) => (
                            <div key={index} className="relative pl-8 pb-12 last:pb-0">
                                {/* Timeline line */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)]" />
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[3px] rounded-full bg-[var(--color-primary)]" />

                                <div className="card">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-foreground)]">{exp.title}</h3>
                                            <p className="text-[var(--color-primary)] font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-sm text-[var(--color-foreground-muted)] bg-[var(--color-background-alt)] px-3 py-1 rounded-full">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--color-foreground-muted)] mb-4">📍 {exp.location}</p>
                                    <p className="text-[var(--color-foreground-muted)] mb-4">{exp.description}</p>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-foreground-muted)]">
                                                <ArrowRight size={16} className="text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="section bg-[var(--color-background-alt)]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="gradient-text">Education</span>
                        </h2>
                        <p className="text-[var(--color-foreground-muted)] max-w-2xl mx-auto">
                            My academic background and qualifications
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto grid gap-6">
                        {education.map((edu, index) => (
                            <div key={index} className="card">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                        <GraduationCap size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                            <h3 className="text-xl font-bold text-[var(--color-foreground)]">{edu.degree}</h3>
                                            <span className="text-sm text-[var(--color-foreground-muted)] bg-[var(--color-background-alt)] px-3 py-1 rounded-full">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <p className="text-[var(--color-primary)] font-medium mb-1">{edu.school}</p>
                                        <p className="text-sm text-[var(--color-foreground-muted)] mb-3">📍 {edu.location}</p>
                                        <p className="text-[var(--color-foreground-muted)] mb-2">{edu.description}</p>
                                        <p className="text-sm font-medium text-[var(--color-foreground)]">GPA: {edu.gpa}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Achievements */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Certifications */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                    <Award size={24} />
                                </span>
                                Certifications
                            </h2>
                            <div className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="card">
                                        <h3 className="font-semibold text-[var(--color-foreground)] mb-1">{cert.name}</h3>
                                        <p className="text-sm text-[var(--color-primary)] mb-2">{cert.issuer} • {cert.date}</p>
                                        <p className="text-xs text-[var(--color-foreground-muted)]">Credential ID: {cert.credentialId}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                                    🏆
                                </span>
                                Achievements
                            </h2>
                            <div className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="card">
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <h3 className="font-semibold text-[var(--color-foreground)]">{achievement.title}</h3>
                                            <span className="text-xs text-[var(--color-foreground-muted)] bg-[var(--color-background-alt)] px-2 py-1 rounded">
                                                {achievement.year}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[var(--color-primary)] mb-2">{achievement.organization}</p>
                                        <p className="text-sm text-[var(--color-foreground-muted)]">{achievement.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
