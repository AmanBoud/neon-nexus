import { motion } from "framer-motion";

interface ConversionFunnelProps {
  data: { stage: string; count: number; percentage: number }[];
}

const gradients = [
  "from-neon-cyan to-neon-blue",
  "from-neon-blue to-neon-purple",
  "from-neon-purple to-neon-magenta",
  "from-neon-magenta to-neon-orange",
  "from-neon-orange to-neon-green",
];

export function ConversionFunnel({ data }: ConversionFunnelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-display font-semibold text-foreground mb-6">
        Conversion Funnel
      </h3>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={item.stage}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                {item.stage}
              </span>
              <span className="text-sm font-display text-muted-foreground">
                {item.count.toLocaleString()} ({item.percentage}%)
              </span>
            </div>
            
            <div className="relative h-8 bg-muted/30 rounded-lg overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradients[index]} rounded-lg`}
                style={{
                  boxShadow: `0 0 20px hsl(${180 + index * 30}, 100%, 50%, 0.3)`,
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.2,
                  ease: "linear",
                }}
                className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
