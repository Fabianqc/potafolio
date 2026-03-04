"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal, Database, Code2, Server, Globe, Cpu } from "lucide-react";

export const ParallaxMountains = () => {
    const { scrollYProgress } = useScroll();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // En Next.js 15+, usar requestAnimationFrame previene el warning de setState sincrónico
        const mountId = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(mountId);
    }, []);

    // Transformaciones para diferentes capas (velocidades distintas = efecto parallax)
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const yLayer1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const yLayer2 = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
    const yLayer3 = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    // Transformaciones para los elementos flotantes tech
    const yTechBack = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]); // Se mueven mucho
    const yTechMid = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);   // Se mueven hacia abajo al scrollear
    const yTechFront = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]); // Muy rápido hacia arriba

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 h-[100vh] w-full -z-20 overflow-hidden bg-[#0a0a0a] pointer-events-none">
            {/* Cielos y estrellas abstractas (Fondo base) */}
            <motion.div style={{ y: yBg }} className="absolute inset-x-0 -top-[50vh] h-[250vh] w-full">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-[#0a0a0a] to-[#0a0a0a]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_20%,#000_70%,transparent_100%)]"></div>
            </motion.div>

            {/* Capa de símbolos Tech (Fondo Lejano) */}
            <motion.div style={{ y: yTechBack }} className="absolute inset-0 top-10 w-full h-[200vh]">
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[15%] text-white/5 text-4xl font-mono opacity-50 font-bold select-none">{`{ }`}</motion.div>
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] right-[20%] text-white/5 text-5xl font-mono opacity-30 select-none">{`</>`}</motion.div>
                <motion.div animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[80%] left-[8%] text-white/5 text-4xl font-mono opacity-40 select-none">{`[ ]`}</motion.div>
                <motion.div animate={{ y: [0, 20, 0], rotate: [12, 15, 12] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[25%] right-[10%]">
                    <Cpu className="w-16 h-16 text-cyan-500/5" />
                </motion.div>
                <motion.div animate={{ y: [0, -15, 0], rotate: [-12, -8, -12] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] left-[25%]">
                    <Server className="w-24 h-24 text-violet-500/5" />
                </motion.div>
            </motion.div>

            {/* Capa de símbolos Tech (Medio) */}
            <motion.div style={{ y: yTechMid }} className="absolute inset-0 top-0 w-full h-[200vh]">
                <motion.div animate={{ y: [0, 10, 0], rotate: [45, 50, 45] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[30%] left-[5%]">
                    <Database className="w-12 h-12 text-emerald-500/10" />
                </motion.div>
                <motion.div animate={{ y: [0, -12, 0], rotate: [-6, -2, -6] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[70%] right-[15%]">
                    <Terminal className="w-20 h-20 text-rose-500/10" />
                </motion.div>
                <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] right-[30%] text-white/10 text-2xl font-mono select-none">sudo su</motion.div>
                <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute top-[85%] right-[5%] text-white/10 text-xl font-mono select-none">npm run build</motion.div>
            </motion.div>

            {/* Capa de símbolos Tech (Al Frente) */}
            <motion.div style={{ y: yTechFront }} className="absolute inset-0 top-32 w-full h-[200vh]">
                <motion.div animate={{ y: [0, -20, 0], rotate: [-12, -20, -12] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[50%] left-[10%]">
                    <Code2 className="w-10 h-10 text-pink-500/20" />
                </motion.div>
                <motion.div animate={{ y: [0, 15, 0], rotate: [12, 5, 12] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[85%] right-[25%]">
                    <Globe className="w-14 h-14 text-blue-500/10" />
                </motion.div>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[5%] left-[40%] text-white/10 text-2xl font-mono select-none blur-[1px]">010101</motion.div>
                <motion.div animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] right-[40%] text-cyan-400/5 text-xl font-mono select-none">SELECT * FROM</motion.div>
            </motion.div>

            {/* Montañas de fondo (Lejanas, se mueven poco) */}
            <motion.div
                style={{ y: yLayer1 }}
                className="absolute bottom-[-10vh] w-full h-[40vh] md:h-[60vh] opacity-30"
            >
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-violet-950">
                    <path d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,80C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Montañas del medio */}
            <motion.div
                style={{ y: yLayer2 }}
                className="absolute bottom-[-15vh] w-full h-[50vh] md:h-[65vh] opacity-50"
            >
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-indigo-950">
                    <path d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,186.7C840,171,960,117,1080,106.7C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Montañas del frente (Cercanas, se mueven más rápido y son más oscuras) */}
            <motion.div
                style={{ y: yLayer3 }}
                className="absolute bottom-[-60vh] w-full h-[100vh] md:h-[110vh] opacity-90"
            >
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-[#0a0a0a] drop-shadow-[0_-5px_25px_rgba(6,182,212,0.15)]">
                    <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </motion.div>
        </div>
    );
};
