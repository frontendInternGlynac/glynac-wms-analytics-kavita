"use client";
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MOCK_ONBOARDING_CLIENTS, MOCK_ONBOARDING_PROCESS, MOCK_ONBOARDING_ACTIVITY } from './constants';
import { OnboardingClient, OnboardingStage, OnboardingStageStatus } from './types';
import { 
    PlusIcon, 
    ChevronDownIcon,
    UserGroupIcon, 
    ClockIcon, 
    CheckCircleIcon,
    ArrowTrendingUpIcon,
    ExclamationTriangleIcon
} from './icons';

/*const formatCurrency = (value: number) => {
    if (value >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(1)}M`;
    }
    if (value >= 1_000) {
        return `$${Math.round(value / 1_000)}K`;
    }
    return `$${value}`;
};

const MetricCard: React.FC<{ icon: React.ReactNode, title: string, value: string, subValue: string, subValueColor: string, iconBg: string }> = ({ icon, title, value, subValue, subValueColor, iconBg }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
        <div className={`p-3 rounded-lg mr-4 ${iconBg}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm text-black">{title}</p>
            <p className="text-2xl font-bold text-black">{value}</p>
            <p className={`text-xs font-medium ${subValueColor}`}>{subValue}</p>
        </div>
    </div>
);

const StagePill: React.FC<{ stage: OnboardingStage }> = ({ stage }) => {
    const statusStyles: { [key in OnboardingStageStatus]: { bg: string, text: string, icon: React.ReactNode } } = {
        completed: { bg: 'bg-green-100', text: 'text-green-800', icon: <CheckCircleIcon className="w-4 h-4 text-green-600 mr-1.5" /> },
        pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: <ClockIcon className="w-4 h-4 text-yellow-600 mr-1.5" /> },
        overdue: { bg: 'bg-orange-100', text: 'text-orange-800', icon: <ClockIcon className="w-4 h-4 text-orange-600 mr-1.5" /> },
        in_progress: { bg: 'bg-blue-100', text: 'text-blue-800', icon: null },
        waiting: { bg: 'bg-gray-100', text: 'text-black', icon: null },
        scheduled: { bg: 'bg-gray-100', text: 'text-black', icon: null },
        screening_required: { bg: 'bg-red-100', text: 'text-red-800', icon: <ExclamationTriangleIcon className="w-4 h-4 text-red-600 mr-1.5" /> },
    };

    const style = statusStyles[stage.status];

    return (
        <div className={`flex items-center text-xs font-medium px-2 py-1 rounded-md ${style.bg} ${style.text}`}>
            {style.icon}
            <span>{stage.name}</span>
            {stage.details && <span className="ml-1.5 text-black">{stage.details}</span>}
        </div>
    );
};

const OnboardingClientCard: React.FC<{ client: OnboardingClient }> = ({ client }) => {
    const progressDots = Array.from({ length: client.progress.total }, (_, i) => (
        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < client.progress.current ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
    ));

    const currentStageStyles = {
        'Documentation Collection': 'bg-blue-100 text-blue-800',
        'Compliance Review': 'bg-yellow-100 text-yellow-800',
        'Account Setup': 'bg-green-100 text-green-800',
        'Initial Contact': 'bg-gray-100 text-black',
    }[client.currentStage] || 'bg-gray-100 text-black';
    
    return (
        <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-full ${client.avatarColor} text-white flex-shrink-0 flex items-center justify-center font-bold text-sm`}>
                    {client.initials}
                </div>
                <div className="flex-grow">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-black">{client.name}</p>
                            <p className="text-xs text-black">Advisor: {client.advisor}</p>
                        </div>
                        <div className={`text-xs font-semibold px-2.5 py-1 rounded-md ${currentStageStyles}`}>
                            {client.currentStage}
                        </div>
                    </div>
                    <p className="text-sm font-semibold text-green-600 mt-2">Expected AUM: {formatCurrency(client.expectedAUM)}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center flex-wrap gap-2">
                            {client.stages.map(stage => <StagePill key={stage.name} stage={stage} />)}
                        </div>
                        {client.progress.total > 0 && 
                            <div className="flex items-center space-x-1.5 ml-4">
                                {progressDots}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const StandardProcessStepper: React.FC = () => {
    const activeStep = 2; // Documentation Collection is active
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-md font-semibold text-black mb-4">Standard Onboarding Process</h3>
            <div className="relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200"></div>
                {MOCK_ONBOARDING_PROCESS.map(step => (
                     <div key={step.id} className="flex items-start space-x-4 mb-4 relative z-10">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${step.id === activeStep ? 'bg-brand-blue text-white' : 'bg-gray-200 text-black'}`}>
                            {step.id}
                        </div>
                        <div>
                            <p className={`font-semibold ${step.id === activeStep ? 'text-brand-blue' : 'text-black'}`}>{step.title}</p>
                            <p className="text-xs text-black">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const RecentActivityFeed: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-md font-semibold text-black mb-4">Recent Onboarding Activity</h3>
        <ul className="space-y-3">
            {MOCK_ONBOARDING_ACTIVITY.map(activity => {
                const icon = {
                    completed: <CheckCircleIcon className="w-5 h-5 text-black" />,
                    flagged: <ExclamationTriangleIcon className="w-5 h-5 text-black" />,
                    info: <div className="w-2 h-2 rounded-full bg-black"></div>,
                }[activity.status];
                return (
                    <li key={activity.id} className="flex items-start text-sm">
                        <div className="w-8 h-8 flex items-center justify-center mr-2 mt-0.5">{icon}</div>
                        <div>
                            <p className="font-medium text-black">{activity.description}</p>
                            <p className="text-xs text-black">{activity.time}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>
);

const ClientOnboarding: React.FC = () => {
    const [selectedAdvisor, setSelectedAdvisor] = useState('All Advisors');
    const [selectedStage, setSelectedStage] = useState('All Stages');
    const [isAdvisorDropdownOpen, setIsAdvisorDropdownOpen] = useState(false);
    const [isStageDropdownOpen, setIsStageDropdownOpen] = useState(false);

    const advisorDropdownRef = useRef<HTMLDivElement>(null);
    const stageDropdownRef = useRef<HTMLDivElement>(null);

    const advisors = useMemo(() => {
        const uniqueAdvisors = [...new Set(MOCK_ONBOARDING_CLIENTS.map(c => c.advisor))];
        return ['All Advisors', ...uniqueAdvisors];
    }, []);

    const stages = useMemo(() => {
        const uniqueStages = [...new Set(MOCK_ONBOARDING_CLIENTS.map(c => c.currentStage))];
        return ['All Stages', 'Initial Contact', 'Documentation Collection', 'Compliance Review', 'Account Setup'];
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (advisorDropdownRef.current && !advisorDropdownRef.current.contains(event.target as Node)) {
                setIsAdvisorDropdownOpen(false);
            }
            if (stageDropdownRef.current && !stageDropdownRef.current.contains(event.target as Node)) {
                setIsStageDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredClients = useMemo(() => {
        return MOCK_ONBOARDING_CLIENTS.filter(client => {
            const matchesAdvisor = selectedAdvisor === 'All Advisors' || client.advisor === selectedAdvisor;
            const matchesStage = selectedStage === 'All Stages' || client.currentStage === selectedStage;
            return matchesAdvisor && matchesStage;
        });
    }, [selectedAdvisor, selectedStage]);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-black">Client Onboarding</h2>
                    <p className="text-sm text-black">Manages the entire prospect-to-client journey with pipeline tracking and process optimization</p>
                </div>
                <button className="flex items-center bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    <PlusIcon className="w-5 h-5 mr-2" />
                    Add New Prospect
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard icon={<UserGroupIcon className="w-6 h-6 text-brand-purple" />} title="Total Prospects" value="23" subValue="+3 this week" subValueColor="text-brand-green" iconBg="bg-purple-100" />
                <MetricCard icon={<ClockIcon className="w-6 h-6 text-brand-yellow" />} title="In Progress" value="16" subValue="Avg 8.5 days" subValueColor="text-black" iconBg="bg-yellow-100" />
                <MetricCard icon={<CheckCircleIcon className="w-6 h-6 text-brand-green" />} title="Completed" value="7" subValue="This month" subValueColor="text-black" iconBg="bg-green-100" />
                <MetricCard icon={<ArrowTrendingUpIcon className="w-6 h-6 text-brand-blue" />} title="Conversion Rate" value="78%" subValue="+5% vs last month" subValueColor="text-brand-green" iconBg="bg-blue-100" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                <div className="lg:col-span-3 space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-black">Onboarding Pipeline</h3>
                        <div className="flex space-x-2">
                            <div className="relative" ref={advisorDropdownRef}>
                                <button
                                    className="flex items-center border rounded-md px-3 py-1.5 text-sm"
                                    onClick={() => setIsAdvisorDropdownOpen(v => !v)}
                                >
                                    {selectedAdvisor}
                                    <ChevronDownIcon className="w-4 h-4 ml-1 text-black" />
                                </button>
                                {isAdvisorDropdownOpen && (
                                    <div className="absolute right-0 mt-1 w-44 bg-white border rounded-md shadow-md z-10">
                                        <ul className="py-1">
                                            {advisors.map(a => (
                                                <li key={a}>
                                                    <button
                                                        className={`block w-full text-left px-3 py-1.5 text-sm ${selectedAdvisor === a ? 'font-semibold bg-gray-100' : ''}`}
                                                        onClick={() => { setSelectedAdvisor(a); setIsAdvisorDropdownOpen(false); }}
                                                    >
                                                        {a}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="relative" ref={stageDropdownRef}>
                                <button
                                    className="flex items-center border rounded-md px-3 py-1.5 text-sm"
                                    onClick={() => setIsStageDropdownOpen(v => !v)}
                                >
                                    {selectedStage}
                                    <ChevronDownIcon className="w-4 h-4 ml-1 text-black" />
                                </button>
                                {isStageDropdownOpen && (
                                    <div className="absolute right-0 mt-1 w-44 bg-white border rounded-md shadow-md z-10">
                                        <ul className="py-1">
                                            {stages.map(s => (
                                                <li key={s}>
                                                    <button
                                                        className={`block w-full text-left px-3 py-1.5 text-sm ${selectedStage === s ? 'font-semibold bg-gray-100' : ''}`}
                                                        onClick={() => { setSelectedStage(s); setIsStageDropdownOpen(false); }}
                                                    >
                                                        {s}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {filteredClients.map(c => (
                            <OnboardingClientCard key={c.name} client={c} />
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                    <StandardProcessStepper />
                    <RecentActivityFeed />
                </div>
            </div>

            <div className="text-xs text-black flex justify-between items-center px-2 pb-0.5">
                <span>Onboarding data last updated: Today at 3:15 PM</span>
                <span>Next sync in 15 minutes</span>
            </div>
        </div>
    );
};
*/


const getStageIcon = (status: OnboardingStageStatus) => {
  switch (status) {
    case 'completed':
      return <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />;
    case 'in_progress':
      return <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />;
    case 'overdue':
      return <ExclamationTriangleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />;
    case 'pending':
    case 'waiting':
    case 'scheduled':
      return <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />;
    case 'screening_required':
      return <ExclamationTriangleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />;
    default:
      return <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />;
  }
};

const getStageColor = (status: OnboardingStageStatus) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'in_progress':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'overdue':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'pending':
    case 'waiting':
    case 'scheduled':
      return 'bg-gray-100 text-gray-500 border-gray-300';
    case 'screening_required':
      return 'bg-orange-100 text-orange-800 border-orange-300';
    default:
      return 'bg-gray-100 text-gray-500 border-gray-300';
  }
};

const ClientOnboarding: React.FC = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState<string>('All Advisors');
  const [selectedStage, setSelectedStage] = useState<string>('All Stages');

  const uniqueAdvisors = useMemo(() => ['All Advisors', ...new Set(MOCK_ONBOARDING_CLIENTS.map((c) => c.advisor))], []);

  const filteredClients = useMemo(() => {
    return MOCK_ONBOARDING_CLIENTS.filter((client) => {
      const matchesAdvisor = selectedAdvisor === 'All Advisors' || client.advisor === selectedAdvisor;
      const matchesStage = selectedStage === 'All Stages' || client.currentStage === selectedStage;
      return matchesAdvisor && matchesStage;
    });
  }, [selectedAdvisor, selectedStage]);

  const handleAddNewProspect = () => {
    console.log('Add New Prospect clicked - Implement modal/form here');
  };

  const renderStats = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 sm:mb-6">
      <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 bg-gray-100 rounded-lg">
            <UserGroupIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">Total Prospects</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">23</p>
            <p className="text-xs sm:text-sm text-green-600">+3 this week</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 bg-yellow-100 rounded-lg">
            <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">In Progress</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">16</p>
            <p className="text-xs sm:text-sm text-gray-500">Avg 8.5 days</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg">
            <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">Completed</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">7</p>
            <p className="text-xs sm:text-sm text-green-600">this month</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
            <ArrowTrendingUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">Conversion Rate</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">78%</p>
            <p className="text-xs sm:text-sm text-green-600">+5% vs last month</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPipelineFilters = () => (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-6">
      <select
        value={selectedAdvisor}
        onChange={(e) => setSelectedAdvisor(e.target.value)}
        className="flex-1 px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {uniqueAdvisors.map((advisor) => (
          <option key={advisor} value={advisor}>
            {advisor}
          </option>
        ))}
      </select>
      <select
        value={selectedStage}
        onChange={(e) => setSelectedStage(e.target.value)}
        className="flex-1 px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All Stages">All Stages</option>
        {MOCK_ONBOARDING_PROCESS.map((step) => (
          <option key={step.id} value={step.title}>
            {step.title}
          </option>
        ))}
      </select>
    </div>
  );

  const renderClientCard = (client: OnboardingClient) => (
    <div key={client.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-4 mb-3 sm:mb-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${client.avatarColor} text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0`}>
            {client.initials}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{client.name}</h4>
            <p className="text-xs sm:text-sm text-gray-500">Advisor: {client.advisor}</p>
            <p className="text-xs sm:text-sm font-medium text-gray-900">${(client.expectedAUM / 1000000).toFixed(1)}M Expected AUM</p>
          </div>
        </div>
        <div className="text-right sm:text-left">
          <p className="text-xs sm:text-sm text-gray-500">Current Stage</p>
          <p className="font-medium text-gray-900 text-xs sm:text-sm truncate">{client.currentStage}</p>
        </div>
      </div>
      <div className="mt-3 sm:mt-4 overflow-x-auto">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 sm:gap-2 min-w-max">
          {client.stages.map((stage, index) => (
            <div key={index} className="flex flex-col items-center space-y-1 sm:space-y-1">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${getStageColor(stage.status)} border flex items-center justify-center text-xs font-medium p-1 sm:p-0`}>
                {getStageIcon(stage.status)}
                {stage.details && <span className="block text-xs sm:text-xxs mt-0.5 sm:mt-1 truncate w-full text-center">{stage.details}</span>}
              </div>
              <p className="text-xs text-center text-gray-500 whitespace-nowrap truncate max-w-[50px] sm:max-w-[60px]">{stage.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 sm:mt-3">
        <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
          <div
            className="bg-blue-600 h-1.5 sm:h-2 rounded-full"
            style={{ width: `${(client.progress.current / client.progress.total) * 100}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1 text-center sm:text-left">{client.progress.current}/{client.progress.total} steps</p>
      </div>
    </div>
  );

  const renderProcessSteps = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Standard Onboarding Process</h3>
      <div className="space-y-3 sm:space-y-4">
        {MOCK_ONBOARDING_PROCESS.map((step) => (
          <div key={step.id} className="flex items-start space-x-2 sm:space-x-3">
            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-xs sm:text-sm">
              {step.id}
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{step.title}</h4>
              <p className="text-xs sm:text-sm text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRecentActivity = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Recent Onboarding Activity</h3>
      <div className="space-y-2 sm:space-y-3">
        {MOCK_ONBOARDING_ACTIVITY.map((activity) => {
          let icon;
          let color;
          switch (activity.status) {
            case 'completed':
              icon = <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />;
              color = 'border-green-200 bg-green-50';
              break;
            case 'flagged':
              icon = <ExclamationTriangleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />;
              color = 'border-red-200 bg-red-50';
              break;
            case 'info':
              icon = <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />;
              color = 'border-blue-200 bg-blue-50';
              break;
            default:
              icon = <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />;
              color = 'border-gray-200 bg-gray-50';
          }
          return (
            <div key={activity.id} className={`flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg border-l-4 ${color}`}>
              <div className="flex-shrink-0 mt-0.5">{icon}</div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{activity.description}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Glynac</h1>
            <span className="text-xs sm:text-sm text-gray-500">Client Onboarding</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-black">Client Onboarding Journey</h2>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">with pipeline tracking and process optimization</p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">Manages the entire prospect-to-client journey with pipeline tracking and process optimization</p>
        </div>

        <div className="flex justify-end mb-4 sm:mb-6">
          <button
            onClick={handleAddNewProspect}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium flex items-center space-x-1 sm:space-x-2 w-full sm:w-auto"
          >
            <PlusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>+ Add New Prospect</span>
          </button>
        </div>

        {renderStats()}
        {renderPipelineFilters()}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Onboarding Pipeline</h3>
            <div className="space-y-3 sm:space-y-4">
              {filteredClients.map(renderClientCard)}
            </div>
          </div>
          {renderProcessSteps()}
        </div>

        {renderRecentActivity()}

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 text-xs sm:text-sm text-gray-500 space-y-2 sm:space-y-0">
          <span>Onboarding data last updated: Today at 3:15 PM</span>
          <span>Next sync in 15 minutes</span>
        </div>
      </div>
    </div>
  );
};


export default ClientOnboarding;