'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Users, Clock, CheckCircle, TrendingUp, Plus, Check, AlertTriangle, MessageSquare, MoreHorizontal, ChevronDown, Circle } from 'lucide-react';

export default function ClientOnboardingPage() {
    return (
        <DashboardLayout
            dashboardTitle="Client Onboarding"
            currentPath="/client-onboarding"
            userName="Grace - Onboarding Agent"
            userInitials="G"
            currentTab="client-onboarding"
            avatarColor='bg-purple-500'
            chatButtonColor='bg-blue-600 hover:bg-blue-700'
        >
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Client Onboarding</h2>
                        <p className="text-gray-600">
                            Manages the entire prospect-to-client journey with pipeline tracking and process optimization
                        </p>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 whitespace-nowrap shadow-sm transition-colors">
                        <Plus className="w-5 h-5" />
                        Add New Prospect
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Prospects */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Total Prospects</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">23</h3>
                            <p className="text-sm text-green-600 font-medium">+3 this week</p>
                        </div>
                    </div>

                    {/* In Progress */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-yellow-50 rounded-lg">
                                <Clock className="w-6 h-6 text-yellow-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">In Progress</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">16</h3>
                            <p className="text-sm text-blue-600 font-medium">Avg 8.5 days</p>
                        </div>
                    </div>

                    {/* Completed */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-green-50 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Completed</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">7</h3>
                            <p className="text-sm text-green-600 font-medium">This month</p>
                        </div>
                    </div>

                    {/* Conversion Rate */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <TrendingUp className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Conversion Rate</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">78%</h3>
                            <p className="text-sm text-green-600 font-medium">+5% vs last month</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Onboarding Pipeline (2 cols wide) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                            <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h3 className="text-lg font-bold text-gray-900">Onboarding Pipeline</h3>
                                <div className="flex gap-3">
                                    <div className="relative">
                                        <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>All Advisors</option>
                                            <option>Sarah Johnson</option>
                                            <option>Michael Chen</option>
                                        </select>
                                        <ChevronDown className="bg-white w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                    </div>
                                    <div className="relative">
                                        <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>All Stages</option>
                                            <option>Initial Contact</option>
                                            <option>Documentation</option>
                                            <option>Compliance</option>
                                        </select>
                                        <ChevronDown className="bg-white w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {/* Item 1: Robert & Karen Wilson */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                RK
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-gray-900">Robert & Karen Wilson</h4>
                                                <p className="text-sm text-gray-600">Advisor: Sarah Johnson</p>
                                                <p className="text-sm font-medium text-green-600 mt-1">Expected AUM: $1.2M</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-1">
                                                Documentation Collection
                                            </span>
                                            <p className="text-xs text-gray-500 block">Day 3 of 7</p>
                                            <div className="flex gap-1 justify-end mt-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                                                <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                                                <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 pl-16">
                                        <div className="flex items-center gap-2 text-sm text-green-700">
                                            <Check className="w-4 h-4" />
                                            <span>KYC Forms Complete</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-blue-600">
                                            <Clock className="w-4 h-4" />
                                            <span>Tax Documents Pending</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center text-[10px]"></div>
                                            <span>Investment Agreement</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2: Thompson Holdings LLC */}
                                <div className="p-6 bg-yellow-50/10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                TH
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-gray-900">Thompson Holdings LLC</h4>
                                                <p className="text-sm text-gray-600">Advisor: Michael Chen</p>
                                                <p className="text-sm font-medium text-green-600 mt-1">Expected AUM: $3.8M</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-1">
                                                Compliance Review
                                            </span>
                                            <p className="text-xs text-red-500 font-medium block">Overdue by 2 days</p>
                                            <div className="flex gap-1 justify-end mt-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 pl-16">
                                        <div className="flex items-center gap-2 text-sm text-green-700">
                                            <Check className="w-4 h-4" />
                                            <span>All Documents Received</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-amber-600">
                                            <AlertTriangle className="w-4 h-4" />
                                            <span>AML Screening Required</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3: Anna & Mark Foster */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                AM
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-gray-900">Anna & Mark Foster</h4>
                                                <p className="text-sm text-gray-600">Advisor: Emily Rodriguez</p>
                                                <p className="text-sm font-medium text-green-600 mt-1">Expected AUM: $850K</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-1">
                                                Account Setup
                                            </span>
                                            <p className="text-xs text-gray-500 block">Day 1 of 3</p>
                                            <div className="flex gap-1 justify-end mt-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 pl-16">
                                        <div className="flex items-center gap-2 text-sm text-green-700">
                                            <Check className="w-4 h-4" />
                                            <span>Custodial Forms Submitted</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-blue-600">
                                            <Clock className="w-4 h-4" />
                                            <span>Initial Funding Pending</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 4: David & Linda Chen */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                DL
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-gray-900">David & Linda Chen</h4>
                                                <p className="text-sm text-gray-600">Advisor: Sarah Johnson</p>
                                                <p className="text-sm font-medium text-green-600 mt-1">Expected AUM: $2.1M</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-3 py-1 bg-gray-500 text-white text-xs font-semibold rounded-full mb-1">
                                                Initial Contact
                                            </span>
                                            <p className="text-xs text-gray-500 block">Waiting for response</p>
                                            <div className="flex gap-1 justify-end mt-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 pl-16">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <MessageSquare className="w-4 h-4 text-blue-500" />
                                            <span className="text-blue-600">Initial Meeting Scheduled</span>
                                            <span className="text-gray-400">Nov 15, 2024 at 2:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Standard Process & Activity (1 col wide) */}
                    <div className="space-y-6">
                        {/* Standard Onboarding Process */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Standard Onboarding Process</h3>
                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200"></div>

                                <div className="space-y-6 relative">
                                    {/* Step 1 */}
                                    <div className="flex gap-4">
                                        <div className="relative z-10 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="text-sm font-bold text-gray-900">Initial Contact</h4>
                                            <p className="text-xs text-gray-500">Prospect qualification & discovery call</p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex gap-4">
                                        <div className="relative z-10 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="text-sm font-bold text-gray-900">Documentation Collection</h4>
                                            <p className="text-xs text-gray-500">KYC, financial statements & tax forms</p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex gap-4">
                                        <div className="relative z-10 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-sm ring-4 ring-white">
                                            3
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="text-sm font-bold text-gray-900">Compliance Review</h4>
                                            <p className="text-xs text-gray-500">AML screening & risk assessment</p>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="flex gap-4">
                                        <div className="relative z-10 w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                                            4
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="text-sm font-medium text-gray-500">Account Setup</h4>
                                            <p className="text-xs text-gray-400">Custodial accounts & platform setup</p>
                                        </div>
                                    </div>

                                    {/* Step 5 */}
                                    <div className="flex gap-4">
                                        <div className="relative z-10 w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                                            5
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="text-sm font-medium text-gray-500">Service Activation</h4>
                                            <p className="text-xs text-gray-400">Portfolio setup & relationship handoff</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Onboarding Activity */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Onboarding Activity</h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                                    <div className="text-sm">
                                        <p className="text-gray-900 font-medium">Wilson family completed KYC forms</p>
                                        <p className="text-xs text-gray-500 mt-0.5">15 minutes ago</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                                    <div className="text-sm">
                                        <p className="text-gray-900 font-medium">Thompson Holdings AML review flagged</p>
                                        <p className="text-xs text-gray-500 mt-0.5">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                    <div className="text-sm">
                                        <p className="text-gray-900 font-medium">Foster account setup initiated</p>
                                        <p className="text-xs text-gray-500 mt-0.5">4 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                                    <div className="text-sm">
                                        <p className="text-gray-900 font-medium">Johnson onboarding completed</p>
                                        <p className="text-xs text-gray-500 mt-0.5">Yesterday</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Assistant - Grace */}
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                                    G
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900">Grace - Onboarding Agent</h3>
                                    <p className="text-xs text-purple-600 font-medium">AI Assistant for Onboarding</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Suggestion 1 */}
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                                    <p className="text-sm text-gray-700 mb-3">
                                        Thompson Holdings compliance review is overdue. Should I escalate to CCO?
                                    </p>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 bg-purple-600 text-white text-xs font-medium rounded hover:bg-purple-700 transition-colors">
                                            Yes, escalate
                                        </button>
                                        <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded hover:bg-gray-50 transition-colors">
                                            Not yet
                                        </button>
                                    </div>
                                </div>

                                {/* Suggestion 2 */}
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                                    <p className="text-sm text-gray-700 mb-3">
                                        Wilson family onboarding is ahead of schedule. Ready to move to next stage?
                                    </p>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 bg-purple-600 text-white text-xs font-medium rounded hover:bg-purple-700 transition-colors">
                                            Proceed
                                        </button>
                                        <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded hover:bg-gray-50 transition-colors">
                                            Wait
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button className="text-sm font-medium text-purple-700 hover:text-purple-800 flex items-center justify-center gap-1 mx-auto">
                                    Chat with Grace <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Status Bar */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-2 shadow-sm">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Onboarding data last updated: Today at 3:15 PM</span>
                    </div>
                    <div>
                        Next sync in 15 minutes
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}
