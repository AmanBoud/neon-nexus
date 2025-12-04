import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";
import { LeadData } from "@/services/googleSheets";

interface RecentLeadsProps {
  leads: LeadData[];
}

const roleColors: Record<string, string> = {
  parent: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30",
  student: "bg-neon-magenta/20 text-neon-magenta border-neon-magenta/30",
  alumni: "bg-neon-purple/20 text-neon-purple border-neon-purple/30",
  corporate: "bg-neon-orange/20 text-neon-orange border-neon-orange/30",
  default: "bg-neon-green/20 text-neon-green border-neon-green/30",
};

export function RecentLeads({ leads }: RecentLeadsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-semibold text-foreground">
          Recent Leads
        </h3>
        <span className="text-sm text-muted-foreground">
          Last {leads.length} entries
        </span>
      </div>
      
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {leads.map((lead, index) => {
          const colorClass = roleColors[lead.role.toLowerCase()] || roleColors.default;
          
          return (
            <motion.div
              key={`${lead.email}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.05 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="p-4 rounded-lg bg-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-shadow">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {lead.name}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{lead.email}</span>
                    </div>
                    {lead.phone && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                        <Phone className="w-3 h-3" />
                        <span>{lead.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full border ${colorClass}`}>
                    {lead.role}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {lead.query}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
