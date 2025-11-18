'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PerformanceInsights = () => {
  // Mock data - in a real app this would come from props or API
  const performanceData = [
    { month: 'Jan', portfolio: 4.2, benchmark: 3.8 },
    { month: 'Feb', portfolio: 5.1, benchmark: 4.2 },
    { month: 'Mar', portfolio: 3.8, benchmark: 4.0 },
    { month: 'Apr', portfolio: 6.2, benchmark: 5.1 },
    { month: 'May', portfolio: 4.9, benchmark: 4.8 },
    { month: 'Jun', portfolio: 5.7, benchmark: 5.2 },
    { month: 'Jul', portfolio: 6.8, benchmark: 6.1 },
    { month: 'Aug', portfolio: 7.2, benchmark: 6.5 },
    { month: 'Sep', portfolio: 6.4, benchmark: 5.9 },
    { month: 'Oct', portfolio: 7.8, benchmark: 7.1 },
    { month: 'Nov', portfolio: 8.1, benchmark: 7.3 },
    { month: 'Dec', portfolio: 8.5, benchmark: 7.6 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h3 className="text-lg font-semibold text-black mb-4">Performance Insights</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={performanceData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="portfolio" 
              stroke="#3b82f6" 
              activeDot={{ r: 8 }} 
              name="Portfolio Return (%)"
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="benchmark" 
              stroke="#10b981" 
              name="Benchmark Return (%)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex space-x-6">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-black rounded mr-2"></div>
          <span className="text-sm text-black">Portfolio Return</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-black rounded mr-2"></div>
          <span className="text-sm text-black">Benchmark Return</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceInsights;