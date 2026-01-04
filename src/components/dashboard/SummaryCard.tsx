'use client';

import React from 'react';
import { SummaryMetric } from './types';

interface SummaryCardProps {
  metric: SummaryMetric;
  variant?: 'default' | 'highlight';
}

const SummaryCard: React.FC<SummaryCardProps> = ({ 
  metric, 
  variant = 'default' 
}) => {
  const getChangeColor = () => {
    if (metric.changeType === 'positive') return 'text-green-600';
    if (metric.changeType === 'negative') return 'text-red-600';
    return 'text-gray-600';
  };

  const getChangeIcon = () => {
    if (metric.changeType === 'positive') return '↑';
    if (metric.changeType === 'negative') return '↓';
    return '';
  };

  const bgColorClass = metric.bgColor || 'bg-white';
  const iconBgClass = metric.bgColor 
    ? metric.bgColor.replace('bg-', 'bg-') + ' bg-opacity-10'
    : 'bg-blue-50';

  return (
    <div className={`${bgColorClass} rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200`}>
      {/* Icon Container */}
      {metric.icon && (
        <div className={`${iconBgClass} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          {metric.icon}
        </div>
      )}

      {/* Label */}
      <p className="text-sm font-medium text-gray-600 mb-2">
        {metric.label}
      </p>

      {/* Value */}
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        {metric.value}
      </h3>

      {/* Change Indicator */}
      {metric.change && (
        <div className={`flex items-center gap-2 ${getChangeColor()} text-sm font-medium`}>
          <span>{getChangeIcon()}</span>
          <span>{metric.change}</span>
        </div>
      )}

      {/* Description */}
      {metric.description && (
        <p className="text-xs text-gray-500 mt-3">
          {metric.description}
        </p>
      )}
    </div>
  );
};

export default SummaryCard;