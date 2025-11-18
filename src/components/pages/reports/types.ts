export interface ReportItem {
  id: string;
  title: string;
  description: string;
}

export interface ReportCategory {
  id: string;
  title: string;
  icon: string; // name of the icon to render
  reports: ReportItem[];
}

export type ChangeType = 'increase' | 'decrease';

export interface KeyMetric {
  id: string;
  title: string;
  value: string | number;
  change: string;
  changeType: ChangeType;
  color: string; // tailwind bg/text class combo
}

export interface AIAgentAction {
  label: string;
  style?: 'primary' | 'secondary';
}

export interface AIAgentSuggestion {
  recentAnalysis: {
    text: string;
    actions: AIAgentAction[];
  };
  availableReports: string[];
  quickActions: string[];
}