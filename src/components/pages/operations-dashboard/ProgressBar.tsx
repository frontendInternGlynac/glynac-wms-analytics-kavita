import React from 'react';

interface ProgressBarProps {
  value: number; // 0..100
  colorClass?: string; // tailwind bg color, default blue
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, colorClass = 'bg-blue-500' }) => {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div
        className={`${colorClass} h-1.5 rounded-full`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
};

export default ProgressBar;