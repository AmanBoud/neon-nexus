import { motion } from "framer-motion";
import { Activity, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  lastUpdated: Date;
  isLoading: boolean;
  onRefresh: () => void;
}

export function DashboardHeader({ lastUpdated, isLoading, onRefresh }: DashboardHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-magenta p-[2px]">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                <Activity className="w-7 h-7 text-primary" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-magenta opacity-30 blur-lg" />
          </motion.div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              <span className="text-glow-cyan">Analytics</span>{" "}
              <span className="text-glow-magenta">Command</span>{" "}
              <span className="text-glow-purple">Center</span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Real-time business intelligence dashboard
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Last Updated
            </p>
            <p className="text-sm font-display text-foreground">
              {lastUpdated.toLocaleTimeString()}
            </p>
          </div>
          
          <Button
            variant="cyber"
            size="icon"
            onClick={onRefresh}
            disabled={isLoading}
            className="relative"
          >
            <RefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading && (
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{ boxShadow: ["0 0 10px hsl(180 100% 50% / 0.5)", "0 0 20px hsl(180 100% 50% / 0.8)", "0 0 10px hsl(180 100% 50% / 0.5)"] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </Button>
        </div>
      </div>
      
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
    </motion.header>
  );
}
