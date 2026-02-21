import { TerminalSquare, Mail, Linkedin, Instagram, MessageCircle, Github } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="relative mt-20 border-t border-white/10 bg-black/50 pb-10 pt-20 backdrop-blur-md">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

            <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 px-6 text-center">
                <div className="flex flex-col items-center gap-4">
                    <TerminalSquare className="h-10 w-10 text-violet-500" />
                    <h2 className="text-3xl font-bold md:text-5xl">
                        ¿Construimos algo que <span className="text-gradient">escale de verdad?</span>
                    </h2>
                    <p className="max-w-2xl text-gray-400">
                        Ya sea que necesites una arquitectura robusta desde cero, o llevar tu infraestructura
                        al siguiente nivel. Hablemos de código, de servidores, o de ambos.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                    <a
                        href="mailto:fabian.quijada@koodev.net"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-violet-500/50"
                    >
                        <Mail className="h-4 w-4 text-violet-400" />
                        Koodev
                    </a>
                    <a
                        href="mailto:fabian05demayo@gmail.com"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-cyan-500/50"
                    >
                        <Mail className="h-4 w-4 text-cyan-400" />
                        Personal
                    </a>
                    <a
                        href="https://wa.me/message/5N2POE63FWZGA1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all hover:bg-white/10 hover:text-green-400"
                    >
                        <MessageCircle className="h-5 w-5" />
                        <span className="sr-only">WhatsApp</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fabian-quijada-267721247/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all hover:bg-white/10 hover:text-blue-400"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="https://www.instagram.com/fabianq05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all hover:bg-white/10 hover:text-pink-400"
                    >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a
                        href="https://github.com/Fabianqc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all hover:bg-white/10 hover:text-gray-300"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                </div>

                <p className="mt-12 text-sm text-gray-400">
                    © {new Date().getFullYear()} Fabián Quijada. Diseñado y construido con Next.js, Framer Motion y Tailwind.
                </p>
            </div>
        </footer>
    );
};
