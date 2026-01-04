import React, { useState } from 'react';
import Link from 'next/link';
import { BarChart3, Users, ClipboardCheck, Shield, MessageSquare, Wrench } from 'lucide-react';

interface DashboardLayoutProps {
    children: React.ReactNode;
    currentPath?: string;
    dashboardTitle?: string;
    userName?: string;
    userInitials?: string;
    currentTab?: string;
    onNavigate?: (path: string) => void;
    onTabChange?: (tab: string) => void;
    onAIClick?: () => void;
    extraHeaderContent?: React.ReactNode;
    avatarColor?: string;
    chatButtonColor?: string;
    showSystemAdminButton?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    currentPath = '/dashboard/executive',
    dashboardTitle = 'Executive Dashboard',
    userName = 'Sarah Johnson - Senior Financial Advisor',
    userInitials = 'SJ',
    currentTab = 'dashboard',
    onNavigate = (path) => console.log('Navigate to:', path),
    onTabChange = (tab) => console.log('Tab changed to:', tab),
    onAIClick = () => console.log('AI clicked'),
    extraHeaderContent,
    avatarColor = 'bg-blue-500',
    chatButtonColor = 'bg-amber-500 hover:bg-amber-600',
    showSystemAdminButton = false
}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        {
            path: '/dashboard/executive',
            label: 'Executive Dashboard',
            icon: BarChart3
        },
        {
            path: '/dashboard/advisor',
            label: 'Advisor Dashboard',
            icon: Users
        },
        {
            path: '/dashboard/operations',
            label: 'Operations Dashboard',
            icon: ClipboardCheck
        },
        {
            path: '/dashboard/compliance',
            label: 'Compliance Dashboard',
            icon: Shield
        }
    ];

    const tabs = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'client-management', label: 'Client Management' },
        { id: 'client-onboarding', label: 'Client Onboarding' },
        { id: 'employee-analytics', label: 'Employee Analytics' },
        { id: 'alerts-center', label: 'Alerts Center' },
        { id: 'ai-assistant', label: 'AI Assistant' },
        { id: 'compliance-monitor', label: 'Compliance Monitor' },
        { id: 'reports-analytics', label: 'Reports & Analytics' }
    ];

    return (
        <div className="bg-gray-50 font-sans min-h-screen">
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 transition-opacity md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className="fixed top-4 left-4 p-2 bg-white rounded-md shadow-lg md:hidden z-40"
            >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <div className={`
        fixed left-0 top-0 h-full bg-white shadow-lg z-30 flex flex-col border-r border-gray-200 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-20' : 'w-64'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>

                {/* Logo Section */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">G</span>
                        </div>
                        <span className={`font-semibold text-gray-900 transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                            Glynac
                        </span>
                    </div>

                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1 hover:bg-gray-100 rounded hidden md:block"
                        title={isCollapsed ? 'Expand' : 'Collapse'}
                    >
                        <svg className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto">
                    <nav className="p-4 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentPath === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`group flex items-center p-3 rounded-lg transition-colors w-full text-left ${isActive
                                        ? 'text-gray-900 bg-gray-100'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    title={isCollapsed ? item.label : undefined}
                                >
                                    <Icon className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0" />
                                    <span className={`transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Main Content - Now properly adjusts to sidebar width */}
            <div className={`transition-all duration-300 ease-in-out min-h-screen ${isCollapsed
                ? 'ml-0 md:ml-20'
                : 'ml-0 md:ml-64'
                }`}>

                {/* Main Header - Now expands full width when sidebar is collapsed */}
                <header className="bg-white shadow-sm border-b">
                    <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">

                            {/* Left side - Title */}
                            <div className="flex items-center">
                                <h1 className="text-xl font-semibold text-gray-900">Glynac</h1>
                                <span className="ml-2 text-sm text-gray-500">{dashboardTitle}</span>
                            </div>

                            {/* Center - System Admin Button (only on Reports & Analytics) */}
                            {showSystemAdminButton && (
                                <div className="flex items-center justify-center">
                                    <a
                                        href="system_admin.html"
                                        className="bg-gray-800 text-white px-3 py-2 rounded-md shadow-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2"
                                    >
                                        <Wrench className="w-4 h-4" />
                                        System Admin
                                    </a>
                                </div>
                            )}

                            {/* Right side - Actions and User */}
                            <div className="flex items-center space-x-4">
                                {extraHeaderContent}
                                <button
                                    onClick={onAIClick}
                                    className={`${chatButtonColor} text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center`}
                                >
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    Chat with AI
                                </button>

                                <span className="text-sm text-gray-700 hidden sm:block">{userName}</span>

                                <div className={`w-8 h-8 ${avatarColor} rounded-full flex items-center justify-center text-white text-sm`}>
                                    {userInitials}
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                {/* Sub Navigation - Fixed scrollbar issue */}
                <nav className="bg-white border-b">
                    <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex space-x-8">
                            {tabs.map((tab) => {
                                let href = '#';
                                if (tab.id === 'client-management') href = '/client-management';
                                if (tab.id === 'client-onboarding') href = '/client-onboarding';
                                if (tab.id === 'employee-analytics') href = '/employee-analytics';
                                if (tab.id === 'alerts-center') href = '/alerts-center';
                                if (tab.id === 'compliance-monitor') href = '/compliance-monitor';
                                if (tab.id === 'reports-analytics') href = '/reports-analytics';
                                if (tab.id === 'dashboard') href = '/dashboard/advisor'; // Default fallback

                                const isLink = tab.id === 'client-management' || tab.id === 'dashboard' || tab.id === 'client-onboarding' || tab.id === 'employee-analytics' || tab.id === 'alerts-center' || tab.id === 'compliance-monitor' || tab.id === 'reports-analytics';

                                if (isLink) {
                                    return (
                                        <Link
                                            key={tab.id}
                                            href={href}
                                            className={`px-1 pt-1 pb-4 text-sm font-medium whitespace-nowrap flex-shrink-0 ${currentTab === tab.id
                                                ? 'border-b-2 border-blue-500 text-blue-600'
                                                : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            {tab.label}
                                        </Link>
                                    );
                                }

                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => onTabChange(tab.id)}
                                        className={`px-1 pt-1 pb-4 text-sm font-medium whitespace-nowrap flex-shrink-0 ${currentTab === tab.id
                                            ? 'border-b-2 border-blue-500 text-blue-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </nav>

                {/* Page Content */}
                <main className="max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {children}
                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;