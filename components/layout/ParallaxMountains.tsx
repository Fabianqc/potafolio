"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const ParallaxMountains = () => {
    const { scrollYProgress } = useScroll();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Transformaciones para diferentes capas (velocidades distintas = efecto parallax)
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const yLayer1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const yLayer2 = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
    const yLayer3 = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 h-[100vh] w-full -z-20 overflow-hidden bg-[#0a0a0a] pointer-events-none">
            {/* Cielos y estrellas abstractas (Fondo base) */}
            <motion.div style={{ y: yBg }} className="absolute inset-0 top-0 h-[150vh] w-full">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-[#0a0a0a] to-[#0a0a0a]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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
                className="absolute bottom-[-20vh] w-full h-[60vh] md:h-[70vh] opacity-90"
            >
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-[#0a0a0a] drop-shadow-[0_-5px_25px_rgba(6,182,212,0.15)]">
                    <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </motion.div>
        </div>
    );
};
