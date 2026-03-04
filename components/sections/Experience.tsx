"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const experiences = [
    {
        id: 1,
        title: "Licenciatura en Informática",
        company: "Universidad de Oriente (UDO)",
        period: "En curso (Últimos Semestres)",
        description: "Periodo activo de fortalecimiento académico con enfoque en algoritmos avanzados, estructuras de datos, patrones de arquitectura de software y metodologías ágiles. Preparación para ingeniería de software a escala.",
        icon: GraduationCap,
        color: "cyan",
        stack: ["Algoritmia", "C", "Arquitectura", "Bases de Datos"]
    },
    {
        id: 2,
        title: "Desarrollador Full-Stack",
        company: "Alma de Nómada",
        link: "https://almadenomada.com/",
        period: "Desarrollo Web",
        description: "Desarrollo end-to-end de una plataforma e-commerce de alto rendimiento. Implementación de una arquitectura frontend robusta para SEO optimizado (SSR) y un backend escalable para gestión de inventarios y logística.",
        icon: Briefcase,
        color: "emerald",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
        id: 3,
        title: "Creador & Desarrollador Principal",
        company: "Shortlinks",
        period: "Proyecto Personal",
        description: "Ingeniería de un servicio acortador de URLs ultra-rápido diseñado para desarrolladores. Arquitectura optimizada para baja latencia (Edge computing) y manejo concurrente de redirecciones a nivel global sin rastreo publicitario.",
        icon: Code2,
        color: "pink",
        stack: ["Next.js Edge", "PostgreSQL", "Redis", "Framer Motion"]
    },
    {
        id: 4,
        title: "Co-founder & Full-Stack Developer",
        company: "Koodev.net",
        period: "2023 - Presente",
        description: "Liderazgo técnico en la creación de una agencia de software. Diseño de arquitecturas Cloud/On-Premise, orquestación de despliegues CI/CD y desarrollo de microservicios para clientes internacionales de alto perfil.",
        icon: Briefcase,
        color: "violet",
        stack: ["NestJS", "React", "Docker", "Linux SysAdmin"]
    },
    {
        id: 5,
        title: "Arquitecto Backend & Hosting",
        company: "Fundación de Salud Guerreros de Amor",
        period: "Atención Clínica",
        description: "Desarrollo y mantenimiento de un sistema integral Healthcare (HIS). Implementación de infraestructura on-premise bajo normativas de privacidad, asegurando 99.9% de uptime para operaciones vitales diarias.",
        icon: Briefcase,
        color: "rose",
        stack: ["NestJS", "PostgreSQL", "Nginx", "Self-Hosted"]
    },
    {
        id: 6,
        title: "Desarrollador Full-Stack",
        company: "Tanoa Properties",
        period: "Software Inmobiliario",
        description: "Ingeniería del ecosistema principal para agentes inmobiliarios. Compleja manipulación de datos geolocalizados, integración con APIs externas de bienes raíces y optimización de galerías multimedia a gran escala.",
        icon: Briefcase,
        color: "blue",
        stack: ["Next.js", "AWS S3", "Prisma", "TypeScript"]
    },
    {
        id: 7,
        title: "Desarrollador Principal (Tesis)",
        company: "Federación Venezolana de Boxeo",
        period: "Proyecto de Tesis",
        description: "Sistematización lógica y paramétrica a nivel nacional para la gestión oficial de torneos de boxeo. Traducción de reglamentos deportivos extremadamente complejos (AIB) a un motor de reglas backend escalable y reactivo.",
        icon: GraduationCap,
        color: "amber",
        stack: ["Node.js", "React", "PostgreSQL", "WebSockets"]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="relative py-24 z-10 bg-black/40">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mx-auto max-w-3xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Trayectoria y <span className="text-cyan-400">Emprendimiento</span>
                    </h2>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

                    {experiences.map((exp, index) => {
                        const Icon = exp.icon;
                        const isEven = index % 2 === 0;

                        // Map colors to distinct Tailwind classes since string interpolation of arbitrary colors might break JIT
                        const colorStyles = {
                            cyan: "border-cyan-500 text-cyan-400 group-hover:bg-cyan-500/20 bg-cyan-400/10 border-cyan-500/20",
                            emerald: "border-emerald-500 text-emerald-400 group-hover:bg-emerald-500/20 bg-emerald-400/10 border-emerald-500/20",
                            pink: "border-pink-500 text-pink-400 group-hover:bg-pink-500/20 bg-pink-400/10 border-pink-500/20",
                            violet: "border-violet-500 text-violet-400 group-hover:bg-violet-500/20 bg-violet-400/10 border-violet-500/20",
                            rose: "border-rose-500 text-rose-400 group-hover:bg-rose-500/20 bg-rose-400/10 border-rose-500/20",
                            blue: "border-blue-500 text-blue-400 group-hover:bg-blue-500/20 bg-blue-400/10 border-blue-500/20",
                            amber: "border-amber-500 text-amber-400 group-hover:bg-amber-500/20 bg-amber-400/10 border-amber-500/20",
                        }[exp.color] || "border-gray-500 text-gray-400 group-hover:bg-gray-500/20 bg-gray-400/10 border-gray-500/20";

                        const borderColor = colorStyles.split(' ')[0];
                        const textColor = colorStyles.split(' ')[1];
                        const hoverBg = colorStyles.split(' ')[2];
                        const badgeBg = colorStyles.split(' ')[3];
                        const badgeBorder = colorStyles.split(' ')[4];

                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                                className="relative flex flex-col md:flex-row items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active w-full"
                            >
                                {/* Timeline Node */}
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${borderColor} bg-black shadow-[0_0_15px_-3px_currentColor] ${textColor} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500 ${hoverBg} group-hover:scale-110`}>
                                    <Icon className="w-5 h-5" />
                                </div>

                                {/* Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] md:group-odd:pr-8 md:group-even:pl-8 mt-4 md:mt-0">
                                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors backdrop-blur-sm relative overflow-hidden group-hover:bg-white/[0.04]">

                                        {/* Subtle gradient background matches item color */}
                                        <div className={`absolute -inset-2 opacity-0 group-hover:opacity-10 transition-opacity blur-xl bg-current ${textColor}`} />

                                        <div className="relative z-10">
                                            <div className="flex flex-col mb-3">
                                                <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${textColor}`}>{exp.period}</span>
                                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{exp.title}</h3>
                                                {exp.link ? (
                                                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium text-sm flex items-center gap-1 hover:text-white transition-colors w-max">
                                                        {exp.company} ↗
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-400 font-medium text-sm">{exp.company}</span>
                                                )}
                                            </div>
                                            <TextGenerateEffect
                                                words={exp.description}
                                                className="text-gray-400 text-sm leading-relaxed mb-5"
                                            />

                                            {/* Tech Stack Matrix */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.stack.map((tech) => (
                                                    <span key={tech} className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${badgeBg} ${badgeBorder} ${textColor} transition-colors`}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};
