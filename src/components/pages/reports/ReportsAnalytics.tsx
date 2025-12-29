"use client";
import React from 'react';
import { MOCK_AI_AGENT_SUGGESTION, MOCK_KEY_METRICS, MOCK_REPORT_CATEGORIES } from './constants';
import { AIAgentSuggestion, KeyMetric, ReportCategory } from './types';
import { ChevronDownIcon, PlusIcon, AdjustmentsHorizontalIcon, UserGroupIcon, BriefcaseIcon, UserCircleIcon, ShieldCheckIcon, CogIcon } from './icons';
import { useState } from 'react';
type Timeperiod = 'Last 7 Days' | 'Last 30 Days' | 'Last Quarter' | 'Last Year';
//This was updated 

/*const iconMap: Record<string, React.ReactNode> = {
  ChevronDownIcon: <ChevronDownIcon className="w-4 h-4" />,
  PlusIcon: <PlusIcon className="w-4 h-4" />,
  AdjustmentsHorizontalIcon: <AdjustmentsHorizontalIcon className="w-4 h-4" />,
  UserGroupIcon: <UserGroupIcon className="w-4 h-4" />,
  BriefcaseIcon: <BriefcaseIcon className="w-4 h-4" />,
  UserCircleIcon: <UserCircleIcon className="w-4 h-4" />,
  ShieldCheckIcon: <ShieldCheckIcon className="w-4 h-4" />,
  CogIcon: <CogIcon className="w-4 h-4" />
};*/



const ICON_MAP: Record<string, React.ComponentType<any>> = {
  ChevronDownIcon,
  PlusIcon,
  AdjustmentsHorizontalIcon,
  UserGroupIcon,
  BriefcaseIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  CogIcon
};

export default function ReportsAndAnalytics() {
  const [timePeriod, setTimePeriod] = useState<Timeperiod>();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? MOCK_REPORT_CATEGORIES
    : MOCK_REPORT_CATEGORIES.filter(cat => cat.id.includes(selectedCategory));

  const handleViewReport = (id: string) => {
    alert(`Viewing report: ${id}`);
  };

  const handleBuildNewReport = () => {
    alert('Building new report...');
  };

  const handleExportDashboard = () => {
    alert('Exporting dashboard...');
  };

  const handleQuickAction = (action: string) => {
    alert(`Performing quick action: ${action}`);
  };

  const handleAIAgentAction = (label: string) => {
    alert(`AI Action: ${label}`);
  };

  const handleChatWithAI = () => {
    alert('Opening AI Chat...');
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = ICON_MAP[iconName];
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  const renderChangeIndicator = (changeType: 'increase' | 'decrease') => {
    return changeType === 'increase' ? (
      <span className="text-green-600">↑</span>
    ) : (
      <span className="text-red-600">↓</span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 p-4 sm:p-6 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Reports & Analytics</h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Custom reporting and business intelligence with executive summaries and operational analytics</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-end">
            <div className="relative w-full sm:w-auto">
              <select 
                className="w-full sm:w-auto border border-gray-300 px-4 py-2 rounded-lg text-sm appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value as Timeperiod)}
              >
                {['Last year', 'Last quarter', 'Last month', 'Last week'].map(period => (
                  <option key={period} value={period}>{period}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <button 
              className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-indigo-600 hover:to-indigo-700 font-bold flex items-center gap-2 shadow-lg transition-all duration-200 transform hover:scale-105"
              onClick={handleExportDashboard}
            >
              Export Dashboard
            </button>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-lg transition-all duration-200 transform hover:scale-105"
              onClick={handleChatWithAI}
            >
              Chat with AI
              <ChevronDownIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Custom Report Builder */}
      <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-indigo-500" />
              Custom Report Builder
            </h2>
            <p className="text-gray-600 text-sm mt-1">Create custom reports by combining data from multiple systems</p>
          </div>
          <button 
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 font-bold flex items-center gap-2 shadow-lg transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center sm:justify-start"
            onClick={handleBuildNewReport}
          >
            <PlusIcon className="h-4 w-4" />
            Build New Report
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-indigo-50 p-4 rounded-lg text-center border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600">47</div>
            <div className="text-gray-600 text-sm mt-1">Available Reports</div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg text-center border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600">12</div>
            <div className="text-gray-600 text-sm mt-1">Scheduled Reports</div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg text-center border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600">8</div>
            <div className="text-gray-600 text-sm mt-1">Custom Dashboards</div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg text-center border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-600">156</div>
            <div className="text-gray-600 text-sm mt-1">Reports Generated</div>
          </div>
        </div>
      </section>

      {/* Quick Filters */}
      <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Filters:</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Executive Summary', value: 'exec-summary' },
            { label: 'Client Analytics', value: 'client-analytics' },
            { label: 'Advisor Performance', value: 'advisor-performance' },
            { label: 'Operational', value: 'operational-reports' },
            { label: 'Compliance', value: 'compliance-reports' }
          ].map(({ label, value }) => (
            <button
              key={value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === value
                  ? 'bg-indigo-500 text-white shadow-md' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(selectedCategory === value ? 'all' : value)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Report Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredCategories.map((category: ReportCategory) => (
          <section key={category.id} className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              {renderIcon(category.icon)}
              <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
            </div>
            <div className="space-y-3">
              {category.reports.map((report) => (
                <div key={report.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 truncate">{report.title}</div>
                    <div className="text-sm text-gray-600 truncate">{report.description}</div>
                  </div>
                  <button 
                    className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 font-medium transition-all duration-200 transform hover:scale-105 ml-4 flex-shrink-0"
                    onClick={() => handleViewReport(report.id)}
                  >
                    View →
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Key Performance Metrics */}
      <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <AdjustmentsHorizontalIcon className="h-5 w-5 text-indigo-500" />
          Key Performance Metrics
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOCK_KEY_METRICS.map((metric: KeyMetric) => (
            <div key={metric.id} className={`text-center p-4 rounded-lg ${metric.color} border border-opacity-50 hover:shadow-md transition-all duration-200`}>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600 mb-2">{metric.title}</div>
              <div className="text-sm font-semibold flex items-center justify-center gap-1">
                {renderChangeIndicator(metric.changeType)}
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Assistant */}
        <section className="lg:col-span-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-md p-4 sm:p-6 border border-yellow-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Anthony - Billing & Reporting Agent</h4>
                <p className="text-sm text-gray-600">AI Assistant for Custom Reports and Revenue Analysis</p>
              </div>
            </div>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-lg transition-all duration-200 transform hover:scale-105 self-start sm:self-auto"
              onClick={handleChatWithAI}
            >
              Chat with AI
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Analysis */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <strong className="text-gray-900 block mb-3">Recent Analysis</strong>
              <p className="text-sm text-gray-700 mb-4">{MOCK_AI_AGENT_SUGGESTION.recentAnalysis.text}</p>
              <div className="flex flex-wrap gap-2">
                {MOCK_AI_AGENT_SUGGESTION.recentAnalysis.actions.map((action, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                      action.style === 'primary'
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                    onClick={() => handleAIAgentAction(action.label)}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Available Reports */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <strong className="text-gray-900 block mb-3">Available Reports</strong>
              <ul className="space-y-1 text-sm text-gray-700 list-disc pl-5">
                {MOCK_AI_AGENT_SUGGESTION.availableReports.map((report, index) => (
                  <li key={index}>{report}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h4>
          <div className="space-y-3">
            {MOCK_AI_AGENT_SUGGESTION.quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                onClick={() => handleQuickAction(action)}
              >
                <CogIcon className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-left flex-1">{action}</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-400" />
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}