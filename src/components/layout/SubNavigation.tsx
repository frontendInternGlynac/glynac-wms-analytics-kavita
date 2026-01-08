import React from 'react';

interface SubNavigationProps {
    currentTab?: string;
    onTabChange?: (tab: string) => void;
}

const SubNavigation: React.FC<SubNavigationProps> = ({
    currentTab = 'dashboard',
    onTabChange = (tab) => console.log('Tab changed to:', tab)
}) => {
    const tabs = [
        { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
        { id: 'client-management', label: 'Client Management', path: '/pages/client-management' },
        { id: 'client-onboarding', label: 'Client Onboarding', path: '/pages/client-onboarding' },
        { id: 'employee-analytics', label: 'Employee Analytics', path: '/pages/employee-analytics' },
        { id: 'alerts-center', label: 'Alerts Center', path: '/pages/alerts-center' },
        { id: 'ai-assistant', label: 'AI Assistant', path: '/pages/ai-assistant' },
        { id: 'compliance-monitor', label: 'Compliance Monitor', path: '/pages/compliance-monitor' },
        { id: 'reports', label: 'Reports', path: '/pages/reports-analytics' }
    ];

    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-8 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`px-1 pt-1 pb-4 text-sm font-medium whitespace-nowrap ${currentTab === tab.id
                                ? 'border-b-2 border-blue-500 text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default SubNavigation;