'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Users, DollarSign, BarChart3, Clock, ChevronDown } from 'lucide-react';

export default function EmployeeAnalyticsPage() {
    return (
        <DashboardLayout
            dashboardTitle="Employee Analytics"
            currentPath="/employee-analytics"
            userName="Ethan - Analytics Agent"
            userInitials="E"
            currentTab="employee-analytics"
            avatarColor='bg-indigo-500'
            chatButtonColor='bg-blue-600 hover:bg-blue-700'
        >
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Employee Analytics</h2>
                        <p className="text-gray-600">
                            Performance tracking and analysis for advisors and teams with productivity metrics and communication analysis
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer hover:bg-gray-50">
                                <option>All Teams</option>
                                <option>Wealth Management</option>
                                <option>Investment Advisory</option>
                            </select>
                            <ChevronDown className="bg-transparent w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer hover:bg-gray-50">
                                <option>This Quarter</option>
                                <option>Last Quarter</option>
                                <option>This Year</option>
                            </select>
                            <ChevronDown className="bg-transparent w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Advisors */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Total Advisors</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
                            <p className="text-sm text-green-600 font-medium">2 new this quarter</p>
                        </div>
                    </div>

                    {/* Total AUM Managed */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-green-50 rounded-lg">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Total AUM Managed</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">$47.2M</h3>
                            <p className="text-sm text-green-600 font-medium">+8.3% this quarter</p>
                        </div>
                    </div>

                    {/* Avg Performance Score */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-purple-50 rounded-lg">
                                <BarChart3 className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Avg Performance Score</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">8.4/10</h3>
                            <p className="text-sm text-blue-600 font-medium">Industry: 7.2/10</p>
                        </div>
                    </div>

                    {/* Avg Response Time */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-yellow-50 rounded-lg">
                                <Clock className="w-6 h-6 text-yellow-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Avg Response Time</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">2.3h</h3>
                            <p className="text-sm text-green-600 font-medium">Target: &lt;4h</p>
                        </div>
                    </div>
                </div>
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Advisor Performance Analytics (2 cols wide) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-900">Advisor Performance Analytics</h3>
                                <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                                    <span className="flex items-center gap-1"><span className="w-3 h-3 text-gray-400"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg></span> Filter</span>
                                    <span className="flex items-center gap-1"><span className="w-3 h-3 text-gray-400"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg></span> Sort</span>
                                </button>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {/* Sarah Johnson */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                SJ
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-gray-900">Sarah Johnson</h4>
                                                <p className="text-sm text-gray-600">Senior Financial Advisor</p>
                                                <p className="text-sm mt-1">
                                                    <span className="text-gray-600">47 Clients</span>
                                                    <span className="mx-2 text-gray-300">|</span>
                                                    <span className="text-green-600 font-medium">$12.8M AUM</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-8 text-center">
                                            <div>
                                                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm mx-auto mb-1">
                                                    9.2
                                                </div>
                                                <p className="text-xs text-gray-500">Performance</p>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900 mb-1">1.8h</div>
                                                <p className="text-xs text-gray-500">Avg Response</p>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-green-600 mb-1">96%</div>
                                                <p className="text-xs text-gray-500">Client Retention</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-50">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Communication Score:</p>
                                            <p className="text-sm font-medium text-green-600">Excellent</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Task Completion: <span className="text-blue-600 font-medium">94%</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Client Satisfaction: <span className="text-green-600 font-medium">4.8/5</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">New Clients YTD: <span className="text-purple-600 font-medium">8</span></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Michael Chen */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                MC
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-gray-900">Michael Chen</h4>
                                                <p className="text-sm text-gray-600">Senior Financial Advisor</p>
                                                <p className="text-sm mt-1">
                                                    <span className="text-gray-600">42 Clients</span>
                                                    <span className="mx-2 text-gray-300">|</span>
                                                    <span className="text-green-600 font-medium">$11.2M AUM</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-8 text-center">
                                            <div>
                                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-1">
                                                    8.7
                                                </div>
                                                <p className="text-xs text-gray-500">Performance</p>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900 mb-1">2.1h</div>
                                                <p className="text-xs text-gray-500">Avg Response</p>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-green-600 mb-1">92%</div>
                                                <p className="text-xs text-gray-500">Client Retention</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-50">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Communication Score:</p>
                                            <p className="text-sm font-medium text-blue-600">Good</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Task Completion: <span className="text-blue-600 font-medium">89%</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Client Satisfaction: <span className="text-green-600 font-medium">4.6/5</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">New Clients YTD: <span className="text-purple-600 font-medium">6</span></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Emily Rodriguez */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                ER
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-gray-900">Emily Rodriguez</h4>
                                                <p className="text-sm text-gray-600">Financial Advisor</p>
                                                <p className="text-sm mt-1">
                                                    <span className="text-gray-600">31 Clients</span>
                                                    <span className="mx-2 text-gray-300">|</span>
                                                    <span className="text-green-600 font-medium">$7.8M AUM</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-8 text-center">
                                            <div>
                                                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm mx-auto mb-1">
                                                    8.1
                                                </div>
                                                <p className="text-xs text-gray-500">Performance</p>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900 mb-1">2.6h</div>
                                                <p className="text-xs text-gray-500">Avg Response</p>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-green-600 mb-1">89%</div>
                                                <p className="text-xs text-gray-500">Client Retention</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-50">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Communication Score:</p>
                                            <p className="text-sm font-medium text-blue-600">Good</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Task Completion: <span className="text-blue-600 font-medium">82%</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Client Satisfaction: <span className="text-green-600 font-medium">4.4/5</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">New Clients YTD: <span className="text-purple-600 font-medium">12</span></p>
                                        </div>
                                    </div>
                                </div>

                                {/* David Wilson */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                DW
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-gray-900">David Wilson</h4>
                                                <p className="text-sm text-gray-600">Junior Financial Advisor</p>
                                                <p className="text-sm mt-1">
                                                    <span className="text-gray-600">18 Clients</span>
                                                    <span className="mx-2 text-gray-300">|</span>
                                                    <span className="text-green-600 font-medium">$3.4M AUM</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-8 text-center">
                                            <div>
                                                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm mx-auto mb-1">
                                                    7.3
                                                </div>
                                                <p className="text-xs text-gray-500">Performance</p>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900 mb-1">3.2h</div>
                                                <p className="text-xs text-gray-500">Avg Response</p>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-green-600 mb-1">95%</div>
                                                <p className="text-xs text-gray-500">Client Retention</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-50">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Communication Score:</p>
                                            <p className="text-sm font-medium text-amber-600">Average</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Task Completion: <span className="text-amber-600 font-medium">76%</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Client Satisfaction: <span className="text-blue-600 font-medium">4.1/5</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">New Clients YTD: <span className="text-purple-600 font-medium">9</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar Metrics */}
                    <div className="space-y-6">
                        {/* Team Performance Trends */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Team Performance Trends</h3>
                            <div className="relative h-64 w-full">
                                {/* Chart Area */}
                                <div className="absolute left-8 right-0 top-0 bottom-6">
                                    {/* Grid Lines - mapped 7.0 to 10.0 */}
                                    <div className="flex flex-col justify-between h-full w-full">
                                        {[10.0, 9.5, 9.0, 8.5, 8.0, 7.5, 7.0].map((val, i) => (
                                            <div key={i} className="border-b border-gray-100 w-full h-0 relative">
                                                <span className="absolute -left-8 -top-2 text-xs text-gray-400 w-6 text-right">{val.toFixed(1)}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Line Chart SVG */}
                                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        {/* Data: 7.8, 8.1, 8.3, 8.0, 8.4, 8.4 */}
                                        <defs>
                                            <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#2563eb" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M0 73.3 C 10 70, 10 66, 20 63.3 S 30 60, 40 56.6 S 50 63, 60 66.6 S 70 56, 80 53.3 S 90 53.3, 100 53.3"
                                            fill="none"
                                            stroke="#3b82f6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        {/* Dots */}
                                        {[
                                            { x: 0, y: 73.3, v: "7.8" },
                                            { x: 20, y: 63.3, v: "8.1" },
                                            { x: 40, y: 56.6, v: "8.3" },
                                            { x: 60, y: 66.6, v: "8.0" },
                                            { x: 80, y: 53.3, v: "8.4" },
                                            { x: 100, y: 53.3, v: "8.4" }
                                        ].map((p, i) => (
                                            <g key={i} className="group cursor-pointer">
                                                <circle cx={p.x} cy={p.y} r="1.5" className="fill-white stroke-blue-600 stroke-2 transition-all duration-200 ease-in-out group-hover:r-3" />
                                                <rect x={p.x - 4} y={p.y - 12} width="8" height="6" rx="1" fill="#1e40af" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <text x={p.x} y={p.y - 15} textAnchor="middle" fontSize="4" fill="#1e40af" fontWeight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity">{p.v}</text>
                                            </g>
                                        ))}
                                    </svg>
                                </div>

                                {/* X-Axis Labels */}
                                <div className="absolute left-8 right-0 bottom-0 flex justify-between text-xs text-gray-500 pt-2">
                                    <span>Jan</span>
                                    <span>Feb</span>
                                    <span>Mar</span>
                                    <span>Apr</span>
                                    <span>May</span>
                                    <span>Jun</span>
                                </div>
                            </div>
                        </div>

                        {/* Communication Quality */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Communication Quality</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-gray-700">Response Time</span>
                                        <span className="text-xs font-bold text-gray-900">2.3h avg</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-gray-700">Client Engagement</span>
                                        <span className="text-xs font-bold text-gray-900">87%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-gray-700">Follow-up Completion</span>
                                        <span className="text-xs font-bold text-gray-900">91%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '91%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-gray-700">Professional Quality</span>
                                        <span className="text-xs font-bold text-gray-900">94%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Delivery Excellence */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Service Delivery Excellence</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Client Satisfaction</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm font-bold text-gray-900">4.6/5</span>
                                        <div className="flex text-yellow-400">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Issue Resolution Rate</span>
                                    <span className="text-sm font-bold text-green-600">96%</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Cross-selling Success</span>
                                    <span className="text-sm font-bold text-purple-600">23%</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-gray-600">Referral Generation</span>
                                    <span className="text-sm font-bold text-blue-600">18 this quarter</span>
                                </div>
                            </div>
                        </div>



                        {/* Ethan - Analytics Agent */}
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                                    E
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900">Ethan - Analytics Agent</h3>
                                    <p className="text-xs text-blue-600 font-medium">AI Assistant for Performance Analysis</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Suggestion 1 */}
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                                    <p className="text-sm text-gray-700 mb-3">
                                        David Wilson's response times are above target. Recommend additional training on client communication best practices?
                                    </p>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors">
                                            Schedule Training
                                        </button>
                                        <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded hover:bg-gray-50 transition-colors">
                                            Review Later
                                        </button>
                                    </div>
                                </div>

                                {/* Suggestion 2 */}
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                                    <p className="text-sm text-gray-700 mb-3">
                                        Sarah Johnson shows excellent performance metrics. Consider her for team lead role?
                                    </p>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors">
                                            Discuss with HR
                                        </button>
                                        <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded hover:bg-gray-50 transition-colors">
                                            Not now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button className="text-sm font-medium text-blue-700 hover:text-blue-800 flex items-center justify-center gap-1 mx-auto">
                                    Chat with Ethan <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Professional Development */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Professional Development</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Training Completion</span>
                                    <span className="text-sm font-bold text-green-600">94%</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Certifications Current</span>
                                    <span className="text-sm font-bold text-blue-600">11/12</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Compliance Score</span>
                                    <span className="text-sm font-bold text-green-600">9.1/10</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-gray-600">Risk Incidents YTD</span>
                                    <span className="text-sm font-bold text-red-600">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Status Bar */}
                <div className="bg-white border-t border-gray-200 p-4 rounded-b-xl flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>Employee analytics last updated: Today at 1:30 PM</span>
                    </div>
                    <span>Next refresh in 30 minutes</span>
                </div>
            </div>
        </DashboardLayout>
    );
}
