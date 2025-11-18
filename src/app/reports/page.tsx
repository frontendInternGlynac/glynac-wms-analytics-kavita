import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ReportsAnalytics from '@/components/pages/reports/ReportsAnalytics';

export default function Page() {
  return (
    <DashboardLayout dashboardTitle="Reports & Analytics" currentTab="reports" currentPath="/reports" userName="Reporting Agent" userInitials="RA" userColor="bg-yellow-500">
      <ReportsAnalytics />
    </DashboardLayout>
  );
}