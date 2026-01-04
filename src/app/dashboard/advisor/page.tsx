'use client';

import React from 'react';
import PortfolioSummary from '@/components/dashboard/PortfolioSummary';
import PerformanceInsights from '@/components/dashboard/PerformanceInsights';
import ClientOpportunities from '@/components/dashboard/ClientOpportunities';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { portfolioSummaryData, clientsData } from '@/components/dashboard/MockData';

interface PriorityAction {
  id: string;
  title: string;
  description: string;
  status?: string;
  statusColor?: string;
  buttonText: string;
  buttonColor: string;
  buttonBg: string;
  icon: string;
}

const priorityActions: PriorityAction[] = [
  {
    id: 'call-martinez',
    title: 'Call Martinez Tech Corp - Urgent',
    description: '32 days since last contact, declining portfolio',
    status: 'HIGH PRIORITY',
    statusColor: 'text-red-600',
    buttonText: 'Contact Now',
    buttonColor: 'text-white',
    buttonBg: 'bg-red-600 hover:bg-red-700',
    icon: '🔴',
  },
  {
    id: 'prepare-johnson',
    title: 'Prepare Johnson Family Quarterly Review',
    description: 'Meeting tomorrow at 2:00 PM',
    status: 'DUE TODAY',
    statusColor: 'text-amber-600',
    buttonText: 'Start Prep',
    buttonColor: 'text-white',
    buttonBg: 'bg-amber-600 hover:bg-amber-700',
    icon: '🟡',
  },
  {
    id: 'kyc-renewals',
    title: 'Complete KYC Renewals',
    description: '4 clients requiring updated documentation',
    status: 'THIS WEEK',
    statusColor: 'text-blue-600',
    buttonText: 'View Details',
    buttonColor: 'text-blue-600',
    buttonBg: 'bg-transparent border border-blue-600 hover:bg-blue-50',
    icon: '🔵',
  },
];

export default function AdvisorPage() {
  return (
    <DashboardLayout
      dashboardTitle="Advisor Dashboard"
      currentPath="/dashboard/advisor"
      userName="Sarah Chen - Senior Advisor"
      userInitials="SC"
      currentTab="dashboard"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 1. Portfolio Summary Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            My Portfolio Dashboard
          </h2>
          <p className="text-gray-600 mb-6">
            Your clients, performance metrics, and daily action items
          </p>
          <PortfolioSummary data={portfolioSummaryData} />
        </section>

        {/* 2. Performance Insights + Communication Analytics (3 boxes side by side) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Box 1: Performance Insights */}
          <PerformanceInsights />

          {/* Box 2: Email Open Rate by Client Segment */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Email Open Rate<br />by Client<br />Segment
              </h3>
              <div className="text-right">
                <p className="text-xs text-gray-500">HubSpot</p>
                <p className="text-xs text-gray-500">Powered</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* High Net Worth */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">High Net Worth</span>
                  <span className="text-base font-bold text-gray-900">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: '94%' }}
                  ></div>
                </div>
              </div>

              {/* Mass Affluent */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Mass Affluent</span>
                  <span className="text-base font-bold text-gray-900">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-cyan-500 h-2.5 rounded-full"
                    style={{ width: '78%' }}
                  ></div>
                </div>
              </div>

              {/* Emerging Wealth */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Emerging Wealth</span>
                  <span className="text-base font-bold text-gray-900">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-orange-500 h-2.5 rounded-full"
                    style={{ width: '65%' }}
                  ></div>
                </div>
              </div>

              {/* Overall Email Engagement */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">Overall Email Engagement</span>
                  <span className="text-base font-bold text-gray-900">79%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3: Response Time by Communication Method */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Response Time by<br />Communication<br />Method
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">Email</span>
                  <span className="text-base font-bold text-gray-900">2.3h</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-teal-500 h-2.5 rounded-full"
                    style={{ width: '45%' }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  45% of communications via this<br />channel
                </p>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">Phone</span>
                  <span className="text-base font-bold text-gray-900">0.8h</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-teal-500 h-2.5 rounded-full"
                    style={{ width: '32%' }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  32% of communications via this<br />channel
                </p>
              </div>

              {/* In-Person */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">In-Person</span>
                  <span className="text-base font-bold text-gray-900">1.2h</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-teal-500 h-2.5 rounded-full"
                    style={{ width: '23%' }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  23% of communications via this<br />channel
                </p>
              </div>

              {/* Fastest Response Note */}
              <div className="pt-3 border-t border-gray-200 mt-4">
                <p className="text-xs text-gray-600">
                  📊 Fastest response via Phone (0.8h<br />average)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Client Opportunities & Alerts + Communication Hub (2 columns) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Client Opportunities & Alerts */}
          <ClientOpportunities />

          {/* Communication Hub */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Communication Hub
              </h2>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View Details →
              </a>
            </div>

            {/* Hub Metrics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-sm text-gray-700">
                  Avg Response Time
                </span>
                <span className="text-lg font-bold text-teal-600">2.3 hours</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-sm text-gray-700">
                  Meetings This Week
                </span>
                <span className="text-lg font-bold text-gray-900">18</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-sm text-gray-700">Client Sentiment</span>
                <span className="text-lg font-bold text-green-600">
                  Positive (4.6/5)
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-gray-700">Follow-ups Pending</span>
                <span className="text-lg font-bold text-orange-600">7</span>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  This Week's Schedule
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Today</span>
                    <span className="font-medium">4 meetings</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tomorrow</span>
                    <span className="font-medium">5 meetings</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rest of Week</span>
                    <span className="font-medium">9 meetings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Today's Priority Actions */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Today's Priority Actions
          </h2>

          <div className="space-y-3">
            {priorityActions.map((action) => (
              <div
                key={action.id}
                className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{action.icon}</span>
                      <h3 className="text-base font-bold text-gray-900">
                        {action.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    {action.status && (
                      <span
                        className={`text-xs font-bold ${action.statusColor} whitespace-nowrap`}
                      >
                        {action.status}
                      </span>
                    )}
                    <button
                      className={`px-4 py-2 rounded font-medium text-sm ${action.buttonBg} ${action.buttonColor} whitespace-nowrap transition-colors`}
                    >
                      {action.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. My Clients Table */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">My Clients</h2>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700">
                <option>All Clients</option>
              </select>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200">
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    CLIENT
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    AUM
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    LAST CONTACT
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    HEALTH SCORE
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    NEXT MEETING
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientsData.map((client) => (
                  <tr
                    key={client.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {client.name}
                        </p>
                        <p className="text-xs text-gray-600">{client.type}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">
                          {client.aum}
                        </p>
                        <p
                          className={`text-xs ${client.ytdChange.includes('-')
                            ? 'text-red-600'
                            : 'text-green-600'
                            }`}
                        >
                          {client.ytdChange} YTD
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p
                        className={`text-sm ${client.lastContact.includes('ago')
                          ? 'text-gray-600'
                          : 'text-red-600 font-medium'
                          }`}
                      >
                        {client.lastContact}
                      </p>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getHealthScoreBadge(
                          client.healthScore,
                        )}`}
                      >
                        {client.healthScore === 'excellent' &&
                          '✓ Excellent (9.2)'}
                        {client.healthScore === 'good' && '◐ Good (7.8)'}
                        {client.healthScore === 'at-risk' && '⚠ At Risk (3.1)'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-600">
                        {client.nextMeeting}
                      </p>
                    </td>
                    <td className="py-4 px-4">
                      <button
                        className={`text-sm font-medium ${client.action?.includes('Contact')
                          ? 'text-red-600 hover:text-red-700'
                          : 'text-blue-600 hover:text-blue-700'
                          }`}
                      >
                        {client.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>Showing 3 of {clientsData.length} clients</p>
          </div>
        </section>
      </div>
    </DashboardLayout >
  );
}

/**
 * Helper function to get health score badge styling
 */
function getHealthScoreBadge(score: string): string {
  switch (score) {
    case 'excellent':
      return 'bg-green-50 text-green-700 border border-green-200';
    case 'good':
      return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
    case 'at-risk':
      return 'bg-red-50 text-red-700 border border-red-200';
    default:
      return 'bg-gray-50 text-gray-700 border border-gray-200';
  }
}