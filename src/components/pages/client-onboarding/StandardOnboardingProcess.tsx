import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  { title: 'Discovery & Goals', desc: 'Understand objectives, risk tolerance, and constraints.' },
  { title: 'KYC & Documentation', desc: 'Collect IDs, tax forms, and investment policy.' },
  { title: 'Compliance Review', desc: 'Screening, suitability assessment, and regulatory checks.' },
  { title: 'Account Opening', desc: 'Create accounts, link funding sources, assign advisor.' },
  { title: 'Initial Allocation', desc: 'Deploy capital according to model portfolio and IPS.' },
  { title: 'Welcome & Handoff', desc: 'Send welcome kit, schedule first 60–90 day review.' }
];

export default function StandardOnboardingProcess() {
  return (
    <section className="bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-lg font-semibold text-black mb-4">Standard Onboarding Process</h2>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start space-x-3 rounded-lg border p-4">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <div className="font-medium text-black">Step {i + 1}: {s.title}</div>
              <div className="text-sm text-black mt-1">{s.desc}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}