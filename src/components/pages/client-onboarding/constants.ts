import { OnboardingClient, OnboardingProcessStep, OnboardingActivityItem } from './types';

export const MOCK_ONBOARDING_CLIENTS: OnboardingClient[] = [
  {
    initials: 'RK',
    name: 'Robert & Karen Wilson',
    advisor: 'Sarah Johnson',
    expectedAUM: 1200000,
    avatarColor: 'bg-purple-500',
    currentStage: 'Documentation Collection',
    stages: [
      { name: 'Initial Contact', status: 'completed' },
      { name: 'Documentation Collection', status: 'in_progress', details: 'Day 4 of 7' },
      { name: 'Compliance Review', status: 'pending' },
      { name: 'Account Setup', status: 'pending' },
      { name: 'Service Activation', status: 'pending' },
    ],
    progress: { current: 2, total: 5 },
  },
  {
    initials: 'TH',
    name: 'Thompson Holdings LLC',
    advisor: 'Michael Chen',
    expectedAUM: 3300000,
    avatarColor: 'bg-indigo-500',
    currentStage: 'Compliance Review',
    stages: [
      { name: 'Initial Contact', status: 'completed' },
      { name: 'Documentation Collection', status: 'completed' },
      { name: 'Compliance Review', status: 'overdue', details: 'Overdue by 2 days' },
      { name: 'Account Setup', status: 'pending' },
      { name: 'Service Activation', status: 'pending' },
    ],
    progress: { current: 3, total: 5 },
  },
  {
    initials: 'AF',
    name: 'Anna & Mark Foster',
    advisor: 'Emily Rodriguez',
    expectedAUM: 850000,
    avatarColor: 'bg-green-500',
    currentStage: 'Account Setup',
    stages: [
      { name: 'Initial Contact', status: 'completed' },
      { name: 'Documentation Collection', status: 'completed' },
      { name: 'Compliance Review', status: 'completed' },
      { name: 'Account Setup', status: 'in_progress', details: 'Day 1 of 3' },
      { name: 'Service Activation', status: 'pending' },
    ],
    progress: { current: 4, total: 5 },
  },
  {
    initials: 'DC',
    name: 'David & Linda Chen',
    advisor: 'Sarah Johnson',
    expectedAUM: 2100000,
    avatarColor: 'bg-pink-500',
    currentStage: 'Initial Contact',
    stages: [
      { name: 'Initial Contact', status: 'scheduled', details: 'Waiting for response' },
      { name: 'Documentation Collection', status: 'pending' },
      { name: 'Compliance Review', status: 'pending' },
      { name: 'Account Setup', status: 'pending' },
      { name: 'Service Activation', status: 'pending' },
    ],
    progress: { current: 0, total: 5 },
  },
];

export const MOCK_ONBOARDING_PROCESS: OnboardingProcessStep[] = [
  { id: 1, title: 'Initial Contact', description: 'Prospect qualification & discovery call' },
  { id: 2, title: 'Documentation Collection', description: 'KYC, financial statements & tax forms' },
  { id: 3, title: 'Compliance Review', description: 'AML screening & risk assessment' },
  { id: 4, title: 'Account Setup', description: 'Custodial accounts & platform setup' },
  { id: 5, title: 'Service Activation', description: 'Handoff setup & relationship handoff' },
];

export const MOCK_ONBOARDING_ACTIVITY: OnboardingActivityItem[] = [
  { id: 'a1', description: 'Wilson family completed KYC forms', status: 'completed', time: '15 minutes ago' },
  { id: 'a2', description: 'Thompson Holdings AML review flagged', status: 'flagged', time: '2 hours ago' },
  { id: 'a3', description: 'Foster account setup initiated', status: 'info', time: '4 hours ago' },
  { id: 'a4', description: 'Johnson onboarding completed', status: 'completed', time: 'Yesterday' },
];