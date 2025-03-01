export interface KPIData {
    id: string;
    title: string;
    value: number;
    change: number;
    trend: 'up' | 'down';
    timeFrame: string;
  }
  
  export interface ChartData {
    date: string;
    users: number;
    revenue: number;
  }
  
  export interface ActivityItem {
    id: string;
    user: string;
    action: string;
    date: string;
    type: 'user' | 'system' | 'update';
  }