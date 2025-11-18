"use client";
import React from 'react';
import { MOCK_AI_AGENT_SUGGESTION, MOCK_KEY_METRICS, MOCK_REPORT_CATEGORIES } from './constants';
import { AIAgentSuggestion, KeyMetric, ReportCategory } from './types';
import { ChevronDownIcon, PlusIcon, AdjustmentsHorizontalIcon, UserGroupIcon, BriefcaseIcon, UserCircleIcon, ShieldCheckIcon, CogIcon } from './icons';

const iconMap: Record<string, React.ReactNode> = {
  ChevronDownIcon: <ChevronDownIcon className="w-4 h-4" />,
  PlusIcon: <PlusIcon className="w-4 h-4" />,
  AdjustmentsHorizontalIcon: <AdjustmentsHorizontalIcon className="w-4 h-4" />,
  UserGroupIcon: <UserGroupIcon className="w-4 h-4" />,
  BriefcaseIcon: <BriefcaseIcon className="w-4 h-4" />,
  UserCircleIcon: <UserCircleIcon className="w-4 h-4" />,
  ShieldCheckIcon: <ShieldCheckIcon className="w-4 h-4" />,
  CogIcon: <CogIcon className="w-4 h-4" />
};

const ReportsAnalytics: React.FC = () => {
  const categories: ReportCategory[] = MOCK_REPORT_CATEGORIES;
  const metrics: KeyMetric[] = MOCK_KEY_METRICS;
  const agent: AIAgentSuggestion = MOCK_AI_AGENT_SUGGESTION;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Reports &amp; Analytics</h1>
          <p className="text-sm text-black">Custom reporting and business intelligence with executive summaries and operational insights.</p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 bg-white border rounded-md text-sm">
            <AdjustmentsHorizontalIcon className="w-4 h-4" />
            Export Dashboard
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 bg-white border rounded-md text-sm">
            All Time Periods <ChevronDownIcon className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md text-sm">
            <PlusIcon className="w-4 h-4" /> Build New Report
          </button>
        </div>
      </div>

      {/* Report Builder Summary */}
      <div className="rounded-lg p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-medium">Custom Report Builder</h2>
            <p className="text-sm opacity-90">Create custom reports by combining data from multiple systems</p>
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 bg-white text-black rounded-md text-sm">
            <PlusIcon className="w-4 h-4" /> Build New Report
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { label: 'Analytics', value: 47 },
            { label: 'Scheduled Reports', value: 12 },
            { label: 'Dashboards', value: 8 },
            { label: 'Reports Generated', value: 156 }
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-md p-3 text-center shadow-sm">
              <div className="text-lg font-semibold text-black">{item.value}</div>
              <div className="text-xs text-black">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick filter tags */}
      <div className="flex items-center gap-2 text-sm">
        {[
          { label: 'Executive Summary', color: 'bg-blue-100 text-blue-700' },
          { label: 'Client Analytics', color: 'bg-green-100 text-green-700' },
          { label: 'Advisor Performance', color: 'bg-indigo-100 text-indigo-700' },
          { label: 'Operational', color: 'bg-orange-100 text-orange-800' },
          { label: 'Compliance', color: 'bg-red-100 text-red-700' }
        ].map((tag) => (
          <button key={tag.label} className={`inline-flex items-center gap-1 px-2 py-1 rounded-md ${tag.color}`}>
            {iconMap['ChevronDownIcon']}
            {tag.label}
          </button>
        ))}
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white border rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <span>{iconMap[cat.icon] ?? iconMap['ShieldCheckIcon']}</span>
                <h3 className="font-medium">{cat.title}</h3>
              </div>
              <button className="text-sm text-blue-600">View</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
              {cat.reports.map((r) => (
                <div key={r.id} className="border rounded-md p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{r.title}</div>
                      <div className="text-xs text-black">{r.description}</div>
                    </div>
                    <button className="text-xs text-blue-600">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-medium mb-3">Key Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.id} className={`rounded-md p-3 ${m.color}`}>
              <div className="text-xl font-semibold">{m.value}</div>
              <div className="text-xs">{m.title}</div>
              <div className={`text-xs ${m.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>{m.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Agent */}
      <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">{iconMap['UserCircleIcon']}</div>
          <div className="flex-1">
            <div className="font-medium">Anthony · Billing & Reporting Agent</div>
            <div className="text-xs text-black">An assistant for Custom Reports and Revenue Analysis</div>
            <div className="mt-3">
              <div className="text-sm">{agent.recentAnalysis.text}</div>
              <div className="flex gap-2 mt-2">
                {agent.recentAnalysis.actions.map((a, idx) => (
                  <button key={idx} className={`px-2 py-1 rounded-md text-xs ${a.style === 'primary' ? 'bg-yellow-600 text-white' : 'bg-white border'}`}>{a.label}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
          <div>
            <div className="text-sm font-medium mb-2">Recent Analysis</div>
            <div className="text-black">{agent.recentAnalysis.text}</div>
          </div>
          <div>
            <div className="font-medium mb-2">Available Reports</div>
            <ul className="list-disc pl-5 text-black">
              {agent.availableReports.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">Quick Actions</div>
            <ul className="list-disc pl-5 text-black">
              {agent.quickActions.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;