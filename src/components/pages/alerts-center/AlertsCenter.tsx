'use client';

{/*"use client";
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { MOCK_ALERTS, ALERT_CATEGORIES, RESOLUTION_PERFORMANCE, ALERT_SOURCES } from './constants';
import { Alert, AlertPriority, AlertType } from './types';
import {
  ClockIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  EllipsisVerticalIcon,
  ShieldCheckIcon,
  UserMinusIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentChartBarIcon,
} from './icons';
import ProgressBar from './ProgressBar';

const typeStyles: { [key in AlertType]: { iconBg: string; text: string; border: string } } = {
  'Client Risk Alerts': { iconBg: 'bg-red-100', text: 'text-red-800', border: 'border-red-500' },
  'Compliance & Regulatory': { iconBg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-500' },
  'Operational Process': { iconBg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-500' },
  'Performance & Quality': { iconBg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-500' },
};

// Overrides for visual variety
typeStyles['Performance & Quality'] = { iconBg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-500' };
const customTypeStyles: { [key: string]: any } = {
  'Client Communication Quality Issue': { iconBg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-500' },
  'Quarterly Report Preparation Due': { iconBg: 'bg-gray-200', text: 'text-black', border: 'border-gray-500' },
};

const iconComponents: { [key: string]: React.FC<{ className?: string }> } = {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserMinusIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentChartBarIcon,
  InformationCircleIcon,
};

const MetricCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: number;
  subtitle: string;
  borderColor: string;
  textColor: string;
}> = ({ icon, title, value, subtitle, borderColor, textColor }) => (
  <div className={`bg-white p-4 rounded-xl shadow-sm border-l-4 ${borderColor}`}>
    <div className="flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <p className="text-3xl font-bold text-black">{value}</p>
        <p className="text-sm font-semibold text-black">{title}</p>
      </div>
    </div>
    <p className={`text-xs mt-2 ${textColor}`}>{subtitle}</p>
  </div>
);

const AlertCard: React.FC<{ alert: Alert }> = ({ alert }) => {
  const style = customTypeStyles[alert.title] || typeStyles[alert.type];
  const IconComponent = iconComponents[alert.icon];

  return (
    <div className={`bg-white p-3 rounded-lg border border-gray-200 flex items-start space-x-3 transition-shadow hover:shadow-md relative pl-5`}>
      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${style.border.replace('border-', 'bg-')}`}></div>
      <div className={`p-2 rounded-full ${style.iconBg} ${style.text} flex-shrink-0 mt-1`}>{IconComponent && <IconComponent className="w-6 h-6" />}</div>
      <div className="flex-grow">
        <p className="font-semibold text-black text-sm">{alert.title}</p>
        <p className="text-xs text-black mt-0.5">{alert.description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-black flex items-center flex-wrap gap-x-2">
            <span>{alert.type}</span>
            <span className="text-black">•</span>
            <span>{alert.source}</span>
            <span className="text-black">•</span>
            <span>{alert.timestamp}</span>
          </p>
          <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
            {alert.actions.map((action) => (
              <button
                key={action.label}
                className={
                  action.style === 'primary'
                    ? `text-xs font-semibold px-3 py-1 rounded-md ${action.color}`
                    : 'text-xs bg-white border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50'
                }
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className={`w-1.5 h-1.5 rounded-full ${style.border.replace('border-', 'bg-')}`}></div>
      </div>
    </div>
  );
};

const AlertsCenter: React.FC = () => {
  const [selectedType, setSelectedType] = useState<AlertType | 'All Alert Types'>('All Alert Types');
  const [selectedPriority, setSelectedPriority] = useState<AlertPriority | 'All Priorities'>('All Priorities');
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);

  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const priorityDropdownRef = useRef<HTMLDivElement>(null);

  const alertTypes: (AlertType | 'All Alert Types')[] = [
    'All Alert Types',
    'Client Risk Alerts',
    'Compliance & Regulatory',
    'Operational Process',
    'Performance & Quality',
  ];
  const priorities: (AlertPriority | 'All Priorities')[] = ['All Priorities', 'Critical', 'High', 'Medium', 'Low'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target as Node)) {
        setIsTypeDropdownOpen(false);
      }
      if (priorityDropdownRef.current && !priorityDropdownRef.current.contains(event.target as Node)) {
        setIsPriorityDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredAlerts = useMemo(() => {
    return MOCK_ALERTS.filter((alert) => {
      const matchesType = selectedType === 'All Alert Types' || alert.type === selectedType;
      const matchesPriority = selectedPriority === 'All Priorities' || alert.priority === selectedPriority;
      return matchesType && matchesPriority;
    });
  }, [selectedType, selectedPriority]);

  return (
    <div className="space-y-6">
      // Header 
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-black">Alerts Center</h2>
          <p className="text-sm text-black">
            Centralized notification system that proactively identifies risks, compliance issues, and operational problems
          </p>
        </div>
        <div className="flex items-center space-x-2">
          // Filters and Actions 
          <div className="relative" ref={typeDropdownRef}>
            <button
              onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
              className="flex items-center text-sm px-3 py-1.5 border rounded_md bg-white hover:bg-blue-50 border-gray-300 w-48 justify-between text-black"
            >
              <span>{selectedType}</span>
              <ChevronDownIcon className="w-4 h-4 ml-2 text-black" />
            </button>
            {isTypeDropdownOpen && (
              <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                <ul className="py-1">
                  {alertTypes.map((type) => (
                    <li key={type}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedType(type);
                          setIsTypeDropdownOpen(false);
                        }}
                        className={`block px-4 py-2 text-sm ${selectedType === type ? 'font-semibold bg-blue-50' : 'text-black hover:bg-blue-50'}`}
                      >
                        {type}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative" ref={priorityDropdownRef}>
            <button
              onClick={() => setIsPriorityDropdownOpen(!isPriorityDropdownOpen)}
              className="flex items-center text-sm px-3 py-1.5 border rounded-md bg-white hover:bg-blue-50 border-gray-300 w-40 justify-between text-black"
            >
              <span>{selectedPriority}</span>
              <ChevronDownIcon className="w-4 h-4 ml-2 text-black" />
            </button>
            {isPriorityDropdownOpen && (
              <div className="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200">
                <ul className="py-1">
                  {priorities.map((p) => (
                    <li key={p}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedPriority(p);
                          setIsPriorityDropdownOpen(false);
                        }}
                        className={`block px-4 py-2 text-sm ${selectedPriority === p ? 'font-semibold bg-blue-50' : 'text-black hover:bg-blue-50'}`}
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-700">Mark All as Read</button>
        </div>
      </div>

      //Metric Cards 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<ExclamationTriangleIcon className="w-6 h-6 text-red-600" />}
          title="Critical Alerts"
          value={7}
          subtitle="Require immediate attention"
          borderColor="border-red-500"
          textColor="text-black"
        />
        <MetricCard
          icon={<InformationCircleIcon className="w-6 h-6 text-yellow-600" />}
          title="High Priority"
          value={23}
          subtitle="Action needed today"
          borderColor="border-yellow-500"
          textColor="text-black"
        />
        <MetricCard
          icon={<div className="w-6 h-6 flex items-center justify-center"><div className="w-4 h-4 bg-blue-500 rounded-full"></div></div>}
          title="Medium Priority"
          value={41}
          subtitle="Review this week"
          borderColor="border-blue-500"
          textColor="text-black"
        />
        <MetricCard
          icon={<CheckCircleIcon className="w-6 h-6 text-green-600" />}
          title="Resolved Today"
          value={18}
          subtitle="Successfully addressed"
          borderColor="border-green-500"
          textColor="text-green-600"
        />
      </div>

      // Main Content 
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-black">Active Alerts</h3>
            <div className="flex items-center space-x-2 text-sm font-medium">
              <button className="px-3 py-1 border rounded-md bg-white hover:bg-blue-50 text-black">Filter</button>
              <button className="px-3 py-1 border rounded-md bg-white hover:bg-blue-50 text-black">Export</button>
            </div>
          </div>
          <div className="space-y-3">
            {filteredAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          // Alert Categories 
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-md font-semibold text-black mb-3">Alert Categories</h3>
            <ul className="space-y-2 text-sm">
              {ALERT_CATEGORIES.map((cat) => (
                <li key={cat.name} className="flex items-center justify-between">
                  <span className="flex items-center">
                    <span className={`w-2.5 h-2.5 rounded-full mr-2 ${cat.color}`}></span>
                    {cat.name}
                  </span>
                  <span className="font-semibold">{cat.value}</span>
                </li>
              ))}
            </ul>
          </div>
          // Resolution Performance 
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-md font-semibold text-black mb-3">Resolution Performance</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-black">Avg Resolution Time</span>
                  <span className="font-semibold">{RESOLUTION_PERFORMANCE.avgTime}</span>
                </div>
                <ProgressBar value={80} colorClass="bg-brand-green" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-black">Same-day Resolution</span>
                  <span className="font-semibold">{RESOLUTION_PERFORMANCE.sameDay}%</span>
                </div>
                <ProgressBar value={RESOLUTION_PERFORMANCE.sameDay} colorClass="bg-brand-blue" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-black">Escalation Rate</span>
                  <span className="font-semibold">{RESOLUTION_PERFORMANCE.escalationRate}%</span>
                </div>
                <ProgressBar value={RESOLUTION_PERFORMANCE.escalationRate} colorClass="bg-brand-yellow" />
              </div>
            </div>
          </div>
          // Alert Sources 
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-md font-semibold text-black mb-3">Alert Sources</h3>
            <ul className="space-y-1 text-sm">
              {ALERT_SOURCES.map((source) => (
                <li key={source.name} className="flex items-center justify-between">
                  <span className="text-black">{source.name}</span>
                  <span className="font-semibold">{source.value}</span>
                </li>
              ))}
            </ul>
          </div>
          // Compliance Agent 
          <div className="p-4 rounded-xl bg-red-50 border border-red-200">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-200 text-red-700 flex items-center justify-center font-bold text-lg mr-3">R</div>
              <div>
                <h4 className="font-semibold text-red-900">Robert - Compliance Agent</h4>
                <p className="text-xs text-red-700">AI Assistant for Risk & Compliance</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-black mb-2">
                  Wilson family alert escalated to critical. Their advisor hasn't responded. Should I re-assign to backup advisor?
                </p>
                <div className="flex items-center space-x-2">
                  <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">Re-assign</button>
                  <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50">Wait 4h</button>
                </div>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm text-black mb-2">
                  Found pattern: 3 KYC expirations this month. Recommend implementing 30-day advance reminders?
                </p>
                <div className="flex items-center space-x-2">
                  <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">Implement</button>
                  <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50">Review</button>
                </div>
              </div>
            </div>
            <a href="#" className="text-sm font-medium text-red-600 hover:text-red-800 mt-4 inline-block text-center w-full">Chat with Robert →</a>
          </div>
          // Alert Settings 
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-md font-semibold text-black mb-3">Alert Settings</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center">
                <span className="text-black">Real-time Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-black">Email Summaries</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-black">Auto-Assignment</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </li>
            </ul>
            <a href="#" className="text-sm font-medium text-black hover:underline mt-4 block text-center">Configure Alert Rules →</a>
          </div>
        </div>
      </div>

      // Footer 
      <div className="text-xs text-black flex justify-between items-center pt-2">
        <span className="flex items-center">
          <ClockIcon className="w-4 h-4 mr-1" />Alerts last updated: Today at 3:45 PM
        </span>
        <span>Next scan in 5 minutes</span>
      </div>
    </div>
  );
};

export default AlertsCenter;*/}








import React, { useState } from 'react';
import {
  ALERT_CATEGORIES,
  RESOLUTION_PERFORMANCE,
  ALERT_SOURCES,
  MOCK_ALERTS
} from './constants';
import {
  Alert,
  AlertType,
  AlertPriority,
  AlertAction
} from './types';
import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserMinusIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentChartBarIcon,
  EllipsisVerticalIcon
} from './icons';
import ProgressBar from './ProgressBar';

const PRIORITY_ICONS: Record<AlertPriority, React.ComponentType<any>> = {
  Critical: ExclamationTriangleIcon,
  High: ExclamationTriangleIcon,
  Medium: InformationCircleIcon,
  Low: CheckCircleIcon
};

const TYPE_COLORS: Record<AlertType, { bg: string; border: string; text: string; icon: string }> = {
  'Client Risk Alerts': { bg: 'bg-gradient-to-r from-red-50 to-rose-50', border: 'border-red-200', text: 'text-red-700', icon: 'from-red-500 to-red-600' },
  'Compliance & Regulatory': { bg: 'bg-gradient-to-r from-yellow-50 to-amber-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: 'from-yellow-500 to-yellow-600' },
  'Operational Process': { bg: 'bg-gradient-to-r from-blue-50 to-cyan-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'from-blue-500 to-blue-600' },
  'Performance & Quality': { bg: 'bg-gradient-to-r from-purple-50 to-violet-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'from-purple-500 to-purple-600' }
};

export default function AlertsCenter() {
  const [alertTypeFilter, setAlertTypeFilter] = useState<AlertType | 'All'>('All');
  const [priorityFilter, setPriorityFilter] = useState<AlertPriority | 'All'>('All');
  const [readAlerts, setReadAlerts] = useState<Set<string>>(new Set());
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  const filteredAlerts = MOCK_ALERTS.filter(alert => 
    (alertTypeFilter === 'All' || alert.type === alertTypeFilter) &&
    (priorityFilter === 'All' || alert.priority === priorityFilter) &&
    !readAlerts.has(alert.id)
  );

  const toggleRead = (alertId: string) => {
    setReadAlerts(prev => new Set([...prev, alertId]));
  };

  const handleMarkAllRead = () => {
    setReadAlerts(new Set(MOCK_ALERTS.map(a => a.id)));
    // Simulate API call
    console.log('All alerts marked as read');
  };

  const handleAlertAction = (alertId: string, action: AlertAction) => {
    if (action.label === 'Dismiss') {
      toggleRead(alertId);
    }
    console.log(`Performing action "${action.label}" on alert ${alertId}`);
  };

  const handleChatWithAI = () => {
    setSelectedAlert(null); // Close any open chat
    console.log('Opening chat with Robert...');
    // Simulate opening chat
  };

  const renderPriorityIcon = (priority: AlertPriority, size = 'h-5 w-5') => {
    const Icon = PRIORITY_ICONS[priority];
    const color = priority === 'Critical' ? 'text-red-500 drop-shadow-lg' : priority === 'High' ? 'text-orange-500' : priority === 'Medium' ? 'text-yellow-500' : 'text-green-500';
    return Icon ? <Icon className={`${size} ${color} flex-shrink-0 animate-pulse`} /> : null;
  };

  const renderAlertCard = (alert: Alert) => {
    const colors = TYPE_COLORS[alert.type];
    return (
      <div key={alert.id} className={`p-4 sm:p-6 rounded-2xl border-l-4 ${colors.border} ${colors.bg} hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 group`}>
        <div className="flex items-start gap-4 relative">
          {renderPriorityIcon(alert.priority, 'h-6 w-6')}
          <div className="flex-1 min-w-0">
            <div className="font-bold text-gray-900 text-sm sm:text-base mb-2 line-clamp-1 group-hover:text-indigo-700 transition-colors">{alert.title}</div>
            <div className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">{alert.description}</div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">
              <span className={`${colors.text} font-semibold px-2 py-1 rounded-full bg-white/50`}>{alert.type}</span>
              <ClockIcon className="h-3 w-3" />
              <span>{alert.source} • {alert.timestamp}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {alert.actions.map((action, index) => (
                <button
                  key={index}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 transform hover:scale-105 shadow-sm ${
                    action.style === 'primary'
                      ? `${action.color || 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'} hover:shadow-md`
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300'
                  }`}
                  onClick={() => handleAlertAction(alert.id, action)}
                >
                  {action.label}
                </button>
              ))}
              <button
                className="ml-auto text-xs text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => toggleRead(alert.id)}
              >
                Mark Read
              </button>
            </div>
          </div>
          <EllipsisVerticalIcon className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors lg:opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6 lg:p-8 font-sans text-gray-800 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-4 sm:p-6 lg:p-8 mb-8">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6">
          <div className="mb-6 xl:mb-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-black ">Alerts Center</h1>
            <p className="text-gray-600 mt-3 text-sm sm:text-base lg:text-lg max-w-2xl">Centralized notification system that proactively identifies risks, compliance issues, and operational problems</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-end w-full xl:w-auto justify-center xl:justify-end">
            <div className="relative w-full sm:w-auto flex-1 sm:flex-none max-w-xs">
              <select 
                className="w-full border border-gray-300/50 px-4 py-3 rounded-2xl text-sm appearance-none bg-white/80 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 focus:border-transparent transition-all duration-300"
                value={alertTypeFilter}
                onChange={(e) => setAlertTypeFilter(e.target.value as AlertType | 'All')}
              >
                <option value="All">All Alert Types</option>
                {Object.values(ALERT_CATEGORIES).map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-4 top-4 h-4 w-4 text-gray-400 pointer-events-none transition-transform duration-300" />
            </div>
            <div className="relative w-full sm:w-auto flex-1 sm:flex-none max-w-xs">
              <select 
                className="w-full border border-gray-300/50 px-4 py-3 rounded-2xl text-sm appearance-none bg-white/80 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 focus:border-transparent transition-all duration-300"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value as AlertPriority | 'All')}
              >
                <option value="All">All Priorities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-4 h-4 w-4 text-gray-400 pointer-events-none transition-transform duration-300" />
            </div>
            <button 
              className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-8 py-3 rounded-2xl hover:from-red-600 hover:to-rose-700 font-bold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              onClick={handleMarkAllRead}
            >
              <CheckCircleIcon className="h-4 w-4" />
              Mark All Read
            </button>
          </div>
        </div>
      </header>

      {/* Metrics Grid */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-4 sm:p-6 lg:p-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-red-50 via-rose-50 to-red-100 border border-red-200/50 hover:shadow-xl transition-shadow duration-500">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-500 mx-auto mb-3 animate-bounce" />
            <div className="text-3xl lg:text-4xl font-black text-red-700 mb-1">7</div>
            <div className="text-sm lg:text-base text-gray-600 font-semibold mb-1">Critical Alerts</div>
            <div className="text-xs text-red-600 font-medium">Require immediate attention</div>
          </div>
          <div className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 border border-yellow-200/50 hover:shadow-xl transition-shadow duration-500">
            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl lg:text-4xl font-black text-yellow-700 mb-1">23</div>
            <div className="text-sm lg:text-base text-gray-600 font-semibold mb-1">High Priority</div>
            <div className="text-xs text-yellow-600 font-medium">Action needed today</div>
          </div>
          <div className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 border border-blue-200/50 hover:shadow-xl transition-shadow duration-500">
            <InformationCircleIcon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <div className="text-3xl lg:text-4xl font-black text-blue-700 mb-1">41</div>
            <div className="text-sm lg:text-base text-gray-600 font-semibold mb-1">Medium Priority</div>
            <div className="text-xs text-blue-600 font-medium">Review this week</div>
          </div>
          <div className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 border border-green-200/50 hover:shadow-xl transition-shadow duration-500">
            <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <div className="text-3xl lg:text-4xl font-black text-green-700 mb-1">18</div>
            <div className="text-sm lg:text-base text-gray-600 font-semibold mb-1">Resolved Today</div>
            <div className="text-xs text-green-600 font-medium">Successfully addressed</div>
          </div>
        </div>
      </section>

      {/* Filters and Active Alerts */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-4 sm:p-6 lg:p-8 mb-8">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6 mb-8">
          <h2 className="text-xl lg:text-2xl font-black text-gray-900 flex items-center gap-3">Active Alerts</h2>
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-end w-full xl:w-auto justify-center xl:justify-end">
            <div className="relative w-full sm:w-auto flex-1 sm:flex-none max-w-md">
              <select 
                className="w-full border border-gray-300/50 px-4 py-3 rounded-2xl text-sm appearance-none bg-white/80 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-transparent shadow-lg transition-all duration-300"
                value={alertTypeFilter}
                onChange={(e) => setAlertTypeFilter(e.target.value as AlertType | 'All')}
              >
                <option value="All">All Alert Types</option>
                {Object.values(ALERT_CATEGORIES).map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-4 top-4 h-4 w-4 text-gray-400 pointer-events-none transition-transform duration-300" />
            </div>
            <div className="relative w-full sm:w-auto flex-1 sm:flex-none max-w-md">
              <select 
                className="w-full border border-gray-300/50 px-4 py-3 rounded-2xl text-sm appearance-none bg-white/80 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-transparent shadow-lg transition-all duration-300"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value as AlertPriority | 'All')}
              >
                <option value="All">All Priorities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-4 h-4 w-4 text-gray-400 pointer-events-none transition-transform duration-300" />
            </div>
            <button 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-2xl hover:from-emerald-600 hover:to-teal-700 font-bold flex items-center gap-2 shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              onClick={handleMarkAllRead}
            >
              <CheckCircleIcon className="h-4 w-4" />
              Mark All Read
            </button>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map(renderAlertCard)
          ) : (
            <div className="text-center py-12 lg:py-16 text-gray-500 bg-gray-50 rounded-2xl">
              <ExclamationTriangleIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-medium">No alerts match the current filters.</p>
              <p className="text-sm mt-2">Try adjusting your filters to see more alerts.</p>
            </div>
          )}
        </div>
      </section>

      {/* Alert Categories and Resolution Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
        {/* Alert Categories */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/60 p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Alert Categories</h3>
          <div className="space-y-4">
            {ALERT_CATEGORIES.map((cat) => (
              <div key={cat.name} className="flex justify-between items-center p-4 bg-white/50 rounded-2xl border border-gray-200/50 hover:bg-white/70 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${cat.color} `}></div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{cat.name}</span>
                </div>
                <span className="text-lg font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">{cat.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Resolution Performance */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl  p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Resolution Performance</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/50">
              <span className="text-sm sm:text-base text-gray-600 font-medium">Avg Resolution Time</span>
              <span className="text-2xl lg:text-3xl font-black text-emerald-700 bg-emerald-100 px-4 py-2 rounded-xl shadow-md">{RESOLUTION_PERFORMANCE.avgTime}</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Same Day Resolution</span>
                  <span className="text-sm sm:text-base font-semibold text-green-600">{RESOLUTION_PERFORMANCE.sameDay}%</span>
                </div>
                <ProgressBar value={RESOLUTION_PERFORMANCE.sameDay} colorClass="bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Escalation Rate</span>
                  <span className="text-sm sm:text-base font-semibold text-red-600">{RESOLUTION_PERFORMANCE.escalationRate}%</span>
                </div>
                <ProgressBar value={RESOLUTION_PERFORMANCE.escalationRate} colorClass="bg-gradient-to-r from-red-500 to-rose-500 shadow-lg" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Alert Sources */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-4 sm:p-6 lg:p-8 mb-8">
        <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Alert Sources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALERT_SOURCES.map((source, index) => (
            <div key={source.name} className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-b from-indigo-50 to-blue-100 border border-indigo-200/50 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <div className="text-sm lg:text-base font-semibold text-gray-900 mb-2">{source.name}</div>
              <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{source.value}</div>
              {index % 2 === 0 && <div className="mt-2 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto w-16"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* AI Agent */}
      <section className="bg-gradient-to-r from-rose-50 via-red-50 to-rose-100 rounded-3xl  p-4 sm:p-6 lg:p-8 mb-8">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6 mb-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h4 className="font-black text-gray-900 text-lg lg:text-xl">Robert - Compliance Agent</h4>
              <p className="text-sm lg:text-base text-gray-600">AI Assistant for Risk & Compliance</p>
            </div>
          </div>
          <button 
            className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-8 py-3 rounded-2xl hover:from-red-600 hover:to-rose-700 flex items-center gap-2 shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 self-start xl:self-auto w-full xl:w-auto justify-center"
            onClick={handleChatWithAI}
          >
            Chat with Robert
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-red-200/50 shadow-inner">
            <strong className="text-gray-900 block mb-4 text-base lg:text-lg font-bold flex items-center gap-2">Recent Suggestion</strong>
            <p className="text-sm lg:text-base text-gray-700 mb-6 leading-relaxed">Wilson family alert escalated to critical. Their advisor hasn't responded. Should I re-assign to backup advisor?</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-6 py-2.5 rounded-xl hover:from-red-600 hover:to-rose-600 font-semibold shadow-md transition-all duration-300 transform hover:scale-105">Re-assign</button>
              <button className="bg-gray-300 text-gray-700 px-6 py-2.5 rounded-xl hover:bg-gray-400 font-semibold transition-all duration-300 transform hover:scale-105">Wait 4h</button>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-red-200/50 shadow-inner">
            <strong className="text-gray-900 block mb-4 text-base lg:text-lg font-bold flex items-center gap-2">Pattern Detection</strong>
            <p className="text-sm lg:text-base text-gray-700 mb-6 leading-relaxed">Found pattern: 3 KYC exceptions this month. Recommend implementing 30-day advance reminders?</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-xl hover:from-emerald-600 hover:to-teal-600 font-semibold shadow-md transition-all duration-300 transform hover:scale-105">Implement</button>
              <button className="bg-gray-300 text-gray-700 px-6 py-2.5 rounded-xl hover:bg-gray-400 font-semibold transition-all duration-300 transform hover:scale-105">Review</button>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Settings */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/60 p-4 sm:p-6 lg:p-8 mb-8">
        <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Alert Settings</h3>
        <div className="space-y-4 max-w-md">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
            <span className="text-sm lg:text-base font-semibold">Real-time Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 shadow-md"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
            <span className="text-sm lg:text-base font-semibold">Email Summaries</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 shadow-md"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
            <span className="text-sm lg:text-base font-semibold">Auto-Assignment</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 shadow-md"></div>
            </label>
          </div>
          <button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 lg:py-3.5 rounded-2xl hover:from-indigo-600 hover:to-purple-700 font-semibold transition-all duration-300 shadow-xl transform hover:scale-105">Configure Alert Rules</button>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500 mt-8 p-4 bg-white/50 rounded-2xl border border-gray-200/50">
        <div className="flex items-center justify-center gap-2 lg:gap-3">
          <ClockIcon className="h-4 w-4 text-gray-400" />
          <span>Alerts last updated: Today at 3:45 PM</span>
          <span>•</span>
          <span className="font-semibold text-indigo-600">Next scan in 5 minutes</span>
        </div>
      </div>
    </div>
  );
}