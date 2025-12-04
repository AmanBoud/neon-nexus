import { Users, UserCheck, GraduationCap, MessageSquare } from "lucide-react";
import { useDashboardData } from "@/hooks/useDashboardData";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KPICard } from "@/components/dashboard/KPICard";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { RoleDistribution } from "@/components/dashboard/RoleDistribution";
import { RecentLeads } from "@/components/dashboard/RecentLeads";
import { QueryBreakdown } from "@/components/dashboard/QueryBreakdown";
import { LoadingState } from "@/components/dashboard/LoadingState";

const Index = () => {
  const { metrics, isLoading, lastUpdated, refresh } = useDashboardData();

  if (isLoading && !metrics) {
    return <LoadingState />;
  }

  if (!metrics) {
    return null;
  }

  return (
    <div className="min-h-screen cyber-grid">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <DashboardHeader
          lastUpdated={lastUpdated}
          isLoading={isLoading}
          onRefresh={refresh}
        />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Leads"
            value={metrics.totalLeads}
            subtitle="All time inquiries"
            icon={Users}
            trend={12}
            color="cyan"
            delay={0.1}
          />
          <KPICard
            title="Parents"
            value={metrics.parentsCount}
            subtitle="Parent inquiries"
            icon={UserCheck}
            trend={8}
            color="magenta"
            delay={0.2}
          />
          <KPICard
            title="Students"
            value={metrics.studentsCount}
            subtitle="Student inquiries"
            icon={GraduationCap}
            trend={-3}
            color="purple"
            delay={0.3}
          />
          <KPICard
            title="Admissions"
            value={metrics.admissionInquiries}
            subtitle="Admission requests"
            icon={MessageSquare}
            trend={15}
            color="green"
            delay={0.4}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TrendChart data={metrics.dailyTrends} title="Daily Lead Trends" />
          <ConversionFunnel data={metrics.conversionFunnel} />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RoleDistribution data={metrics.leadsByRole} />
          <QueryBreakdown data={metrics.leadsByQuery} />
          <RecentLeads leads={metrics.recentLeads} />
        </div>
      </div>
    </div>
  );
};

export default Index;
