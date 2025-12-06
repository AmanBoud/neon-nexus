import { motion } from "framer-motion";
import { Activity, RefreshCw, Zap } from "lucide-react";
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
      <div className="glass-card rounded-2xl p-6 border-glow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center animate-pulse-glow"
            >
              <Activity className="w-8 h-8 text-background" />
            </motion.div>
            
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold">
                <span className="text-primary neon-glow">JNANAAMRUTHA</span>
              </h1>
              <p className="text-muted-foreground mt-1 flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                Real-Time Analytics Dashboard
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-muted-foreground">Last Updated</p>
              <p className="text-sm font-medium text-primary">
                {lastUpdated.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </p>
            </div>
            
            <Button
              onClick={onRefresh}
              disabled={isLoading}
              variant="cyber"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh Data
            </Button>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </motion.header>
  );
}
