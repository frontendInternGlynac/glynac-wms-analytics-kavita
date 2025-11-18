import { Alert, AlertType } from './types';

export const ALERT_CATEGORIES: { name: AlertType; value: number; color: string }[] = [
  { name: 'Client Risk Alerts', value: 12, color: 'bg-red-500' },
  { name: 'Compliance & Regulatory', value: 8, color: 'bg-yellow-500' },
  { name: 'Operational Process', value: 16, color: 'bg-blue-500' },
  { name: 'Performance & Quality', value: 10, color: 'bg-purple-500' },
];

export const RESOLUTION_PERFORMANCE = {
  avgTime: '2.4h',
  sameDay: 85,
  escalationRate: 12,
};

export const ALERT_SOURCES: { name: string; value: string }[] = [
  { name: 'AI Analysis Engine', value: '45%' },
  { name: 'Automated Compliance Checks', value: '28%' },
  { name: 'System Integration Monitoring', value: '18%' },
  { name: 'Manual Reports', value: '9%' },
];

export const MOCK_ALERTS: Alert[] = [
  {
    id: 'a1',
    title: 'High-value Client Communication Drop',
    description:
      "Wilson family (9.2M AUM) - No advisor contact in 21 days. Last communication sentiment: Negative",
    type: 'Client Risk Alerts',
    source: 'AI Analysis Engine',
    timestamp: '2 hours ago',
    priority: 'High',
    icon: 'ExclamationTriangleIcon',
    actions: [
      { label: 'Assign Advisor', style: 'primary', color: 'bg-indigo-600 text-white hover:bg-indigo-700' },
      { label: 'Dismiss', style: 'secondary' },
    ],
  },
  {
    id: 'a2',
    title: 'KYC Documentation Expiring Soon',
    description: '3 client KYC forms will expire next month. Prepare renewals.',
    type: 'Compliance & Regulatory',
    source: 'Automated Compliance Checks',
    timestamp: 'Today',
    priority: 'Medium',
    icon: 'ShieldCheckIcon',
    actions: [
      { label: 'Start Renewals', style: 'primary', color: 'bg-green-600 text-white hover:bg-green-700' },
      { label: 'Review', style: 'secondary' },
    ],
  },
  {
    id: 'a3',
    title: 'Quarterly Report Preparation Due',
    description: 'Advisors must upload Q2 client summaries by Friday.',
    type: 'Operational Process',
    source: 'System Integration Monitoring',
    timestamp: '3 hours ago',
    priority: 'Low',
    icon: 'DocumentChartBarIcon',
    actions: [
      { label: 'Open Checklist', style: 'primary', color: 'bg-blue-600 text-white hover:bg-blue-700' },
    ],
  },
  {
    id: 'a4',
    title: 'Client Communication Quality Issue',
    description: 'Spike in negative sentiment detected across junior advisor interactions this week.',
    type: 'Performance & Quality',
    source: 'AI Analysis Engine',
    timestamp: 'Today',
    priority: 'Critical',
    icon: 'ChatBubbleBottomCenterTextIcon',
    actions: [
      { label: 'Investigate', style: 'primary', color: 'bg-red-600 text-white hover:bg-red-700' },
      { label: 'Assign Coach', style: 'secondary' },
    ],
  },
];