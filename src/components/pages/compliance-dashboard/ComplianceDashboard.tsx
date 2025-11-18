"use client";
import React from 'react';
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

      {/* Regulatory Monitor */}
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

      {/* Critical Alerts & Documentation Compliance */}
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

      {/* Communications Compliance & Risk Assessment */}
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

      {/* Upcoming Regulatory Requirements */}
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

      {/* Footer */}
      <div className="text-xs text-black flex justify-between items-center pt-2">
        <span>Dashboard last updated: Today at 2:47 PM</span>
        <span>Next refresh in 13 minutes</span>
      </div>
    </div>
  );
};

export default ComplianceDashboard;