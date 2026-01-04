'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Search, Plus, ChevronDown, SlidersHorizontal, TrendingUp, DollarSign, MessageSquare, Calendar, FileText, UserCog, ArrowRight, Clock } from 'lucide-react';

// Client data
const clients = [
    {
        id: 1,
        name: 'John & Sarah Davis',
        initials: 'JD',
        initialsColor: 'bg-blue-600',
        advisor: 'Sarah Johnson',
        aum: '$2.4M AUM',
        aumValue: '$2,400,000',
        totalAum: '$2.4M',
        aumChange: '+8.2% YTD',
        annualFees: '$24K',
        feeRate: '1.0% fee rate',
        healthScore: 92,
        lastContact: '2 days ago',
        clientSince: 'Oct 2019',
        primaryContact: 'John Davis',
        spouse: 'Sarah Davis',
        email: 'john.davis@email.com',
        phone: '(555) 123-4567',
        location: 'San Francisco, CA',
        riskProfile: 'Moderate Growth',
        riskAlignment: 92,
        communication: 95,
        engagement: 88,
        documentation: 94,
        accounts: [
            { name: 'Schwab Taxable Joint', value: '$1,200,000' },
            { name: "John's 401(k)", value: '$680,000' },
            { name: "Sarah's Roth IRA", value: '$320,000' },
            { name: 'Traditional IRA', value: '$200,000' },
        ],
        recentActivity: [
            { icon: 'message', color: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Quarterly review call completed', time: '2 days ago', by: 'Sarah Johnson' },
            { icon: 'transaction', color: 'bg-green-100', iconColor: 'text-green-600', title: 'Rebalancing transaction executed', time: '1 week ago', by: 'System' },
            { icon: 'document', color: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Tax document uploaded to portal', time: '2 weeks ago', by: 'Client' },
        ],
        nextActions: [
            { status: 'pending', title: 'Schedule tax planning review', due: 'Due in 5 days' },
            { status: 'warning', title: 'Review beneficiary designations', due: 'Due in 2 weeks' },
            { status: 'completed', title: 'Send Q3 performance report', due: 'Completed' },
        ],
    },
    {
        id: 2,
        name: 'Michael Williams',
        initials: 'MW',
        initialsColor: 'bg-purple-600',
        advisor: 'Michael Chen',
        aum: '$1.8M AUM',
        aumValue: '$1,800,000',
        totalAum: '$1.8M',
        aumChange: '+5.4% YTD',
        annualFees: '$18K',
        feeRate: '1.0% fee rate',
        healthScore: 78,
        lastContact: '1 week ago',
        clientSince: 'Mar 2020',
        primaryContact: 'Michael Williams',
        spouse: '',
        email: 'michael.w@email.com',
        phone: '(555) 234-5678',
        location: 'New York, NY',
        riskProfile: 'Aggressive Growth',
        riskAlignment: 85,
        communication: 75,
        engagement: 80,
        documentation: 79,
        accounts: [
            { name: 'Fidelity Brokerage', value: '$950,000' },
            { name: '401(k) Plan', value: '$550,000' },
            { name: 'Roth IRA', value: '$300,000' },
        ],
        recentActivity: [
            { icon: 'message', color: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Email follow-up sent', time: '3 days ago', by: 'Michael Chen' },
            { icon: 'transaction', color: 'bg-green-100', iconColor: 'text-green-600', title: 'Dividend reinvestment', time: '1 week ago', by: 'System' },
        ],
        nextActions: [
            { status: 'pending', title: 'Annual review meeting', due: 'Due in 1 week' },
            { status: 'warning', title: 'Update risk assessment', due: 'Due in 3 weeks' },
        ],
    },
    {
        id: 3,
        name: 'Lisa Martinez',
        initials: 'LM',
        initialsColor: 'bg-amber-500',
        advisor: 'Emily Rodriguez',
        aum: '$3.1M AUM',
        aumValue: '$3,100,000',
        totalAum: '$3.1M',
        aumChange: '+12.1% YTD',
        annualFees: '$31K',
        feeRate: '1.0% fee rate',
        healthScore: 95,
        lastContact: '3 days ago',
        clientSince: 'Jan 2018',
        primaryContact: 'Lisa Martinez',
        spouse: 'Carlos Martinez',
        email: 'lisa.m@email.com',
        phone: '(555) 345-6789',
        location: 'Los Angeles, CA',
        riskProfile: 'Balanced',
        riskAlignment: 98,
        communication: 98,
        engagement: 92,
        documentation: 95,
        accounts: [
            { name: 'Joint Brokerage', value: '$1,500,000' },
            { name: "Lisa's IRA", value: '$800,000' },
            { name: "Carlos's 401(k)", value: '$500,000' },
            { name: 'Trust Account', value: '$300,000' },
        ],
        recentActivity: [
            { icon: 'message', color: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Portfolio review completed', time: '3 days ago', by: 'Emily Rodriguez' },
            { icon: 'transaction', color: 'bg-green-100', iconColor: 'text-green-600', title: 'RMD distribution processed', time: '2 weeks ago', by: 'System' },
        ],
        nextActions: [
            { status: 'completed', title: 'Q4 portfolio rebalancing', due: 'Completed' },
            { status: 'pending', title: 'Estate plan review', due: 'Due in 1 month' },
        ],
    },
    {
        id: 4,
        name: 'Robert Thompson',
        initials: 'RT',
        initialsColor: 'bg-green-600',
        advisor: 'Sarah Johnson',
        aum: '$892K AUM',
        aumValue: '$892,000',
        totalAum: '$892K',
        aumChange: '+3.2% YTD',
        annualFees: '$8.9K',
        feeRate: '1.0% fee rate',
        healthScore: 63,
        lastContact: '2 weeks ago',
        clientSince: 'Aug 2021',
        primaryContact: 'Robert Thompson',
        spouse: 'Karen Thompson',
        email: 'r.thompson@email.com',
        phone: '(555) 456-7890',
        location: 'Chicago, IL',
        riskProfile: 'Conservative',
        riskAlignment: 78,
        communication: 60,
        engagement: 68,
        documentation: 67,
        accounts: [
            { name: 'Taxable Brokerage', value: '$500,000' },
            { name: 'Traditional IRA', value: '$250,000' },
            { name: 'Roth IRA', value: '$142,000' },
        ],
        recentActivity: [
            { icon: 'message', color: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Voicemail left', time: '2 weeks ago', by: 'Sarah Johnson' },
        ],
        nextActions: [
            { status: 'warning', title: 'Follow up on missed meeting', due: 'Overdue' },
            { status: 'pending', title: 'Update contact information', due: 'Due in 1 week' },
        ],
    },
    {
        id: 5,
        name: 'Amanda Brown',
        initials: 'AB',
        initialsColor: 'bg-teal-600',
        advisor: 'Michael Chen',
        aum: '$1.3M AUM',
        aumValue: '$1,300,000',
        totalAum: '$1.3M',
        aumChange: '-2.1% YTD',
        annualFees: '$13K',
        feeRate: '1.0% fee rate',
        healthScore: 42,
        lastContact: '3 weeks ago',
        clientSince: 'Jun 2022',
        primaryContact: 'Amanda Brown',
        spouse: '',
        email: 'amanda.b@email.com',
        phone: '(555) 567-8901',
        location: 'San Francisco, CA',
        riskProfile: 'Moderate Growth',
        riskAlignment: 92,
        communication: 45,
        engagement: 38,
        documentation: 43,
        accounts: [
            { name: 'Schwab Brokerage', value: '$800,000' },
            { name: '401(k) Rollover', value: '$350,000' },
            { name: 'Roth IRA', value: '$150,000' },
        ],
        recentActivity: [
            { icon: 'message', color: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Email sent - no response', time: '3 weeks ago', by: 'Michael Chen' },
        ],
        nextActions: [
            { status: 'warning', title: 'Urgent: Re-establish contact', due: 'Overdue' },
            { status: 'pending', title: 'Risk tolerance reassessment', due: 'Due in 2 weeks' },
        ],
    },
];

function getHealthScoreColor(score: number) {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
}

function getHealthScoreLabel(score: number) {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    return 'At Risk';
}

function getHealthScoreBadgeColor(score: number) {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
}

function getActionStatusColor(status: string) {
    if (status === 'completed') return 'bg-green-500';
    if (status === 'warning') return 'bg-amber-500';
    return 'bg-blue-500';
}

export default function ClientManagementPage() {
    const [selectedClient, setSelectedClient] = useState(clients[0]);
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'financial', label: 'Financial' },
        { id: 'communications', label: 'Communications' },
        { id: 'tasks', label: 'Tasks' },
        { id: 'compliance', label: 'Compliance' },
    ];

    return (
        <DashboardLayout
            dashboardTitle="Client Management"
            currentPath="/client-management"
            userName="Sarah Chen - Senior Advisor"
            userInitials="SC"
            currentTab="client-management"
            chatButtonColor='bg-blue-600 hover:bg-blue-700'
        >
            <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Client Management</h2>
                        <p className="text-gray-600">
                            Complete client relationship management with 360° views
                        </p>
                    </div>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 whitespace-nowrap shadow-sm">
                        <Plus className="w-5 h-5" />
                        Add New Client
                    </button>
                </div>

                {/* Search and Filters - No card wrapper, just inline */}
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search clients by name, email, or account..."
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <div className="relative">
                            <select className="appearance-none border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer">
                                <option>All Advisors</option>
                                <option>Sarah Johnson</option>
                                <option>Michael Chen</option>
                                <option>Emily Rodriguez</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                        </div>
                        <div className="relative">
                            <select className="appearance-none border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm cursor-pointer">
                                <option>All Health Scores</option>
                                <option>Excellent (90+)</option>
                                <option>Good (70-89)</option>
                                <option>At Risk (&lt;70)</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                        </div>
                        <button className="p-2.5 border border-gray-200 rounded-lg text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700">
                            <SlidersHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Two Panel Layout */}
                <div className="flex gap-6">
                    {/* Left Panel - Client List */}
                    <div className="w-72 flex-shrink-0 bg-white rounded-lg shadow overflow-hidden self-start">
                        <div className="p-4 border-b border-gray-200">
                            <h3 className="text-base font-semibold text-gray-900">Clients (247)</h3>
                        </div>
                        <div className="divide-y divide-gray-200 max-h-[calc(100vh-300px)] overflow-y-auto">
                            {clients.map((client) => (
                                <div
                                    key={client.id}
                                    onClick={() => setSelectedClient(client)}
                                    className={`p-4 cursor-pointer transition-colors ${selectedClient.id === client.id
                                        ? 'bg-blue-50 border-l-4 border-l-blue-500'
                                        : 'hover:bg-gray-50 border-l-4 border-l-transparent'
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-10 h-10 ${client.initialsColor} rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}>
                                            {client.initials}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-2">
                                                <h4 className="font-semibold text-gray-900 text-sm truncate">{client.name}</h4>
                                                <span className={`w-7 h-7 ${getHealthScoreBadgeColor(client.healthScore)} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                                                    {client.healthScore}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-0.5">{client.advisor}</p>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="text-xs font-medium text-blue-600">{client.aum}</span>
                                                <span className="text-xs text-gray-400">{client.lastContact}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel - Client Details (Single Card) */}
                    <div className="flex-1 bg-white rounded-lg shadow overflow-hidden">
                        {/* Client Header */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 ${selectedClient.initialsColor} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                                    {selectedClient.initials}
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-900">{selectedClient.name}</h2>
                                    <p className="text-sm text-gray-500">Primary Advisor: {selectedClient.advisor}</p>
                                </div>
                                <div className="hidden lg:flex items-center gap-8">
                                    <div className="text-center">
                                        <p className="text-lg font-bold text-blue-600">{selectedClient.aumValue}</p>
                                        <p className="text-xs text-gray-500">AUM</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600">Client since {selectedClient.clientSince}</p>
                                    </div>
                                    <div className="text-center">
                                        <div className={`w-12 h-12 ${getHealthScoreBadgeColor(selectedClient.healthScore)} rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto`}>
                                            {selectedClient.healthScore}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Health Score</p>
                                        <p className={`text-xs font-medium ${getHealthScoreColor(selectedClient.healthScore)}`}>
                                            {getHealthScoreLabel(selectedClient.healthScore)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-gray-200">
                            <div className="flex gap-8 px-6">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`py-4 text-sm font-medium border-b-2 -mb-px transition-colors ${activeTab === tab.id
                                            ? 'border-blue-600 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Left Column - Profile & Financial */}
                                <div className="lg:col-span-2 space-y-6">
                                    {/* Client Profile */}
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-4">Client Profile</h3>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Primary Contact</p>
                                                <p className="text-sm font-medium text-gray-900">{selectedClient.primaryContact}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Spouse</p>
                                                <p className="text-sm font-medium text-gray-900">{selectedClient.spouse || 'N/A'}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Email</p>
                                                <a href={`mailto:${selectedClient.email}`} className="text-sm font-medium text-blue-600 hover:underline">
                                                    {selectedClient.email}
                                                </a>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Phone</p>
                                                <p className="text-sm font-medium text-gray-900">{selectedClient.phone}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Location</p>
                                                <p className="text-sm font-medium text-gray-900">{selectedClient.location}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Risk Profile</p>
                                                <p className="text-sm font-medium text-green-600">{selectedClient.riskProfile}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Financial Overview */}
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-4">Financial Overview</h3>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-xs text-gray-500 mb-1">Total AUM</p>
                                                        <p className="text-2xl font-bold text-blue-600">{selectedClient.totalAum}</p>
                                                        <p className="text-xs text-green-600 font-medium">{selectedClient.aumChange}</p>
                                                    </div>
                                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                        <TrendingUp className="w-5 h-5 text-green-600" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-xs text-gray-500 mb-1">Annual Fees</p>
                                                        <p className="text-2xl font-bold text-blue-600">{selectedClient.annualFees}</p>
                                                        <p className="text-xs text-gray-500">{selectedClient.feeRate}</p>
                                                    </div>
                                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <DollarSign className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Account Breakdown */}
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Account Breakdown</h4>
                                        <div>
                                            {selectedClient.accounts.map((account, index) => (
                                                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                                                    <span className="text-sm text-gray-700">{account.name}</span>
                                                    <span className="text-sm font-semibold text-gray-900">{account.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Recent Activity */}
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-4">Recent Activity</h3>
                                        <div className="space-y-4">
                                            {selectedClient.recentActivity.map((activity, index) => (
                                                <div key={index} className="flex items-start gap-3">
                                                    <div className={`w-9 h-9 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                                        {activity.icon === 'message' && (
                                                            <MessageSquare className={`w-4 h-4 ${activity.iconColor}`} />
                                                        )}
                                                        {activity.icon === 'transaction' && (
                                                            <DollarSign className={`w-4 h-4 ${activity.iconColor}`} />
                                                        )}
                                                        {activity.icon === 'document' && (
                                                            <FileText className={`w-4 h-4 ${activity.iconColor}`} />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                                                        <p className="text-xs text-gray-500">{activity.time} • {activity.by}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Health Score & Actions */}
                                <div className="space-y-6">
                                    {/* Health Score */}
                                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-base font-semibold text-gray-900">Health Score</h3>
                                            <div className={`w-10 h-10 ${getHealthScoreBadgeColor(selectedClient.healthScore)} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                                                {selectedClient.healthScore}
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-600">Communication</span>
                                                    <span className="font-medium text-gray-900">{selectedClient.communication}%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${selectedClient.communication}%` }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-600">Engagement</span>
                                                    <span className="font-medium text-gray-900">{selectedClient.engagement}%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${selectedClient.engagement}%` }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-600">Documentation</span>
                                                    <span className="font-medium text-gray-900">{selectedClient.documentation}%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${selectedClient.documentation}%` }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-600">Risk Alignment</span>
                                                    <span className="font-medium text-gray-900">{selectedClient.riskAlignment}%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${selectedClient.riskAlignment}%` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Next Actions */}
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-4">Next Actions</h3>
                                        <div className="space-y-3">
                                            {selectedClient.nextActions.map((action, index) => (
                                                <div key={index} className="flex items-start gap-3">
                                                    <div className={`w-2 h-2 ${getActionStatusColor(action.status)} rounded-full mt-1.5 flex-shrink-0`}></div>
                                                    <div>
                                                        <p className="text-sm text-gray-900">{action.title}</p>
                                                        <p className="text-xs text-gray-500">{action.due}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-4 flex items-center gap-1">
                                            View all tasks <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>

                                    {/* Quick Actions */}
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h3>
                                        <div className="space-y-1">
                                            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                                <MessageSquare className="w-4 h-4 text-gray-400" />
                                                Send Message
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                Schedule Meeting
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                                <FileText className="w-4 h-4 text-gray-400" />
                                                Generate Report
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                                <UserCog className="w-4 h-4 text-gray-400" />
                                                Update Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer - Sync Status */}
                <div className="bg-white rounded-lg shadow px-6 py-4 mt-6">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Client data last updated: Today at 2:47 PM</span>
                        </div>
                        <span className="text-blue-600">Next sync in 8 minutes</span>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
