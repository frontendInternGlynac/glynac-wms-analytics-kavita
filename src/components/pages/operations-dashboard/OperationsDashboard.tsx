"use client";

/*import React from 'react';
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
};*/

/*
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
      // Header 
      <div>
        <h2 className="text-2xl font-bold text-black">Operations Dashboard</h2>
        <p className="text-sm text-black">Monitor your firm's operational efficiency, data quality, and resource utilization</p>
      </div>

      // Process Efficiency Metrics 
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-black mb-3">Process Efficiency Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {OPERATIONS_PROCESS_METRICS.map((metric) => (
            <ProcessMetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>

      // Workflow & Operations Summary 
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

      // Task Completion Rates 
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-black mb-4 text-center">Task Completion Rates by Department</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {OPERATIONS_DEPARTMENT_COMPLETION.map((item) => (
            <DepartmentCompletionRateCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      // Data Quality Management 
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

      //Resource Utilization Analysis 
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

      //Quality Assurance Monitoring 
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

      // Footer 
      <div className="text-center text-xs text-black flex justify-between items-center pt-4 border-t mt-6">
        <span className="flex items-center"><ClockIcon className="w-4 h-4 mr-1" />Dashboard last updated: Today at 2:47 PM</span>
        <span>Next refresh in 13 minutes</span>
      </div>
    </div>
  );
};

export default OperationsDashboard;*/

'use client';

import React, { useState } from 'react';
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
  OPERATIONS_ERROR_IMPROVEMENT
} from './constants';
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
  SeverityLevel,
} from './types';
import {
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  BrainIcon
} from './icons';
import ProgressBar from './ProgressBar';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  BrainIcon
};

const PRIORITY_COLORS: Record<SeverityLevel, { bg: string; text: string }> = {
  HIGH: { bg: 'bg-red-500', text: 'text-white' },
  MED: { bg: 'bg-yellow-500', text: 'text-white' },
  LOW: { bg: 'bg-blue-500', text: 'text-white' }
};

export default function OperationsDashboard() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleAction = (action: string, itemId: string) => {
    console.log(`Performed ${action} on ${itemId}`);
    alert(`Action "${action}" performed on ${itemId}`);
  };

  const renderIcon = (iconName: string, className = 'h-5 w-5 text-indigo-500') => {
    const IconComponent = ICON_MAP[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  const renderMetricTile = (metric: OperationsMetric) => (
    <div key = {metric.id} className={`text-center p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
      <div className={`mx-auto mb-2 p-2 rounded-full ${metric.iconBgColor}  }`}>
        {renderIcon(metric.iconName, 'h-6 w-6 text-gray-700')}
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
      <div className="text-sm text-gray-600">{metric.title}</div>
      <div className="text-xs text-gray-500 mt-1">{metric.subtitle}</div>
      <button 
        className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-indigo-600 hover:to-purple-700 font-medium transition-all duration-300 transform hover:scale-105 w-full"
        onClick={() => handleAction('View Details', metric.id)}
      >
        View Details
      </button>
    </div>
  );

  const renderBottleneck = (bottle: WorkflowBottleneck) => {
    const colors = PRIORITY_COLORS[bottle.level];
    return (
      <div key={bottle.id} className={`p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-l-4 ${bottle.color} shadow-md hover:shadow-lg transition-all duration-300`}>
        <div className="flex justify-between items-start mb-2">
          <div className="font-semibold text-gray-900 text-sm sm:text-base">{bottle.title}</div>
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text}`}>
            {bottle.level}
          </span>
        </div>
        <div className="text-xs sm:text-sm text-gray-600 mb-4">{bottle.subtitle}</div>
        <button 
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded-xl hover:from-red-600 hover:to-orange-600 font-medium transition-all duration-300"
          onClick={() => handleAction('Resolve', bottle.id)}
        >
          Resolve
        </button>
      </div>
    );
  };

  const renderSummaryItem = (item: OperationsSummaryItem) => (
    <div key={item.id} className="text-center p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
      <div className="text-sm text-gray-600">{item.title}</div>
      <div className="text-xs text-gray-500 mt-1">{item.subtitle}</div>
      <button 
        className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-indigo-600 font-medium transition-all duration-300 w-full"
        onClick={() => handleAction('View Summary', item.id)}
      >
        View
      </button>
    </div>
  );

  const renderCompletionRate = (dept: DepartmentCompletionRate) => (
    <div key={dept.id} className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{dept.rate}%</div>
      <ProgressBar value={dept.rate} colorClass={dept.color} />
      <div className="text-sm text-gray-600 font-semibold mt-3">{dept.department}</div>
      <button 
        className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-xl hover:from-purple-600 hover:to-indigo-600 font-medium transition-all duration-300 w-full"
        onClick={() => handleAction('View Department', dept.id)}
      >
        View
      </button>
    </div>
  );

  const renderQualityIssue = (issue: DataQualityIssue) => (
    <div key={issue.id} className={`p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-l-4 ${issue.color} shadow-md hover:shadow-lg transition-all duration-300`}>
      <div className="font-semibold text-gray-900 text-sm sm:text-base mb-2">{issue.title}</div>
      <div className="text-xs sm:text-sm text-gray-600 mb-3">{issue.subtitle}</div>
      <span className="inline-block px-3 py-1 rounded-full text-base font-bold bg-white text-gray-900 shadow-sm">{issue.value}</span>
      <button 
        className="mt-3 w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded-xl hover:from-red-600 hover:to-orange-600 font-medium transition-all duration-300"
        onClick={() => handleAction('Fix Issue', issue.id)}
      >
        Fix
      </button>
    </div>
  );

  const renderConsistencyScore = (score: DataConsistencyScore) => (
    <div key={score.id} className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-gray-900 text-sm sm:text-base">{score.name}</span>
        <span className="text-lg font-bold text-green-700">{score.score}%</span>
      </div>
      <ProgressBar value={score.score} colorClass="bg-green-500" />
      <button 
        className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-xl hover:from-green-600 hover:to-emerald-600 font-medium transition-all duration-300"
        onClick={() => handleAction('View Score', score.id)}
      >
        View
      </button>
    </div>
  );

  const renderAdvisorCapacity = (capacity: AdvisorCapacity) => (
    <div key={capacity.id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="text-center p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-3xl font-bold text-red-700 mb-2">{capacity.overloaded}</div>
        <div className="text-sm text-gray-600">Overloaded Advisors</div>
        <div className="text-xs text-gray-500">Above 85% capacity</div>
      </div>
      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-3xl font-bold text-green-700 mb-2">{capacity.wellUtilized}</div>
        <div className="text-sm text-gray-600">Well-Utilized</div>
        <div className="text-xs text-gray-500">65-85% capacity</div>
      </div>
      <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-3xl font-bold text-yellow-700 mb-2">{capacity.underUtilized}</div>
        <div className="text-sm text-gray-600">Under-Utilized</div>
        <div className="text-xs text-gray-500">Below 65% capacity</div>
      </div>
      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-3xl font-bold text-blue-700 mb-2">{capacity.firmAverage}%</div>
        <div className="text-sm text-gray-600">Firm Average Utilization</div>
        <div className="text-xs text-gray-500">Optimal Range 65-85%</div>
        <div className="text-xs text-gray-500 mt-1">{capacity.totalAdvisors} of {capacity.totalAdvisors} advisors</div>
      </div>
    </div>
  );

  const renderTaskDistribution = (task: TaskDistributionMetric) => (
    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-3xl font-bold text-purple-700 mb-2">{task.value}%</div>
      <div className="text-sm text-gray-600">{task.name}</div>
      {task.subValue && <div className="text-xs text-gray-500 mt-1">{task.subValue}</div>}
    </div>
  );

  const renderServiceDelivery = (service: ServiceDeliveryStandard) => (
    <div className="p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-gray-900 text-sm lg:text-base">{service.name}</span>
        <span className="text-lg font-bold text-blue-700">{service.value}%</span>
      </div>
      <ProgressBar value={service.value} colorClass="bg-blue-500" />
    </div>
  );

  const renderErrorImprovement = (error: ErrorImprovementMetric) => (
    <div className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-3xl font-bold text-gray-900 mb-2">{error.value}</div>
      <div className="text-sm text-gray-600">{error.name}</div>
      <div className="text-xs text-gray-500 mt-1">{error.subtitle}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl xl:text-4xl font-black ">Operations Dashboard</h1>
            <p className="text-gray-600 mt-3 text-sm lg:text-base max-w-3xl">Monitor your firm's operational efficiency, data quality, and resource utilization</p>
          </div>
          <button 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-2xl hover:from-blue-600 hover:to-indigo-700 font-bold flex items-center gap-2  transition-all duration-300 transform hover:scale-105 active:scale-95 w-full lg:w-auto justify-center"
            onClick={() => handleAction('Chat with AI', 'Eva')}
          >
            Chat with AI
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Process Efficiency Metrics */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8 mb-8">
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Process Efficiency Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPERATIONS_PROCESS_METRICS.map(renderMetricTile)}
        </div>
      </section>

      {/* Workflow Bottlenecks & Today's Operations Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Workflow Bottlenecks */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Workflow Bottlenecks</h3>
          <div className="space-y-4">
            {OPERATIONS_WORKFLOW_BOTTLENECKS.map(renderBottleneck)}
          </div>
        </section>

        {/* Today's Operations Summary */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/60 p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Today's Operations Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {OPERATIONS_SUMMARY_ITEMS.map(renderSummaryItem)}
          </div>
        </section>
      </div>

      {/* Task Completion Rates */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8 mb-8">
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Task Completion Rates by Department</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPERATIONS_DEPARTMENT_COMPLETION.map(renderCompletionRate)}
        </div>
      </section>

      {/* Data Quality Management */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8 mb-8">
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Data Quality Management</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Data Quality Issues</h3>
            {OPERATIONS_DATA_QUALITY_ISSUES.map(renderQualityIssue)}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Data Consistency Scores</h3>
            {OPERATIONS_DATA_CONSISTENCY.map(renderConsistencyScore)}
          </div>
        </div>
      </section>

      {/* Resource Utilization Analysis */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8 mb-8">
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Resource Utilization Analysis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: OPERATIONS_ADVISOR_CAPACITY.overloaded, title: 'Overloaded Advisors', desc: 'Above 85% capacity' },
            { value: OPERATIONS_ADVISOR_CAPACITY.wellUtilized, title: 'Well-Utilized', desc: '65-85% capacity' },
            { value: OPERATIONS_ADVISOR_CAPACITY.underUtilized, title: 'Under-Utilized', desc: 'Below 65% capacity' },
            { value: OPERATIONS_ADVISOR_CAPACITY.firmAverage, title: 'Firm Average Utilization', desc: 'Optimal Range 65-85%' }
          ].map((resource, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{resource.value}%</div>
              <div className="text-sm lg:text-base text-gray-600 font-semibold mb-1">{resource.title}</div>
              <div className="text-xs text-gray-500">{resource.desc}</div>
              <div className="text-xs text-gray-500 mt-1">{OPERATIONS_ADVISOR_CAPACITY.totalAdvisors} advisors</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance Monitoring */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8 mb-8">
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Quality Assurance Monitoring</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Service Delivery Standards</h3>
            {OPERATIONS_SERVICE_DELIVERY.map(renderServiceDelivery)}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Error Rate & Improvement Tracking</h3>
            {OPERATIONS_ERROR_IMPROVEMENT.map(renderErrorImprovement)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-8 p-4 bg-white/50 rounded-2xl border border-gray-200/50">
        <div className="flex items-center justify-center gap-3">
          <ClockIcon className="h-4 w-4" />
          <span>Dashboard last updated: Today at 2:47 PM</span>
          <span>•</span>
          <span className="font-semibold text-indigo-600">Next refresh in 13 minutes</span>
        </div>
      </footer>
    </div>
  );
}