"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Server, Activity, ShieldCheck, HardDrive, Network, Cpu, Users } from "lucide-react";

interface SysMetrics {
    status: string;
    uptime: string;
    memory: { percentage: number };
    cpu: { load: string };
    os: string;
}

interface AnalyticsStats {
    live: number;
    today: number;
    thisWeek: number;
    total: number;
}

export const TheFlexInfra = () => {
    const [metrics, setMetrics] = useState<SysMetrics | null>(null);
    const [ping, setPing] = useState<number | null>(null);
    const [analytics, setAnalytics] = useState<AnalyticsStats | null>(null);
    const sessionId = useRef<string | null>(null);

    useEffect(() => {
        if (!sessionId.current) {
            sessionId.current = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        }

        const fetchAnalytics = async () => {
            try {
                const res = await fetch("/api/analytics", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ sessionId: sessionId.current })
                });
                const data = await res.json();
                setAnalytics(data);
            } catch (error) {
                console.error("Failed fetching live analytics", error);
            }
        };

        // Simulando y realizando fetch real si existe
        const fetchMetrics = async () => {
            try {
                const startTime = performance.now();
                const res = await fetch("/api/system-status");
                const data = await res.json();
                const endTime = performance.now();
                setPing(Math.round(endTime - startTime));
                setMetrics(data);
            } catch (error) {
                console.error("Failed fetching live metrics", error);
            }
        };

        fetchMetrics();
        fetchAnalytics();

        // Refrescar cada 10 segundos para dar efecto "en vivo"
        const intervalId = setInterval(() => {
            fetchMetrics();
            fetchAnalytics();
        }, 10000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <section id="infra" className="relative py-24 z-10">
            <div className="mx-auto max-w-5xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 backdrop-blur-md mb-6 animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Servidor Físico Activo — Ping: {ping !== null ? `${ping}ms` : "Calculando..."}
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        El <span className="text-cyan-400">&apos;Flex&apos;</span> Definitivo:{" "}
                        <span className="text-gray-300">Estás navegando en mi propio hardware.</span>
                    </h2>
                    <TextGenerateEffect
                        words="La mayoría de los portafolios viven en Vercel o AWS pidiendo recursos prestados. Este no. Esta misma página web, junto con su backend, está siendo servida en este momento desde un servidor físico alojado en mi propia estructura, configurado y administrado al 100% por mí."
                        className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <GlassCard glow className="border-cyan-500/20 bg-black/60 p-8 md:p-12">

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b border-white/10 pb-6 gap-6">
                            <div className="flex items-center gap-4">
                                <Server className="text-cyan-400 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-white font-mono">personal-node-01</h3>
                                    <p className="text-sm text-gray-400 font-mono">
                                        Status: <span className="text-green-400">Online & Routing</span>
                                    </p>
                                </div>
                            </div>

                            {/* Analytics Display */}
                            <div className="flex flex-wrap gap-4 md:gap-6 bg-black/40 border border-white/5 rounded-xl p-3 px-5 items-center">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Live Viewers</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-mono text-rose-400 animate-pulse">{analytics?.live || "1"}</span>
                                        <Users className="h-4 w-4 text-rose-500" />
                                    </div>
                                </div>
                                <div className="flex flex-col border-l border-white/10 pl-4 md:pl-6">
                                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Today</span>
                                    <span className="text-sm font-mono text-cyan-400">{analytics?.today || "..."}</span>
                                </div>
                                <div className="flex flex-col border-l border-white/10 pl-4 md:pl-6">
                                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">This Week</span>
                                    <span className="text-sm font-mono text-violet-400">{analytics?.thisWeek || "..."}</span>
                                </div>
                            </div>

                            {/* Live Metrics Display */}
                            <div className="hidden md:flex flex-wrap gap-4 md:gap-6 bg-black/40 border border-white/5 rounded-xl p-3 px-5 items-center">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Uptime</span>
                                    <span className="text-sm font-mono text-cyan-400 animate-pulse">{metrics?.uptime || "99d"}</span>
                                </div>
                                <div className="flex flex-col border-l border-white/10 pl-4 md:pl-6">
                                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">CPU Load</span>
                                    <span className="text-sm font-mono text-violet-400">{metrics?.cpu.load || "10.0%"}</span>
                                </div>
                                <div className="flex flex-col border-l border-white/10 pl-4 md:pl-6">
                                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">RAM Usage</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-mono text-emerald-400">{metrics?.memory.percentage || "45"}%</span>
                                        <Activity className="h-4 w-4 text-emerald-500 animate-[pulse_2s_infinite]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Network className="text-cyan-400 h-5 w-5" />
                                    <h4 className="text-white font-semibold">Redes Estructuradas</h4>
                                </div>
                                <TextGenerateEffect
                                    words="Enrutamiento optimizado, firewall perimetral y túneles seguros para garantizar disponibilidad global desde mi red local."
                                    className="text-sm text-gray-400"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Cpu className="text-violet-400 h-5 w-5" />
                                    <h4 className="text-white font-semibold">SysAdmin / Linux</h4>
                                </div>
                                <TextGenerateEffect
                                    words="Virtualización profunda, orquestación con contenedores Docker y reverse proxy implementado con Nginx/Traefik."
                                    className="text-sm text-gray-400"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <HardDrive className="text-emerald-400 h-5 w-5" />
                                    <h4 className="text-white font-semibold">Hosting Propio</h4>
                                </div>
                                <TextGenerateEffect
                                    words="Gestión completa de recursos de hardware, planes de redundancia y monitoreo continuo. Total independencia en la nube."
                                    className="text-sm text-gray-400"
                                />
                            </div>

                        </div>

                        <div className="mt-10 pt-6 border-t border-white/10 text-center">
                            <p className="text-gray-500 font-mono text-sm">
                                <span className="text-cyan-500">~</span> $ echo &quot;Un buen desarrollador confía en la nube. <span className="text-violet-400">Un desarrollador híbrido sabe cómo construirla.</span>&quot;
                            </p>
                        </div>

                    </GlassCard>
                </motion.div>

            </div>
        </section>
    );
};
