"use client";

import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import {
    Shield,
    AlertTriangle,
    FileText,
    Calendar,
    ChevronDown,
    Download
} from 'lucide-react';

export default function ComplianceMonitorPage() {
    return (
        <DashboardLayout
            dashboardTitle="Compliance Monitor"
            currentPath="/compliance-monitor"
            userName="Robert - Compliance Agent"
            userInitials="R"
            currentTab="compliance-monitor"
            avatarColor='bg-red-500'
            chatButtonColor='bg-red-600 hover:bg-red-700'
        >
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Compliance Monitor</h2>
                        <p className="text-gray-600 max-w-3xl">
                            Regulatory compliance tracking, documentation management, and audit trail maintenance
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer hover:bg-gray-50 min-w-[170px]">
                                <option>All Regulations</option>
                                <option>SEC Rules</option>
                                <option>FINRA Requirements</option>
                                <option>State Regulations</option>
                            </select>
                            <ChevronDown className="bg-transparent w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Generate Compliance Report
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Overall Compliance Score */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Overall Compliance Score</p>
                                <h3 className="text-3xl font-bold text-green-600">94.2%</h3>
                                <p className="text-xs font-medium text-green-600 mt-2 flex items-center gap-1">
                                    ↑ +2.1% this month
                                </p>
                            </div>
                            <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-4 border-green-500 text-xs font-bold text-green-700">
                                94%
                            </div>
                        </div>
                    </div>

                    {/* Open Issues */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Open Issues</p>
                                <h3 className="text-3xl font-bold text-orange-600">7</h3>
                                <p className="text-xs font-medium text-orange-600 mt-2">
                                    3 High Priority
                                </p>
                            </div>
                            <div className="p-3 bg-orange-50 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-orange-500" />
                            </div>
                        </div>
                    </div>

                    {/* Documents Reviewed */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Documents Reviewed</p>
                                <h3 className="text-3xl font-bold text-blue-600">2,847</h3>
                                <p className="text-xs font-medium text-gray-500 mt-2">
                                    This month
                                </p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <FileText className="w-6 h-6 text-blue-500" />
                            </div>
                        </div>
                    </div>

                    {/* Next Audit */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Next Audit</p>
                                <h3 className="text-3xl font-bold text-purple-600">45</h3>
                                <p className="text-xs font-medium text-gray-500 mt-2">
                                    Days remaining
                                </p>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-lg">
                                <Calendar className="w-6 h-6 text-purple-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Regulatory Compliance Status */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Regulatory Compliance Status</h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {/* SEC Rule */}
                            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100">
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">SEC Rule 206(4)-7</h4>
                                        <p className="text-xs text-gray-600">Compliance Policies & Procedures</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-green-700 block">Compliant</span>
                                    <span className="text-xs text-gray-500">Last Review: 15 days ago</span>
                                </div>
                            </div>

                            {/* FINRA Rule */}
                            <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">FINRA Rule 3110</h4>
                                        <p className="text-xs text-gray-600">Supervision Requirements</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-yellow-700 block">Needs Review</span>
                                    <span className="text-xs text-gray-500">Due: 5 days</span>
                                </div>
                            </div>

                            {/* Form ADV */}
                            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100">
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">Form ADV Updates</h4>
                                        <p className="text-xs text-gray-600">Annual Amendment Filing</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-green-700 block">Filed</span>
                                    <span className="text-xs text-gray-500">Filed: 30 days ago</span>
                                </div>
                            </div>

                            {/* Client Privacy Notice */}
                            <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-100">
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">Client Privacy Notice</h4>
                                        <p className="text-xs text-gray-600">Regulation S-P Requirements</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-red-700 block">Overdue</span>
                                    <span className="text-xs text-gray-500">Due: 3 days ago</span>
                                </div>
                            </div>

                            {/* Anti-Money Laundering */}
                            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100">
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">Anti-Money Laundering</h4>
                                        <p className="text-xs text-gray-600">AML Program Compliance</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-green-700 block">Up to Date</span>
                                    <span className="text-xs text-gray-500">Updated: 7 days ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Risk Assessment & Open Issues */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900">Risk Assessment & Open Issues</h3>
                            <div className="relative">
                                <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-1.5 pl-3 pr-8 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer hover:bg-gray-50">
                                    <option>All Risk Levels</option>
                                    <option>High Risk</option>
                                    <option>Medium Risk</option>
                                    <option>Low Risk</option>
                                </select>
                                <ChevronDown className="bg-transparent w-3 h-3 text-gray-500 absolute right-2.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            {/* Missing KYC */}
                            <div className="border border-gray-200 rounded-lg p-4 border-l-4 border-l-red-500 bg-red-50/50">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-sm font-bold text-gray-900">Missing KYC Documentation</h4>
                                    <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold rounded uppercase tracking-wide">High Risk</span>
                                </div>
                                <p className="text-xs text-gray-600 mb-3">7 clients with incomplete KYC documentation requiring immediate attention</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">Assigned to: Sarah Johnson</span>
                                    <button className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors flex items-center gap-1">
                                        Review →
                                    </button>
                                </div>
                            </div>

                            {/* Supervision Documentation */}
                            <div className="border border-gray-200 rounded-lg p-4 border-l-4 border-l-yellow-400 bg-yellow-50/50">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-sm font-bold text-gray-900">Supervision Documentation</h4>
                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded uppercase tracking-wide">Medium Risk</span>
                                </div>
                                <p className="text-xs text-gray-600 mb-3">Quarterly supervision reviews need completion for 3 advisors</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">Due: March 31, 2024</span>
                                    <button className="text-xs font-bold text-yellow-700 hover:text-yellow-800 transition-colors flex items-center gap-1">
                                        Review →
                                    </button>
                                </div>
                            </div>

                            {/* Communication Surveillance */}
                            <div className="border border-gray-200 rounded-lg p-4 border-l-4 border-l-orange-500 bg-orange-50/50">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-sm font-bold text-gray-900">Communication Surveillance</h4>
                                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded uppercase tracking-wide">Medium Risk</span>
                                </div>
                                <p className="text-xs text-gray-600 mb-3">12 flagged communications require review and approval</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">Flagged: Today</span>
                                    <button className="text-xs font-bold text-orange-700 hover:text-orange-800 transition-colors flex items-center gap-1">
                                        Review →
                                    </button>
                                </div>
                            </div>

                            {/* Trade Authorization Forms */}
                            <div className="border border-gray-200 rounded-lg p-4 border-l-4 border-l-green-500 bg-green-50/50">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-sm font-bold text-gray-900">Trade Authorization Forms</h4>
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase tracking-wide">Low Risk</span>
                                </div>
                                <p className="text-xs text-gray-600 mb-3">5 clients need updated trade authorization forms</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">Due: April 15, 2024</span>
                                    <button className="text-xs font-bold text-green-700 hover:text-green-800 transition-colors flex items-center gap-1">
                                        Review →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Grid Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    {/* Documentation Status */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Documentation Status</h3>
                        <div className="space-y-6">
                            {/* KYC Documents */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600 w-32">KYC Documents</span>
                                <div className="flex items-center flex-1 justify-end gap-3">
                                    <div className="w-24 bg-gray-100 rounded-full h-1.5">
                                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '87%' }}></div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 w-8 text-right">87%</span>
                                </div>
                            </div>
                            {/* Risk Assessments */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600 w-32">Risk Assessments</span>
                                <div className="flex items-center flex-1 justify-end gap-3">
                                    <div className="w-24 bg-gray-100 rounded-full h-1.5">
                                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '73%' }}></div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 w-8 text-right">73%</span>
                                </div>
                            </div>
                            {/* Disclosures */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600 w-32">Disclosures</span>
                                <div className="flex items-center flex-1 justify-end gap-3">
                                    <div className="w-24 bg-gray-100 rounded-full h-1.5">
                                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 w-8 text-right">95%</span>
                                </div>
                            </div>
                            {/* Service Agreements */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600 w-32">Service Agreements</span>
                                <div className="flex items-center flex-1 justify-end gap-3">
                                    <div className="w-24 bg-gray-100 rounded-full h-1.5">
                                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '91%' }}></div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 w-8 text-right">91%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Communication Surveillance */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Communication Surveillance</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-green-50 rounded-lg flex justify-between items-center">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900">Emails Reviewed</h4>
                                    <p className="text-xs text-gray-500">Today</p>
                                </div>
                                <span className="text-xl font-bold text-green-600">847</span>
                            </div>
                            <div className="p-4 bg-yellow-50 rounded-lg flex justify-between items-center">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900">Flagged Communications</h4>
                                    <p className="text-xs text-gray-500">Pending Review</p>
                                </div>
                                <span className="text-xl font-bold text-yellow-600">12</span>
                            </div>
                            <div className="p-4 bg-red-50 rounded-lg flex justify-between items-center">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900">Policy Violations</h4>
                                    <p className="text-xs text-gray-500">This Month</p>
                                </div>
                                <span className="text-xl font-bold text-red-600">2</span>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg flex justify-between items-center">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900">Compliance Rate</h4>
                                    <p className="text-xs text-gray-500">Overall</p>
                                </div>
                                <span className="text-xl font-bold text-blue-600">98.7%</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Audit Activity */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Audit Activity</h3>
                        <div className="space-y-6 relative pl-2">
                            {/* Vertical Line */}
                            <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-gray-200"></div>

                            {/* Item 1 */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-blue-500 z-10 box-border"></div>
                                <div className="absolute left-[5px] top-[10px] w-1.5 h-1.5 rounded-full bg-blue-500 z-20"></div>
                                <h4 className="text-sm font-bold text-gray-900">Form ADV Part 2 Updated</h4>
                                <p className="text-xs text-gray-500 mt-0.5">2 hours ago</p>
                            </div>

                            {/* Item 2 */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-green-500 z-10 box-border"></div>
                                <div className="absolute left-[5px] top-[10px] w-1.5 h-1.5 rounded-full bg-green-500 z-20"></div>
                                <h4 className="text-sm font-bold text-gray-900">Client File Review Completed</h4>
                                <p className="text-xs text-gray-600 mt-0.5">Johnson Family Office</p>
                                <p className="text-xs text-gray-400">5 hours ago</p>
                            </div>

                            {/* Item 3 */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-yellow-500 z-10 box-border"></div>
                                <div className="absolute left-[5px] top-[10px] w-1.5 h-1.5 rounded-full bg-yellow-500 z-20"></div>
                                <h4 className="text-sm font-bold text-gray-900">KYC Documentation Flagged</h4>
                                <p className="text-xs text-gray-600 mt-0.5">Martinez Trust - Missing ID</p>
                                <p className="text-xs text-gray-400">1 day ago</p>
                            </div>

                            {/* Item 4 */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-purple-500 z-10 box-border"></div>
                                <div className="absolute left-[5px] top-[10px] w-1.5 h-1.5 rounded-full bg-purple-500 z-20"></div>
                                <h4 className="text-sm font-bold text-gray-900">Supervision Report Filed</h4>
                                <p className="text-xs text-gray-600 mt-0.5">Q1 2024 Review</p>
                                <p className="text-xs text-gray-400">2 days ago</p>
                            </div>

                            {/* Item 5 */}
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-red-500 z-10 box-border"></div>
                                <div className="absolute left-[5px] top-[10px] w-1.5 h-1.5 rounded-full bg-red-500 z-20"></div>
                                <h4 className="text-sm font-bold text-gray-900">Policy Violation Detected</h4>
                                <p className="text-xs text-gray-600 mt-0.5">Unauthorized communication</p>
                                <p className="text-xs text-gray-400">3 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Compliance Agent Footer */}
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                            R
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Robert - Compliance Agent</h3>
                            <p className="text-sm text-gray-600">AI Assistant for Risk & Compliance Management</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-2">Recent Analysis</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Found pattern: 3 KYC expirations this week from the same custodian. Recommend process review.
                            </p>
                            <div className="flex gap-3">
                                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded text-xs font-bold transition-colors shadow-sm">
                                    Priority Review
                                </button>
                                <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded text-xs font-medium transition-colors">
                                    Schedule Later
                                </button>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-2">Suggested Actions</h4>
                            <ul className="text-sm text-gray-600 space-y-1.5">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
                                    Update 5 client risk profiles due this week
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
                                    Review flagged email communications
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
                                    Prepare for upcoming FINRA examination
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
                                    Complete quarterly supervision documentation
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
