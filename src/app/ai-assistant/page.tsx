"use client";
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import AIAssistant from '@/components/pages/ai-assistant/AIAssistant';

export default function Page() {
  return (
    <DashboardLayout dashboardTitle="AI Assistant" currentTab="ai-assistant" currentPath="/ai-assistant" userName="System Admin" userInitials="SA">
      <AIAssistant />
    </DashboardLayout>
  );
}