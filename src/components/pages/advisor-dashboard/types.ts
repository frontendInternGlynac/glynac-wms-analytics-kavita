export type ChangeType = 'increase' | 'decrease';

export interface PortfolioSummaryMetric {
  id: string;
  title: string;
  value: string | number;
  change: string;
  changeType: ChangeType;
  iconName: string; // maps to icons wrapper
  iconBgColor: string; // tailwind bg class
}

export interface AdvisorActionItem {
  id: string;
  title: string;
  subtitle: string;
  count: number;
  color: string; // tailwind color for left border
}

export interface AdvisorDashboardClient {
  id: string;
  name: string;
  type: string;
  initials: string;
  avatarColor: string;
  aum: number;
  aumChange: number; // percent change
  lastContact: string;
  healthScore: number; // 0-10
  nextMeeting: string;
}

export interface PerformanceInsight {
  id: string;
  title: string;
  value: number; // percentage 0-100
  valueDisplay: string; // e.g., '73%'
}

export interface ClientOpportunity {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  level?: string; // e.g., 'HIGH PRIORITY'
  count?: number; // numeric count if no level
}

export interface PriorityAction {
  id: string;
  dotColor: string;
  title: string;
  subtitle: string;
  priority: string; // e.g., 'HIGH PRIORITY'
  priorityColor: string; // tailwind text color
  buttonText: string;
  buttonColor: string; // tailwind bg color
}