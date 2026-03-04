"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    // Se gatilla cuando el elemento entra en pantalla
    const isInView = useInView(scope, { once: true, margin: "-10%" });
    const wordsArray = words.split(" ");

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    opacity: 1,
                    filter: "blur(0px)",
                },
                {
                    duration: 0.2, // Rápido para que se vea fluído
                    delay: stagger(0.015), // Letra a letra (o palabra a palabra) rápido
                }
            );
        }
    }, [isInView, animate]);

    return (
        <div className={className}>
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <span key={word + idx}>
                            <motion.span
                                className="opacity-0 inline-block"
                                style={{ filter: "blur(4px)" }}
                            >
                                {word}
                            </motion.span>
                            {" "}
                        </span>
                    );
                })}
            </motion.div>
        </div>
    );
};
