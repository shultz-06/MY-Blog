"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { TransitionTrigger } from "../transition-trigger";
import React from "react";

export const HeaderLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <TransitionTrigger
      href={href}
      className={cn(
        "font-semibold text-subtitle transition-opacity duration-300 cursor-pointer",
        isActive ? "opacity-100" : "opacity-30 hover:opacity-60",
        className
      )}
    >
      {children}
    </TransitionTrigger>
  );
};
