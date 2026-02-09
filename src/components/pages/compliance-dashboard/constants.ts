import { MetricTile, AlertItem, ProgressItem, TimelineItem } from './types';

export const REGULATORY_MONITOR: MetricTile[] = [
  { id: 'surveillance', title: 'Surveillance Alerts', value: 8, sub: '3 high priority', colorClass: 'bg-red-100 text-red-700' },
  { id: 'kyc-expiring', title: 'KYC Expiring', value: 23, sub: 'Next 30 days', colorClass: 'bg-yellow-100 text-yellow-800' },
  { id: 'filings', title: 'Filing Deadlines', value: 5, sub: 'Next 15 days', colorClass: 'bg-blue-100 text-blue-700' },
  { id: 'overall', title: 'Overall Score', value: '94%', sub: 'Excellent', colorClass: 'bg-green-100 text-green-700' }
];

export const CRITICAL_ALERTS: AlertItem[] = [
  { id: 'off-channel', title: 'Off-Channel Communications', description: 'WhatsApp usage detected — 3 items', level: 'HIGH' },
  { id: 'missing-docs', title: 'Missing Documentation', description: 'KYC pending: Monroe Family Trust', level: 'MED' },
  { id: 'training', title: 'Training Overdue', description: 'AML certification > 24 hours', level: 'MED' },
  { id: 'policy', title: 'Policy Update Required', description: 'New GDPR notice acknowledged by 10%', level: 'LOW' }
];

export const DOC_COMPLIANCE: ProgressItem[] = [
  { id: 'kyc-current', label: 'KYC Documentation Current', value: 82 },
  { id: 'forms-complete', label: 'Required Forms Complete', value: 69 },
  { id: 'risk-assess', label: 'Risk Assessments Current', value: 56 },
  { id: 'signatures', label: 'Signature Collection', value: 47 },
  { id: 'fine-requiring', label: 'Files Requiring Action', value: 9 },
  { id: 'completeness', label: 'Completeness Score', value: 91 }
];

export const COMMUNICATION_COMPLIANCE: MetricTile[] = [
  { id: 'archive', title: 'Archive Completeness', value: '99.2%', colorClass: 'text-green-600' },
  { id: 'response-time', title: 'Response Time Compliance', value: '94%', colorClass: 'text-blue-600' },
  { id: 'followups', title: 'Follow-up Completion', value: '88%', colorClass: 'text-purple-600' },
  { id: 'quality', title: 'Professional Quality', value: '90%', colorClass: 'text-indigo-600' }
];

export const RISK_MONITOR: MetricTile[] = [
  { id: 'high-risk', title: 'High-Risk Clients', value: 12, colorClass: 'bg_red-100 text-red-700' },
  { id: 'advisor-risk', title: 'Advisor Risk Score', value: 'Moderate', colorClass: 'bg-yellow-100 text-yellow-800' },
  { id: 'process-dev', title: 'Process Deviations', value: 23, colorClass: 'bg-orange-100 text-orange-800' },
  { id: 'exceptions', title: 'Exception Handling', value: 8, colorClass: 'bg-green-100 text-green-700' }
];

export const UPCOMING_REQUIREMENTS: TimelineItem[] = [
  { id: 'adv-update', title: 'Form ADV Update Due', dueLabel: 'DUE IN 3 DAYS', badgeClass: 'bg-red-600 text_white', actionLabel: 'Review Now' , desc : "desc"},
  { id: 'aml-training', title: 'AML Training Certification', dueLabel: 'DUE IN 2 WEEKS', badgeClass: 'bg-yellow-500 text-white', actionLabel: 'Schedule Training',  desc : "desc" },
  { id: 'risk-assess', title: 'Client Risk Assessments', dueLabel: 'DUE IN 1 MONTH', badgeClass: 'bg-blue-600 text_white', actionLabel: 'Start Reviews', desc : "desc" },
  { id: 'cyber', title: 'Cybersecurity Assessment', dueLabel: 'ON TRACK', badgeClass: 'bg-green-600 text_white', actionLabel: 'View Status' , desc : "desc"}
];