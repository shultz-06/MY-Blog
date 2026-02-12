'use client';

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { cn } from "@/lib/utils";

interface UnityPlayerProps {
    className?: string;
    buildName?: string; // Potential to pass different builds
}

export function UnityPlayer({ className, buildName = "default" }: UnityPlayerProps) {
    // Note: These paths are placeholders. 
    // The user needs to place their Unity build files in public/unity/[buildName]/
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: `/unity/${buildName}/Build.loader.js`,
        dataUrl: `/unity/${buildName}/Build.data`,
        frameworkUrl: `/unity/${buildName}/Build.framework.js`,
        codeUrl: `/unity/${buildName}/Build.wasm`,
    });

    return (
        <div className={cn("relative w-full aspect-video rounded-xl overflow-hidden bg-muted", className)}>
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 z-10">
                    <p className="text-sm font-medium mb-4">Loading 3D Experience...</p>
                    <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${Math.round(loadingProgression * 100)}%` }}
                        />
                    </div>
                </div>
            )}

            {/* 
                Unity component will only try to load if files exist. 
                Providing a clear message if it fails or files are missing is handled by standard Unity WebGL errors usually,
                but we could add more logic here if needed.
            */}
            <Unity
                unityProvider={unityProvider}
                className="w-full h-full"
                devicePixelRatio={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
            />

            <div className="absolute bottom-4 right-4 text-[10px] text-muted-foreground bg-background/50 px-2 py-1 rounded">
                Unity WebGL Runtime
            </div>
        </div>
    );
}
