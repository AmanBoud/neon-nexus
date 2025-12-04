import { motion } from "framer-motion";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface RoleDistributionProps {
  data: { role: string; count: number; percentage: number }[];
}

const COLORS = [
  "hsl(180, 100%, 50%)",  // cyan
  "hsl(320, 100%, 55%)",  // magenta
  "hsl(280, 100%, 60%)",  // purple
  "hsl(150, 100%, 45%)",  // green
  "hsl(25, 100%, 55%)",   // orange
];

export function RoleDistribution({ data }: RoleDistributionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-display font-semibold text-foreground mb-4">
        Leads by Role
      </h3>
      
      <div className="flex items-center gap-6">
        <div className="w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={4}
                dataKey="count"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    style={{
                      filter: `drop-shadow(0 0 8px ${COLORS[index % COLORS.length]})`,
                    }}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 25%, 10%)",
                  border: "1px solid hsl(180, 100%, 50%, 0.3)",
                  borderRadius: "8px",
                  boxShadow: "0 0 20px hsl(180, 100%, 50%, 0.2)",
                }}
                labelStyle={{ color: "hsl(180, 100%, 95%)" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex-1 space-y-3">
          {data.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index % COLORS.length],
                  boxShadow: `0 0 10px ${COLORS[index % COLORS.length]}`,
                }}
              />
              <span className="text-sm text-muted-foreground flex-1">
                {item.role}
              </span>
              <span className="text-sm font-display font-semibold text-foreground">
                {item.percentage}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
