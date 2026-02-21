"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Layout, Database, ServerCog, Blocks } from "lucide-react";

const stackCategories = [
    {
        title: "Frontend",
        icon: <Layout className="w-5 h-5 text-violet-400" />,
        color: "group-hover:text-violet-400 group-hover:border-violet-500/50",
        techs: ["Next.js (App Router)", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript", "Zustand"]
    },
    {
        title: "Backend",
        icon: <Database className="w-5 h-5 text-emerald-400" />,
        color: "group-hover:text-emerald-400 group-hover:border-emerald-500/50",
        techs: ["NestJS", "Node.js", "Express", "PostgreSQL", "TypeORM / Prisma", "REST / GraphQL"]
    },
    {
        title: "DevOps & Infra",
        icon: <ServerCog className="w-5 h-5 text-cyan-400" />,
        color: "group-hover:text-cyan-400 group-hover:border-cyan-500/50",
        techs: ["Docker", "Linux (Debian/Ubuntu)", "Nginx / Traefik", "Git & CI/CD", "Redes LAN/WAN", "Bash Scripting"]
    },
    {
        title: "Herramientas Adicionales",
        icon: <Blocks className="w-5 h-5 text-amber-400" />,
        color: "group-hover:text-amber-400 group-hover:border-amber-500/50",
        techs: ["Figma (UI/UX)", "Postman / Insomnia", "Vercel / AWS", "Proxmox VE", "Cloudflare", "WebSockets"]
    }
];

export const TechStack = () => {
    return (
        <section id="stack" className="relative py-24 z-10 bg-black/20">
            <div className="mx-auto max-w-5xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Arsenal <span className="text-violet-400">Tecnológico</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        Herramientas modernas seleccionadas estratégicamente para rendimiento, escalabilidad y seguridad.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stackCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full group hover:bg-white/[0.07]">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-2 rounded-lg bg-white/5 border border-white/10 transition-colors ${category.color}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/5 rounded-md transition-colors group-hover:bg-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
