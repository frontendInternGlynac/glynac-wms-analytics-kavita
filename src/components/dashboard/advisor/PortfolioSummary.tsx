'use client';

import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const PortfolioSummary = () => {
  // Mock data - in a real app this would come from props or API
  const portfolioData = {
    totalAssets: 24500000,
    totalClients: 142,
    avgReturn: 8.2,
    ytdPerformance: 12.4
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h3 className="text-lg font-semibold text-black mb-4">Portfolio Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Total Assets</p>
              <p className="text-2xl font-bold">{formatCurrency(portfolioData.totalAssets)}</p>
            </div>
            <DollarSign className="h-8 w-8 text-black" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Total Clients</p>
              <p className="text-2xl font-bold">{portfolioData.totalClients}</p>
            </div>
            <div className="h-8 w-8 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">Avg. Return</p>
              <p className="text-2xl font-bold">{portfolioData.avgReturn}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-black" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">YTD Performance</p>
              <p className="text-2xl font-bold text-black">{portfolioData.ytdPerformance}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;