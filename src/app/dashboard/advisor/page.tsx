'use client';

import React from 'react';
import PortfolioSummary from '@/components/dashboard/PortfolioSummary';
import PerformanceInsights from '@/components/dashboard/PerformanceInsights';
import CommunicationAnalytics from '@/components/dashboard/CommunicationAnalytics';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { portfolioSummaryData, clientsData, actionItems } from '@/components/dashboard/MockData';
import { Mail, Calendar, BarChart3, LayoutDashboard, Clock } from 'lucide-react';


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
        {/* 1. Portfolio Summary Section (Summary Metrics) */}
        <section>
          <PortfolioSummary data={portfolioSummaryData} />
        </section>

        {/* 2. Middle Section: Action Items | [Hub + Schedule] (Equal Width) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side: Action Items Today */}
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-500 text-lg">⚠️</span>
              <h2 className="text-lg font-bold text-gray-900">Action Items Today</h2>
            </div>
            <div className="space-y-3 flex-1">
              {[
                { id: '1', title: 'Overdue Client Contacts', description: 'Johnson, Martinez, Liu families', count: 3, color: 'red' },
                { id: '2', title: 'Meeting Prep Required', description: "Tomorrow's client reviews", count: 5, color: 'amber' },
                { id: '3', title: 'Document Reviews', description: 'Investment proposals pending', count: 2, color: 'orange' },
                { id: '4', title: 'Compliance Tasks', description: 'KYC renewals due', count: 4, color: 'blue' }
              ].map((item) => (
                <div
                  key={item.id}
                  className={`pl-4 border-l-4 rounded-r-md py-2.5 flex items-center justify-between ${item.color === 'red' ? 'border-red-500 bg-red-50' :
                    item.color === 'amber' ? 'border-amber-500 bg-amber-50' :
                      item.color === 'orange' ? 'border-orange-500 bg-orange-50' :
                        'border-blue-500 bg-blue-50'
                    }`}
                >
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.title}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">{item.description}</p>
                  </div>
                  <div className="pr-4 font-bold text-base text-gray-700">{item.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Merged Hub & Schedule Box */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col h-full">
            {/* Communication Hub */}
            <div className="p-5">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900">Communication Hub</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-sm text-gray-600">Avg Response Time</span>
                  <span className="text-sm font-bold text-teal-600">2.3 hours</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-sm text-gray-600">Meetings This Week</span>
                  <span className="text-sm font-bold text-gray-900">18</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-sm text-gray-600">Client Sentiment</span>
                  <span className="text-sm font-bold text-green-600">Positive (4.6/5)</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-sm text-gray-600">Follow-ups Pending</span>
                  <span className="text-sm font-bold text-orange-600">7</span>
                </div>
              </div>
            </div>

            {/* Thin Grey Line Divider */}
            <div className="px-5">
              <div className="border-t border-gray-100 w-full"></div>
            </div>

            {/* This Week's Schedule */}
            <div className="p-5">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900">This Week's Schedule</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-medium">Today</span>
                  <span className="font-bold text-gray-900">4 meetings</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-medium">Tomorrow</span>
                  <span className="font-bold text-gray-900">5 meetings</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-medium">Rest of Week</span>
                  <span className="font-bold text-gray-900">9 meetings</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 3. My Clients Table Section */}
        <section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">My Clients</h2>
            <div className="flex gap-2">
              <select className="text-xs border-gray-200 rounded px-2 py-1">
                <option>All Clients</option>
              </select>
              <button className="text-xs font-medium text-gray-600 border border-gray-200 rounded px-3 py-1 hover:bg-gray-50">Export</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50/50 text-gray-400 uppercase text-[10px] font-bold tracking-widest border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Aum</th>
                  <th className="px-6 py-4">Last Contact</th>
                  <th className="px-6 py-4 text-center">Health Score</th>
                  <th className="px-6 py-4">Next Meeting</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {clientsData.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3.5 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs ${client.name.includes('Johnson') ? 'bg-blue-500' :
                          client.name.includes('Martinez') ? 'bg-purple-500' : 'bg-green-500'
                          }`}>
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-[13px]">{client.name}</p>
                          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">{client.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <div>
                        <p className="font-bold text-gray-900 text-[13px]">{client.aum}</p>
                        <p className={`text-[10px] font-bold ${client.ytdChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {client.ytdChange} YTD
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <p className="text-gray-900 text-[13px] font-medium">{client.lastContact}</p>
                      <p className="text-[10px] text-gray-400">{client.name.includes('Johnson') ? 'Phone call' : client.name.includes('Martinez') ? 'Email' : 'In-person meeting'}</p>
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-bold ${client.healthScore === 'excellent' ? 'bg-green-50 text-green-600 border border-green-100' :
                        client.healthScore === 'good' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                          'bg-red-50 text-red-600 border border-red-100'
                        }`}>
                        {client.healthScore === 'excellent' ? 'Excellent (9.2)' :
                          client.healthScore === 'good' ? 'Good (7.8)' : 'At Risk (3.1)'}
                      </span>
                    </td>
                    <td className="px-6 py-3.5">
                      <p className="text-gray-900 text-[13px] font-medium leading-tight">{client.nextMeeting}</p>
                      <p className="text-[10px] text-gray-400">{client.name.includes('Johnson') ? 'Quarterly Review' : client.name.includes('Martinez') ? 'Schedule needed' : 'Strategy Meeting'}</p>
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <button className="text-xs font-bold transition-colors text-blue-600 hover:text-blue-700">
                        {client.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
            <p className="text-xs text-gray-500 font-medium tracking-tight">Showing 3 of 73 clients</p>
            <button className="text-blue-600 text-xs font-bold hover:underline">View All Clients →</button>
          </div>
        </section>

        {/* 4. Bottom Analytics Section: Performance Insights & Communication Analytics */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PerformanceInsights />
          <CommunicationAnalytics />
        </section>

        {/* 5. NEW SECTION: Client Opportunities & Alerts | Communication Hub (Actions) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Client Opportunities & Alerts */}
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900">Client Opportunities & Alerts</h2>
            </div>
            <div className="space-y-3">
              {[
                { label: 'High-Risk Clients', desc: 'No contact 30+ days', value: '3', color: 'bg-red-50', border: 'border-red-400', textColor: 'text-red-600' },
                { label: 'AUM Concentration', desc: 'Top 3 clients = 67% of AUM', value: 'Risk', color: 'bg-orange-50', border: 'border-orange-400', textColor: 'text-orange-600' },
                { label: 'Compliance Due', desc: 'KYC renewals needed', value: '4', color: 'bg-blue-50', border: 'border-blue-400', textColor: 'text-blue-600' },
                { label: 'Growth Opportunities', desc: 'Potential upsells identified', value: '7', color: 'bg-green-50', border: 'border-green-400', textColor: 'text-green-600' },
                { label: 'Document Collection', desc: 'Pending client submissions', value: '6', color: 'bg-purple-50', border: 'border-purple-400', textColor: 'text-purple-600' },
              ].map((item, idx) => (
                <div key={idx} className={`p-3 rounded-md border-l-4 ${item.color} ${item.border} flex justify-between items-center`}>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.label}</p>
                    <p className="text-[11px] text-gray-500 font-medium">{item.desc}</p>
                  </div>
                  <span className={`text-sm font-bold ${item.textColor}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Communication Hub (Actions) */}
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Communication Hub</h2>
              <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                <span className="text-sm">📋</span> View Details
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 font-medium">Avg Response Time</span>
                <span className="text-sm font-bold text-green-600">2.3 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 font-medium">Meetings This Week</span>
                <span className="text-sm font-bold text-gray-900">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 font-medium">Outstanding Tasks</span>
                <span className="text-sm font-bold text-red-500">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 font-medium">Email Engagement</span>
                <span className="text-sm font-bold text-green-600">87%</span>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="flex items-center gap-3 text-sm text-gray-700 font-medium hover:text-blue-600 w-full group">
                  <Mail className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                  Compose client update
                </button>
                <button className="flex items-center gap-3 text-sm text-gray-700 font-medium hover:text-blue-600 w-full group">
                  <Calendar className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                  Schedule follow-ups
                </button>
                <button className="flex items-center gap-3 text-sm text-gray-700 font-medium hover:text-blue-600 w-full group">
                  <BarChart3 className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                  View communication reports
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Today's Priority Actions Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900">Today's Priority Actions</h2>
          <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm space-y-4">
            {[
              {
                id: '1',
                title: 'Call Martinez Tech Corp - Urgent',
                description: '32 days since last contact, declining portfolio',
                status: 'HIGH PRIORITY',
                action: 'Contact Now',
                bgColor: 'bg-red-50',
                borderColor: 'border-red-100',
                dotColor: 'bg-red-500',
                btnColor: 'bg-red-600 hover:bg-red-700',
                statusColor: 'text-red-600'
              },
              {
                id: '2',
                title: 'Prepare Johnson Family Quarterly Review',
                description: 'Meeting tomorrow at 2:00 PM',
                status: 'DUE TODAY',
                action: 'Start Prep',
                bgColor: 'bg-amber-50',
                borderColor: 'border-amber-100',
                dotColor: 'bg-amber-500',
                btnColor: 'bg-amber-500 hover:bg-amber-600',
                statusColor: 'text-amber-600'
              },
              {
                id: '3',
                title: 'Complete KYC Renewals',
                description: '4 clients requiring updated documentation',
                status: 'THIS WEEK',
                action: 'View Details',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-100',
                dotColor: 'bg-blue-500',
                btnColor: 'bg-blue-600 hover:bg-blue-700',
                statusColor: 'text-blue-600'
              }
            ].map((item) => (
              <div
                key={item.id}
                className={`${item.bgColor} ${item.borderColor} border rounded-xl p-4 flex items-center justify-between transition-all hover:shadow-md`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${item.dotColor} shrink-0`} />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] font-bold tracking-widest ${item.statusColor}`}>
                    {item.status}
                  </span>
                  <button className={`${item.btnColor} text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap`}>
                    {item.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Footer Info */}
        <section className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm flex justify-between items-center text-xs text-gray-400 font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Dashboard last updated: Today at 2:47 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Next refresh in 13 minutes</span>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}