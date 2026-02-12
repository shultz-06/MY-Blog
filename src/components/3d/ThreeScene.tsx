'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, ContactShadows } from '@react-three/drei';
import { cn } from '@/lib/utils';

interface ThreeSceneProps {
    children: React.ReactNode;
    className?: string;
}

export function ThreeScene({ children, className }: ThreeSceneProps) {
    return (
        <div className={cn("w-full h-full", className)}>
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <Suspense fallback={null}>
                    {children}
                    <Environment preset="city" />
                    <ContactShadows
                        position={[0, -1.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2}
                        far={4.5}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
