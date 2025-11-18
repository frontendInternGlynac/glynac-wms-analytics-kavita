import React from 'react';

const cards = [
  { label: 'Total Clients', value: 247, color: 'bg-blue-50 text-blue-700' },
  { label: 'AUM', value: '$820M', color: 'bg-green-50 text-green-700' },
  { label: 'Average Health', value: 81, color: 'bg-indigo-50 text-indigo-700' },
  { label: 'Active Alerts', value: 6, color: 'bg-yellow-50 text-yellow-700' }
];

export default function Dashboard() {
  return (
    <section className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-black">Client Management Overview</h2>
        <span className="text-sm text-black">Last sync 3m ago</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div key={c.label} className={`rounded-lg p-4 border ${c.color}`}>
            <div className="text-sm text-black">{c.label}</div>
            <div className="mt-1 text-2xl font-bold">{c.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}