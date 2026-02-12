import Link from 'next/link';
import { siteInfo } from '@/data/siteData';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            {siteInfo.title}
                        </span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        <Link
                            href="/about"
                            className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blog"
                            className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
