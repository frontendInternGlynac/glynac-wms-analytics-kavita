import { AIAgentSuggestion, KeyMetric, ReportCategory } from './types';

export const MOCK_REPORT_CATEGORIES: ReportCategory[] = [
  {
    id: 'exec-summary',
    title: 'Executive Summary Reports',
    icon: 'ShieldCheckIcon',
    reports: [
      { id: 'firm-overview', title: 'Firm Performance Overview', description: 'Comprehensive firm metrics and KPIs' },
      { id: 'client-health', title: 'Client Relationship Health', description: 'Engagement trends and risk indicators' },
      { id: 'operational-efficiency', title: 'Operational Efficiency', description: 'Process metrics and optimization' }
    ]
  },
  {
    id: 'client-analytics',
    title: 'Client Analytics Reports',
    icon: 'UserGroupIcon',
    reports: [
      { id: 'engagement', title: 'Client Engagement Analysis', description: 'Communications patterns and touchpoints' },
      { id: 'aum-growth', title: 'AUM Growth Distribution', description: 'Asset growth trends across client tiers' },
      { id: 'service-quality', title: 'Service Delivery Quality', description: 'Service metrics and satisfaction metrics' }
    ]
  },
  {
    id: 'advisor-performance',
    title: 'Advisor Performance',
    icon: 'BriefcaseIcon',
    reports: [
      { id: 'individual-metrics', title: 'Individual Metrics', description: 'Advisor-specific performance data' },
      { id: 'team-comparison', title: 'Team Comparison', description: 'Comparative analysis across teams' },
      { id: 'productivity', title: 'Productivity Analysis', description: 'Efficiency and output metrics' }
    ]
  },
  {
    id: 'operational-reports',
    title: 'Operational Reports',
    icon: 'CogIcon',
    reports: [
      { id: 'process-efficiency', title: 'Process Efficiency', description: 'Department and workflow benchmarks' },
      { id: 'task-tracking', title: 'Task Completion Tracking', description: 'Department and individual progress' },
      { id: 'resource-utilization', title: 'Resource Utilization', description: 'System and personnel optimization' }
    ]
  },
  {
    id: 'compliance-reports',
    title: 'Compliance Reports',
    icon: 'ShieldCheckIcon',
    reports: [
      { id: 'regulatory-status', title: 'Regulatory Status', description: 'Current compliance standing' },
      { id: 'audit-prep', title: 'Audit Preparation', description: 'Readiness assessment and gaps' },
      { id: 'policy-adherence', title: 'Policy Adherence', description: 'Monitoring and violation tracking' }
    ]
  }
];

export const MOCK_KEY_METRICS: KeyMetric[] = [
  { id: 'aum', title: 'Total AUM', value: '$847M', change: '+2.7% QoQ', changeType: 'increase', color: 'bg-blue-200 text-blue-800' },
  { id: 'active-clients', title: 'Active Clients', value: 284, change: '+1.8% YoY', changeType: 'increase', color: 'bg-green-200 text-green-800' },
  { id: 'satisfaction', title: 'Client Satisfaction', value: '94.2%', change: '+2.1% MTD', changeType: 'increase', color: 'bg-indigo-200 text-indigo-800' },
  { id: 'process-eff', title: 'Process Efficiency', value: '87%', change: '+4.5% QoQ', changeType: 'increase', color: 'bg-yellow-200 text-yellow-800' }
];

export const MOCK_AI_AGENT_SUGGESTION: AIAgentSuggestion = {
  recentAnalysis: {
    text: 'Generated Q2 revenue breakdown by household. Found 4 accounts needing fee adjustments.',
    actions: [
      { label: 'Flag for review', style: 'primary' },
      { label: 'Schedule meeting' }
    ]
  },
  availableReports: [
    'Custom AUM analysis and breakdowns',
    'Performance metrics compilation',
    'Revenue attribution analysis',
    'Operational metrics tracking'
  ],
  quickActions: [
    'Generate invoice report',
    'AUM growth analysis',
    'Fee reconciliation'
  ]
};