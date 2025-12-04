import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface TrendChartProps {
  data: { date: string; count: number }[];
  title: string;
}

export function TrendChart({ data, title }: TrendChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-display font-semibold text-foreground mb-4">
        {title}
      </h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(180, 100%, 50%)" stopOpacity={0.4} />
                <stop offset="50%" stopColor="hsl(280, 100%, 60%)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(320, 100%, 55%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(180, 100%, 50%)" />
                <stop offset="50%" stopColor="hsl(280, 100%, 60%)" />
                <stop offset="100%" stopColor="hsl(320, 100%, 55%)" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 20%, 60%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 20%, 60%)", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(220, 25%, 10%)",
                border: "1px solid hsl(180, 100%, 50%, 0.3)",
                borderRadius: "8px",
                boxShadow: "0 0 20px hsl(180, 100%, 50%, 0.2)",
              }}
              labelStyle={{ color: "hsl(180, 100%, 95%)" }}
              itemStyle={{ color: "hsl(180, 100%, 50%)" }}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke="url(#strokeGradient)"
              strokeWidth={3}
              fill="url(#colorCount)"
              dot={{
                fill: "hsl(180, 100%, 50%)",
                strokeWidth: 2,
                stroke: "hsl(220, 25%, 10%)",
                r: 4,
              }}
              activeDot={{
                fill: "hsl(180, 100%, 50%)",
                strokeWidth: 3,
                stroke: "hsl(220, 25%, 10%)",
                r: 6,
                style: {
                  filter: "drop-shadow(0 0 8px hsl(180, 100%, 50%))",
                },
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
