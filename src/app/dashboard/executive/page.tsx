'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import FirmOverview from '@/components/dashboard/executive/FirmOverview';
import OperationalMetrics from '@/components/dashboard/executive/OperationalMetrics';
import SystemIntegrationHealth from '@/components/dashboard/executive/SystemIntegrationHealth';
import UpcomingThisWeek from '@/components/dashboard/executive/UpcomingThisWeek';

export default function ExecutivePage() {
    console.log('ExecutivePage rendered');
    const router = useRouter();
    const [currentTab, setCurrentTab] = useState('dashboard');

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    const handleTabChange = (tab: string) => {
        setCurrentTab(tab);
        // Handle tab navigation logic here
    };

    const handleAIClick = () => {
        // Handle AI assistant logic here
        console.log('AI Assistant clicked');
    };

    return (
        <DashboardLayout
            currentPath="/dashboard/executive"
            dashboardTitle="Executive Dashboard"
            userName="John Smith - Managing Director"
            userInitials="JS"
            userColor="bg-blue-500"
            currentTab={currentTab}
            onNavigate={handleNavigate}
            onTabChange={handleTabChange}
            onAIClick={handleAIClick}
        >
            <div className="space-y-6">
                {/* Page Title */}
                <div>
                    <h2 className="text-2xl font-bold text-black">Executive Dashboard</h2>
                    <p className="text-black">Overview of firm performance, client relationships, and operational metrics</p>
                </div>

                <FirmOverview />
                <OperationalMetrics />
                <SystemIntegrationHealth />
                <UpcomingThisWeek />
            </div>
        </DashboardLayout>
    );
}