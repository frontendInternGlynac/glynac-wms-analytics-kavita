"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import OperationsDashboard from '@/components/pages/operations-dashboard/OperationsDashboard';

export default function OperationsPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <DashboardLayout
      currentPath="/dashboard/operations"
      dashboardTitle="Operations Dashboard"
      userName="Lisa Thompson - COO"
      userInitials="LT"
      userColor="bg-blue-500"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <OperationsDashboard />
    </DashboardLayout>
  );
}