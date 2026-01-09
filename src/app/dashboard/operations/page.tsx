'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { BarChart3, Clock, CheckCircle2, FileText, AlertTriangle } from 'lucide-react';

export default function OperationsPage() {
    return (
        <DashboardLayout
            dashboardTitle="Operations Dashboard"
            currentPath="/dashboard/operations"
            userName="Lisa Thompson - COO"
            userInitials="LT"
            currentTab="dashboard"
        >
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Operations Dashboard</h2>
                    <p className="text-gray-600">
                        Monitor your firm's operational efficiency, data quality, and resource utilization
                    </p>
                </div>

                {/* Process Efficiency Metrics */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Process Efficiency Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Onboarding Pipeline */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <BarChart3 className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Onboarding Pipeline</p>
                                <h4 className="text-3xl font-bold text-gray-900 mb-1">51</h4>
                                <p className="text-sm text-green-600 font-medium">Active prospects</p>
                            </div>
                        </div>

                        {/* Avg Completion Time */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
                            <div className="p-3 bg-green-50 rounded-lg">
                                <Clock className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Avg Completion Time</p>
                                <h4 className="text-3xl font-bold text-gray-900 mb-1">12.3</h4>
                                <p className="text-sm text-green-600 font-medium">days (↓2.1 days)</p>
                            </div>
                        </div>

                        {/* Task Completion */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
                            <div className="p-3 bg-purple-50 rounded-lg">
                                <CheckCircle2 className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Task Completion</p>
                                <h4 className="text-3xl font-bold text-gray-900 mb-1">87%</h4>
                                <p className="text-sm text-orange-600 font-medium">Firm average</p>
                            </div>
                        </div>

                        {/* Doc Processing */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
                            <div className="p-3 bg-orange-50 rounded-lg">
                                <FileText className="w-6 h-6 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Doc Processing</p>
                                <h4 className="text-3xl font-bold text-gray-900 mb-1">4.2hrs</h4>
                                <p className="text-sm text-green-600 font-medium">Per document</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Workflow Bottlenecks */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                                <h3 className="text-lg font-bold text-gray-900">Workflow Bottlenecks</h3>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            {/* Bottleneck 1 */}
                            <div className="p-4 bg-red-50 rounded-lg border border-red-100 flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Client Document Collection</h4>
                                    <p className="text-sm text-gray-600">15 clients awaiting documents 5+ days</p>
                                </div>
                                <span className="px-3 py-1 bg-white text-red-600 text-xs font-bold rounded shadow-sm">HIGH</span>
                            </div>

                            {/* Bottleneck 2 */}
                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-100 flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Custodian Account Setup</h4>
                                    <p className="text-sm text-gray-600">8 prospects stuck at account opening</p>
                                </div>
                                <span className="px-3 py-1 bg-white text-orange-600 text-xs font-bold rounded shadow-sm">MED</span>
                            </div>

                            {/* Bottleneck 3 */}
                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Advisor-Client Handoffs</h4>
                                    <p className="text-sm text-gray-600">6 clients between operations and advisors</p>
                                </div>
                                <span className="px-3 py-1 bg-white text-yellow-600 text-xs font-bold rounded shadow-sm">MED</span>
                            </div>

                            {/* Bottleneck 4 */}
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Compliance Review Queue</h4>
                                    <p className="text-sm text-gray-600">KYC reviews pending approval</p>
                                </div>
                                <span className="px-3 py-1 bg-white text-blue-600 text-xs font-bold rounded shadow-sm">LOW</span>
                            </div>
                        </div>
                    </div>

                    {/* Today's Operations Summary */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Today's Operations Summary</h3>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Client Documents Processed</h4>
                                    <p className="text-sm text-gray-600">KYC, forms, and signatures</p>
                                </div>
                                <span className="text-2xl font-bold text-green-600">34</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                                <div>
                                    <h4 className="font-semibold text-gray-900">New Accounts Opened</h4>
                                    <p className="text-sm text-gray-600">Completed onboarding process</p>
                                </div>
                                <span className="text-2xl font-bold text-blue-600">7</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Client Review Calls</h4>
                                    <p className="text-sm text-gray-600">Completed advisor meetings</p>
                                </div>
                                <span className="text-2xl font-bold text-purple-600">18</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Issues Resolved</h4>
                                    <p className="text-sm text-gray-600">Client requests and problems</p>
                                </div>
                                <span className="text-2xl font-bold text-yellow-600">12</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Task Completion Rates by Department */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Completion Rates by Department</h3>
                    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* Advisory Team */}
                            <div className="text-center">
                                <h4 className="text-2xl font-bold text-green-500 mb-1">94%</h4>
                                <p className="text-sm text-gray-500 mb-3">Advisory Team</p>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                                </div>
                            </div>

                            {/* Operations */}
                            <div className="text-center">
                                <h4 className="text-2xl font-bold text-yellow-500 mb-1">78%</h4>
                                <p className="text-sm text-gray-500 mb-3">Operations</p>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                                </div>
                            </div>

                            {/* Compliance */}
                            <div className="text-center">
                                <h4 className="text-2xl font-bold text-blue-500 mb-1">91%</h4>
                                <p className="text-sm text-gray-500 mb-3">Compliance</p>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                                </div>
                            </div>

                            {/* Client Services */}
                            <div className="text-center">
                                <h4 className="text-2xl font-bold text-purple-500 mb-1">85%</h4>
                                <p className="text-sm text-gray-500 mb-3">Client Services</p>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Quality Management */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Quality Management</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Data Quality Issues */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-6">Data Quality Issues</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                                    <div>
                                        <p className="font-semibold text-gray-900">Incomplete Records</p>
                                        <p className="text-xs text-gray-500">Missing required client data</p>
                                    </div>
                                    <span className="text-xl font-bold text-red-600">47</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                                    <div>
                                        <p className="font-semibold text-gray-900">Duplicate Entries</p>
                                        <p className="text-xs text-gray-500">Across CRM and portfolio systems</p>
                                    </div>
                                    <span className="text-xl font-bold text-orange-600">12</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                                    <div>
                                        <p className="font-semibold text-gray-900">Data Inconsistencies</p>
                                        <p className="text-xs text-gray-500">Conflicting client information</p>
                                    </div>
                                    <span className="text-xl font-bold text-yellow-600">23</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                                    <div>
                                        <p className="font-semibold text-gray-900">Outdated Information</p>
                                        <p className="text-xs text-gray-500">Last updated 6+ months ago</p>
                                    </div>
                                    <span className="text-xl font-bold text-blue-600">8</span>
                                </div>
                            </div>
                        </div>

                        {/* Data Consistency Scores */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-6">Data Consistency Scores</h4>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gray-600">CRM Data Completeness</span>
                                        <span className="text-sm font-bold text-gray-900">92%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gray-600">Portfolio System Sync</span>
                                        <span className="text-sm font-bold text-gray-900">88%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gray-600">Planning Tool Alignment</span>
                                        <span className="text-sm font-bold text-gray-900">95%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gray-600">Cross-System Accuracy</span>
                                        <span className="text-sm font-bold text-gray-900">90%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resource Utilization Analysis */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Utilization Analysis</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Advisor Capacity & Workload */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-6">Advisor Capacity & Workload</h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-900">Overloaded Advisors</p>
                                    <p className="text-xs text-gray-500">Above 85% capacity</p>
                                </div>
                                <span className="text-xl font-bold text-red-600">4</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-900">Well-Utilized</p>
                                    <p className="text-xs text-gray-500">65-85% capacity</p>
                                </div>
                                <span className="text-xl font-bold text-green-600">38</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-900">Under-Utilized</p>
                                    <p className="text-xs text-gray-500">Below 65% capacity</p>
                                </div>
                                <span className="text-xl font-bold text-yellow-600">5</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                            <div>
                                <p className="text-gray-600">Firm Average Utilization</p>
                                <p className="text-gray-500 text-xs">Optimal Range (65-85%)</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900">76%</p>
                                <p className="text-green-600 text-xs">38 of 47 advisors</p>
                            </div>
                        </div>
                    </div>

                    {/* Task Distribution Efficiency */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-6">Task Distribution Efficiency</h4>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">Workload Distribution Balance</span>
                                    <span className="text-sm font-bold text-gray-900">82%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">System Usage Adoption</span>
                                    <span className="text-sm font-bold text-gray-900">89%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">Process Completion Rate</span>
                                    <span className="text-sm font-bold text-gray-900">91%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                                <div>
                                    <p className="text-gray-600 text-sm">Resource Allocation Score</p>
                                    <p className="text-gray-600 text-sm">Technology ROI</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-green-600 text-sm">87%</p>
                                    <p className="font-bold text-blue-600 text-sm">$1.8M annual savings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quality Assurance Monitoring */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality Assurance Monitoring</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Service Delivery Standards */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-6">Service Delivery Standards</h4>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">Client Response Time SLA</span>
                                    <span className="text-sm font-bold text-gray-900">93%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">Process Standardization</span>
                                    <span className="text-sm font-bold text-gray-900">86%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '86%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">Documentation Quality</span>
                                    <span className="text-sm font-bold text-gray-900">91%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-gray-600">Overall Service Quality</span>
                                    <span className="text-sm font-bold text-gray-900">90%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Error Rate & Improvement Tracking */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-6">Error Rate & Improvement Tracking</h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-900">Error Rate This Month</p>
                                    <p className="text-xs text-gray-500">Below 2% target</p>
                                </div>
                                <span className="text-xl font-bold text-green-600">1.3%</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-900">Client Satisfaction Score</p>
                                    <p className="text-xs text-gray-500">Based on surveys & feedback</p>
                                </div>
                                <span className="text-xl font-bold text-blue-600">4.4/5.0</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-900">Active Improvement Projects</p>
                                    <p className="text-xs text-gray-500">Process enhancement initiatives</p>
                                </div>
                                <span className="text-xl font-bold text-purple-600">8</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-900">Training Effectiveness</p>
                                    <p className="text-xs text-gray-500">Post-training performance improvement</p>
                                </div>
                                <span className="text-xl font-bold text-yellow-600">89%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm flex items-center justify-between text-gray-400 text-xs font-medium mt-8">
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Dashboard last updated: Today at 2:47 PM</span>
                </div>
                <span>Next refresh in 13 minutes</span>
            </div>
        </DashboardLayout >
    );
}
