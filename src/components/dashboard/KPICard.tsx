import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: number;
  color?: "cyan" | "magenta" | "purple" | "green" | "orange";
  delay?: number;
}

const colorVariants = {
  cyan: {
    icon: "text-neon-cyan",
    glow: "shadow-[0_0_20px_hsl(180_100%_50%/0.3)]",
    border: "border-neon-cyan/30",
    bg: "bg-neon-cyan/10",
  },
  magenta: {
    icon: "text-neon-magenta",
    glow: "shadow-[0_0_20px_hsl(320_100%_55%/0.3)]",
    border: "border-neon-magenta/30",
    bg: "bg-neon-magenta/10",
  },
  purple: {
    icon: "text-neon-purple",
    glow: "shadow-[0_0_20px_hsl(280_100%_60%/0.3)]",
    border: "border-neon-purple/30",
    bg: "bg-neon-purple/10",
  },
  green: {
    icon: "text-neon-green",
    glow: "shadow-[0_0_20px_hsl(150_100%_45%/0.3)]",
    border: "border-neon-green/30",
    bg: "bg-neon-green/10",
  },
  orange: {
    icon: "text-neon-orange",
    glow: "shadow-[0_0_20px_hsl(25_100%_55%/0.3)]",
    border: "border-neon-orange/30",
    bg: "bg-neon-orange/10",
  },
};

export function KPICard({ title, value, subtitle, icon: Icon, trend, color = "cyan", delay = 0 }: KPICardProps) {
  const variant = colorVariants[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={cn(
        "glass-card p-6 cursor-pointer transition-all duration-300",
        variant.glow,
        "hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
            className={cn("text-4xl font-display font-bold", variant.icon)}
          >
            {value}
          </motion.p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
          {trend !== undefined && (
            <div className={cn(
              "inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
              trend >= 0 ? "bg-neon-green/20 text-neon-green" : "bg-destructive/20 text-destructive"
            )}>
              <span>{trend >= 0 ? "↑" : "↓"}</span>
              <span>{Math.abs(trend)}%</span>
            </div>
          )}
        </div>
        <div className={cn(
          "p-3 rounded-xl",
          variant.bg,
          variant.border,
          "border"
        )}>
          <Icon className={cn("w-6 h-6", variant.icon)} />
        </div>
      </div>
      
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
        className={cn("h-1 mt-4 rounded-full origin-left", variant.bg)}
      />
    </motion.div>
  );
}
