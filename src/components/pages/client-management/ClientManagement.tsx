'use client';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Client } from './types';
import { ChevronDownIcon, SearchIcon, PlusIcon, ClockIcon, CheckCircleIcon, DocumentDuplicateIcon, ArrowPathIcon, PaperAirplaneIcon, CalendarDaysIcon, PresentationChartBarIcon, UserCircleIcon } from './icons';
import ProgressBar from './ProgressBar';
import { MOCK_CLIENTS } from './constants';



const getIconComponent = (icon: 'check' | 'doc' | 'sync') => {
  const icons: Record<'check' | 'doc' | 'sync', React.ReactNode> = {
    check: '✓',
    doc: '📄',
    sync: '↻',
  };
  return icons[icon];
};

const getHealthLabel = (score: number): string => {
  if (score >= 90) return 'Excellent';
  if (score >= 70) return 'Good';
  return 'Needs Attention';
};

const getHealthColor = (score: number): string => {
  if (score >= 90) return 'bg-green-100 text-green-800 ring-green-600';
  if (score >= 70) return 'bg-yellow-100 text-yellow-800 ring-yellow-600';
  return 'bg-red-100 text-red-800 ring-red-600';
};

const ClientManagement: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(MOCK_CLIENTS[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAdvisor, setSelectedAdvisor] = useState<string>('All Advisors');
  const [selectedHealthScore, setSelectedHealthScore] = useState<string>('All Health Scores');
  const [activeTab, setActiveTab] = useState<string>('Overview');

  const mockClients = MOCK_CLIENTS; // Use external mock data

  const uniqueAdvisors = useMemo(() => ['All Advisors', ...new Set(mockClients.map((c) => c.primaryAdvisor))], []);

  const filteredClients = useMemo(() => {
    return mockClients.filter((client) => {
      const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesAdvisor = selectedAdvisor === 'All Advisors' || client.primaryAdvisor === selectedAdvisor;
      const matchesHealth = selectedHealthScore === 'All Health Scores' ||
        (selectedHealthScore === 'Excellent (90+)' && client.healthScore >= 90) ||
        (selectedHealthScore === 'Good (70-89)' && client.healthScore >= 70 && client.healthScore < 90) ||
        (selectedHealthScore === 'Needs Attention (<70)' && client.healthScore < 70);
      return matchesSearch && matchesAdvisor && matchesHealth;
    });
  }, [searchQuery, selectedAdvisor, selectedHealthScore, mockClients]);

  const handleAddNewClient = () => {
    console.log('Add New Client clicked - Implement modal/form here');
  };

  const handleClientSelect = (client: Client) => {
    setSelectedClient(client);
  };

  const renderHealthScore = (score: number, size: 'small' | 'large' = 'small') => {
    const diameter = size === 'large' ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-6 h-6 sm:w-8 sm:h-8';
    const textSize = size === 'large' ? 'text-xl sm:text-2xl' : 'text-xs sm:text-sm';
    const label = getHealthLabel(score);
    const colorClass = getHealthColor(score);

    return (
      <div className={`flex items-center ${size === 'large' ? 'space-x-2' : 'space-x-1'}`}>
        <div className={`${diameter} rounded-full ${colorClass} ring-1 ring-inset flex items-center justify-center font-bold ${textSize}`}>
          {score}
        </div>
        {size === 'large' && <span className="text-xs sm:text-sm font-medium">{label}</span>}
      </div>
    );
  };

  const renderTabs = () => (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1 border-b border-gray-200 overflow-x-auto pb-2 sm:pb-0">
      {['Overview', 'Financial', 'Communication', 'Tasks', 'Compliance'].map((tab) => (
        <button
          key={tab}  
          onClick={() => setActiveTab(tab)}
          className={`px-3 py-2 text-xs sm:text-sm font-medium min-w-max flex-shrink-0 ${
            activeTab === tab
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  const renderProfileContent = () => {
    if (!selectedClient) return null;
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Contact Information</h4>
                <div className="space-y-2 sm:space-y-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="w-full sm:w-24 font-medium text-gray-500 mb-1 sm:mb-0">Primary</span>
                    <span className="text-gray-900">{selectedClient.name}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="w-full sm:w-24 font-medium text-gray-500 mb-1 sm:mb-0">Spouse</span>
                    <span className="text-gray-900">{selectedClient.spouse}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="w-full sm:w-24 font-medium text-gray-500 mb-1 sm:mb-0">Email</span>
                    <span className="text-gray-900">{selectedClient.email}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="w-full sm:w-24 font-medium text-gray-500 mb-1 sm:mb-0">Phone</span>
                    <span className="text-gray-900">{selectedClient.phone}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="w-full sm:w-24 font-medium text-gray-500 mb-1 sm:mb-0">Address</span>
                    <span className="text-gray-900">{selectedClient.address}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="w-full sm:w-24 font-medium text-gray-500 mb-1 sm:mb-0">Risk Profile</span>
                    <span className="text-gray-900">{selectedClient.riskProfile}</span>
                  </div>
                </div>
              </div>
              {/* Health Breakdown */}
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Health Score Breakdown</h4>
                {renderHealthScore(selectedClient.healthScore, 'large')}
                <div className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm">
                  {selectedClient.healthScoreBreakdown.map((item) => (
                    <div key={item.category} className="flex justify-between items-center">
                      <span className="truncate">{item.category}</span>
                      <div className="w-16 sm:w-20 flex items-center space-x-1 sm:space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2">
                          <div
                            className="bg-green-600 h-1.5 sm:h-2 rounded-full"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                        <span>{item.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Accounts Table */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Accounts</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Account</th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-right font-medium text-gray-500 uppercase tracking-wider">Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedClient.accounts.map((account) => (
                      <tr key={account.name}>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-gray-900">{account.name}</td>
                        <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-gray-900 text-right">
                          ${(account.value / 1000000).toFixed(1)}M
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Recent Activity */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Recent Activity</h4>
              <div className="space-y-2 sm:space-y-3">
                {selectedClient.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-md text-xs sm:text-sm">
                    <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">{getIconComponent(activity.icon)}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-900 truncate">{activity.title}</p>
                      <p className="text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Next Actions */}
            <div>
              <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Next Actions</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                {selectedClient.nextActions.map((action, index) => (
                  <li key={index} className="text-gray-900 pl-3 sm:pl-4 border-l-2 border-blue-500 truncate">
                    {action.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'Financial':
        return (
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Total AUM</h4>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">${(selectedClient.totalAUM / 1000000).toFixed(1)}M</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Annual Fees</h4>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">${selectedClient.annualFees.toLocaleString()}</p>
                <p className="text-xs sm:text-sm text-gray-500">Fee Rate: {selectedClient.feeRate}%</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Accounts Breakdown</h4>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                {selectedClient.accounts.map((account) => (
                  <div key={account.name} className="flex justify-between">
                    <span className="truncate">{account.name}</span>
                    <span>${(account.value / 1000).toLocaleString()}K</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Communication':
        return (
          <div className="p-4 sm:p-6">
            <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Communication Metrics</h4>
            <div className="space-y-3 sm:space-y-4">
              {selectedClient.healthScoreBreakdown
                .filter((item) => item.category === 'Engagement') // Example: Filter for Engagement as proxy for Communication
                .map((item) => (
                  <div key={item.category} className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-sm font-medium mb-2 sm:mb-0">{item.category}</span>
                    <div className="w-full sm:ml-4 sm:w-auto bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium mt-1 sm:mt-0">{item.score}%</span>
                  </div>
                ))}
            </div>
            {/* Add email/phone logs here */}
          </div>
        );
      case 'Tasks':
        return (
          <div className="p-4 sm:p-6">
            <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Open Tasks</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {selectedClient.nextActions.map((action, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="truncate">{action.title}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'Compliance':
        return (
          <div className="p-4 sm:p-6 text-sm sm:text-base">
            Compliance details, including documentation status from health breakdown.
            {/* Map over Compliance score */}
            <div className="mt-3 sm:mt-4">
              {selectedClient.healthScoreBreakdown
                .filter((item) => item.category === 'Compliance')
                .map((item) => (
                  <p key={item.category} className="text-sm">Compliance Score: {item.score}%</p>
                ))}
            </div>
          </div>
        );
      default:
        return <div className="p-4 sm:p-6 text-gray-500">Content for {activeTab} tab coming soon.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Glynac</h1>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-xs sm:text-sm text-gray-500">Client Management</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-black">Client Management with 360° views</h2>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">Complete client relationship management with 360° views</p>
        </div>

        <div className="flex justify-end mb-4 sm:mb-6">
          <button
            onClick={handleAddNewClient}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium w-full sm:w-auto"
          >
            + Add New Client
          </button>
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Client List */}
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-medium text-gray-900">Clients ({filteredClients.length})</h3>
            </div>
            <div className="mb-3 sm:mb-4">
              <input
                type="text"
                placeholder="Search clients by name, email, or account..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-6">
              <select
                value={selectedAdvisor}
                onChange={(e) => setSelectedAdvisor(e.target.value)}
                className="w-full sm:flex-1 px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {uniqueAdvisors.map((option) => (
                  <option key={option} value={option} className="text-sm">
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={selectedHealthScore}
                onChange={(e) => setSelectedHealthScore(e.target.value)}
                className="w-full sm:flex-1 px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {['All Health Scores', 'Excellent (90+)', 'Good (70-89)', 'Needs Attention (<70)'].map((option) => (
                  <option key={option} value={option} className="text-sm">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2 sm:space-y-3 max-h-64 sm:max-h-96 overflow-y-auto">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => handleClientSelect(client)}
                  className={`p-3 sm:p-4 rounded-lg border ${
                    selectedClient?.id === client.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 cursor-pointer'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${client.avatarColor} text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0`}>
                        {client.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 text-sm truncate">{client.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500">${(client.totalAUM / 1000000).toFixed(1)}M AUM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 ml-2 sm:ml-0 flex-shrink-0">
                      {renderHealthScore(client.healthScore)}
                      <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{client.lastContact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Profile */}
          {selectedClient && (
            <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-sm border border-gray-200 order-1 lg:order-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-gray-200 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${selectedClient.avatarColor} text-white flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0`}>
                    {selectedClient.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{selectedClient.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Primary Advisor: {selectedClient.primaryAdvisor}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                  <div className="text-right w-full sm:w-auto">
                    <p className="text-xs sm:text-sm text-gray-500">${(selectedClient.totalAUM / 1000000).toFixed(1)}M</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">AUM</p>
                  </div>
                  <div className="text-right w-full sm:w-auto">
                    <p className="text-xs sm:text-sm text-gray-500">Client since</p>
                    <p className="text-base sm:text-lg font-medium text-gray-900">{selectedClient.contactSince}</p>
                  </div>
                  {renderHealthScore(selectedClient.healthScore, 'large')}
                </div>
              </div>
              {renderTabs()}
              {renderProfileContent()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;




