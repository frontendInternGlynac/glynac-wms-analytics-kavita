"use client";
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ClientOnboarding from '@/components/pages/client-onboarding/ClientOnboarding';

export default function Page() {
  return (
    <DashboardLayout dashboardTitle="Client Onboarding" currentTab="client-onboarding" currentPath="/client-onboarding" userName="Grace - Onboarding Agent" userInitials="G" userColor="bg-purple-500">
      <ClientOnboarding />
    </DashboardLayout>
  );
}