import { motion } from "framer-motion";
import { GraduationCap, RefreshCw, BookOpen } from "lucide-react";
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
      <div className="glass-card rounded-2xl p-6 corner-decoration">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
            >
              <GraduationCap className="w-8 h-8 text-secondary" />
            </motion.div>
            
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                <span className="text-secondary text-glow-gold">Jnanaamrutha</span>
              </h1>
              <p className="text-muted-foreground mt-1 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                Admissions Analytics Dashboard
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-muted-foreground">Last Updated</p>
              <p className="text-sm font-medium text-foreground">
                {lastUpdated.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}
              </p>
            </div>
            
            <Button
              onClick={onRefresh}
              disabled={isLoading}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground border border-secondary/20"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"
      />
    </motion.header>
  );
}
