import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const footerLinks = {
    navigation: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/resume', label: 'Resume' },
        { href: '/contact', label: 'Contact' },
    ],
    social: [
        { href: 'https://github.com', icon: Github, label: 'GitHub' },
        { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
        { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
        { href: 'mailto:hello@example.com', icon: Mail, label: 'Email' },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="text-2xl font-bold gradient-text"
                        >
                            Portfolio
                        </Link>
                        <p className="text-[var(--color-foreground-muted)] text-sm max-w-xs">
                            Full Stack Developer passionate about building beautiful,
                            performant web applications that solve real-world problems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-[var(--color-foreground)] mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-semibold text-[var(--color-foreground)] mb-4">
                            Connect
                        </h3>
                        <div className="flex gap-2">
                            {footerLinks.social.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg bg-[var(--color-background-alt)] text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-200"
                                    aria-label={link.label}
                                >
                                    <link.icon size={20} />
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-[var(--color-foreground-muted)] mt-4">
                            Feel free to reach out for collaborations or just a friendly hello!
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[var(--color-foreground-muted)] flex items-center gap-1">
                        © {currentYear} All rights reserved. Made with
                        <Heart size={14} className="text-red-500 fill-red-500" />
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/privacy"
                            className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
