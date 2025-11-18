import React from 'react';

type Client = {
  name: string;
  advisor: string;
  aum: string;
  stage: string;
  health: number;
  updated: string;
};

const clients: Client[] = [
  { name: 'John & Sarah Davis', advisor: 'Sarah Johnson', aum: '$2.4M', stage: 'Compliance Review', health: 92, updated: '2 days ago' },
  { name: 'Michael Williams', advisor: 'Michael Chen', aum: '$1.8M', stage: 'Document Collection', health: 78, updated: '1 week ago' },
  { name: 'Lisa Martinez', advisor: 'Emily Rodriguez', aum: '$3.1M', stage: 'Account Setup', health: 95, updated: '3 days ago' },
  { name: 'Robert Thompson', advisor: 'Sarah Johnson', aum: '$892K', stage: 'Introduction Call', health: 63, updated: '2 weeks ago' },
  { name: 'Amanda Brown', advisor: 'Michael Chen', aum: '$1.3M', stage: 'Final Approval', health: 42, updated: '3 weeks ago' },
];

function HealthBadge({ score }: { score: number }) {
  const color = score >= 90 ? 'bg-green-500' : score >= 70 ? 'bg-blue-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm ${color}`}>{score}</div>
  );
}

export default function Status() {
  return (
    <section className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-black">Onboarding Status</h2>
        <div className="flex space-x-2">
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>All Advisors</option>
            <option>Sarah Johnson</option>
            <option>Michael Chen</option>
            <option>Emily Rodriguez</option>
          </select>
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>All Health Scores</option>
            <option>Excellent (90-100)</option>
            <option>Good (70-89)</option>
            <option>Fair (50-69)</option>
            <option>Poor (&lt;50)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {clients.map((c) => (
          <div key={c.name} className="flex items-center justify-between bg-gray-50 border rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {c.name.split(' ').map(w => w[0]).slice(0,2).join('')}
              </div>
              <div>
                <div className="font-medium text-black">{c.name}</div>
                <div className="text-sm text-black">Primary Advisor: {c.advisor}</div>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-green-600 font-semibold">{c.aum} AUM</div>
              <div className="text-sm text-black">{c.stage}</div>
            </div>
            <div className="flex items-center space-x-4">
              <HealthBadge score={c.health} />
              <div className="text-sm text-black">{c.updated}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}