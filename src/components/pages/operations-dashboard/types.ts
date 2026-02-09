export type SeverityLevel = 'HIGH' | 'MED' | 'LOW';

export interface OperationsMetric {
  id: string;
  title: string;
  value: string | number;
  subtitle?: string;
  iconName: keyof typeof IconName;
  iconBgColor: string; // tailwind class, e.g., 'bg-blue-100'
}

// Helper type to constrain icon names used in metrics and sections
export const IconName = {
  ChartBarIcon: 'ChartBarIcon',
  ClockIcon: 'ClockIcon',
  CheckCircleIcon: 'CheckCircleIcon',
  DocumentDuplicateIcon: 'DocumentDuplicateIcon',
  ExclamationTriangleIcon: 'ExclamationTriangleIcon',
  BrainIcon: 'BrainIcon',
} as const;

export interface WorkflowBottleneck {
  id: string;
  title: string;
  subtitle: string;
  level: SeverityLevel;
  color: string; // tailwind class applied to border accent
}

export interface OperationsSummaryItem {
  id: string;
  title: string;
  subtitle: string;
  value: number;
}

export interface DepartmentCompletionRate {
  id: string;
  department: string;
  rate: number; // percentage 0..100
  color: string; // tailwind bg color for progress bar
}

export interface DataQualityIssue {
  id: string;
  title: string;
  subtitle: string;
  value: number;
  color: string;
}

export interface DataConsistencyScore {
  id: string;
  name: string;
  score: number; // percentage 0..100
}

export interface TaskDistributionMetric {
  id: string;
  name: string;
  value: number; // percentage 0..100
  subValue?: string; // optional small extra metric like savings
}

export interface ServiceDeliveryStandard {
  id: string;
  name: string;
  value: number; // percentage
}

export interface ErrorImprovementMetric {
  id: string;
  name: string;
  value: string | number; // could be a percentage string "1.3%" or a count
  subtitle: string;
}

export interface AdvisorCapacity {
  overloaded: number;
  wellUtilized: number;
  underUtilized: number;
  firmAverage: number; // percentage
  totalAdvisors: number;
  id: number | string;
}