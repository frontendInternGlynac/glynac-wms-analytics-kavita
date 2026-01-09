'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Clock } from 'lucide-react';
import { DashboardLayout } from '@/components/layout';
import FirmOverview from '@/components/dashboard/executive/FirmOverview';
import OperationalMetrics from '@/components/dashboard/executive/OperationalMetrics';
import AdvisorPerformance from '@/components/dashboard/executive/AdvisorPerformance';

export default function ExecutivePage() {
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
            userName="Sarah Johnson - Senior Financial Advisor"
            userInitials="SJ"
            currentTab={currentTab}
            onNavigate={handleNavigate}
            onTabChange={handleTabChange}
            onAIClick={handleAIClick}
        >
            <div className="space-y-6">
                {/* Page Title */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Executive Dashboard</h2>
                    <p className="text-gray-600">Overview of firm performance, client relationships, and operational metrics</p>
                </div>

                {/* Dashboard Sections */}
                <FirmOverview />
                <OperationalMetrics />
                <AdvisorPerformance />

                {/* Footer */}
                <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm flex justify-between items-center text-xs text-gray-400 font-medium">
                    <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Dashboard last updated: Today at 2:47 PM</span>
                    </div>
                    <span>Next refresh in 13 minutes</span>
                </div>
            </div>
        </DashboardLayout>
    );
}