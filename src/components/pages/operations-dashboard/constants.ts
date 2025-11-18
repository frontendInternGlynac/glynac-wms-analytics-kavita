import {
  OperationsMetric,
  WorkflowBottleneck,
  OperationsSummaryItem,
  DepartmentCompletionRate,
  DataQualityIssue,
  DataConsistencyScore,
  TaskDistributionMetric,
  ServiceDeliveryStandard,
  ErrorImprovementMetric,
  AdvisorCapacity,
} from './types';

export const OPERATIONS_PROCESS_METRICS: OperationsMetric[] = [
  {
    id: 'onboarding-pipeline',
    title: 'Onboarding Pipeline',
    value: 51,
    subtitle: 'Active prospects',
    iconName: 'ChartBarIcon',
    iconBgColor: 'bg-blue-100',
  },
  {
    id: 'avg-completion',
    title: 'Avg Completion',
    value: '12.3 days',
    subtitle: 'avg: 12.1 days',
    iconName: 'ClockIcon',
    iconBgColor: 'bg-green-100',
  },
  {
    id: 'task-completion',
    title: 'Task Completion',
    value: '87%',
    subtitle: 'Firm average',
    iconName: 'CheckCircleIcon',
    iconBgColor: 'bg-purple-100',
  },
  {
    id: 'doc-processing',
    title: 'Doc Processing',
    value: '4.2hrs',
    subtitle: 'per document',
    iconName: 'DocumentDuplicateIcon',
    iconBgColor: 'bg-orange-100',
  },
];

export const OPERATIONS_WORKFLOW_BOTTLENECKS: WorkflowBottleneck[] = [
  {
    id: 'client-doc-collection',
    title: 'Client Document Collection',
    subtitle: 'Missing documents across 5 steps',
    level: 'HIGH',
    color: 'border-red-500',
  },
  {
    id: 'custodian-account-setup',
    title: 'Custodian Account Setup',
    subtitle: 'Pending approvals from custodians',
    level: 'MED',
    color: 'border-yellow-400',
  },
  {
    id: 'advisor-client-handoffs',
    title: 'Advisor-Client Handoffs',
    subtitle: 'Coordination delays for onboarding',
    level: 'MED',
    color: 'border-yellow-400',
  },
  {
    id: 'compliance-review-queue',
    title: 'Compliance Review Queue',
    subtitle: 'Awaiting review assignments',
    level: 'LOW',
    color: 'border-blue-500',
  },
];

export const OPERATIONS_SUMMARY_ITEMS: OperationsSummaryItem[] = [
  { id: 'processed', title: 'Client Documents Processed', subtitle: 'New since 8am', value: 34 },
  { id: 'accounts-opened', title: 'New Accounts Opened', subtitle: 'Custodian approvals', value: 8 },
  { id: 'client-calls', title: 'Client Review Calls', subtitle: 'Scheduled today', value: 18 },
  { id: 'tasks-overdue', title: 'Overdue Tasks', subtitle: 'Across departments', value: 12 },
];

export const OPERATIONS_DEPARTMENT_COMPLETION: DepartmentCompletionRate[] = [
  { id: 'advisory', department: 'Advisory', rate: 94, color: 'bg-green-500' },
  { id: 'operations', department: 'Operations', rate: 78, color: 'bg-yellow-500' },
  { id: 'compliance', department: 'Compliance', rate: 91, color: 'bg-blue-500' },
  { id: 'client-services', department: 'Client Services', rate: 85, color: 'bg-purple-500' },
];

export const OPERATIONS_DATA_QUALITY_ISSUES: DataQualityIssue[] = [
  { id: 'incomplete-records', title: 'Incomplete Records', subtitle: 'Missing KYC or onboarding steps', value: 47, color: 'border-red-500' },
  { id: 'duplicate-entries', title: 'Duplicate Entries', subtitle: 'Detected in portfolio systems', value: 12, color: 'border-yellow-500' },
  { id: 'data-inconsistencies', title: 'Data Inconsistencies', subtitle: 'Conflicting client information', value: 23, color: 'border-orange-500' },
  { id: 'outdated-information', title: 'Outdated Information', subtitle: 'Last updated 6 months ago', value: 8, color: 'border-blue-500' },
];

export const OPERATIONS_DATA_CONSISTENCY: DataConsistencyScore[] = [
  { id: 'portfolio-sync', name: 'Portfolio-System Sync', score: 92 },
  { id: 'tool-alignment', name: 'Planning Tool Alignment', score: 95 },
  { id: 'cross-system', name: 'Cross-System Accuracy', score: 99 },
];

export const OPERATIONS_ADVISOR_CAPACITY: AdvisorCapacity = {
  overloaded: 4,
  wellUtilized: 38,
  underUtilized: 5,
  firmAverage: 76,
  totalAdvisors: 47,
};

export const OPERATIONS_TASK_DISTRIBUTION: TaskDistributionMetric[] = [
  { id: 'workload-balance', name: 'Workload Distribution Balance', value: 82 },
  { id: 'system-adoption', name: 'System Usage Adoption', value: 89 },
  { id: 'process-rate', name: 'Process Completion Rate', value: 85 },
  { id: 'resource-allocation', name: 'Resource Allocation Score', value: 87, subValue: '$184K annual savings' },
  { id: 'technology-roi', name: 'Technology ROI', value: 91, subValue: '$104K annual savings' },
];

export const OPERATIONS_SERVICE_DELIVERY: ServiceDeliveryStandard[] = [
  { id: 'response-time', name: 'Client Response Time SLA', value: 83 },
  { id: 'standardization', name: 'Process Standardization', value: 66 },
  { id: 'doc-quality', name: 'Documentation Quality', value: 72 },
  { id: 'overall-quality', name: 'Overall Service Quality', value: 90 },
];

export const OPERATIONS_ERROR_IMPROVEMENT: ErrorImprovementMetric[] = [
  { id: 'error-rate', name: 'Error Rate This Month', value: '1.3%', subtitle: 'Change from last month' },
  { id: 'satisfaction', name: 'Client Satisfaction Score', value: '4.4/5.0', subtitle: 'Benchmark rating' },
  { id: 'active-projects', name: 'Active Improvement Projects', value: 8, subtitle: 'Process initiatives ongoing' },
  { id: 'training', name: 'Training Effectiveness', value: '89%', subtitle: 'Skills ramp-up performance' },
];