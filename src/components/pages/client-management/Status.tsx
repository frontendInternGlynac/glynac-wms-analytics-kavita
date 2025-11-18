import React from 'react';

export default function Status() {
  return (
    <section className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-black">Status</h2>
        <div className="text-sm text-black">Next sync in 8 minutes</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="rounded-lg border p-4 bg-green-50">
          <div className="text-sm text-black">Excellent (90-100)</div>
          <div className="mt-2 text-3xl font-bold text-green-700">64</div>
        </div>
        <div className="rounded-lg border p-4 bg-blue-50">
          <div className="text-sm text-black">Good (70-89)</div>
          <div className="mt-2 text-3xl font-bold text-blue-700">109</div>
        </div>
        <div className="rounded-lg border p-4 bg-yellow-50">
          <div className="text-sm text-black">Fair (50-69)</div>
          <div className="mt-2 text-3xl font-bold text-yellow-700">48</div>
        </div>
        <div className="rounded-lg border p-4 bg-red-50">
          <div className="text-sm text-black">Poor (&lt;50)</div>
          <div className="mt-2 text-3xl font-bold text-red-700">26</div>
        </div>
      </div>
    </section>
  );
}