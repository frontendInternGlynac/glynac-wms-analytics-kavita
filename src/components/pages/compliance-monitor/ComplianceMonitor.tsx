'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  MOCK_COMPLIANCE_STATUS_ITEMS,
  MOCK_RISK_ISSUES,
  MOCK_DOCUMENTATION_STATUS,
  MOCK_COMMUNICATION_SURVEILLANCE,
  MOCK_RECENT_AUDIT_ACTIVITY
} from './constants';
import { ComplianceStatusItem, ComplianceStatus, RiskIssue, RiskLevel } from './types';
import {
  ExclamationTriangleIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
  ChevronDownIcon
} from './icons';
import ProgressBar from '../alerts-center/ProgressBar';

const CircularProgress: React.FC<{ percentage: number; size: number; strokeWidth: number }> = ({ percentage, size, strokeWidth }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          className="text-black"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-black"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-black">{percentage}%</span>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{ icon?: React.ReactNode; title: string; value: string; subValue: string; subValueColor: string; children?: React.ReactNode }> = ({ icon, title, value, subValue, subValueColor, children }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
    {icon && <div className="p-3 bg-gray-100 rounded-lg mr-4">{icon}</div>}
    <div>
      <p className="text-sm text-black">{title}</p>
      <p className="text-2xl font-bold text-black">{value}</p>
      <p className={`text-xs font-medium ${subValueColor}`}>{subValue}</p>
    </div>
    {children && <div className="ml-auto">{children}</div>}
  </div>
);

const statusStyles: { [key in ComplianceStatus]: { dot: string; bg: string; text: string } } = {
  Compliant: { dot: 'bg-green-500', bg: 'bg-green-100', text: 'text-green-800' },
  'Needs Review': { dot: 'bg-yellow-500', bg: 'bg-yellow-100', text: 'text-yellow-800' },
  Overdue: { dot: 'bg-red-500', bg: 'bg-red-100', text: 'text-red-800' },
  'Up to Date': { dot: 'bg-blue-500', bg: 'bg-blue-100', text: 'text-blue-800' }
};

const ComplianceStatusListItem: React.FC<{ item: ComplianceStatusItem }> = ({ item }) => {
  const style = statusStyles[item.status];
  return (
    <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
      <div className={`w-2.5 h-2.5 rounded-full mr-4 flex-shrink-0 ${style.dot}`}></div>
      <div className="flex-grow">
        <p className="font-semibold text-sm text-black">{item.rule}</p>
        <p className="text-xs text-black">{item.description}</p>
      </div>
      <div className="text-right ml-4">
        <div className={`text-xs font-semibold px-2 py-0.5 rounded-md ${style.bg} ${style.text}`}>{item.status}</div>
        <p className="text-xs text-black mt-1">{item.lastReview}</p>
      </div>
    </div>
  );
};

const riskLevelStyles: { [key in RiskLevel]: { bg: string; text: string } } = {
  'High Risk': { bg: 'bg-red-100', text: 'text-red-800' },
  'Medium Risk': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  'Low Risk': { bg: 'bg-gray-100', text: 'text-black' }
};

const RiskIssueItem: React.FC<{ issue: RiskIssue }> = ({ issue }) => {
  const style = riskLevelStyles[issue.level];
  return (
    <div className="p-3 border-l-4 border-red-500 bg-red-50/50">
      <div className="flex justify-between items-start">
        <p className="font-semibold text-sm text-black">{issue.title}</p>
        <div className={`text-xs font-semibold px-2 py-0.5 rounded-md ${style.bg} ${style.text}`}>{issue.level}</div>
      </div>
      <p className="text-xs text-black mt-1">{issue.description}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-xs text-black">
          Assigned to: <span className="font-medium text-black">{issue.assignee}</span>
        </p>
        <a href="#" className="text-xs font-semibold text-brand-blue hover:underline">
          Review →
        </a>
      </div>
    </div>
  );
};

const ComplianceMonitor: React.FC = () => {
  const [regulationFilter, setRegulationFilter] = useState('All Regulations');
  const [riskFilter, setRiskFilter] = useState('All Risk Levels');
  const [isRegulationDropdownOpen, setIsRegulationDropdownOpen] = useState(false);
  const [isRiskDropdownOpen, setIsRiskDropdownOpen] = useState(false);

  const regulationDropdownRef = useRef<HTMLDivElement>(null);
  const riskDropdownRef = useRef<HTMLDivElement>(null);

  const regulationOptions = ['All Regulations', 'SEC Rules', 'FINRA Requirements', 'State Regulations'];
  const riskOptions = ['All Risk Levels', 'High Risk', 'Medium Risk', 'Low Risk'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (regulationDropdownRef.current && !regulationDropdownRef.current.contains(event.target as Node)) setIsRegulationDropdownOpen(false);
      if (riskDropdownRef.current && !riskDropdownRef.current.contains(event.target as Node)) setIsRiskDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-black">Compliance Monitor</h2>
          <p className="text-sm text-black">Regulatory compliance tracking, documentation management, and audit trail maintenance</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative" ref={regulationDropdownRef}>
            <button
              onClick={() => setIsRegulationDropdownOpen(!isRegulationDropdownOpen)}
              className="flex items-center text-sm px-3 py-2 border rounded-md bg-white hover:bg-blue-50 border-gray-300 w-48 justify-between text-black"
            >
              <span>{regulationFilter}</span>
              <ChevronDownIcon className="w-4 h-4 ml-2 text-black" />
            </button>
            {isRegulationDropdownOpen && (
              <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                <ul className="py-1">
                  {regulationOptions.map((opt) => (
                    <li
                      key={opt}
                      onClick={() => {
                        setRegulationFilter(opt);
                        setIsRegulationDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-black hover:bg-blue-50 cursor-pointer"
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Generate Compliance Report</button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Overall Compliance Score" value="94.2%" subValue="+2.1% this month" subValueColor="text-brand-green">
          <CircularProgress percentage={94.2} size={60} strokeWidth={5} />
        </MetricCard>
        <MetricCard icon={<ExclamationTriangleIcon className="w-6 h-6 text-yellow-600" />} title="Open Issues" value="7" subValue="3 High Priority" subValueColor="text-black" />
        <MetricCard icon={<DocumentDuplicateIcon className="w-6 h-6 text-blue-600" />} title="Documents Reviewed" value="2,847" subValue="This month" subValueColor="text-black" />
        <MetricCard icon={<CalendarDaysIcon className="w-6 h-6 text-purple-600" />} title="Next Audit" value="45" subValue="days remaining" subValueColor="text-black" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-md font-semibold text-black mb-2">Regulatory Compliance Status</h3>
            <div className="divide-y divide-gray-100">
              {MOCK_COMPLIANCE_STATUS_ITEMS.map((item) => (
                <ComplianceStatusListItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm md:col-span-1">
              <h3 className="text-sm font-semibold text-black mb-3">Documentation Status</h3>
              <div className="space-y-2">
                {MOCK_DOCUMENTATION_STATUS.map((doc) => (
                  <div key={doc.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{doc.name}</span>
                      <span>{doc.value}%</span>
                    </div>
                    <ProgressBar value={doc.value} colorClass="bg-blue-500" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm md:col-span-1">
              <h3 className="text-sm font-semibold text-black mb-3">Communication Surveillance</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Emails Reviewed</span>
                  <span className="font-bold">{MOCK_COMMUNICATION_SURVEILLANCE.emailsReviewed}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Flagged</span>
                  <span className="font-bold text-yellow-600 bg-yellow-100 px-2 rounded-md">{MOCK_COMMUNICATION_SURVEILLANCE.flaggedCommunications}</span>
                </div>
                <div className="flex justify-between">
                  <span>Compliance Rate</span>
                  <span className="font-bold text-green-600">{MOCK_COMMUNICATION_SURVEILLANCE.complianceRate}%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm md:col-span-1">
              <h3 className="text-sm font-semibold text-black mb-3">Recent Audit Activity</h3>
              <ul className="space-y-1.5 text-xs">
                {MOCK_RECENT_AUDIT_ACTIVITY.slice(0, 3).map((act) => (
                  <li key={act.id} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1 mr-2 flex-shrink-0"></div>
                    <div>
                      <span>{act.description}</span>
                      <span className="text-black ml-1">({act.time})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="text-md font-semibold text-black">Risk Assessment & Open Issues</h3>
              <div className="relative" ref={riskDropdownRef}>
                <button
                  onClick={() => setIsRiskDropdownOpen(!isRiskDropdownOpen)}
                  className="flex items-center text-xs px-2 py-1 border rounded-md bg-white hover:bg-blue-50 border-gray-300 justify-between text-black"
                >
                  <span>{riskFilter}</span>
                  <ChevronDownIcon className="w-3 h-3 ml-1 text-black" />
                </button>
                {isRiskDropdownOpen && (
                  <div className="absolute right-0 z-10 mt-1 w-36 bg-white rounded-md shadow-lg border border-gray-200">
                    <ul className="py-1">
                      {riskOptions.map((opt) => (
                        <li
                          key={opt}
                          onClick={() => {
                            setRiskFilter(opt);
                            setIsRiskDropdownOpen(false);
                          }}
                          className="block px-3 py-1.5 text-xs text-black hover:bg-blue-50 cursor-pointer"
                        >
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {MOCK_RISK_ISSUES.map((issue) => (
                <RiskIssueItem key={issue.id} issue={issue} />
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-red-50 border border-red-200">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg mr-3">R</div>
              <div>
                <h4 className="font-semibold text-red-900">Robert - Compliance Agent</h4>
                <p className="text-xs text-red-700">AI Assistant for Risk & Compliance</p>
              </div>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm mb-3">
              <p className="font-semibold text-sm text-black mb-1">Recent Analysis</p>
              <p className="text-xs text-black">Found pattern: 3 KYC expirations this week from the same advisor. Recommend process review.</p>
              <div className="flex items-center space-x-2 mt-2">
                <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">Priority Review</button>
                <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50">Schedule Later</button>
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm text-black mb-1">Suggested Actions</p>
              <ul className="list-disc list-inside space-y-1 text-xs text-black">
                <li>Update 5 client risk profiles due this week</li>
                <li>Review 12 flagged email communications</li>
                <li>Prepare for upcoming FINRA examination</li>
                <li>Complete quarterly supervision documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceMonitor;