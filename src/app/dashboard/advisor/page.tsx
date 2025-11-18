"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import AdvisorDashboard from '@/components/pages/advisor-dashboard/AdvisorDashboard';

export default function AdvisorPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <DashboardLayout
      currentPath="/dashboard/advisor"
      dashboardTitle="Advisor Dashboard"
      userName="Sarah Chen - Senior Advisor"
      userInitials="SC"
      userColor="bg-blue-500"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <AdvisorDashboard />
    </DashboardLayout>
  );
}
