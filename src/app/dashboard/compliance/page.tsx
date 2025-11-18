"use client";

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ComplianceDashboard from '@/components/pages/compliance-dashboard/ComplianceDashboard';

export default function Page() {
  return (
    <DashboardLayout
      dashboardTitle="Compliance Dashboard"
      currentTab="dashboard"
      currentPath="/dashboard/compliance"
      userName="Robert Martinez - CCO"
      userInitials="RM"
      userColor="bg-blue-500"
    >
      <ComplianceDashboard />
    </DashboardLayout>
  );
}