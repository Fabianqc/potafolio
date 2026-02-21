"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => (
        <div className="flex w-full h-full items-center justify-center animate-pulse bg-white/5 rounded-2xl">
            <span className="text-gray-500 font-mono text-sm">Cargando 3D...</span>
        </div>
    ),
});

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <div className={`relative w-full h-full ${className}`}>
            <Spline scene={scene} />
        </div>
    );
}
