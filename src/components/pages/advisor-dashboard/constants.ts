import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  StarIcon,
  ChevronDownIcon,
  BrainIcon,
  ClockIcon,
} from './icons';

import { AdvisorActionItem, AdvisorDashboardClient, ClientOpportunity, PerformanceInsight, PortfolioSummaryMetric, PriorityAction } from './types';

export const ADVISOR_PORTFOLIO_SUMMARY: PortfolioSummaryMetric[] = [
  { id: 'clients', title: 'My Clients', value: 73, change: '+3 this month', changeType: 'increase', icon: UserGroupIcon, iconBgColor: 'bg-blue-100' },
  { id: 'aum', title: 'My AUM', value: '$127M', change: '+12% this quarter', changeType: 'increase', icon: CurrencyDollarIcon, iconBgColor: 'bg-green-100' },
  { id: 'revenue', title: 'Revenue', value: '$847K', change: '+15% year to year', changeType: 'increase', icon: ChartBarIcon, iconBgColor: 'bg-purple-100' },
  { id: 'satisfaction', title: 'Satisfaction', value: '4.6/5.0', change: 'Excellent rating', changeType: 'increase', icon: StarIcon, iconBgColor: 'bg-yellow-100' }
];

export const ADVISOR_ACTION_ITEMS: AdvisorActionItem[] = [
  { id: 'overdue', title: 'Overdue Client Contacts', subtitle: 'Follow-up pending from last month', count: 3, color: 'border-orange-500' },
  { id: 'meetings', title: 'Meeting Prep Required', subtitle: 'Upcoming meetings this week', count: 5, color: 'border-yellow-500' },
  { id: 'docs', title: 'Document Reviews', subtitle: 'Compliance and KYC updates', count: 4, color: 'border-blue-500' },
  { id: 'tasks', title: 'Communication Tasks', subtitle: 'Draft emails and client notes', count: 2, color: 'border-purple-500' }
];

export const ADVISOR_DASHBOARD_CLIENTS: AdvisorDashboardClient[] = [
  { id: 'c1', name: 'Johnson Family Trust', type: 'Household', initials: 'JF', avatarColor: 'bg-indigo-500', aum: 4200000, aumChange: 2.4, lastContact: '1 week ago', healthScore: 8.9, nextMeeting: 'Next Friday 9:30AM' },
  { id: 'c2', name: 'Martinez Tech Corp', type: 'Corporate', initials: 'MT', avatarColor: 'bg-blue-500', aum: 9200000, aumChange: -1.2, lastContact: '3 weeks ago', healthScore: 6.7, nextMeeting: 'Next Week 2:00PM' },
  { id: 'c3', name: 'Greenwood Advisors', type: 'RIA', initials: 'GA', avatarColor: 'bg-green-500', aum: 5100000, aumChange: 1.8, lastContact: '10 days ago', healthScore: 7.5, nextMeeting: 'Next Friday 3:45PM' }
];

export const ADVISOR_PERFORMANCE_INSIGHTS: PerformanceInsight[] = [
  { id: 'contact-rate', title: 'Client Contact Rate', value: 86, valueDisplay: '86%' ,  bgColor: 'bg-yellow-100'},
  { id: 'call-meeting', title: 'Call-to-Meeting Rate', value: 73, valueDisplay: '73%', bgColor:'bg-blue-100' },
  { id: 'avg-task', title: 'Avg Task Completion Time', value: 3.7, valueDisplay: '3.7 days',bgColor:'bg-purple-100' },
  { id: 'engagement', title: 'Client Engagement Score', value: 8.4, valueDisplay: '8.4/10' , bgColor:'bg-green-100' }
];

export const ADVISOR_CLIENT_OPPORTUNITIES: ClientOpportunity[] = [
  { id: 'high-risk', title: 'High-Risk Clients', subtitle: 'Requires attention due to risk shifts', color: 'border-red-500', level: 'HIGH PRIORITY' , value : 'RISK' },
  { id: 'aum-concentration', title: 'AUM Concentration', subtitle: 'Exposure to a few large accounts', color: 'border-yellow-500', value: 5  },
  { id: 'compliance-docs', title: 'Compliance Docs', subtitle: 'Missing or outdated KYC', color: 'border-orange-500', value: 7 },
  { id: 'growth-opps', title: 'Growth Opportunities', subtitle: 'Prospective upsell and cross-sell', color: 'border-green-500', value: 4 },
  { id: 'discounts', title: 'Discounts Detected', subtitle: 'Pricing flags and fee review', color: 'border-blue-500', value: 6 }
];

export const ADVISOR_PRIORITY_ACTIONS: PriorityAction[] = [
  { id: 'urgent-1', dotColor: 'bg-red-500', title: 'Call Martinez Tech Corp - Urgent', subtitle: 'Fee review pending and follow-up', priority: 'HIGH PRIORITY', priorityColor: 'text-red-600', buttonText: 'Contact Now', buttonColor: 'bg-red-600' },
  { id: 'due-today-1', dotColor: 'bg-yellow-500', title: 'Prepare Johnson Family Quarterly Review', subtitle: 'Prepare presentation and send invite', priority: 'DUE TODAY', priorityColor: 'text-yellow-600', buttonText: 'Start Prep', buttonColor: 'bg-yellow-600' },
  { id: 'due-this-week-1', dotColor: 'bg-blue-500', title: 'Complete NYC Paperwork', subtitle: 'Submit filings and compliance checklist', priority: 'DUE THIS WEEK', priorityColor: 'text-blue-600', buttonText: 'View Details', buttonColor: 'bg-blue-600' }
];