export type OnboardingStageStatus =
  | 'completed'
  | 'pending'
  | 'overdue'
  | 'in_progress'
  | 'waiting'
  | 'scheduled'
  | 'screening_required';

export type OnboardingStage = {
  name: string;
  status: OnboardingStageStatus;
  details?: string;
};

export type OnboardingClient = {
  initials: string;
  name: string;
  advisor: string;
  expectedAUM: number;
  avatarColor: string;
  currentStage: string;
  stages: OnboardingStage[];
  progress: { current: number; total: number };
};

export type OnboardingProcessStep = {
  id: number;
  title: string;
  description: string;
};

export type OnboardingActivityItem = {
  id: string;
  description: string;
  status: 'completed' | 'flagged' | 'info';
  time: string;
};