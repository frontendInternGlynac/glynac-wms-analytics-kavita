import React from 'react';

const stats = [
  { label: 'New Leads', value: 32, change: '+8 this week', color: 'bg-blue-50 text-blue-700' },
  { label: 'In Progress', value: 18, change: 'avg 9 days', color: 'bg-yellow-50 text-yellow-700' },
  { label: 'Completed', value: 12, change: 'last 30 days', color: 'bg-green-50 text-green-700' },
  { label: 'Average Time', value: '12d', change: 'target ≤10d', color: 'bg-gray-50 text-black' }
];

export default function Overview() {
  return (
    <section className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-black">Client Onboarding Overview</h2>
        <span className="text-sm text-black">Updated 2h ago</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-lg p-4 border ${s.color}`}> 
            <div className="text-sm text-black">{s.label}</div>
            <div className="mt-1 text-2xl font-bold">{s.value}</div>
            <div className="mt-1 text-xs text-black">{s.change}</div>
          </div>
        ))}
      </div>
    </section>
  );
}