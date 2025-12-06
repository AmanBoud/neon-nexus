import { motion } from "framer-motion";

export function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center cyber-grid">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          className="w-24 h-24 mx-auto mb-6 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary" 
               style={{ boxShadow: "0 0 30px hsl(180 100% 50% / 0.3)" }} />
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-accent border-l-neon-green"
               style={{ animation: "spin 1.5s linear infinite reverse" }} />
          <div className="absolute inset-4 rounded-full bg-background" />
        </motion.div>
        
        <motion.p
          className="text-xl font-display text-primary neon-glow"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          INITIALIZING SYSTEMS...
        </motion.p>
        <p className="text-sm text-muted-foreground mt-2">
          Fetching real-time data from Google Sheets
        </p>
      </motion.div>
    </div>
  );
}
