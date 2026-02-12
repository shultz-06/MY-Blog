"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { ComponentProps, MouseEvent } from "react";
import { usePathname } from "next/navigation";

interface TransitionTriggerProps extends ComponentProps<"a"> {
    href: string;
}

export function TransitionTrigger({
    href,
    onClick,
    ...props
}: TransitionTriggerProps) {
    const router = useTransitionRouter();
    const currentPath = usePathname();

    const handleTransition = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (currentPath !== href) {
            router.push(href);
        }
        if (onClick) {
            onClick(e);
        }
    };

    return <Link href={href} onClick={handleTransition} {...props} />;
}
