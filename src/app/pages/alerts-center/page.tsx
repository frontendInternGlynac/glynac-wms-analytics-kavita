'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { AlertTriangle, Info, Bell, CheckCircle, ChevronDown } from 'lucide-react';

export default function AlertsCenterPage() {
    return (
        <DashboardLayout
            dashboardTitle="Alerts Center"
            currentPath="/alerts-center"
            userName="Robert - Compliance Agent"
            userInitials="R"
            currentTab="alerts-center"
            avatarColor='bg-red-500'
             chatButtonColor='bg-blue-600 hover:bg-blue-700'
        >
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Alerts Center</h2>
                        <p className="text-gray-600 max-w-3xl">
                            Centralized notification system that proactively identifies risks, compliance issues, and operational problems
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer hover:bg-gray-50 min-w-[140px]">
                                <option>All Alert Types</option>
                                <option>Compliance</option>
                                <option>Operational</option>
                            </select>
                            <ChevronDown className="bg-transparent w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer hover:bg-gray-50 min-w-[140px]">
                                <option>All Priorities</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                            <ChevronDown className="bg-transparent w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors">
                            Mark All as Read
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Critical Alerts */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-red-500">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-red-50 rounded-full">
                                <AlertTriangle className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Critical Alerts</p>
                                <h3 className="text-2xl font-bold text-gray-900">7</h3>
                            </div>
                        </div>
                        <p className="text-sm text-red-500 font-medium mt-3">Require immediate attention</p>
                    </div>

                    {/* High Priority */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-yellow-400">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-yellow-50 rounded-full">
                                <Info className="w-6 h-6 text-yellow-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">High Priority</p>
                                <h3 className="text-2xl font-bold text-gray-900">23</h3>
                            </div>
                        </div>
                        <p className="text-sm text-yellow-600 font-medium mt-3">Action needed today</p>
                    </div>

                    {/* Medium Priority */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-blue-500">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 rounded-full">
                                <AlertTriangle className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Medium Priority</p>
                                <h3 className="text-2xl font-bold text-gray-900">41</h3>
                            </div>
                        </div>
                        <p className="text-sm text-blue-500 font-medium mt-3">Review this week</p>
                    </div>

                    {/* Resolved Today */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-green-500">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-50 rounded-full">
                                <CheckCircle className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Resolved Today</p>
                                <h3 className="text-2xl font-bold text-gray-900">18</h3>
                            </div>
                        </div>
                        <p className="text-sm text-green-500 font-medium mt-3">Successfully addressed</p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                    {/* Active Alerts List */}
                    <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-[600px]">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white rounded-t-xl z-10">
                            <h3 className="text-lg font-bold text-gray-900">Active Alerts</h3>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 border border-gray-200 text-gray-600 text-sm font-medium rounded hover:bg-gray-50 flex items-center gap-2">
                                    <span className="w-4 h-4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></span>
                                    Filter
                                </button>
                                <button className="px-3 py-1.5 border border-gray-200 text-gray-600 text-sm font-medium rounded hover:bg-gray-50 flex items-center gap-2">
                                    <span className="w-4 h-4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></span>
                                    Export
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                            {/* Alert Item 1: High-Value Client Communication Drop */}
                            <div className="border border-gray-200 rounded-lg p-5 border-l-4 border-l-red-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-red-100 rounded-full flex-shrink-0">
                                            <AlertTriangle className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900 mb-1">High-Value Client Communication Drop</h4>
                                            <p className="text-sm text-gray-600 mb-3">Wilson Family ($2.4M AUM) - No advisor contact in 21 days. Last communication sentiment: <span className="font-medium text-gray-800">Negative</span></p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 items-center">
                                                <span className="flex items-center gap-1 text-red-600 font-medium">Client Risk Alert</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>Generated by AI Analysis</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>2 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-shrink-0">
                                        <button className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded hover:bg-blue-700 transition-colors whitespace-nowrap">
                                            Assign Advisor
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-500 text-xs font-medium rounded hover:bg-gray-50 transition-colors whitespace-nowrap">
                                            Dismiss
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Alert Item 2: KYC Documentation Expiring Soon */}
                            <div className="border border-gray-200 rounded-lg p-5 border-l-4 border-l-yellow-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-yellow-100 rounded-full flex-shrink-0">
                                            <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900 mb-1">KYC Documentation Expiring Soon</h4>
                                            <p className="text-sm text-gray-600 mb-3">Thompson Holdings LLC - KYC documentation expires in 5 days. Risk assessment update required.</p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 items-center">
                                                <span className="flex items-center gap-1 text-yellow-600 font-medium">Compliance & Regulatory</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>Automated Check</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>6 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-shrink-0">
                                        <button className="px-4 py-2 bg-green-600 text-white text-xs font-bold rounded hover:bg-green-700 transition-colors whitespace-nowrap">
                                            Request Update
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-500 text-xs font-medium rounded hover:bg-gray-50 transition-colors whitespace-nowrap">
                                            Extend Deadline
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Alert Item 3: Onboarding Process Delay */}
                            <div className="border border-gray-200 rounded-lg p-5 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                                            <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900 mb-1">Onboarding Process Delay</h4>
                                            <p className="text-sm text-gray-600 mb-3">Foster Family onboarding - Documentation collection overdue by 3 days. Account setup on hold.</p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 items-center">
                                                <span className="flex items-center gap-1 text-gray-500">Operational Process</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>Grace AI Detection</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>1 day ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-shrink-0">
                                        <button className="px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded hover:bg-purple-700 transition-colors whitespace-nowrap">
                                            Follow Up
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-500 text-xs font-medium rounded hover:bg-gray-50 transition-colors whitespace-nowrap">
                                            Reschedule
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Alert Item 4: Advisor Performance Decline */}
                            <div className="border border-gray-200 rounded-lg p-5 border-l-4 border-l-yellow-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-yellow-100 rounded-full flex-shrink-0">
                                            <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900 mb-1">Advisor Performance Decline</h4>
                                            <p className="text-sm text-gray-600 mb-3">David Wilson - Response time increased to 4.2h (target: &lt;4h). Client satisfaction score dropped to 3.9/5.</p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 items-center">
                                                <span className="flex items-center gap-1 text-gray-500">Performance &amp; Quality</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>Ethan AI Analysis</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>3 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-shrink-0">
                                        <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded hover:bg-indigo-700 transition-colors whitespace-nowrap">
                                            Schedule Training
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-500 text-xs font-medium rounded hover:bg-gray-50 transition-colors whitespace-nowrap">
                                            Review Later
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Alert Item 5: Client Communication Quality Issue */}
                            <div className="border border-gray-200 rounded-lg p-5 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                                            <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900 mb-1">Client Communication Quality Issue</h4>
                                            <p className="text-sm text-gray-600 mb-3">Martinez Account - Professional communication standards not met in recent client emails. Review required.</p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 items-center">
                                                <span className="flex items-center gap-1 text-gray-500">Performance &amp; Quality</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>Communication Analysis</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>5 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-shrink-0">
                                        <button className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded hover:bg-orange-700 transition-colors whitespace-nowrap">
                                            Review Communication
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-500 text-xs font-medium rounded hover:bg-gray-50 transition-colors whitespace-nowrap">
                                            Mark as False Positive
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Alert Item 6: Quarterly Report Preparation Due */}
                            <div className="border border-gray-200 rounded-lg p-5 border-l-4 border-l-gray-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-gray-100 rounded-full flex-shrink-0">
                                            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900 mb-1">Quarterly Report Preparation Due</h4>
                                            <p className="text-sm text-gray-600 mb-3">Q3 client reports preparation deadline in 7 days. 12 advisor reports pending compilation.</p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 items-center">
                                                <span className="flex items-center gap-1 text-gray-500">Operational Process</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>Scheduled Reminder</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>1 day ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-shrink-0">
                                        <button className="px-4 py-2 bg-gray-700 text-white text-xs font-bold rounded hover:bg-gray-800 transition-colors whitespace-nowrap">
                                            Generate Reports
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-500 text-xs font-medium rounded hover:bg-gray-50 transition-colors whitespace-nowrap">
                                            Remind Later
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar Widgets */}
                    <div className="space-y-6">
                        {/* Alert Categories */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Alert Categories</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                        <span className="text-gray-600">Client Risk Alerts</span>
                                    </div>
                                    <span className="font-bold text-gray-900">12</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                                        <span className="text-gray-600">Compliance & Regulatory</span>
                                    </div>
                                    <span className="font-bold text-gray-900">18</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <span className="text-gray-600">Operational Process</span>
                                    </div>
                                    <span className="font-bold text-gray-900">25</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                                        <span className="text-gray-600">Performance & Quality</span>
                                    </div>
                                    <span className="font-bold text-gray-900">16</span>
                                </div>
                            </div>
                        </div>

                        {/* Resolution Performance */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Resolution Performance</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-gray-700">Avg Resolution Time</span>
                                        <span className="text-xs font-bold text-gray-900">2.4h</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-gray-700">Same-day Resolution</span>
                                        <span className="text-xs font-bold text-gray-900">85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-gray-700">Escalation Rate</span>
                                        <span className="text-xs font-bold text-gray-900">12%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '12%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Alert Sources */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Alert Sources</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">AI Analysis Engine</span>
                                    <span className="font-bold text-gray-900">45%</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Automated Compliance Checks</span>
                                    <span className="font-bold text-gray-900">28%</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">System Integration Monitoring</span>
                                    <span className="font-bold text-gray-900">18%</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Manual Reports</span>
                                    <span className="font-bold text-gray-900">9%</span>
                                </div>
                            </div>
                        </div>

                        {/* Robert - Compliance Agent */}
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                                    R
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900">Robert - Compliance Agent</h3>
                                    <p className="text-xs text-red-600 font-medium">AI Assistant for Risk & Compliance</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Suggestion 1 */}
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                                    <p className="text-sm text-gray-700 mb-3">
                                        Wilson Family alert escalated to critical. Their advisor hasn't responded in 24h. Auto-assign to backup advisor?
                                    </p>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded hover:bg-red-700 transition-colors">
                                            Yes, Assign
                                        </button>
                                        <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded hover:bg-gray-50 transition-colors">
                                            Wait 4h
                                        </button>
                                    </div>
                                </div>

                                {/* Suggestion 2 */}
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                                    <p className="text-sm text-gray-700 mb-3">
                                        Found pattern: 3 KYC expirations this week. Recommend implementing 30-day advance warnings?
                                    </p>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded hover:bg-red-700 transition-colors">
                                            Implement
                                        </button>
                                        <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded hover:bg-gray-50 transition-colors">
                                            Review
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button className="text-sm font-medium text-red-700 hover:text-red-800 flex items-center justify-center gap-1 mx-auto">
                                    Chat with Robert <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Alert Settings */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Alert Settings</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Real-time Notifications</span>
                                    <div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Email Summaries</span>
                                    <div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Auto-Assignment</span>
                                    <div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                                    </div>
                                </div>
                                <div className="pt-2 text-right">
                                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                                        Configure Alert Rules →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Status Bar */}
                <div className="bg-white border-t border-gray-200 p-4 rounded-b-xl flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>
                        <span>Alerts last updated: Today at 3:45 PM</span>
                    </div>
                    <span>Next scan in 5 minutes</span>
                </div>
            </div>
        </DashboardLayout>
    );
}
