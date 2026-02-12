"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TransitionTrigger } from "./transition-trigger";
import { useTransitionRouter } from "next-view-transitions";
import { useRouter } from "next/navigation";

interface NavigationButtonProps {
    href?: string;
    children: React.ReactNode;
    variant?: "left" | "right";
    className?: string;
}

export function NavigationButton({
    href,
    children,
    variant,
    className,
}: NavigationButtonProps) {
    const router = useTransitionRouter();
    const nextRouter = useRouter();

    if (!href) {
        return (
            <button
                disabled
                className={cn(
                    "flex items-center gap-2 opacity-30 cursor-not-allowed font-semibold text-subtitle",
                    variant === "right" && "flex-row-reverse",
                    className
                )}
            >
                {variant === "left" && <ArrowLeft className="size-4" />}
                {variant === "right" && <ArrowRight className="size-4" />}
                {children}
            </button>
        );
    }

    const isBack = children === "Back";

    return (
        <TransitionTrigger
            href={href}
            className={cn(
                "flex items-center gap-2 hover:opacity-100 transition-opacity font-semibold text-subtitle group",
                isBack ? "opacity-30" : "opacity-100",
                variant === "right" && "flex-row-reverse",
                className
            )}
        >
            {variant === "left" && (
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            )}
            {variant === "right" && (
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            )}
            {children}
        </TransitionTrigger>
    );
}
