"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BarChart3, Users, ClipboardCheck, Shield, MessageSquare } from 'lucide-react';

interface DashboardLayoutProps {
    children: React.ReactNode;
    currentPath?: string;
    dashboardTitle?: string;
    userName?: string;
    userInitials?: string;
    userColor?: string;
    currentTab?: string;
    onNavigate?: (path: string) => void;
    onTabChange?: (tab: string) => void;
    onAIClick?: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    currentPath = '/dashboard/executive',
    dashboardTitle = 'Executive Dashboard',
    userName = 'System Admin',
    userInitials = 'SA',
    userColor = 'bg-blue-500',
    currentTab = 'dashboard',
    onNavigate,
    onTabChange = (tab) => console.log('Tab changed to:', tab),
    onAIClick = () => console.log('AI clicked')
}) => {
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navigate = onNavigate ?? ((path: string) => router.push(path));

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
        { id: 'dashboard', label: 'Dashboard', path: '/dashboard/executive' },
        { id: 'client-management', label: 'Client Management', path: '/client-management' },
        { id: 'client-onboarding', label: 'Client Onboarding', path: '/client-onboarding' },
        { id: 'employee-analytics', label: 'Employee Analytics', path: '/employee-analytics' },
        { id: 'alerts-center', label: 'Alerts Center', path: '/alerts-center' },
        { id: 'ai-assistant', label: 'AI Assistant', path: '/ai-assistant' },
        { id: 'compliance-monitor', label: 'Compliance Monitor', path: '/compliance-monitor' },
        { id: 'reports', label: 'Reports & Analytics', path: '/reports' }
    ];

    return (
        <div className="bg-white font-sans min-h-screen">
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-20 transition-opacity md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className="fixed top-4 left-4 p-2 bg-white rounded-md shadow-lg md:hidden z-40"
            >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <div className={`
        fixed left-0 top-0 h-full bg-white shadow-lg z-30 flex flex-col border-r border-blue-200 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-20' : 'w-64'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>

                {/* Logo Section */}
                <div className="flex items-center justify-between p-4 border-b border-blue-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">G</span>
                        </div>
                        <span className={`font-semibold text-black transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                            Glynac
                        </span>
                    </div>

                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1 hover:bg-blue-50 rounded hidden md:block"
                        title={isCollapsed ? 'Expand' : 'Collapse'}
                    >
                        <svg className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                <button
                                    key={item.path}
                                    onClick={() => navigate(item.path)}
                                    className={`group flex items-center p-3 rounded-lg transition-colors w-full text-left ${isActive
                                            ? 'text-black bg-blue-50'
                                            : 'text-black hover:bg-blue-50'
                                        }`}
                                    title={isCollapsed ? item.label : undefined}
                                >
                                    <Icon className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                                    <span className={`transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                                        {item.label}
                                    </span>
                                </button>
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
                                <h1 className="text-xl font-semibold text-black">Glynac</h1>
                                <span className="ml-2 text-sm text-black">{dashboardTitle}</span>
                            </div>

                            {/* Right side - Actions and User */}
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={onAIClick}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                                >
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    Chat with AI
                                </button>

                                <span className="text-sm text-black hidden sm:block">{userName}</span>

                                <div className={`w-8 h-8 ${userColor} rounded-full flex items-center justify-center text-white text-sm`}>
                                    {userInitials}
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                {/* Sub Navigation - Fixed scrollbar issue */}
                <nav className="bg-white border-b">
                    <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex space-x-6 overflow-x-auto">
                            {tabs.map((tab) => (
                                <Link
                                    key={tab.id}
                                    href={tab.path}
                                    onClick={() => onTabChange(tab.id)}
                                    className={`px-1 pt-1 pb-4 text-sm font-medium whitespace-nowrap flex-shrink-0 ${currentTab === tab.id
                                            ? 'border-b-2 border-blue-500 text-blue-600'
                                            : 'text-black hover:text-blue-600'
                                        }`}
                                >
                                    {tab.label}
                                </Link>
                            ))}
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