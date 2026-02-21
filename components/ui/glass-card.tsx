import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    glow?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, glow = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-lg transition-all",
                    glow && "hover:border-violet-500/30 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
                <div className="relative z-10">{children}</div>
            </div>
        );
    }
);
GlassCard.displayName = "GlassCard";
