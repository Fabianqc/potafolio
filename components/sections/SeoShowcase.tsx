"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Gauge } from "lucide-react";

// Componente para un solo anillo animado de Lighthouse
const ScoreRing = ({ title, score, delay = 0 }: { title: string, score: number, delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentScore, setCurrentScore] = useState(0);

    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    // Animación de conteo rápido para los números
    useEffect(() => {
        if (!isInView) return;

        let startTimestamp: number;
        const duration = 1500; // 1.5 segundos
        const startValue = 0;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Función de easing tipo easeOut
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCurrentScore(Math.floor(easeProgress * (score - startValue) + startValue));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        // Retrasamos el inicio del conteo numérico según el delay
        const timer = setTimeout(() => {
            window.requestAnimationFrame(step);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [isInView, score, delay]);

    return (
        <div className="flex flex-col items-center gap-4 group" ref={ref}>
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Glow de fondo reacciona al hover de la tarjeta */}
                <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/20 blur-xl transition-colors duration-500" />

                {/* SVG del anillo */}
                {/* Ampliamos el viewBox y ajustamos cx, cy para que el drop-shadow tenga espacio para no cortarse */}
                <svg className="w-full h-full -rotate-90 relative z-10 overflow-visible" viewBox="-10 -10 120 120">
                    {/* Track del fondo (círculo estático) */}
                    <circle
                        cx="50" cy="50" r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-white/5"
                    />

                    {/* Ring animado principal de color Verde/Emerald */}
                    <motion.circle
                        cx="50" cy="50" r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="text-[#0cce6b] drop-shadow-[0_0_6px_rgba(12,206,107,0.8)]"
                        initial={{ strokeDashoffset: circumference }}
                        animate={isInView ? { strokeDashoffset: circumference - (score / 100) * circumference } : {}}
                        transition={{ duration: 1.5, delay, ease: "easeOut" }}
                        style={{
                            strokeDasharray: circumference,
                        }}
                    />
                </svg>

                {/* Puntaje en el centro */}
                <div className="absolute inset-0 flex items-center justify-center font-mono">
                    <span className="text-3xl font-bold text-white tracking-widest">{currentScore}</span>
                </div>
            </div>

            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                {title}
            </span>
        </div>
    );
};

export const SeoShowcase = () => {
    return (
        <section id="performance" className="relative py-24 z-10 overflow-hidden bg-black/30">
            {/* Gradiente divisorio */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="mx-auto max-w-5xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-md mb-6">
                        <Gauge className="w-4 h-4" /> Excellence In Performance
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Desarrollo <span className="text-[#0cce6b]">Sin Concesiones.</span>
                    </h2>

                    <TextGenerateEffect
                        words="Una página rápida retiene usuarios. Un código excelente encanta a Google. Entregamos arquitecturas de software completamente preparadas para obtener auditorías perfectas de Lighthouse y dominar las métricas de SEO técnico mundial."
                        className="text-lg text-gray-400 max-w-3xl mx-auto"
                    />
                </motion.div>

                {/* Tarjeta Glassmorphic alojando los Rings */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 }}
                >
                    <GlassCard glow className="border-emerald-500/20 p-10 md:p-16 relative overflow-visible">

                        {/* Pequeño tag de Lighthouse Mock */}
                        <div className="absolute -top-10 left-8 text-xs font-mono font-bold bg-black text-[#0cce6b] border border-emerald-500/30 py-1 px-3 rounded-md">
                            Lighthouse Chrome Audit
                        </div>

                        {/* Grid conteniendo los aros (responsivo). Añadido mt-8 para separar del tag y no pisarlo */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-center items-center mt-8">
                            <ScoreRing title="Performance" score={100} delay={0.1} />
                            <ScoreRing title="Accessibility" score={100} delay={0.3} />
                            <ScoreRing title="Best Practices" score={100} delay={0.5} />
                            <ScoreRing title="SEO" score={100} delay={0.7} />
                        </div>
                    </GlassCard>
                </motion.div>

            </div>
        </section>
    );
};
