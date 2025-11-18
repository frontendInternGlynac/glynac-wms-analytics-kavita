import React from 'react';

const items = [
  { icon: '🗓️', title: 'Client Reviews Scheduled', sub: 'High-value client meetings', count: 23, color: 'bg-blue-50' },
  { icon: '⚖️', title: 'Compliance Deadlines', sub: 'Regulatory filings due', count: 5, color: 'bg-orange-50' },
  { icon: '📊', title: 'Board Presentation', sub: 'Q4 performance review', count: 'Thu 2:00 PM', color: 'bg-purple-50' },
  { icon: '💼', title: 'High-Value Prospects', sub: 'In final onboarding stages', count: 8, color: 'bg-green-50' }
];

export default function UpcomingThisWeek() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-black mb-4">Upcoming This Week</h3>
      <div className="bg-white rounded-lg shadow p-6 space-y-3">
        {items.map((i) => (
          <div key={i.title} className={`flex items-center justify-between p-3 rounded-lg ${i.color}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">{i.icon}</div>
              <div>
                <p className="text-sm font-medium text-black">{i.title}</p>
                <p className="text-xs text-black">{i.sub}</p>
              </div>
            </div>
            <div className="text-sm font-semibold text-black">{i.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}