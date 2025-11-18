import { AuditActivityItem, CommunicationSurveillance, ComplianceStatusItem, RiskIssue } from './types';

export const MOCK_COMPLIANCE_STATUS_ITEMS: ComplianceStatusItem[] = [
  {
    id: 'sec-206',
    rule: 'SEC Rule 206(4)-7',
    description: 'Compliance Policies & Procedures',
    status: 'Compliant',
    lastReview: 'Last review: 15 days ago'
  },
  {
    id: 'finra-3110',
    rule: 'FINRA Rule 3110',
    description: 'Supervision Requirements',
    status: 'Needs Review',
    lastReview: 'Due: 5 days'
  },
  {
    id: 'adv-updates',
    rule: 'Form ADV Updates',
    description: 'Annual Amendment Filing',
    status: 'Up to Date',
    lastReview: 'Filed: 30 days ago'
  },
  {
    id: 'privacy-notice',
    rule: 'Client Privacy Notice',
    description: 'Regulation S-P Requirements',
    status: 'Overdue',
    lastReview: 'Due: 3 days ago'
  },
  {
    id: 'aml',
    rule: 'Anti-Money Laundering',
    description: 'AML Program Compliance',
    status: 'Up to Date',
    lastReview: 'Updated: 7 days ago'
  }
];

export const MOCK_RISK_ISSUES: RiskIssue[] = [
  {
    id: 'kyc-missing',
    title: 'Missing KYC Documentation',
    description: '7 clients with incomplete KYC; documentation requires immediate attention',
    assignee: 'Sarah Johnson',
    level: 'High Risk'
  },
  {
    id: 'supervision-doc',
    title: 'Supervision Documentation',
    description: 'Quarterly supervision reviews needed for 3 advisors',
    assignee: 'Robert Chen',
    level: 'Medium Risk'
  },
  {
    id: 'comm-surveillance',
    title: 'Communication Surveillance',
    description: '12 flagged communications require review and approval',
    assignee: 'Maria Lopez',
    level: 'Medium Risk'
  },
  {
    id: 'trade-auth',
    title: 'Trade Authorization Forms',
    description: '5 clients need updated trade authorizations forms',
    assignee: 'Jason Wu',
    level: 'Low Risk'
  }
];

export const MOCK_DOCUMENTATION_STATUS: { name: string; value: number }[] = [
  { name: 'KYC Documents', value: 87 },
  { name: 'Risk Assessments', value: 73 },
  { name: 'Disclosures', value: 95 },
  { name: 'Service Agreements', value: 91 }
];

export const MOCK_COMMUNICATION_SURVEILLANCE: CommunicationSurveillance = {
  emailsReviewed: 847,
  flaggedCommunications: 12,
  complianceRate: 98.7
};

export const MOCK_RECENT_AUDIT_ACTIVITY: AuditActivityItem[] = [
  { id: 'form-adv', description: 'Form ADV Part 2 Updated', time: '2 hours ago' },
  { id: 'client-file', description: 'Client File Review Completed', time: '5 hours ago' },
  { id: 'kyc-flagged', description: 'KYC Documentation Flagged', time: 'Yesterday' },
  { id: 'supervision-report', description: 'Supervision Report Filed', time: '2 days ago' },
  { id: 'policy-violation', description: 'Policy Violation Detected', time: '3 days ago' }
];