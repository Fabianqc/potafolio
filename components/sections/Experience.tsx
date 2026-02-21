"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

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

                    {/* Item 1 - Universidad */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-cyan-500/20">
                            <GraduationCap className="w-5 h-5 text-cyan-400" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-odd:pr-8 md:group-even:pl-8">
                            <div className="flex flex-col mb-2">
                                <span className="text-sm font-medium text-cyan-400">En curso (Últimos Semestres)</span>
                                <h3 className="text-xl font-bold text-white">Licenciatura en Informática</h3>
                                <span className="text-gray-400 font-medium tracking-tight">Universidad de Oriente (UDO)</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Consolidación de bases sólidas en algoritmia, estructuras de datos y arquitectura de computadores.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2 - Alma de Nómada */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-emerald-500/20">
                            <Briefcase className="w-5 h-5 text-emerald-400" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-odd:pr-8 md:group-even:pl-8">
                            <div className="flex flex-col mb-2">
                                <span className="text-sm font-medium text-emerald-400">Desarrollo Web</span>
                                <h3 className="text-xl font-bold text-white">Desarrollador Full-Stack</h3>
                                <a href="https://almadenomada.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium tracking-tight hover:text-white transition-colors">
                                    Alma de Nómada ↗
                                </a>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Desarrollo end-to-end de la plataforma, implementando el frontend, backend e integración de servicios.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2.5 - Shortlinks */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-pink-500 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-pink-500/20">
                            <Briefcase className="w-5 h-5 text-pink-400" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-odd:pr-8 md:group-even:pl-8">
                            <div className="flex flex-col mb-2">
                                <span className="text-sm font-medium text-pink-400">Proyecto Personal</span>
                                <h3 className="text-xl font-bold text-white">Desarrollador Full-Stack</h3>
                                <span className="text-gray-400 font-medium tracking-tight">Shortlinks</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Un acortador de links severamente rápido y diferente al resto, sin anuncios y hecho por y para desarrolladores.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 3 - Koodev */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-violet-500 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-violet-500/20">
                            <Briefcase className="w-5 h-5 text-violet-400" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-odd:pr-8 md:group-even:pl-8">
                            <div className="flex flex-col mb-2">
                                <span className="text-sm font-medium text-violet-400">2023 - Presente</span>
                                <h3 className="text-xl font-bold text-white">Co-founder & Full-Stack Developer</h3>
                                <span className="text-gray-400 font-medium tracking-tight">Koodev.net</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Liderando el desarrollo técnico y arquitectónico. Transformando requerimientos de negocio en soluciones digitales completas, infraestructura y despliegue final.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 4 - Fundación Guerreros de Amor */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-rose-500 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-rose-500/20">
                            <Briefcase className="w-5 h-5 text-rose-400" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-odd:pr-8 md:group-even:pl-8">
                            <div className="flex flex-col mb-2">
                                <span className="text-sm font-medium text-rose-400">Atención Clínica</span>
                                <h3 className="text-xl font-bold text-white">Desarrollador Full-Stack & Hosting</h3>
                                <span className="text-gray-400 font-medium tracking-tight">Fundación de Salud</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Desarrollo integral de sistema web y provisión de infraestructura/hosting para la gestión operativa y de atenciones.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 5 - Tanoa Properties */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-blue-500/20">
                            <Briefcase className="w-5 h-5 text-blue-400" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-odd:pr-8 md:group-even:pl-8">
                            <div className="flex flex-col mb-2">
                                <span className="text-sm font-medium text-blue-400">Software Inmobiliario</span>
                                <h3 className="text-xl font-bold text-white">Desarrollador Full-Stack</h3>
                                <span className="text-gray-400 font-medium tracking-tight">Tanoa Properties</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Desarrollo del sistema web completo para agentes inmobiliarios, implementando una plataforma reconocida y robusta para la gestión de propiedades.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 5 - Tesis FVB */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-amber-500 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-amber-500/20">
                            <GraduationCap className="w-5 h-5 text-amber-400" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:group-odd:pr-8 md:group-even:pl-8">
                            <div className="flex flex-col mb-2">
                                <span className="text-sm font-medium text-amber-400">Proyecto de Tesis</span>
                                <h3 className="text-xl font-bold text-white">Desarrollador Principal</h3>
                                <span className="text-gray-400 font-medium tracking-tight">Federación Venezolana de Boxeo</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Sistema integral a nivel nacional para la organización de torneos de boxeo, aplicando la lógica compleja y reglas del boxeo a una arquitectura de software moderna.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
