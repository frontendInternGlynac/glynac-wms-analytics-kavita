
export interface SummaryMetric {
  id: string;
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
  bgColor?: string;
  description?: string;
}

export interface PortfolioSummaryData {
  clients: SummaryMetric;
  aum: SummaryMetric;
  revenue: SummaryMetric;
  satisfaction: SummaryMetric;
}

export interface ActionItem {
  id: string;
  title: string;
  description: string;
  count?: number;
  priority?: 'high' | 'medium' | 'low';
  color?: string;
}

export interface ClientData {
  id: string;
  name: string;
  type: string;
  aum: string;
  ytdChange: string;
  lastContact: string;
  healthScore: 'excellent' | 'good' | 'at-risk';
  nextMeeting?: string;
  action?: string;
}