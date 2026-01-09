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
    <div className={`${bgColorClass} rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-200`}>
      {/* Icon Container */}
      {metric.icon && (
        <div className={`${iconBgClass} w-10 h-10 rounded-lg flex items-center justify-center mb-2`}>
          {React.cloneElement(metric.icon as any, { className: 'w-5 h-5' })}
        </div>
      )}

      {/* Label */}
      <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
        {metric.label}
      </p>

      {/* Value */}
      <h3 className="text-2xl font-extrabold text-gray-900 mb-1.5 tracking-tight">
        {metric.value}
      </h3>

      {/* Change Indicator */}
      {metric.change && (
        <div className={`flex items-center gap-1.5 ${getChangeColor()} text-[11px] font-bold`}>
          <span className="text-xs">{getChangeIcon()}</span>
          <span>{metric.change}</span>
        </div>
      )}

      {/* Description */}
      {metric.description && (
        <p className="text-[10px] text-gray-400 font-medium mt-2 leading-none">
          {metric.description}
        </p>
      )}
    </div>
  );
};

export default SummaryCard;