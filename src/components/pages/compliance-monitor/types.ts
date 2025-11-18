export type ComplianceStatus = 'Compliant' | 'Needs Review' | 'Overdue' | 'Up to Date';

export interface ComplianceStatusItem {
  id: string;
  rule: string;
  description: string;
  status: ComplianceStatus;
  lastReview: string;
}

export type RiskLevel = 'High Risk' | 'Medium Risk' | 'Low Risk';

export interface RiskIssue {
  id: string;
  title: string;
  description: string;
  assignee: string;
  level: RiskLevel;
}

export interface DocumentationStatusItem {
  name: string;
  value: number; // percentage 0-100
}

export interface CommunicationSurveillance {
  emailsReviewed: number;
  flaggedCommunications: number;
  complianceRate: number; // percentage 0-100
}

export interface AuditActivityItem {
  id: string;
  description: string;
  time: string;
}