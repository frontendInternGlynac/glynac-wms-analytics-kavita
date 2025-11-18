"use client";
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import EmployeeAnalytics from '@/components/pages/employee-analytics/EmployeeAnalytics';

export default function Page() {
  return (
    <DashboardLayout dashboardTitle="Employee Analytics" currentTab="employee-analytics" currentPath="/employee-analytics" userName="Ethan - Analytics Agent" userInitials="E" userColor="bg-indigo-500">
      <EmployeeAnalytics />
    </DashboardLayout>
  );
}