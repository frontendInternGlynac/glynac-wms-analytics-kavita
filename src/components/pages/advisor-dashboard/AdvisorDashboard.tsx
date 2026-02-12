
'use client';
/*
import React, { useState } from 'react';
import {
  ADVISOR_PORTFOLIO_SUMMARY,
  ADVISOR_ACTION_ITEMS,
  ADVISOR_DASHBOARD_CLIENTS,
  ADVISOR_PERFORMANCE_INSIGHTS,
  ADVISOR_CLIENT_OPPORTUNITIES,
  ADVISOR_PRIORITY_ACTIONS
} from './constants';
import {
  PortfolioSummaryMetric,
  AdvisorActionItem,
  AdvisorDashboardClient,
  PerformanceInsight,
  ClientOpportunity,
  PriorityAction
} from './types';
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  StarIcon,
  ChevronDownIcon,
  BrainIcon,
  ClockIcon
} from './icons';
//import ProgressBar from './ProgressBar';

export default function AdvisorDashboard() {
  const [selectedClient, setSelectedClient] = useState<AdvisorDashboardClient | null>(null);

  const handleAction = (action: string, itemId: string) => {
    console.log(`Performed ${action} on ${itemId}`);
    alert(`Action "${action}" performed on ${itemId}`);
  };

  const renderMetricTile = (metric: PortfolioSummaryMetric) => {
    const Icon = metric.icon;
    return (
      <div key={metric.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
        <div className={`${metric.iconBgColor} inline-flex p-2 rounded-full mb-2`}>
          <Icon className="h-5 w-5 text-gray-700" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
        <div className="text-sm text-gray-600">{metric.title}</div>
        <div className={`text-xs ${metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>{metric.change}</div>
        <button 
          className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
          onClick={() => handleAction('View Details', metric.id)}
        >
          View
        </button>
      </div>
    );
  };

  const renderActionItem = (item: AdvisorActionItem) => (
    <div key={item.id} className="bg-gray-50 p-4 rounded-md border-l-4 border-orange-500 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex justify-between items-center shadow-sm">
      <div>
        <div className="font-medium text-gray-900">{item.title}</div>
        <div className="text-sm text-gray-500">{item.subtitle}</div>
      </div>
      <span className="text-xl font-bold text-orange-700">{item.count}</span>
      <button 
        className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
        onClick={() => handleAction('Resolve', item.id)}
      >
        Resolve
      </button>
    </div>
  );

  const renderCommunicationHub = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-blue-50 p-4 rounded-md shadow-sm">
        <span className="font-medium text-gray-900">Avg Response Time</span>
        <span className="text-xl font-bold text-blue-700">2.3 hours</span>
      </div>
      <div className="flex justify-between items-center bg-green-50 p-4 rounded-md shadow-sm">
        <span className="font-medium text-gray-900">Meetings This Week</span>
        <span className="text-xl font-bold text-green-700">18</span>
      </div>
      <div className="flex justify-between items-center bg-red-50 p-4 rounded-md shadow-sm">
        <span className="font-medium text-gray-900">Outstanding Tasks</span>
        <span className="text-xl font-bold text-red-700">6</span>
      </div>
      <div className="flex justify-between items-center bg-purple-50 p-4 rounded-md shadow-sm">
        <span className="font-medium text-gray-900">Email Engagement</span>
        <span className="text-xl font-bold text-purple-700">87%</span>
      </div>
      <button 
        className="w-full bg-white border border-gray-300 p-4 rounded-md text-left hover:bg-gray-50 transition-all duration-200 shadow-sm transform hover:scale-105"
        onClick={() => handleAction('Compose', 'client-update')}
      >
        Compose client update
      </button>
      <button 
        className="w-full bg-white border border-gray-300 p-4 rounded-md text-left hover:bg-gray-50 transition-all duration-200 shadow-sm transform hover:scale-105"
        onClick={() => handleAction('Schedule', 'follow-ups')}
      >
        Schedule follow-ups
      </button>
      <button 
        className="w-full bg-white border border-gray-300 p-4 rounded-md text-left hover:bg-gray-50 transition-all duration-200 shadow-sm transform hover:scale-105"
        onClick={() => handleAction('View', 'communication-reports')}
      >
        View communication reports
      </button>
    </div>
  );

  const renderClientRow = (client: AdvisorDashboardClient) => (
    <tr key={client.id} className="border-b border-gray-200 hover:bg-gray-50 transition-all duration-200 cursor-pointer" onClick={() => setSelectedClient(client)}>
      <td className="px-4 py-3 flex items-center space-x-2">
        <div className={`w-6 h-6 rounded-full ${client.avatarColor} flex items-center justify-center text-white text-xs font-bold`}>
          {client.initials}
        </div>
        <div>
          <div className="font-medium text-gray-900">{client.name}</div>
          <div className="text-xs text-gray-500">{client.type}</div>
        </div>
      </td>
      <td className="px-4 py-3 text-right">${(client.aum / 1000000).toFixed(1)}M</td>
      <td className="px-4 py-3 text-right text-sm text-gray-500">{client.lastContact}</td>
      <td className="px-4 py-3 text-right">
        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${client.healthScore >= 8 ? 'bg-green-100 text-green-700' : client.healthScore >= 7 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
          {client.healthScore}
        </span>
      </td>
      <td className="px-4 py-3 text-right text-sm text-gray-500">{client.nextMeeting}</td>
      <td className="px-4 py-3 text-right">
        <button 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            handleAction('View', client.id);
          }}
        >
          View
        </button>
      </td>
    </tr>
  );

  const renderPerformanceInsight = (insight: PerformanceInsight) => (
    <div key={insight.id} className={`p-4 rounded-md flex justify-between items-center ${insight.bgColor} hover:opacity-80 transition-opacity duration-200 shadow-sm`}>
      <span className="text-sm font-medium text-gray-900">{insight.title}</span>
      <span className="text-xl font-bold text-gray-900">{insight.valueDisplay}</span>
      <button 
        className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
        onClick={() => handleAction('View', insight.id)}
      >
        View
      </button>
    </div>
  );

  const renderClientOpportunity = (opp: ClientOpportunity) => (
    <div key={opp.id} className="p-4 rounded-md border-l-4 border-red-500 hover:bg-gray-50 transition-all duration-200 flex justify-between items-center shadow-sm">
      <div>
        <div className="font-medium text-gray-900">{opp.title}</div>
        <div className="text-sm text-gray-500">{opp.subtitle}</div>
      </div>
      <span className="text-xl font-bold text-red-700">{opp.value}</span>
      <button 
        className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
        onClick={() => handleAction('Resolve', opp.id)}
      >
        Resolve
      </button>
    </div>
  );

  const renderPriorityAction = (action: PriorityAction) => (
    <div key={action.id} className="p-4 rounded-md bg-gray-50 flex justify-between items-center hover:bg-gray-100 transition-all duration-200 shadow-sm">
      <div className="flex items-start space-x-2">
        <div className={`w-3 h-3 rounded-full ${action.dotColor} mt-1`}></div>
        <div>
          <div className="font-medium text-gray-900">{action.title}</div>
          <div className="text-sm text-gray-500">{action.subtitle}</div>
        </div>
      </div>
      <span className={`text-sm font-medium ${action.priorityColor}`}>{action.priority}</span>
      <button 
        className={`ml-4 px-3 py-1 rounded-md text-sm font-medium text-white ${action.buttonColor} hover:opacity-80 transition-opacity duration-200`}
        onClick={() => handleAction(action.buttonText, action.id)}
      >
        {action.buttonText}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8 font-sans text-gray-800">
      

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        <div className="mb-6 bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-4xl  font-black ">Advisor Dashboard</h2>
          <p className="text-gray-500 mt-1">Your clients, performance metrics, and daily action items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ADVISOR_PORTFOLIO_SUMMARY.map(renderMetricTile)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-4">Action Items Today</h3>
            <div className="space-y-4">
              {ADVISOR_ACTION_ITEMS.map(renderActionItem)}
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-4">Communication Hub</h3>
            {renderCommunicationHub()}
          </section>
        </div>

        <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 mb-8">
          <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
            My Clients
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>All Clients</option>
            </select>
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">AUM</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">Health</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">Next Meeting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ADVISOR_DASHBOARD_CLIENTS.map(renderClientRow)}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-4">My Performance Insights</h3>
            <div className="space-y-4">
              {ADVISOR_PERFORMANCE_INSIGHTS.map(renderPerformanceInsight)}
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-4">Communication Analytics</h3>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-100 rounded-md flex justify-between items-center shadow-sm">
                <span className="font-medium text-gray-900">Email Open Rate by Client Segment</span>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>High Net Worth</span>
                    <span>94%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Emerging Wealth</span>
                    <span>78%</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-100 rounded-md flex justify-between items-center shadow-sm">
                <span className="font-medium text-gray-900">Response Time by Communication Method</span>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Email</span>
                    <span>2.3h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Phone</span>
                    <span>0.8h</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-purple-100 rounded-md flex justify-between items-center shadow-sm">
                <span className="font-medium text-gray-900">Client Channel Preferences</span>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Email</span>
                    <span>45%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Phone</span>
                    <span>32%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>In-Person</span>
                    <span>23%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 mb-8">
          <h3 className="text-lg font-bold mb-4">Client Opportunities & Alerts</h3>
          <div className="space-y-4">
            {ADVISOR_CLIENT_OPPORTUNITIES.map(renderClientOpportunity)}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 mb-8">
          <h3 className="text-lg font-bold mb-4">Today's Priority Actions</h3>
          <div className="space-y-4">
            {ADVISOR_PRIORITY_ACTIONS.map(renderPriorityAction)}
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 p-4">
          <div className="flex items-center justify-center gap-2">
            <ClockIcon className="h-4 w-4" />
            <span>Dashboard last updated: Today at 2:47 PM</span>
            <span className="text-gray-300">|</span>
            <span>Next refresh in 13 minutes</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
  */


import React, { useState } from 'react';
import {
  ADVISOR_PORTFOLIO_SUMMARY,
  ADVISOR_ACTION_ITEMS,
  ADVISOR_DASHBOARD_CLIENTS,
  ADVISOR_PERFORMANCE_INSIGHTS,
  ADVISOR_CLIENT_OPPORTUNITIES,
  ADVISOR_PRIORITY_ACTIONS
} from './constants';
import {
  PortfolioSummaryMetric,
  AdvisorActionItem,
  AdvisorDashboardClient,
  PerformanceInsight,
  ClientOpportunity,
  PriorityAction
} from './types';
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  StarIcon,
  ChevronDownIcon,
  BrainIcon,
  ClockIcon
} from './icons';
//import ProgressBar from './ProgressBar';

export default function AdvisorDashboard() {
  const [selectedClient, setSelectedClient] = useState<AdvisorDashboardClient | null>(null);

  const handleAction = (action: string, itemId: string) => {
    console.log(`Performed ${action} on ${itemId}`);
    alert(`Action "${action}" performed on ${itemId}`);
  };

  const renderMetricTile = (metric: PortfolioSummaryMetric) => {
    const Icon = metric.icon;
    return (
      <div key={metric.id} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
        <div className={`${metric.iconBgColor} inline-flex p-2 rounded-md mb-2`}>
          <Icon className="h-5 w-5 text-gray-700" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
        <div className="text-sm text-gray-600">{metric.title}</div>
        <div className={`text-xs ${metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>{metric.change}</div>
        <button 
          className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
          onClick={() => handleAction('View Details', metric.id)}
        >
          View
        </button>
      </div>
    );
  };

  const renderActionItem = (item: AdvisorActionItem) => (
    <div key={item.id} className="bg-gray-50 p-4 rounded-md border-l-4 hover:bg-gray-100 transition-all duration-200 flex justify-between items-center">
      <div>
        <div className="font-medium text-gray-900">{item.title}</div>
        <div className="text-sm text-gray-500">{item.subtitle}</div>
      </div>
      <span className="text-xl font-bold text-gray-900">{item.count}</span>
      <button 
        className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
        onClick={() => handleAction('Resolve', item.id)}
      >
        Resolve
      </button>
    </div>
  );

  const renderCommunicationHub = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-blue-50 p-4 rounded-md">
        <span className="font-medium text-gray-900">Avg Response Time</span>
        <span className="text-xl font-bold text-blue-700">2.3 hours</span>
      </div>
      <div className="flex justify-between items-center bg-green-50 p-4 rounded-md">
        <span className="font-medium text-gray-900">Meetings This Week</span>
        <span className="text-xl font-bold text-green-700">18</span>
      </div>
      <div className="flex justify-between items-center bg-red-50 p-4 rounded-md">
        <span className="font-medium text-gray-900">Outstanding Tasks</span>
        <span className="text-xl font-bold text-red-700">6</span>
      </div>
      <div className="flex justify-between items-center bg-purple-50 p-4 rounded-md">
        <span className="font-medium text-gray-900">Email Engagement</span>
        <span className="text-xl font-bold text-purple-700">87%</span>
      </div>
      <button 
        className="w-full bg-white border border-gray-300 p-4 rounded-md text-left hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
        onClick={() => handleAction('Compose', 'client-update')}
      >
        Compose client update
      </button>
      <button 
        className="w-full bg-white border border-gray-300 p-4 rounded-md text-left hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
        onClick={() => handleAction('Schedule', 'follow-ups')}
      >
        Schedule follow-ups
      </button>
      <button 
        className="w-full bg-white border border-gray-300 p-4 rounded-md text-left hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
        onClick={() => handleAction('View', 'communication-reports')}
      >
        View communication reports
      </button>
    </div>
  );

  const renderClientRow = (client: AdvisorDashboardClient) => (
    <tr key={client.id} className="border-b border-gray-200 hover:bg-gray-50 transition-all duration-200 cursor-pointer" onClick={() => setSelectedClient(client)}>
      <td className="px-4 py-3 flex items-center space-x-2">
        <div className={`w-6 h-6 rounded-full ${client.avatarColor} flex items-center justify-center text-white text-xs font-bold`}>
          {client.initials}
        </div>
        <div>
          <div className="font-medium text-gray-900">{client.name}</div>
          <div className="text-xs text-gray-500">{client.type}</div>
        </div>
      </td>
      <td className="px-4 py-3 text-right">${(client.aum / 1000000).toFixed(1)}M</td>
      <td className="px-4 py-3 text-right text-sm text-gray-500">{client.lastContact}</td>
      <td className="px-4 py-3 text-right">
        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${client.healthScore >= 8 ? 'bg-green-100 text-green-700' : client.healthScore >= 7 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
          {client.healthScore}
        </span>
      </td>
      <td className="px-4 py-3 text-right text-sm text-gray-500">{client.nextMeeting}</td>
      <td className="px-4 py-3 text-right">
        <button 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            handleAction('View', client.id);
          }}
        >
          View
        </button>
      </td>
    </tr>
  );

  const renderPerformanceInsight = (insight: PerformanceInsight) => (
    <div key={insight.id} className={`p-4 rounded-md flex justify-between items-center ${insight.bgColor} hover:opacity-80 transition-opacity duration-200`}>
      <span className="text-sm font-medium text-gray-900">{insight.title}</span>
      <span className="text-xl font-bold text-gray-900">{insight.valueDisplay}</span>
      <button 
        className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
        onClick={() => handleAction('View', insight.id)}
      >
        View
      </button>
    </div>
  );

  const renderClientOpportunity = (opp: ClientOpportunity) => (
    <div key={opp.id} className="p-4 rounded-md border-l-4 hover:bg-gray-50 transition-all duration-200 flex justify-between items-center">
      <div>
        <div className="font-medium text-gray-900">{opp.title}</div>
        <div className="text-sm text-gray-500">{opp.subtitle}</div>
      </div>
      <span className="text-xl font-bold text-gray-900">{opp.value}</span>
      <button 
        className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
        onClick={() => handleAction('Resolve', opp.id)}
      >
        Resolve
      </button>
    </div>
  );

  const renderPriorityAction = (action: PriorityAction) => (
    <div key={action.id} className="p-4 rounded-md bg-gray-50 flex justify-between items-center hover:bg-gray-100 transition-all duration-200">
      <div className="flex items-start space-x-2">
        <div className={`w-3 h-3 rounded-full ${action.dotColor} mt-1`}></div>
        <div>
          <div className="font-medium text-gray-900">{action.title}</div>
          <div className="text-sm text-gray-500">{action.subtitle}</div>
        </div>
      </div>
      <span className={`text-sm font-medium ${action.priorityColor}`}>{action.priority}</span>
      <button 
        className={`ml-4 px-3 py-1 rounded-md text-sm font-medium text-white ${action.buttonColor} hover:opacity-80 transition-opacity duration-200`}
        onClick={() => handleAction(action.buttonText, action.id)}
      >
        {action.buttonText}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Glynac</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Advisor Dashboard</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        <div className="mb-6">
          <h2 className="text-4xl font-black">Advisor Dashboard</h2>
          <p className="text-gray-500 mt-1">Your clients, performance metrics, and daily action items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ADVISOR_PORTFOLIO_SUMMARY.map(renderMetricTile)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-4">Action Items Today</h3>
            <div className="space-y-4">
              {ADVISOR_ACTION_ITEMS.map(renderActionItem)}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-4">Communication Hub</h3>
            {renderCommunicationHub()}
          </section>
        </div>

        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8">
          <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
            My Clients
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>All Clients</option>
            </select>
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">AUM</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">Health</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">Next Meeting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {ADVISOR_DASHBOARD_CLIENTS.map(renderClientRow)}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-4">My Performance Insights</h3>
            <div className="space-y-4">
              {ADVISOR_PERFORMANCE_INSIGHTS.map(renderPerformanceInsight)}
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-4">Communication Analytics</h3>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-100 rounded-md flex justify-between items-center shadow-sm">
                <span className="font-medium text-gray-900">Email Open Rate by Client Segment</span>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>High Net Worth</span>
                    <span>94%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Emerging Wealth</span>
                    <span>78%</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-100 rounded-md flex justify-between items-center shadow-sm">
                <span className="font-medium text-gray-900">Response Time by Communication Method</span>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Email</span>
                    <span>2.3h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Phone</span>
                    <span>0.8h</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-purple-100 rounded-md flex justify-between items-center shadow-sm">
                <span className="font-medium text-gray-900">Client Channel Preferences</span>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Email</span>
                    <span>45%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Phone</span>
                    <span>32%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>In-Person</span>
                    <span>23%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 mb-8">
          <h3 className="text-lg font-bold mb-4">Client Opportunities & Alerts</h3>
          <div className="space-y-4">
            {ADVISOR_CLIENT_OPPORTUNITIES.map(renderClientOpportunity)}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 mb-8">
          <h3 className="text-lg font-bold mb-4">Today's Priority Actions</h3>
          <div className="space-y-4">
            {ADVISOR_PRIORITY_ACTIONS.map(renderPriorityAction)}
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 p-4">
          <div className="flex items-center justify-center gap-2">
            <ClockIcon className="h-4 w-4" />
            <span>Dashboard last updated: Today at 2:47 PM</span>
            <span className="text-gray-300">|</span>
            <span>Next refresh in 13 minutes</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

