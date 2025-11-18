import React from 'react';

type Stage = {
  id: string;
  name: string;
  count: number;
  color: string;
};

const pipeline: Stage[] = [
  { id: 'intro', name: 'Introduction Call', count: 9, color: 'bg-indigo-100 text-indigo-700' },
  { id: 'docs', name: 'Document Collection', count: 6, color: 'bg-blue-100 text-blue-700' },
  { id: 'review', name: 'Compliance Review', count: 5, color: 'bg-yellow-100 text-yellow-700' },
  { id: 'setup', name: 'Account Setup', count: 4, color: 'bg-green-100 text-green-700' },
  { id: 'final', name: 'Final Approval', count: 3, color: 'bg-emerald-100 text-emerald-700' },
];

export default function OnboardingPipeline() {
  return (
    <section className="bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-lg font-semibold text-black mb-4">Onboarding Pipeline</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {pipeline.map((s) => (
          <div key={s.id} className={`rounded-lg border p-4 ${s.color}`}>
            <div className="text-sm">{s.name}</div>
            <div className="mt-2 text-3xl font-bold">{s.count}</div>
            <div className="mt-1 text-xs text-black">active clients</div>
          </div>
        ))}
      </div>
    </section>
  );
}