import { create } from 'zustand';
import { KPIData, ChartData, ActivityItem } from '../types/analytics';

interface AnalyticsState {
  kpiData: KPIData[];
  chartData: ChartData[];
  recentActivity: ActivityItem[];
  setKPIData: (data: KPIData[]) => void;
  setChartData: (data: ChartData[]) => void;
  setRecentActivity: (data: ActivityItem[]) => void;
}

export const useAnalyticsStore = create<AnalyticsState>((set) => ({
  kpiData: [],
  chartData: [],
  recentActivity: [],
  setKPIData: (data) => set({ kpiData: data }),
  setChartData: (data) => set({ chartData: data }),
  setRecentActivity: (data) => set({ recentActivity: data }),
}));