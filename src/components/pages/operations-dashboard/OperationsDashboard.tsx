"use client";

import React from 'react';
import {
  OPERATIONS_PROCESS_METRICS,
  OPERATIONS_WORKFLOW_BOTTLENECKS,
  OPERATIONS_SUMMARY_ITEMS,
  OPERATIONS_DEPARTMENT_COMPLETION,
  OPERATIONS_DATA_QUALITY_ISSUES,
  OPERATIONS_DATA_CONSISTENCY,
  OPERATIONS_ADVISOR_CAPACITY,
  OPERATIONS_TASK_DISTRIBUTION,
  OPERATIONS_SERVICE_DELIVERY,
  OPERATIONS_ERROR_IMPROVEMENT,
} from './constants';
import {
  ClockIcon,
  ChartBarIcon,
  CheckCircleIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  BrainIcon,
} from './icons';
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
  IconName,
} from './types';
import ProgressBar from './ProgressBar';

const iconMap: Record<keyof typeof IconName, React.FC<{ className?: string }>> = {
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  BrainIcon,
};

const ProcessMetricCard: React.FC<{ metric: OperationsMetric }> = ({ metric }) => {
  const Icon = iconMap[metric.iconName];
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
      <div className={`p-3 rounded-lg mr-4 ${metric.iconBgColor}`}>
        {Icon && <Icon className={`w-6 h-6 text-black`} />}
      </div>
      <div>
        <p className="text-sm text-black">{metric.title}</p>
        <p className="text-2xl font-bold text-black">{metric.value}</p>
        {metric.subtitle && (
          <p className="text-xs text-black font-medium">{metric.subtitle}</p>
        )}
      </div>
    </div>
  );
};

const WorkflowBottleneckCard: React.FC<{ item: WorkflowBottleneck }> = ({ item }) => {
  const levelStyles: Record<WorkflowBottleneck['level'], string> = {
    HIGH: 'bg-red-500 text-white',
    MED: 'bg-yellow-400 text-yellow-900',
    LOW: 'bg-blue-500 text-white',
  };
  return (
    <div className={`flex items-center justify-between p-3 bg-white rounded-lg border-l-4 ${item.color}`}>
      <div>
        <p className="font-semibold text-sm text-black">{item.title}</p>
        <p className="text-xs text-black">{item.subtitle}</p>
      </div>
      <div className={`text-xs font-bold px-2 py-1 rounded-md ${levelStyles[item.level]}`}>{item.level}</div>
    </div>
  );
};

const OperationsSummaryItemCard: React.FC<{ item: OperationsSummaryItem }> = ({ item }) => (
  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
    <div>
      <p className="font-medium text-sm text-black">{item.title}</p>
      <p className="text-xs text-black">{item.subtitle}</p>
    </div>
    <div className="text-lg font-bold text-blue-600">{item.value}</div>
  </div>
);

const DepartmentCompletionRateCard: React.FC<{ item: DepartmentCompletionRate }> = ({ item }) => (
  <div className="text-center">
    <p className="text-2xl font-bold" style={{ color: item.color.replace('bg-', 'text-') }}>{item.rate}%</p>
    <p className="font-medium text-sm text-black mb-1">{item.department}</p>
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div className={`${item.color} h-1.5 rounded-full`} style={{ width: `${item.rate}%` }}></div>
    </div>
  </div>
);

const DataQualityIssueCard: React.FC<{ item: DataQualityIssue }> = ({ item }) => (
  <div className={`flex items-center justify-between p-3 bg-white rounded-lg border-l-4 ${item.color}`}>
    <div>
      <p className="font-semibold text-sm text-black">{item.title}</p>
      <p className="text-xs text-black">{item.subtitle}</p>
    </div>
    <div className="text-lg font-bold text-black">{item.value}</div>
  </div>
);

const DataConsistencyScoreCard: React.FC<{ item: DataConsistencyScore }> = ({ item }) => (
  <div>
    <div className="flex justify-between items-center text-sm mb-1">
      <span className="text-black">{item.name}</span>
      <span className="font-semibold text-black">{item.score}%</span>
    </div>
    <ProgressBar value={item.score} colorClass={item.score > 90 ? 'bg-green-500' : 'bg-yellow-500'} />
  </div>
);

const OperationsDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-black">Operations Dashboard</h2>
        <p className="text-sm text-black">Monitor your firm's operational efficiency, data quality, and resource utilization</p>
      </div>

      {/* Process Efficiency Metrics */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-black mb-3">Process Efficiency Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {OPERATIONS_PROCESS_METRICS.map((metric) => (
            <ProcessMetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>

      {/* Workflow & Operations Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center mb-3">
            <ExclamationTriangleIcon className="w-5 h-5 text-black mr-2" />
            <h3 className="text-md font-semibold text-black">Workflow Bottlenecks</h3>
          </div>
          <div className="space-y-2">
            {OPERATIONS_WORKFLOW_BOTTLENECKS.map((item) => (
              <WorkflowBottleneckCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-md font-semibold text-black">Today's Operations Summary</h3>
            <BrainIcon className="w-5 h-5 text-black" />
          </div>
          <div className="space-y-2">
            {OPERATIONS_SUMMARY_ITEMS.map((item) => (
              <OperationsSummaryItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Task Completion Rates */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-black mb-4 text-center">Task Completion Rates by Department</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {OPERATIONS_DEPARTMENT_COMPLETION.map((item) => (
            <DepartmentCompletionRateCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Data Quality Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Data Quality Issues</h3>
          <div className="space-y-2">
            {OPERATIONS_DATA_QUALITY_ISSUES.map((item) => (
              <DataQualityIssueCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Data Consistency Scores</h3>
          <div className="space-y-4">
            {OPERATIONS_DATA_CONSISTENCY.map((item) => (
              <DataConsistencyScoreCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Resource Utilization Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Advisor Capacity & Workload</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-2 rounded-lg bg-red-50">
              <p className="text-2xl font-bold text-red-600">{OPERATIONS_ADVISOR_CAPACITY.overloaded}</p>
              <p className="text-xs">Overloaded</p>
            </div>
            <div className="p-2 rounded-lg bg-green-50">
              <p className="text-2xl font-bold text-green-600">{OPERATIONS_ADVISOR_CAPACITY.wellUtilized}</p>
              <p className="text-xs">Well-Utilized</p>
            </div>
            <div className="p-2 rounded-lg bg-yellow-50">
              <p className="text-2xl font-bold text-yellow-600">{OPERATIONS_ADVISOR_CAPACITY.underUtilized}</p>
              <p className="text-xs">Under-Utilized</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t text-sm flex justify-between items-center">
            <div>
              <p className="font-medium text-black">Firm Average Utilization</p>
              <p className="text-xs text-black">Optimal Range (65-85%)</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-green-600">{OPERATIONS_ADVISOR_CAPACITY.firmAverage}%</p>
              <p className="text-xs text-black">{OPERATIONS_ADVISOR_CAPACITY.wellUtilized} of {OPERATIONS_ADVISOR_CAPACITY.totalAdvisors} advisors</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Task Distribution Efficiency</h3>
          <div className="space-y-3">
            {OPERATIONS_TASK_DISTRIBUTION.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="text-black">{item.name}</span>
                  <span className="font-semibold text-black">{item.value}%</span>
                </div>
                <ProgressBar value={item.value} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Assurance Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Service Delivery Standards</h3>
          <div className="space-y-3">
            {OPERATIONS_SERVICE_DELIVERY.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="text-black">{item.name}</span>
                  <span className="font-semibold text-black">{item.value}%</span>
                </div>
                <ProgressBar value={item.value} colorClass={item.value < 90 ? 'bg-yellow-500' : 'bg-green-500'} />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Error Rate & Improvement Tracking</h3>
          <div className="grid grid-cols-2 gap-4">
            {OPERATIONS_ERROR_IMPROVEMENT.map((item) => (
              <div key={item.id} className="p-2 rounded-lg bg-gray-50">
                <p className="font-bold text-lg text-black">{item.value}</p>
                <p className="text-sm font-medium text-black">{item.name}</p>
                <p className="text-xs text-black">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-black flex justify-between items-center pt-4 border-t mt-6">
        <span className="flex items-center"><ClockIcon className="w-4 h-4 mr-1" />Dashboard last updated: Today at 2:47 PM</span>
        <span>Next refresh in 13 minutes</span>
      </div>
    </div>
  );
};

export default OperationsDashboard;