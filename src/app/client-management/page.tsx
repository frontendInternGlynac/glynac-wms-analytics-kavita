"use client";
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ClientManagement from '@/components/pages/client-management/ClientManagement';

export default function Page() {
  return (
    <DashboardLayout dashboardTitle="Client Management" currentTab="client-management" currentPath="/client-management" userName="Sarah Chen - Senior Advisor" userInitials="SC" userColor="bg-blue-500">
      <ClientManagement />
    </DashboardLayout>
  );
}