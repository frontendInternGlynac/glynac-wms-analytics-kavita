"use client";
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
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-black">Alerts Center</h2>
          <p className="text-sm text-black">
            Centralized notification system that proactively identifies risks, compliance issues, and operational problems
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {/* Filters and Actions */}
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

      {/* Metric Cards */}
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

      {/* Main Content */}
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
          {/* Alert Categories */}
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
          {/* Resolution Performance */}
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
          {/* Alert Sources */}
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
          {/* Compliance Agent */}
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
          {/* Alert Settings */}
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

      {/* Footer */}
      <div className="text-xs text-black flex justify-between items-center pt-2">
        <span className="flex items-center">
          <ClockIcon className="w-4 h-4 mr-1" />Alerts last updated: Today at 3:45 PM
        </span>
        <span>Next scan in 5 minutes</span>
      </div>
    </div>
  );
};

export default AlertsCenter;