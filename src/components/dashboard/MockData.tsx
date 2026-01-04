// src/components/dashboard/mockData.ts
// Sample data for testing - replace with API calls

import { SummaryMetric, ClientData, ActionItem } from './types';

export const portfolioSummaryData: SummaryMetric[] = [
  {
    id: 'clients',
    label: 'My Clients',
    value: '73',
    change: '+3 this month',
    changeType: 'positive',
    description: 'Total active clients',
  },
  {
    id: 'aum',
    label: 'My AUM',
    value: '$127M',
    change: '+12% this quarter',
    changeType: 'positive',
    description: 'Assets under management',
  },
  {
    id: 'revenue',
    label: 'Revenue Generated',
    value: '$847K',
    change: '+23% vs last year',
    changeType: 'positive',
    description: 'Annual revenue',
  },
  {
    id: 'satisfaction',
    label: 'Satisfaction',
    value: '4.6/5.0',
    change: 'Excellent rating',
    changeType: 'positive',
    description: 'Client satisfaction',
  }
];

export const clientsData: ClientData[] = [
  {
    id: '1',
    name: 'Johnson Family Trust',
    type: 'High Net Worth',
    aum: '$4.2M',
    ytdChange: '+8%',
    lastContact: '2 days ago',
    healthScore: 'excellent',
    nextMeeting: 'Tomorrow 2:00 PM',
    action: 'View Details'
  },
  {
    id: '2',
    name: 'Martinez Tech Corp',
    type: 'Corporate Account',
    aum: '$2.8M',
    ytdChange: '-2%',
    lastContact: '32 days ago',
    healthScore: 'at-risk',
    nextMeeting: 'Overdue',
    action: 'Contact Now'
  },
  {
    id: '3',
    name: 'Liu Investment Group',
    type: 'Family Office',
    aum: '$8.1M',
    ytdChange: '+15%',
    lastContact: '1 week ago',
    healthScore: 'good',
    nextMeeting: 'Next Friday 10:00 AM',
    action: 'View Details'
  }
];

export const actionItems: ActionItem[] = [
  {
    id: 'overdue-contacts',
    title: 'Overdue Client Contacts',
    description: 'Johnson, Martinez, Liu families',
    count: 3,
    priority: 'high',
    color: 'red'
  },
  {
    id: 'meeting-prep',
    title: 'Meeting Prep Required',
    description: "Tomorrow's client reviews",
    count: 5,
    priority: 'high',
    color: 'amber'
  },
  {
    id: 'document-reviews',
    title: 'Document Reviews',
    description: 'Investment proposals pending',
    count: 2,
    priority: 'medium',
    color: 'orange'
  },
  {
    id: 'compliance',
    title: 'Compliance Tasks',
    description: 'KYC renewals due',
    count: 4,
    priority: 'medium',
    color: 'blue'
  },
  {
    id: 'growth-opportunities',
    title: 'Growth Opportunities',
    description: 'Potential upsells identified',
    count: 7,
    priority: 'low',
    color: 'green'
  },
  {
    id: 'document-collection',
    title: 'Document Collection',
    description: 'Pending client submissions',
    count: 6,
    priority: 'low',
    color: 'purple'
  }
];