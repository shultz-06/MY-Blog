import Link from 'next/link';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { ProjectCard, BlogCard, SkillBar } from '@/components/ui';
import { personalInfo, skills } from '@/data/personalInfo';
import { getFeaturedProjects } from '@/data/projects';
import { getRecentPosts } from '@/data/blog';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const recentPosts = getRecentPosts(3);
  const topSkills = skills.frontend.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/5" />

        {/* Animated shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-8 slide-up">
              <Sparkles size={16} />
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-up stagger-1">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Role */}
            <p className="text-xl md:text-2xl text-[var(--color-foreground-muted)] mb-4 slide-up stagger-2">
              {personalInfo.role}
            </p>

            {/* Tagline */}
            <p className="text-lg text-[var(--color-foreground-muted)] max-w-2xl mx-auto mb-10 slide-up stagger-3">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 slide-up stagger-4">
              <Link href="/projects" className="btn btn-primary">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <Mail size={18} />
                Get In Touch
              </Link>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-[var(--color-background-alt)]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-[var(--color-foreground-muted)] mb-6 leading-relaxed">
                {personalInfo.shortBio}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all"
              >
                Learn more about me
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Skills Preview */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-6">Top Skills</h3>
              <div className="space-y-4">
                {topSkills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
              <Link
                href="/about#skills"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium mt-6 hover:gap-3 transition-all"
              >
                View all skills
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-[var(--color-foreground-muted)]">
                A showcase of my recent work and side projects
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium mt-4 md:mt-0 hover:gap-3 transition-all"
            >
              View all projects
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section bg-[var(--color-background-alt)]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Latest <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-[var(--color-foreground-muted)]">
                Thoughts on development, technology, and career
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium mt-4 md:mt-0 hover:gap-3 transition-all"
            >
              View all articles
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-12 md:p-16 text-center text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                I&apos;m currently open to new opportunities and collaborations.
                Whether you have a project in mind or just want to say hi, feel free to reach out!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  <Mail size={18} />
                  Get In Touch
                </Link>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
