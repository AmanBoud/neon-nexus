import { useState, useEffect, useCallback } from "react";
import { fetchSheetData, calculateMetrics, DashboardMetrics, LeadData } from "@/services/googleSheets";

export function useDashboardData() {
  const [data, setData] = useState<LeadData[]>([]);
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const sheetData = await fetchSheetData();
      setData(sheetData);
      setMetrics(calculateMetrics(sheetData));
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    metrics,
    isLoading,
    error,
    lastUpdated,
    refresh: fetchData,
  };
}
