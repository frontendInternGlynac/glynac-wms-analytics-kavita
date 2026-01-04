'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Shield, AlertTriangle, FileText, Calendar, CheckCircle2, MessageSquare, TrendingUp, Activity, User, Server, ShieldCheck, Clock, PieChart } from 'lucide-react';

export default function CompliancePage() {
    return (
        <DashboardLayout
            dashboardTitle="Compliance Dashboard"
            currentPath="/dashboard/compliance"
            userName="Robert Martinez - CCO"
            userInitials="RM"
            currentTab="dashboard"
        >
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Compliance Dashboard</h2>
                    <p className="text-gray-600">
                        Regulatory compliance tracking, risk monitoring, and audit management
                    </p>
                </div>

                {/* Regulatory Monitor */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Regulatory Monitor</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Surveillance Alerts */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
                            <div className="p-3 bg-red-50 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Surveillance Alerts</p>
                                <h4 className="text-3xl font-bold text-gray-900 mb-1">8</h4>
                                <p className="text-sm text-red-600 font-medium">3 high priority</p>
                            </div>
                        </div>

                        {/* KYC Expiring */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
                            <div className="p-3 bg-orange-50 rounded-lg">
                                <FileText className="w-6 h-6 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">KYC Expiring</p>
                                <h4 className="text-3xl font-bold text-gray-900 mb-1">23</h4>
                                <p className="text-sm text-orange-600 font-medium">Next 30 days</p>
                            </div>
                        </div>

                        {/* Filing Deadlines */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Filing Deadlines</p>
                                <h4 className="text-3xl font-bold text-gray-900 mb-1">5</h4>
                                <p className="text-sm text-blue-600 font-medium">Next 15 days</p>
                            </div>
                        </div>

                        {/* Overall Score */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
                            <div className="p-3 bg-green-50 rounded-lg">
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Overall Score</p>
                                <h4 className="text-3xl font-bold text-gray-900 mb-1">94%</h4>
                                <p className="text-sm text-green-600 font-medium">Excellent</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Critical Alerts */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                                <h3 className="text-lg font-bold text-gray-900">Critical Alerts</h3>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            {/* Alert 1 */}
                            <div className="p-4 bg-red-50 rounded-lg border border-red-100 flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Off-Channel Communications</h4>
                                    <p className="text-sm text-gray-600">WhatsApp usage detected - J. Smith</p>
                                </div>
                                <span className="px-3 py-1 bg-white text-red-600 text-xs font-bold rounded shadow-sm">HIGH</span>
                            </div>

                            {/* Alert 2 */}
                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-100 flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Missing Documentation</h4>
                                    <p className="text-sm text-gray-600">KYC expired - Martinez Family Trust</p>
                                </div>
                                <span className="px-3 py-1 bg-white text-orange-600 text-xs font-bold rounded shadow-sm">MED</span>
                            </div>

                            {/* Alert 3 */}
                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Training Overdue</h4>
                                    <p className="text-sm text-gray-600">AML certification - 3 advisors</p>
                                </div>
                                <span className="px-3 py-1 bg-white text-yellow-600 text-xs font-bold rounded shadow-sm">MED</span>
                            </div>

                            {/* Alert 4 */}
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Policy Update Required</h4>
                                    <p className="text-sm text-gray-600">New SEC guidance implementation</p>
                                </div>
                                <span className="px-3 py-1 bg-white text-blue-600 text-xs font-bold rounded shadow-sm">LOW</span>
                            </div>
                        </div>
                    </div>

                    {/* Documentation Compliance */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Documentation Compliance</h3>
                        </div>
                        <div className="p-6 space-y-6">
                            {/* KYC Documentation Current */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">KYC Documentation Current</span>
                                    <span className="text-sm font-bold text-gray-900">92%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                                </div>
                            </div>

                            {/* Required Forms Complete */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">Required Forms Complete</span>
                                    <span className="text-sm font-bold text-gray-900">87%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                                </div>
                            </div>

                            {/* Risk Assessments Current */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">Risk Assessments Current</span>
                                    <span className="text-sm font-bold text-gray-900">96%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                                </div>
                            </div>

                            {/* Signature Collection */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">Signature Collection</span>
                                    <span className="text-sm font-bold text-gray-900">89%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Files Requiring Action</p>
                                    <p className="text-2xl font-bold text-red-600">47</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">Completeness Score</p>
                                    <p className="text-2xl font-bold text-green-600">91%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Communication Compliance & Risk Assessment */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Communication Compliance */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Communication Compliance</h3>
                        </div>
                        <div className="p-6">
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Flagged Keywords Trend</h4>
                                {/* Mock Chart Placeholder */}
                                <div className="h-40 bg-gray-50 rounded border border-gray-100 flex items-end justify-between px-4 pb-0 pt-8 gap-2">
                                    {[30, 45, 25, 60, 40, 75, 50].map((h, i) => (
                                        <div key={i} className="w-full bg-blue-100 rounded-t hover:bg-blue-200 transition-colors relative group">
                                            <div className="absolute w-full bottom-0 bg-blue-500 rounded-t" style={{ height: `${h}%` }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-500">Emails Monitored</p>
                                    <p className="text-xl font-bold text-gray-900">24,892</p>
                                </div>
                                <div className="p-4 bg-red-50 rounded-lg">
                                    <p className="text-sm text-gray-500">Flagged Items</p>
                                    <p className="text-xl font-bold text-red-600">142 <span className="text-xs font-normal text-red-500">(0.8%)</span></p>
                                </div>
                                <div className="p-4 bg-orange-50 rounded-lg">
                                    <p className="text-sm text-gray-500">Review Pending</p>
                                    <p className="text-xl font-bold text-orange-600">12</p>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-gray-500">Avg. Review Time</p>
                                    <p className="text-xl font-bold text-blue-600">4.2h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Risk Assessment */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Risk Assessment</h3>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-6 mb-8">
                                {/* Mock Donut Chart */}
                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                        <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                                        <path className="text-red-500" strokeDasharray="10, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                                        <path className="text-orange-400" strokeDasharray="25, 100" strokeDashoffset="-10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                                        <path className="text-green-500" strokeDasharray="65, 100" strokeDashoffset="-35" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <span className="text-xs text-gray-500">Risk Score</span>
                                        <span className="text-lg font-bold text-gray-900">Low</span>
                                    </div>
                                </div>
                                <div className="space-y-3 flex-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <span className="text-sm text-gray-600">High Risk</span>
                                        </div>
                                        <span className="font-bold text-gray-900">12</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                                            <span className="text-sm text-gray-600">Medium Risk</span>
                                        </div>
                                        <span className="font-bold text-gray-900">45</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="text-sm text-gray-600">Low Risk</span>
                                        </div>
                                        <span className="font-bold text-gray-900">158</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border border-green-100 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Risk Score Trend</p>
                                    <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3" /> Improved by 2.4%
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-green-700">Stable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Regulatory Requirements */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-900">Upcoming Regulatory Requirements</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Regulation</th>
                                    <th className="px-6 py-3 font-medium">Description</th>
                                    <th className="px-6 py-3 font-medium">Impact</th>
                                    <th className="px-6 py-3 font-medium">Deadline</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">SEC Rule 206(4)-1</td>
                                    <td className="px-6 py-4 text-gray-600">Marketing Rule Update</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">High</span></td>
                                    <td className="px-6 py-4 text-gray-600">Nov 04, 2024</td>
                                    <td className="px-6 py-4"><span className="flex items-center gap-1 text-orange-600 font-medium"><Clock className="w-4 h-4" /> In Progress</span></td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Plan</button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">FinCEN Rule 2024-1</td>
                                    <td className="px-6 py-4 text-gray-600">Beneficial Ownership Reporting</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">Medium</span></td>
                                    <td className="px-6 py-4 text-gray-600">Jan 01, 2025</td>
                                    <td className="px-6 py-4"><span className="flex items-center gap-1 text-gray-500 font-medium"><Clock className="w-4 h-4" /> Planned</span></td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Plan</button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">Cybersecurity Amendments</td>
                                    <td className="px-6 py-4 text-gray-600">Incident Disclosure Rules</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">High</span></td>
                                    <td className="px-6 py-4 text-gray-600">Dec 15, 2024</td>
                                    <td className="px-6 py-4"><span className="flex items-center gap-1 text-green-600 font-medium"><CheckCircle2 className="w-4 h-4" /> Completed</span></td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Actions & Monitoring */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Compliance Actions */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Recent Compliance Actions</h3>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { action: "Alert Review", desc: "Flagged email review", user: "Sarah Jenkins", time: "2 mins ago", status: "Completed" },
                                { action: "Report Generated", desc: "Weekly risk summary", user: "System", time: "15 mins ago", status: "Success" },
                                { action: "Policy Ack", desc: "Code of Ethics signed", user: "Mike Ross", time: "1 hour ago", status: "Verified" },
                                { action: "Trade Blotter", desc: "Exceptions cleared", user: "Robert M.", time: "2 hours ago", status: "Approved" },
                            ].map((item, idx) => (
                                <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-gray-100 rounded-full">
                                            {item.user === "System" ? <Server className="w-4 h-4 text-gray-600" /> : <User className="w-4 h-4 text-gray-600" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{item.action}</p>
                                            <p className="text-xs text-gray-500">{item.desc} • <span className="text-gray-400">{item.user}</span></p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">{item.status}</span>
                                        <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Monitoring Summary */}
                    <div className="bg-gray-900 rounded-lg border border-gray-800 shadow-sm overflow-hidden text-white">
                        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-white">Monitoring Summary</h3>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-xs text-gray-400">Live</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">System Status</p>
                                    <div className="flex items-center gap-2 text-green-400">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span className="font-bold">Operational</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Last Scan</p>
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <Clock className="w-5 h-5" />
                                        <span className="font-bold">15 mins ago</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-green-500" />
                                        <span className="text-sm">Active Monitors</span>
                                    </div>
                                    <span className="font-bold">12/12</span>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Server className="w-5 h-5 text-blue-500" />
                                        <span className="text-sm">API Connections</span>
                                    </div>
                                    <span className="font-bold text-green-400">Stable</span>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Activity className="w-5 h-5 text-purple-500" />
                                        <span className="text-sm">Data Throughput</span>
                                    </div>
                                    <span className="font-bold">845 MB/s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 pt-6 flex justify-between items-center text-sm text-gray-500">
                    <p>Last updated: Today at 09:42 AM</p>
                    <div className="flex gap-4">
                        <button className="hover:text-gray-900">Privacy Policy</button>
                        <button className="hover:text-gray-900">Terms of Service</button>
                        <button className="hover:text-gray-900">Help Center</button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
