"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Network, Database, LayoutTemplate } from "lucide-react";

export const HybridProfile = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax transformations
    const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const yCards1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const yCards2 = useTransform(scrollYProgress, [0, 1], [120, -120]);
    const yCards3 = useTransform(scrollYProgress, [0, 1], [160, -160]);

    return (
        <section ref={sectionRef} id="about" className="relative py-24 z-10 overflow-hidden">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        style={{ y: yText }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            21 Años. <span className="text-violet-400">Mentalidad Senior.</span> Visión 360°.
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                A punto de graduarme en Informática en la UDO y como cofundador de Koodev.net, mi enfoque va más allá de entregar interfaces bonitas. Construyo ecosistemas.
                            </p>
                            <p>
                                Comprendo la fricción entre el código y el servidor. Mi filosofía es crear software que no solo luzca bien y funcione fluido para el usuario final, sino que sea eficiente, monitoreable y seguro a nivel de sistema operativo y red.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-3xl rounded-full" />

                        <div className="relative grid gap-4">
                            <motion.div style={{ y: yCards1 }}>
                                <GlassCard className="flex items-center gap-4 p-5 ml-8 hover:translate-x-2 transition-transform">
                                    <div className="p-3 bg-violet-500/10 rounded-xl">
                                        <LayoutTemplate className="w-6 h-6 text-violet-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Frontend Experiencies</h3>
                                        <p className="text-sm text-gray-400">Next.js & Tailwind</p>
                                    </div>
                                </GlassCard>
                            </motion.div>

                            <motion.div style={{ y: yCards2 }}>
                                <GlassCard className="flex items-center gap-4 p-5 mr-8 hover:-translate-x-2 transition-transform border-cyan-500/20">
                                    <div className="p-3 bg-cyan-500/10 rounded-xl">
                                        <Database className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Backend Architecture</h3>
                                        <p className="text-sm text-gray-400">NestJS & PostgreSQL</p>
                                    </div>
                                </GlassCard>
                            </motion.div>

                            <motion.div style={{ y: yCards3 }}>
                                <GlassCard className="flex items-center gap-4 p-5 ml-4 hover:translate-x-2 transition-transform border-emerald-500/20">
                                    <div className="p-3 bg-emerald-500/10 rounded-xl">
                                        <Network className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Physical Infrastructure</h3>
                                        <p className="text-sm text-gray-400">Networking & SysAdmin</p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </div>

                        {/* Connecting lines SVG mapping could go here for extra detail */}
                        <svg className="absolute top-1/2 left-8 -z-10 h-full w-full -translate-y-1/2 stroke-white/10" fill="none">
                            <path d="M 20 20 L 20 200" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
