import React from 'react';

const ProgressBar: React.FC<{ value: number; colorClass?: string }> = ({ value, colorClass = 'bg-blue-600' }) => {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className={`${colorClass} h-2 rounded-full`} style={{ width: `${clamped}%` }}></div>
    </div>
  );
};

export default ProgressBar;