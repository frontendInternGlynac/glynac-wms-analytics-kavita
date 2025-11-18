import React from 'react';

type Props = {
  value: number; // 0-100
  colorClass?: string; // tailwind bg-* class
};

const ProgressBar: React.FC<Props> = ({ value, colorClass = 'bg-blue-500' }) => {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full h-2 bg-gray-200 rounded">
      <div
        className={`h-2 rounded ${colorClass}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
};

export default ProgressBar;