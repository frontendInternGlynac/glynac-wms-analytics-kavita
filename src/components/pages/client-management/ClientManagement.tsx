'use client';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Client } from './types';
import { ChevronDownIcon, SearchIcon, PlusIcon, ClockIcon, CheckCircleIcon, DocumentDuplicateIcon, ArrowPathIcon, PaperAirplaneIcon, CalendarDaysIcon, PresentationChartBarIcon, UserCircleIcon } from './icons';
import ProgressBar from './ProgressBar';
import { MOCK_CLIENTS } from './constants';




/*const ClientListItem: React.FC<{ client: Client, isSelected: boolean, onSelect: () => void }> = ({ client, isSelected, onSelect }) => {
    return (
        <div onClick={onSelect} className={`flex items-start p-3 border-l-4 cursor-pointer transition-colors duration-150 ${isSelected ? 'bg-blue-50 border-brand-blue' : 'border-transparent hover:bg-gray-50'}`}>
            <div className={`w-8 h-8 rounded-full ${client.avatarColor} text-white flex-shrink-0 flex items-center justify-center font-bold text-xs mr-3 mt-0.5`}>{client.initials}</div>
            <div className="grow">
                <p className="font-semibold text-black leading-tight text-sm">{client.name}</p>
                <p className="text-xs text-black">{client.primaryAdvisor}</p>
                <p className="text-xs font-semibold text-green-600 mt-0.5">{formatCurrency(client.totalAUM)} AUM</p>
            </div>
            <div className="text-right shrink-0 ml-3">
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
           //headers
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
          //tabs
            <div className="flex space-x-6 border-b border-gray-200 mt-2">
                {['Overview', 'Financial', 'Communications', 'Tasks', 'Compliance'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`py-2 text-sm font-medium relative ${activeTab === tab ? 'text-brand-blue' : 'text-black hover:text-black'}`}>
                        {tab}
                        {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue rounded-t-full"></span>}
                    </button>
                ))}
            </div>

         //content
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
};*/

/*const ClientManagement: React.FC = () => {
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
};*/




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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Client Management with 360° views</h2>
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




