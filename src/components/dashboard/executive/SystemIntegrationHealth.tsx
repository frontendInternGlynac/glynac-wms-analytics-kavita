import React from 'react';

const integrations = [
  { name: 'HubSpot CRM', status: 'Connected', color: 'bg-green-100 text-green-700' },
  { name: 'Addepar', status: 'Connected', color: 'bg-green-100 text-green-700' },
  { name: 'eMoney', status: 'Syncing', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Schwab', status: 'Connected', color: 'bg-green-100 text-green-700' }
];

export default function SystemIntegrationHealth() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-black mb-4">System Integration Health</h3>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {integrations.map((i) => (
            <div key={i.name} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">●</div>
              <div>
                <p className="text-sm font-medium text-black">{i.name}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${i.color}`}>{i.status}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm">
          <span className="text-sm font-medium text-black">Total Integrations Active</span>
          <span className="ml-2 font-semibold text-black">24 of 26</span>
        </div>
      </div>
    </div>
  );
}