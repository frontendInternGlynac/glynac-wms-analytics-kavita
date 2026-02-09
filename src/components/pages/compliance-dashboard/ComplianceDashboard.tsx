"use client";
/*import React from 'react';
import { REGULATORY_MONITOR, CRITICAL_ALERTS, DOC_COMPLIANCE, COMMUNICATION_COMPLIANCE, RISK_MONITOR, UPCOMING_REQUIREMENTS } from './constants';
import { MetricTile, AlertItem, ProgressItem, TimelineItem } from './types';

const Badge: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${className}`}>{text}</span>
);

const ProgressBar: React.FC<{ value: number; color?: string }> = ({ value, color = 'bg-blue-600' }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div className={`${color} h-2 rounded-full`} style={{ width: `${value}%` }}></div>
  </div>
);

const ComplianceDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-black">Compliance Dashboard</h2>
        <p className="text-sm text-black">Regulatory compliance tracking, risk monitoring, and audit management</p>
      </div>

      //Regulatory Monitor 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REGULATORY_MONITOR.map((m: MetricTile) => (
          <div key={m.id} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-black">{m.title}</p>
                <p className="text-2xl font-bold text-black">{m.value}</p>
              </div>
              {m.sub && <Badge text={m.sub} className={m.colorClass} />}
            </div>
          </div>
        ))}
      </div>

       //Critical Alerts & Documentation Compliance 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Critical Alerts</h3>
          <div className="space-y-2">
            {CRITICAL_ALERTS.map((a: AlertItem) => (
              <div key={a.id} className="p-3 rounded-lg bg-white border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-black">{a.title}</p>
                    <p className="text-xs text-black">{a.description}</p>
                  </div>
                  <Badge
                    text={a.level}
                    className={
                      a.level === 'HIGH'
                        ? 'bg-red-600 text-white'
                        : a.level === 'MED'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-blue-600 text-white'
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Documentation Compliance</h3>
          <div className="space-y-3">
            {DOC_COMPLIANCE.map((p: ProgressItem, idx) => (
              <div key={p.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-black">{p.label}</span>
                  <span className="font-semibold text-black">{p.value}%</span>
                </div>
                <ProgressBar value={p.value} color={idx % 2 === 0 ? 'bg-green-600' : 'bg-blue-600'} />
              </div>
            ))}
          </div>
        </div>
      </div>

      // Communications Compliance & Risk Assessment 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Communication Compliance</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {COMMUNICATION_COMPLIANCE.map((m) => (
              <div key={m.id}>
                <p className="text-black">{m.title}</p>
                <p className={`font-semibold ${m.colorClass}`}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-md font-semibold text-black mb-3">Risk Assessment & Monitoring</h3>
          <div className="grid grid-cols-2 gap-4">
            {RISK_MONITOR.map((m) => (
              <div key={m.id} className="p-3 border rounded-lg">
                <p className="text-sm text-black">{m.title}</p>
                <p className="text-xl font-bold text-black">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      // Upcoming Regulatory Requirements 
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="text-md font-semibold text-black mb-3">Upcoming Regulatory Requirements</h3>
        <div className="space-y-3">
          {UPCOMING_REQUIREMENTS.map((t: TimelineItem) => (
            <div key={t.id} className="p-3 rounded-lg border flex items-center justify-between">
              <p className="text-sm text_black">{t.title}</p>
              <div className="flex items-center gap-2">
                <Badge text={t.dueLabel} className={t.badgeClass} />
                <button className="text-xs bg-white border px-3 py-1 rounded-md">{t.actionLabel}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      // Footer 
      <div className="text-xs text-black flex justify-between items-center pt-2">
        <span>Dashboard last updated: Today at 2:47 PM</span>
        <span>Next refresh in 13 minutes</span>
      </div>
    </div>
  );
};
*/


import React, { useState } from 'react';
import {
  REGULATORY_MONITOR,
  CRITICAL_ALERTS,
  DOC_COMPLIANCE,
  COMMUNICATION_COMPLIANCE,
  RISK_MONITOR,
  UPCOMING_REQUIREMENTS
} from './constants';
import {
  MetricTile,
  AlertItem,
  ProgressItem,
  TimelineItem
} from './types';
//import { CheckCircleIcon } from '../operations-dashboard/icons';
//import { BellIcon } from 'lucide-react';
import {
  
  ShieldCheckIcon,
  ChevronDownIcon,
  ClockIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  FileTextIcon,
  UsersIcon,
  BarChart3Icon,
  BellIcon,
  MessageCircleIcon,
  DownloadIcon
} from 'lucide-react'; // Assuming these icons are available or map from lucide-react
//import ProgressBar from './ProgressBar';

const RECENT_ACTIONS = [
  { icon: CheckCircleIcon, title: 'KYC Documentation Updated', desc: 'Johnson Family Trust - Identity verification completed', time: '2 hours ago', color: 'text-green-600' },
  { icon: BellIcon, title: 'Communication Alert Resolved', desc: 'Off-channel usage warning cleared - A. Rodriguez', time: '4 hours ago', color: 'text-blue-600' },
  { icon: FileTextIcon, title: 'Policy Update Distributed', desc: 'New SEC guidance sent to all advisors for acknowledgment', time: 'Yesterday', color: 'text-purple-600' },
  { icon: AlertCircleIcon, title: 'Risk Assessment Reclassified', desc: 'Martinez Corp reclassified as medium risk', time: '2 days ago', color: 'text-orange-600' }
];

const MONITORING_SUMMARY = {
  processed: 1247,
  flagged: 8,
  violations: 3,
  successRate: '99.8%',
  channels: ['Email', 'Microsoft Teams', 'Slack', 'Phone Calls', '+3 more']
};

function ComplianceDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleAction = (action: string, item?: string) => {
    console.log(`Action: ${action} for ${item || 'general'}`);
    alert(`${action} clicked for ${item || 'dashboard item'}`);
  };

  const renderMetricTile = (metric: MetricTile) => (
    <div key={metric.id} className={`text-center p-6 lg:p-8 rounded-2xl ${metric.colorClass} border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 group`}>
      <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">{metric.value}</div>
      <div className="text-sm lg:text-base text-gray-600 font-semibold mb-1">{metric.title}</div>
      <div className="text-xs lg:text-sm text-gray-500">{metric.sub}</div>
      <button 
        className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-indigo-600 hover:to-purple-700 font-medium transition-all duration-300 transform hover:scale-105 invisible group-hover:visible"
        onClick={() => handleAction('View Details', metric.title)}
      >
        View Details
      </button>
    </div>
  );

  const renderAlertItem = (alert: AlertItem) => {
    const levelColor = alert.level === 'HIGH' ? 'bg-red-500 text-white' : alert.level === 'MED' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white';
    return (
      <div  key = {alert.id}className="p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 border-l-4 border-red-400 shadow-md hover:shadow-lg transition-all duration-300">
        <div className="font-bold text-gray-900 text-sm lg:text-base mb-2">{alert.title}</div>
        <div className="text-xs lg:text-sm text-gray-600 mb-3">{alert.description}</div>
        <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${levelColor}`}>
          {alert.level}
        </span>
        <button 
          className="mt-3 w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-2 rounded-xl hover:from-red-600 hover:to-rose-700 font-medium transition-all duration-300"
          onClick={() => handleAction('Resolve', alert.title)}
        >
          Resolve
        </button>
      </div>
    );
  };
  const ProgressBar: React.FC<{ value: number  | string ; color?: string }> = ({ value, color }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div className={`${color} h-2 rounded-full`} style={{ width: `${value}%` }}></div>
  </div>
);

  const renderProgressItem = (item: ProgressItem) => (
    <div key={item.id} className="p-4 lg:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-gray-900 text-sm lg:text-base">{item.label}</span>
        <span className="text-lg font-bold text-emerald-700">{item.value}%</span>
      </div>
      <ProgressBar value={item.value} color="bg-emerald-600" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-2 sm:p-4 md:p-6 lg:p-8 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl xl:text-4xl font-black ">Compliance Dashboard</h1>
            <p className="text-gray-600 mt-3 text-sm lg:text-base max-w-3xl">Regulatory compliance tracking, risk monitoring, and audit management</p>
          </div>
          <button 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-2xl hover:from-blue-600 hover:to-indigo-700 font-bold flex items-center gap-2  transition-all duration-300 transform hover:scale-105 active:scale-95 w-full lg:w-auto justify-center"
            onClick={() => handleAction('Chat with AI')}
          >
            Chat with AI
            <ChevronDownIcon className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Overall Metrics Grid */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGULATORY_MONITOR.map(renderMetricTile)}
        </div>
      </section>

      {/* Critical Alerts */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/60 p-6 lg:p-8 mb-8">
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Critical Alerts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRITICAL_ALERTS.map(renderAlertItem)}
        </div>
      </section>

      {/* Document Compliance */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8 mb-8">
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Document Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOC_COMPLIANCE.map(renderProgressItem)}
        </div>
      </section>

      {/* Compliance Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Communication Compliance */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Communication Compliance</h3>
          <div className="space-y-6">
            {COMMUNICATION_COMPLIANCE.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50">
                <span className={`font-semibold ${item.colorClass} text-sm lg:text-base`}>{item.title}</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl lg:text-3xl font-black text-blue-700">{item.value}</span>
                  <ProgressBar value={item.value} color="bg-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Assessment & Monitoring */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Risk Assessment & Monitoring</h3>
          <div className="space-y-6">
            {RISK_MONITOR.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl border border-purple-200/50">
                <span className={`font-semibold ${item.colorClass} text-sm lg:text-base`}>{item.title}</span>
                <span className="text-2xl lg:text-3xl font-black text-purple-700 bg-purple-100 px-3 py-1 rounded-full">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Upcoming Regulatory Requirements */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/60 p-6 lg:p-8 mb-8">
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Upcoming Regulatory Requirements</h2>
        <div className="space-y-4">
          {UPCOMING_REQUIREMENTS.map((req, index) => (
            <div key={index} className={`p-6 rounded-2xl border-l-4 ${req.badgeClass === 'bg-red-600 text_white' ? 'bg-red-50 border-red-400' : req.badgeClass === 'bg-yellow-500 text-white' ? 'bg-yellow-50 border-yellow-400' : req.badgeClass === 'bg-blue-600 text_white' ? 'bg-blue-50 border-blue-400' : 'bg-green-50 border-green-400'}  transition-all duration-300`}>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-sm lg:text-base mb-1">{req.title}</div>
                  <div className="text-xs lg:text-sm text-gray-600 mb-2">{req.desc}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${req.badgeClass}`}>
                    {req.dueLabel}
                  </span>
                </div>
                <button 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:from-indigo-600 hover:to-purple-700 font-medium transition-all duration-300 transform hover:scale-105 w-full lg:w-auto"
                  onClick={() => handleAction(req.actionLabel, req.title)}
                >
                  {req.actionLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Compliance Actions & Communication Monitoring Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Compliance Actions */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/60 p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Recent Compliance Actions</h3>
          <div className="space-y-4">
            {RECENT_ACTIONS.map((action, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/50 hover:shadow-md transition-all duration-300">
                <action.icon className={`h-6 w-6 ${action.color} rounded-full p-1 flex-shrink-0`} />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm lg:text-base mb-1">{action.title}</div>
                  <div className="text-xs lg:text-sm text-gray-600 mb-2">{action.desc}</div>
                  <span className="text-xs text-gray-500">{action.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Communication Monitoring Summary */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl  border border-white/60 p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">Communication Monitoring Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="text-center p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/50">
              <div className="text-3xl lg:text-4xl font-black text-cyan-700 mb-2">{MONITORING_SUMMARY.processed}</div>
              <div className="text-sm lg:text-base text-gray-600 mb-1">Messages Processed Today</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50">
              <div className="text-3xl lg:text-4xl font-black text-orange-700 mb-2">{MONITORING_SUMMARY.flagged}</div>
              <div className="text-sm lg:text-base text-gray-600 mb-1">Flagged for Review</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl border border-red-200/50">
              <div className="text-3xl lg:text-4xl font-black text-red-700 mb-2">{MONITORING_SUMMARY.violations}</div>
              <div className="text-sm lg:text-base text-gray-600 mb-1">Policy Violations Detected</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
              <div className="text-3xl lg:text-4xl font-black text-green-700 mb-2">{MONITORING_SUMMARY.successRate}</div>
              <div className="text-sm lg:text-base text-gray-600 mb-1">Archive Success Rate</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {MONITORING_SUMMARY.channels.map((channel, index) => (
              <span key={index} className="px-3 py-1 bg-white/60 rounded-full text-xs text-gray-700 border border-gray-300/50">
                {channel}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-8 p-4 bg-white/50 rounded-2xl border border-gray-200/50">
        <div className="flex items-center justify-center gap-3">
          <ClockIcon className="h-4 w-4" />
          <span>Dashboard last updated: Today at 2:47 PM</span>
          <span>•</span>
          <span className="font-semibold text-indigo-600">Next refresh in 13 minutes</span>
        </div>
      </footer>
    </div>
  );
}
export default ComplianceDashboard;