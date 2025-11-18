export type Account = {
  name: string;
  value: number;
};

export type RecentActivity = {
  title: string;
  time: string;
  icon: 'check' | 'doc' | 'sync';
};

export type HealthScoreBreakdownItem = {
  category: string;
  score: number; // percentage 0-100
};

export type NextAction = {
  title: string;
};

export type Client = {
  id: number;
  initials: string;
  name: string;
  primaryAdvisor: string;
  totalAUM: number;
  annualFees: number;
  feeRate: number; // percentage
  spouse: string;
  email: string;
  phone: string;
  address: string;
  riskProfile: string;
  avatarColor: string; // tailwind bg-* class
  contactSince: string;
  accounts: Account[];
  recentActivity: RecentActivity[];
  healthScoreBreakdown: HealthScoreBreakdownItem[];
  nextActions: NextAction[];
  healthScore: number;
  lastContact: string;
};