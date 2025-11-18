"use client";
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import AlertsCenter from '@/components/pages/alerts-center/AlertsCenter';

export default function Page() {
  return (
    <DashboardLayout dashboardTitle="Alerts Center" currentTab="alerts-center" currentPath="/alerts-center" userName="Robert - Compliance Agent" userInitials="R" userColor="bg-red-500">
      <AlertsCenter />
    </DashboardLayout>
  );
}