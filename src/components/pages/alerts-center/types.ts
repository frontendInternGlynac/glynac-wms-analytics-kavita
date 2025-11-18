export type AlertType = 'Client Risk Alerts' | 'Compliance & Regulatory' | 'Operational Process' | 'Performance & Quality';

export type AlertPriority = 'Critical' | 'High' | 'Medium' | 'Low';

export interface AlertAction {
  label: string;
  style?: 'primary' | 'secondary';
  color?: string; // Tailwind class for primary actions
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  type: AlertType;
  source: string;
  timestamp: string;
  priority: AlertPriority;
  icon: keyof typeof ICON_NAME_MAP | string;
  actions: AlertAction[];
}

// Helper map of icon names used in constants to components
export const ICON_NAME_MAP = {
  ExclamationTriangleIcon: 'ExclamationTriangleIcon',
  InformationCircleIcon: 'InformationCircleIcon',
  CheckCircleIcon: 'CheckCircleIcon',
  ShieldCheckIcon: 'ShieldCheckIcon',
  UserMinusIcon: 'UserMinusIcon',
  ChatBubbleBottomCenterTextIcon: 'ChatBubbleBottomCenterTextIcon',
  DocumentChartBarIcon: 'DocumentChartBarIcon',
} as const;