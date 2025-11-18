'use client';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Client } from './types';
import { ChevronDownIcon, SearchIcon, PlusIcon, ClockIcon, CheckCircleIcon, DocumentDuplicateIcon, ArrowPathIcon, PaperAirplaneIcon, CalendarDaysIcon, PresentationChartBarIcon, UserCircleIcon } from './icons';
import ProgressBar from './ProgressBar';
import { MOCK_CLIENTS } from './constants';

const formatCurrency = (value: number) => {
    if (value >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(1)}M`;
    }
    if (value >= 1_000) {
        return `$${Math.round(value / 1_000)}K`;
    }
    return `$${value}`;
};

const getHealthScoreColor = (score: number, type: 'bg' | 'text' | 'border' = 'bg') => {
    if (score >= 90) return `${type}-green-500`;
    if (score >= 70) return `${type}-blue-500`;
    if (score >= 50) return `${type}-yellow-500`;
    return `${type}-red-500`;
};

const ClientListItem: React.FC<{ client: Client, isSelected: boolean, onSelect: () => void }> = ({ client, isSelected, onSelect }) => {
    return (
        <div onClick={onSelect} className={`flex items-start p-3 border-l-4 cursor-pointer transition-colors duration-150 ${isSelected ? 'bg-blue-50 border-brand-blue' : 'border-transparent hover:bg-gray-50'}`}>
            <div className={`w-8 h-8 rounded-full ${client.avatarColor} text-white flex-shrink-0 flex items-center justify-center font-bold text-xs mr-3 mt-0.5`}>{client.initials}</div>
            <div className="flex-grow">
                <p className="font-semibold text-black leading-tight text-sm">{client.name}</p>
                <p className="text-xs text-black">{client.primaryAdvisor}</p>
                <p className="text-xs font-semibold text-green-600 mt-0.5">{formatCurrency(client.totalAUM)} AUM</p>
            </div>
            <div className="text-right flex-shrink-0 ml-3">
                <div className={`w-7 h-7 rounded-full ${getHealthScoreColor(client.healthScore)} text-white flex items-center justify-center font-bold text-xs`}>
                    {client.healthScore}
                </div>
                <p className="text-xs text-black mt-0.5">{client.lastContact}</p>
            </div>
        </div>
    );
};

const ClientDetail: React.FC<{ client: Client | null }> = ({ client }) => {
    const [activeTab, setActiveTab] = useState('Overview');
    
    if (!client) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-black">Select a client to see details</p>
            </div>
        );
    }
    
    const healthText = client.healthScore >= 90 ? 'Excellent' : client.healthScore >= 70 ? 'Good' : client.healthScore >= 50 ? 'Fair' : 'Poor';

    return (
        <div className="p-4 overflow-y-auto h-full custom-scrollbar">
            {/* Header */}
            <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full ${client.avatarColor} text-white flex items-center justify-center font-bold text-xl mr-3`}>{client.initials}</div>
                    <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-black">{client.name}</h3>
                          <div className="text-xs font-semibold bg-green-100 text-green-800 px-1.5 py-0.5 rounded">{formatCurrency(client.totalAUM)} AUM</div>
                        </div>
                        <p className="text-black text-sm">Primary Advisor: {client.primaryAdvisor}</p>
                    </div>
                </div>
                <div className="text-right">
                     <div className="flex items-center justify-end space-x-1.5">
                        <div className={`text-3xl font-bold ${getHealthScoreColor(client.healthScore, 'text')}`}>{client.healthScore}</div>
                        <div>
                            <p className="text-xs text-black">Health Score</p>
                            <p className={`text-xs font-semibold ${getHealthScoreColor(client.healthScore, 'text')}`}>{healthText}</p>
                        </div>
                    </div>
                    <p className="text-xs text-black mt-1">Client since {client.contactSince}</p>
                </div>
            </div>
            {/* Tabs */}
            <div className="flex space-x-6 border-b border-gray-200 mt-2">
                {['Overview', 'Financial', 'Communications', 'Tasks', 'Compliance'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`py-2 text-sm font-medium relative ${activeTab === tab ? 'text-brand-blue' : 'text-black hover:text-black'}`}>
                        {tab}
                        {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue rounded-t-full"></span>}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="py-4 grid grid-cols-1 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-3 space-y-4">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold text-black mb-3">Client Profile</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                            <div className="space-x-1"><span className="text-black w-20 inline-block">Primary:</span><span className="font-medium text-black">{client.name.split(' & ')[0]}</span></div>
                            <div className="space-x-1"><span className="text-black w-20 inline-block">Spouse:</span><span className="font-medium text-black">{client.spouse}</span></div>
                            <div className="space-x-1"><span className="text-black w-20 inline-block">Email:</span><a href={`mailto:${client.email}`} className="font-medium text-brand-blue hover:underline">{client.email}</a></div>
                            <div className="space-x-1"><span className="text-black w-20 inline-block">Phone:</span><span className="font-medium text-black">{client.phone}</span></div>
                            <div className="space-x-1 col-span-2"><span className="text-black w-20 inline-block">Address:</span><span className="font-medium text-black">{client.address}</span></div>
                            <div className="space-x-1"><span className="text-black w-20 inline-block">Risk:</span><span className="font-medium text-black">{client.riskProfile}</span></div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold text-black mb-3">Financial Overview</h4>
                        <div className="flex items-center bg-gray-50 p-3 rounded">
                             <div className="flex items-center space-x-8">
                                <div>
                                    <p className="text-xs text-black">Total AUM</p>
                                    <p className="text-2xl font-bold text-black">{formatCurrency(client.totalAUM)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-black">Annual Fees</p>
                                    <p className="text-2xl font-bold text-black">{formatCurrency(client.annualFees)}</p>
                                </div>
                            </div>
                            <div className="ml-auto relative w-16 h-16">
                                <svg className="w-full h-full" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.915" fill="none" className="stroke-current text-black" strokeWidth="3"></circle><circle cx="18" cy="18" r="15.915" fill="none" className="stroke-current text-brand-blue transform -rotate-90 origin-center" strokeWidth="3" strokeDasharray="100, 100"></circle></svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-base font-bold text-brand-blue">{client.feeRate.toFixed(1)}%</span>
                                    <span className="text-xs text-black -mt-0.5">fee</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold text-black mb-3">Account Breakdown</h4>
                        <ul className="space-y-1.5 text-xs">
                            {client.accounts.map(acc => (
                                <li key={acc.name} className="flex justify-between p-1.5 hover:bg-gray-50 rounded">
                                    <span className="text-black">{acc.name}</span>
                                    <span className="font-semibold text-black">${acc.value.toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                     <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold text-black mb-3">Recent Activity</h4>
                        <ul className="space-y-2">
                            {client.recentActivity.map(act => (
                                <li key={act.title} className="flex items-center text-xs">
                                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                                        {act.icon === 'check' && <CheckCircleIcon className="w-4 h-4 text-brand-green" />}
                                        {act.icon === 'doc' && <DocumentDuplicateIcon className="w-4 h-4 text-brand-blue" />}
                                        {act.icon === 'sync' && <ArrowPathIcon className="w-4 h-4 text-brand-yellow" />}
                                    </div>
                                    <div>
                                        <p className="font-medium text-black">{act.title}</p>
                                        <p className="text-xs text-black">{act.time}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold text-black mb-3">Health Score</h4>
                        <div className="space-y-3">
                            {client.healthScoreBreakdown.map(item => (
                                <div key={item.category}>
                                    <div className="flex justify-between items-center text-xs mb-1">
                                        <span className="text-black">{item.category}</span>
                                        <span className={`font-semibold ${item.score > 80 ? 'text-brand-green' : 'text-brand-yellow'}`}>{item.score}%</span>
                                    </div>
                                    <ProgressBar value={item.score} colorClass={item.score > 80 ? 'bg-brand-green' : 'bg-brand-yellow'}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold text-black">Next Actions</h4>
                            <a href="#" className="text-xs font-medium text-brand-blue hover:underline">View all</a>
                        </div>
                         <ul className="space-y-1.5 text-xs">
                            {client.nextActions.map(action => (
                                <li key={action.title} className="flex items-center p-1.5 bg-gray-50 rounded">
                                    <div className="w-3 h-3 rounded border border-brand-gray-400 mr-2"></div>
                                    <span className="font-medium text-black">{action.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-semibold text-black mb-3">Quick Actions</h4>
                        <div className="grid grid-cols-2 gap-1.5 text-xs text-black">
                            <button className="flex items-center p-1.5 rounded hover:bg-gray-100"><PaperAirplaneIcon className="w-4 h-4 mr-1.5 text-black"/>Message</button>
                            <button className="flex items-center p-1.5 rounded hover:bg-gray-100"><CalendarDaysIcon className="w-4 h-4 mr-1.5 text-black"/>Meeting</button>
                            <button className="flex items-center p-1.5 rounded hover:bg-gray-100"><PresentationChartBarIcon className="w-4 h-4 mr-1.5 text-black"/>Report</button>
                            <button className="flex items-center p-1.5 rounded hover:bg-gray-100"><UserCircleIcon className="w-4 h-4 mr-1.5 text-black"/>Profile</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const ClientManagement: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(MOCK_CLIENTS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAdvisor, setSelectedAdvisor] = useState('All Advisors');
  const [selectedHealthScore, setSelectedHealthScore] = useState('All Health Scores');
  const [isAdvisorDropdownOpen, setIsAdvisorDropdownOpen] = useState(false);
  const [isHealthDropdownOpen, setIsHealthDropdownOpen] = useState(false);

  const advisorDropdownRef = useRef<HTMLDivElement>(null);
  const healthDropdownRef = useRef<HTMLDivElement>(null);

  const advisors = useMemo(() => {
    const uniqueAdvisors = [...new Set(MOCK_CLIENTS.map(c => c.primaryAdvisor))];
    return ['All Advisors', ...uniqueAdvisors];
  }, []);

  const healthScoreRanges = [
    'All Health Scores',
    'Excellent (90-100)',
    'Good (70-89)',
    'Fair (50-69)',
    'Poor (<50)'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (advisorDropdownRef.current && !advisorDropdownRef.current.contains(event.target as Node)) {
        setIsAdvisorDropdownOpen(false);
      }
      if (healthDropdownRef.current && !healthDropdownRef.current.contains(event.target as Node)) {
        setIsHealthDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredClients = useMemo(() => {
    return MOCK_CLIENTS.filter(client => {
        const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesAdvisor = selectedAdvisor === 'All Advisors' || client.primaryAdvisor === selectedAdvisor;
        const score = client.healthScore;
        const matchesHealthScore = selectedHealthScore === 'All Health Scores' ||
            (selectedHealthScore === 'Excellent (90-100)' && score >= 90) ||
            (selectedHealthScore === 'Good (70-89)' && score >= 70 && score <= 89) ||
            (selectedHealthScore === 'Fair (50-69)' && score >= 50 && score <= 69) ||
            (selectedHealthScore === 'Poor (<50)' && score < 50);

        return matchesSearch && matchesAdvisor && matchesHealthScore;
    });
  }, [searchTerm, selectedAdvisor, selectedHealthScore]);

  useEffect(() => {
    const isSelectedClientInList = selectedClient && filteredClients.some(c => c.id === selectedClient.id);
    if (!isSelectedClientInList) {
        setSelectedClient(filteredClients[0] || null);
    }
  }, [filteredClients, selectedClient]);


  return (
    <div className="flex flex-col h-full bg-brand-gray-100">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ccc; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #999; }
      `}</style>
      <div className="flex-shrink-0 px-4 pt-3">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-lg font-semibold text-black">Client Management</h2>
            <p className="text-xs text-black">Client relationship management</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
                <div className="relative" ref={advisorDropdownRef}>
                    <button 
                        onClick={() => setIsAdvisorDropdownOpen(!isAdvisorDropdownOpen)}
                        className={`flex items-center text-xs px-2 py-1 border rounded bg-white hover:bg-gray-100 text-black ${isAdvisorDropdownOpen ? 'border-brand-blue ring-1 ring-brand-blue' : 'border-gray-300'}`}
                    >
                        {selectedAdvisor} <ChevronDownIcon className="w-3 h-3 ml-1 text-black"/>
                    </button>
                    {isAdvisorDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-40 bg-white rounded shadow-lg border border-gray-200">
                            <ul className="py-1">
                                {advisors.map(advisor => (
                                    <li key={advisor}>
                                        <a href="#" onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedAdvisor(advisor);
                                            setIsAdvisorDropdownOpen(false);
                                        }} className={`block px-3 py-1.5 text-xs text-black hover:bg-gray-100 ${selectedAdvisor === advisor ? 'font-semibold bg-gray-100' : ''}`}>
                                            {advisor}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="relative" ref={healthDropdownRef}>
                    <button 
                        onClick={() => setIsHealthDropdownOpen(!isHealthDropdownOpen)}
                        className={`flex items-center text-xs px-2 py-1 border rounded bg-white hover:bg-gray-100 text-black ${isHealthDropdownOpen ? 'border-brand-blue ring-1 ring-brand-blue' : 'border-gray-300'}`}
                    >
                        {selectedHealthScore} <ChevronDownIcon className="w-3 h-3 ml-1 text-black"/>
                    </button>
                     {isHealthDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-40 bg-white rounded shadow-lg border border-gray-200">
                            <ul className="py-1">
                                {healthScoreRanges.map(range => (
                                    <li key={range}>
                                        <a href="#" onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedHealthScore(range);
                                            setIsHealthDropdownOpen(false);
                                        }} className={`block px-3 py-1.5 text-xs text-black hover:bg-gray-100 ${selectedHealthScore === range ? 'font-semibold bg-gray-100' : ''}`}>
                                            {range}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <button className="flex items-center bg-brand-blue text-white px-2 py-1 rounded text-xs font-medium hover:bg-blue-700">
                <PlusIcon className="w-3 h-3 mr-1" />
                Add
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex bg-white rounded mx-2 mb-1 overflow-hidden">
        <div className="w-80 border-r border-gray-200 flex flex-col">
            <div className="p-2 border-b border-gray-200">
                <h3 className="font-semibold mb-1.5">Clients ({filteredClients.length})</h3>
                <div className="relative">
                    <SearchIcon className="absolute left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black" />
                    <input 
                      type="text"
                      placeholder="Search by name"
                      className="w-full pl-7 pr-2 py-1 border border-gray-300 rounded text-xs text-black"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {filteredClients.map(client => (
                    <ClientListItem 
                        key={client.id}
                        client={client}
                        isSelected={selectedClient?.id === client.id}
                        onSelect={() => setSelectedClient(client)}
                    />
                ))}
            </div>
        </div>
        <div className="flex-1 flex flex-col">
            <ClientDetail client={selectedClient} />
        </div>
      </div>
      <div className="text-xs text-black flex justify-between items-center px-2 pb-0.5">
        <span className="flex items-center"><ClockIcon className="w-3 h-3 mr-1"/>Updated: Today 2:47 PM</span>
        <span>Sync in 8 min</span>
      </div>
    </div>
  );
};

export default ClientManagement;