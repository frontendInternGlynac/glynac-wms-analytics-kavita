"use client";

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
    FileText,
    Download,
    Plus,
    ChevronDown,
    Layout,
    BarChart3,
    Users,
    User,
    ClipboardList,
    ShieldCheck,
    ArrowRight,
    ArrowUp,
    Wrench
} from 'lucide-react';

export default function ReportsAnalyticsPage() {
    return (
        <DashboardLayout
            dashboardTitle="Reports & Analytics"
            currentPath="/reports-analytics"
            userName="Reporting Agent"
            userInitials="A"
            currentTab="reports-analytics"
            avatarColor="bg-yellow-500"
            chatButtonColor='bg-yellow-600 hover:bg-yellow-700'
            showSystemAdminButton={true}
        >
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Reports & Analytics</h2>
                        <p className="text-gray-600 max-w-3xl">
                            Custom reporting and business intelligence with executive summaries and operational analytics
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer hover:bg-gray-50 min-w-[150px]">
                                <option>All Time Periods</option>
                                <option>This Month</option>
                                <option>Last Quarter</option>
                                <option>YTD</option>
                            </select>
                            <ChevronDown className="bg-transparent w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export Dashboard
                        </button>
                    </div>
                </div>

                {/* Hero Section - Custom Report Builder */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-lg">
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Custom Report Builder</h3>
                                <p className="text-blue-100">Create custom reports by combining data from multiple systems</p>
                            </div>
                            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 backdrop-blur-sm border border-white/30">
                                <Plus className="w-4 h-4" />
                                Build New Report
                            </button>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Available Reports */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                                <span className="block text-3xl font-bold mb-1">47</span>
                                <span className="text-sm text-blue-100">Available Reports</span>
                            </div>
                            {/* Scheduled Reports */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                                <span className="block text-3xl font-bold mb-1">12</span>
                                <span className="text-sm text-blue-100">Scheduled Reports</span>
                            </div>
                            {/* Custom Dashboards */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                                <span className="block text-3xl font-bold mb-1">8</span>
                                <span className="text-sm text-blue-100">Custom Dashboards</span>
                            </div>
                            {/* Reports Generated */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                                <span className="block text-3xl font-bold mb-1">156</span>
                                <span className="text-sm text-blue-100">Reports Generated</span>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Shapes/Background Details could go here if needed, but gradient is sufficient for now */}
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-bold text-gray-700 mr-2">Quick Filters:</span>
                    <button className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">
                        Executive Summary
                    </button>
                    <button className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-green-100 transition-colors">
                        Client Analytics
                    </button>
                    <button className="bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">
                        Advisor Performance
                    </button>
                    <button className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-orange-100 transition-colors">
                        Operational
                    </button>
                    <button className="bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-red-100 transition-colors">
                        Compliance
                    </button>
                </div>

                {/* Report Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Executive Summary Reports */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Executive Summary Reports</h3>
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <BarChart3 className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Firm Performance Overview</h4>
                                    <p className="text-xs text-gray-500 mt-1">Comprehensive firm metrics and KPIs</p>
                                </div>
                                <span className="text-sm font-bold text-blue-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Client Relationship Health</h4>
                                    <p className="text-xs text-gray-500 mt-1">Engagement trends and risk indicators</p>
                                </div>
                                <span className="text-sm font-bold text-blue-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Operational Efficiency</h4>
                                    <p className="text-xs text-gray-500 mt-1">Process metrics and optimization</p>
                                </div>
                                <span className="text-sm font-bold text-blue-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Client Analytics Reports */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Client Analytics Reports</h3>
                            <div className="p-2 bg-green-50 rounded-lg">
                                <Users className="w-5 h-5 text-green-600" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">Client Engagement Analysis</h4>
                                    <p className="text-xs text-gray-500 mt-1">Communication patterns and touchpoints</p>
                                </div>
                                <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">AUM Growth Distribution</h4>
                                    <p className="text-xs text-gray-500 mt-1">Portfolio growth and allocation trends</p>
                                </div>
                                <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">Service Delivery Quality</h4>
                                    <p className="text-xs text-gray-500 mt-1">Response times and satisfaction metrics</p>
                                </div>
                                <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Advisor Performance */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Advisor Performance</h3>
                            <div className="p-2 bg-purple-50 rounded-lg">
                                <User className="w-5 h-5 text-purple-600" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Individual Metrics</h4>
                                    <p className="text-xs text-gray-500 mt-1">Advisor-specific performance data</p>
                                </div>
                                <span className="text-sm font-bold text-purple-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Team Comparison</h4>
                                    <p className="text-xs text-gray-500 mt-1">Comparative analysis across teams</p>
                                </div>
                                <span className="text-sm font-bold text-purple-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Productivity Analysis</h4>
                                    <p className="text-xs text-gray-500 mt-1">Efficiency and output metrics</p>
                                </div>
                                <span className="text-sm font-bold text-purple-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Operational Reports */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Operational Reports</h3>
                            <div className="p-2 bg-orange-50 rounded-lg">
                                <ClipboardList className="w-5 h-5 text-orange-600" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Process Efficiency</h4>
                                    <p className="text-xs text-gray-500 mt-1">Workflow analysis and bottlenecks</p>
                                </div>
                                <span className="text-sm font-bold text-orange-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Task Completion Tracking</h4>
                                    <p className="text-xs text-gray-500 mt-1">Department and individual progress</p>
                                </div>
                                <span className="text-sm font-bold text-orange-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Resource Utilization</h4>
                                    <p className="text-xs text-gray-500 mt-1">System and personnel optimization</p>
                                </div>
                                <span className="text-sm font-bold text-orange-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Reports (Featured) */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all relative">
                        {/* Selected Indicator could be added here if needed, but border is sufficient */}
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Compliance Reports</h3>
                            <div className="p-2 bg-red-50 rounded-lg">
                                <ShieldCheck className="w-5 h-5 text-red-600" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">Regulatory Status</h4>
                                    <p className="text-xs text-gray-500 mt-1">Current compliance standing</p>
                                </div>
                                <span className="text-sm font-bold text-red-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">Audit Preparation</h4>
                                    <p className="text-xs text-gray-500 mt-1">Readiness assessment and gaps</p>
                                </div>
                                <span className="text-sm font-bold text-red-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                            <div className="flex justify-between items-center group cursor-pointer">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">Policy Adherence</h4>
                                    <p className="text-xs text-gray-500 mt-1">Monitoring and violation tracking</p>
                                </div>
                                <span className="text-sm font-bold text-red-600 flex items-center gap-1">
                                    View <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Performance Metrics */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Key Performance Metrics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-blue-50 rounded-xl p-6 text-center">
                            <span className="block text-3xl font-bold text-blue-900 mb-1">$847M</span>
                            <span className="block text-sm text-blue-700 mb-2">Total AUM</span>
                            <span className="text-xs font-semibold text-green-600 flex items-center justify-center gap-1">
                                <ArrowUp className="w-3 h-3" /> +12.3% QoQ
                            </span>
                        </div>
                        <div className="bg-green-50 rounded-xl p-6 text-center">
                            <span className="block text-3xl font-bold text-green-900 mb-1">284</span>
                            <span className="block text-sm text-green-700 mb-2">Active Clients</span>
                            <span className="text-xs font-semibold text-green-600 flex items-center justify-center gap-1">
                                <ArrowUp className="w-3 h-3" /> +8.1% YoY
                            </span>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-6 text-center">
                            <span className="block text-3xl font-bold text-purple-900 mb-1">94.2%</span>
                            <span className="block text-sm text-purple-700 mb-2">Client Satisfaction</span>
                            <span className="text-xs font-semibold text-green-600 flex items-center justify-center gap-1">
                                <ArrowUp className="w-3 h-3" /> +2.1% MTD
                            </span>
                        </div>
                        <div className="bg-orange-50 rounded-xl p-6 text-center">
                            <span className="block text-3xl font-bold text-orange-900 mb-1">87%</span>
                            <span className="block text-sm text-orange-700 mb-2">Process Efficiency</span>
                            <span className="text-xs font-semibold text-green-600 flex items-center justify-center gap-1">
                                <ArrowUp className="w-3 h-3" /> +5.4% QoQ
                            </span>
                        </div>
                    </div>
                </div>

                {/* AI Agent Footer */}
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
                            A
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Anthony - Billing & Reporting Agent</h3>
                            <p className="text-sm text-gray-600">AI Assistant for Custom Reports and Revenue Analysis</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Recent Analysis */}
                        <div className="bg-white p-5 rounded-lg border border-amber-100 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-3">Recent Analysis</h4>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                Generated Q2 revenue breakdown by household - found 4 accounts needing fee adjustments.
                            </p>
                            <div className="flex gap-2">
                                <button className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors">
                                    Review Report
                                </button>
                                <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-1.5 rounded text-xs font-medium transition-colors">
                                    Schedule Meeting
                                </button>
                            </div>
                        </div>

                        {/* Available Reports */}
                        <div className="bg-white p-5 rounded-lg border border-amber-100 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-3">Available Reports</h4>
                            <ul className="space-y-2">
                                <li className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="text-amber-500 mt-1">•</span> Custom AUM analysis and breakdowns
                                </li>
                                <li className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="text-amber-500 mt-1">•</span> Performance metrics compilation
                                </li>
                                <li className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="text-amber-500 mt-1">•</span> Revenue attribution analysis
                                </li>
                                <li className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="text-amber-500 mt-1">•</span> Operational metrics tracking
                                </li>
                            </ul>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white p-5 rounded-lg border border-amber-100 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-3">Quick Actions</h4>
                            <div className="space-y-3">
                                <button className="block w-full text-left text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded px-2 py-1 transition-colors">
                                    Generate invoice report
                                </button>
                                <button className="block w-full text-left text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded px-2 py-1 transition-colors">
                                    AUM growth analysis
                                </button>
                                <button className="block w-full text-left text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded px-2 py-1 transition-colors">
                                    Fee reconciliation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
