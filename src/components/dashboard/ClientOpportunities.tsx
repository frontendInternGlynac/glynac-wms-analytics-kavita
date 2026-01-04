'use client';

import React from 'react';

/**
 * Client Opportunities & Alerts Component
 * Displays color-coded alerts for client risks and opportunities
 */

interface OpportunityItem {
  id: string;
  title: string;
  description: string;
  count?: number;
  risk?: boolean;
  color: 'red' | 'amber' | 'blue' | 'green' | 'purple';
}

const clientOpportunities: OpportunityItem[] = [
  {
    id: 'high-risk',
    title: 'High-Risk Clients',
    description: 'No contact 30+ days',
    count: 3,
    color: 'red',
  },
  {
    id: 'aum-concentration',
    title: 'AUM Concentration',
    description: 'Top 3 clients = 67% of AUM',
    risk: true,
    color: 'amber',
  },
  {
    id: 'compliance-due',
    title: 'Compliance Due',
    description: 'KYC renewals needed',
    count: 4,
    color: 'blue',
  },
  {
    id: 'growth-opportunities',
    title: 'Growth Opportunities',
    description: 'Potential upsells identified',
    count: 7,
    color: 'green',
  },
  {
    id: 'document-collection',
    title: 'Document Collection',
    description: 'Pending client submissions',
    count: 6,
    color: 'purple',
  },
];

const colorStyles = {
  red: {
    bg: 'bg-red-50',
    border: 'border-l-4 border-red-500',
    text: 'text-red-900',
    count: 'text-red-600',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-l-4 border-amber-500',
    text: 'text-amber-900',
    count: 'text-amber-600',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-l-4 border-blue-500',
    text: 'text-blue-900',
    count: 'text-blue-600',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-l-4 border-green-500',
    text: 'text-green-900',
    count: 'text-green-600',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-l-4 border-purple-500',
    text: 'text-purple-900',
    count: 'text-purple-600',
  },
};

export default function ClientOpportunities() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Client Opportunities & Alerts
      </h2>

      <div className="space-y-3">
        {clientOpportunities.map((item) => {
          const style = colorStyles[item.color];

          return (
            <div
              key={item.id}
              className={`${style.bg} ${style.border} rounded px-4 py-3 flex items-center justify-between`}
            >
              <div>
                <p className={`font-semibold text-sm ${style.text}`}>
                  {item.title}
                </p>
                <p className={`text-xs ${style.text} opacity-75 mt-0.5`}>
                  {item.description}
                </p>
              </div>

              <div className="text-right">
                {item.risk && (
                  <span className={`text-xs font-bold ${style.count}`}>
                    Risk
                  </span>
                )}
                {item.count && (
                  <span className={`text-lg font-bold ${style.count}`}>
                    {item.count}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}