"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 z-50 flex w-full items-center justify-center p-4 transition-all duration-300",
                scrolled ? "py-2" : "py-6"
            )}
        >
            <div
                className={cn(
                    "flex w-full max-w-5xl items-center justify-between rounded-2xl border px-6 py-3 transition-all duration-300",
                    scrolled
                        ? "border-white/10 bg-black/50 shadow-lg backdrop-blur-md"
                        : "border-transparent bg-transparent"
                )}
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <TerminalSquare className="text-violet-500 transition-transform group-hover:scale-110" />
                    <span className="font-bold tracking-tight text-white">
                        Fabián.<span className="text-violet-500">dev</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {[
                        { name: "About", href: "#about" },
                        { name: "Infra", href: "#infra" },
                        { name: "Stack", href: "#stack" },
                        { name: "Experience", href: "#experience" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <a
                    href="https://wa.me/message/5N2POE63FWZGA1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 md:block"
                >
                    Contactame
                </a>
            </div>
        </motion.header>
    );
};
