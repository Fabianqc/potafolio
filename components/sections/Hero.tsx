"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Server, TerminalSquare, Code2 } from "lucide-react";
import { SplineScene } from "@/components/ui/SplineScene";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
    },
};

export const Hero = () => {
    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[800px] h-[800px] border border-white/5 rounded-full border-dashed"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[600px] h-[600px] border border-violet-500/10 rounded-full border-dashed"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ y: yTransform, opacity: opacityTransform }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 backdrop-blur-md">
                        <TerminalSquare className="h-4 w-4" />
                        <span>Fabián Quijada — Co-Founder @ Koodev.net</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl"
                    >
                        No solo escribo el código.{" "}
                        <span className="text-gradient block mt-2">Construyo donde vive.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl mt-8 text-lg text-gray-400 md:text-xl leading-relaxed"
                    >
                        Desarrollador Full-Stack Híbrido. Estructurando soluciones de software escalables (Next.js / NestJS) respaldadas por infraestructura robusta.
                        Entendiendo la tecnología desde el cable de red hasta el componente React.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                        <Button variant="primary" className="group" onClick={() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })}>
                            Explorar Tech Stack
                            <Code2 className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('infra')?.scrollIntoView({ behavior: 'smooth' })}>
                            <Server className="mr-2 h-4 w-4 text-cyan-400" />
                            Conocer la Infraestructura
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right 3D Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
                    className="h-[300px] md:h-[400px] w-full lg:h-[600px] relative"
                >
                    <SplineScene
                        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                        className="w-full h-full cursor-grab active:cursor-grabbing"
                    />
                </motion.div>
            </div>
        </section>
    );
};
