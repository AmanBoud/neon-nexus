import { motion } from "framer-motion";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";

interface QueryBreakdownProps {
  data: { query: string; count: number }[];
}

const COLORS = [
  "hsl(180, 100%, 50%)",
  "hsl(200, 100%, 55%)",
  "hsl(280, 100%, 60%)",
  "hsl(320, 100%, 55%)",
  "hsl(150, 100%, 45%)",
];

export function QueryBreakdown({ data }: QueryBreakdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-display font-semibold text-foreground mb-4">
        Inquiry Types
      </h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 20%, 60%)", fontSize: 12 }}
            />
            <YAxis
              type="category"
              dataKey="query"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 20%, 60%)", fontSize: 11 }}
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(220, 25%, 10%)",
                border: "1px solid hsl(180, 100%, 50%, 0.3)",
                borderRadius: "8px",
                boxShadow: "0 0 20px hsl(180, 100%, 50%, 0.2)",
              }}
              labelStyle={{ color: "hsl(180, 100%, 95%)" }}
              cursor={{ fill: "hsl(180, 100%, 50%, 0.1)" }}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  style={{
                    filter: `drop-shadow(0 0 8px ${COLORS[index % COLORS.length]})`,
                  }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
