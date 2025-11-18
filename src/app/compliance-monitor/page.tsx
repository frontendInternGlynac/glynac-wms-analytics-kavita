"use client";
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ComplianceMonitor from '@/components/pages/compliance-monitor/ComplianceMonitor';

export default function Page() {
  return (
    <DashboardLayout dashboardTitle="Compliance Monitor" currentTab="compliance-monitor" currentPath="/compliance-monitor" userName="Compliance Agent" userInitials="CA" userColor="bg-red-500">
      <ComplianceMonitor />
    </DashboardLayout>
  );
}