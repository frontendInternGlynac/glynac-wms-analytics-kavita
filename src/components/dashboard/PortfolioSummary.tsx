'use client';

import React from 'react';
import SummaryCard from './SummaryCard';
import { SummaryMetric } from './types';
import { Users, TrendingUp, BarChart3, Star } from 'lucide-react';

// Mock data - replace with actual API calls
const mockPortfolioData: SummaryMetric[] = [
  {
    id: 'clients',
    label: 'My Clients',
    value: '73',
    change: '+3 this month',
    changeType: 'positive',
    icon: <Users className="w-6 h-6 text-blue-600" />,
    bgColor: 'bg-blue-50',
    description: 'Total active clients'
  },
  {
    id: 'aum',
    label: 'My AUM',
    value: '$127M',
    change: '+12% this quarter',
    changeType: 'positive',
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    bgColor: 'bg-green-50',
    description: 'Assets under management'
  },
  {
    id: 'revenue',
    label: 'Revenue Generated',
    value: '$847K',
    change: '+23% vs last year',
    changeType: 'positive',
    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
    bgColor: 'bg-purple-50',
    description: 'Annual revenue growth'
  },
  {
    id: 'satisfaction',
    label: 'Satisfaction',
    value: '4.6/5.0',
    change: 'Excellent rating',
    changeType: 'positive',
    icon: <Star className="w-6 h-6 text-amber-500" />,
    bgColor: 'bg-amber-50',
    description: 'Client satisfaction score'
  }
];

interface PortfolioSummaryProps {
  data?: SummaryMetric[];
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({ 
  data = mockPortfolioData 
}) => {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          My Portfolio Dashboard
        </h2>
        <p className="text-gray-600 mt-2">
          Your clients, performance metrics, and daily action items
        </p>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {data.map((metric) => (
          <SummaryCard key={metric.id} metric={metric} />
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 <strong>Tip:</strong> Hover over cards to see more details. Click any metric to view detailed analytics.
        </p>
      </div>
    </div>
  );
};

export default PortfolioSummary;