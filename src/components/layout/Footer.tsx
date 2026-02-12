import { siteInfo } from '@/data/siteData';

export function Footer() {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by {siteInfo.title}. The source code is available on{' '}
                    <a
                        href={siteInfo.socialLinks.items.find((link) => link._title === "GitHub")?.link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}
