import React from 'react';

const OperationalMetrics = () => {
    // Mock data matching demo
    const onboardingData = {
        newProspects: 23,
        documentationCollection: 15,
        accountSetup: 8,
        readyToActivate: 5,
        avgOnboardingTime: 14
    };

    const taskData = {
        pending: 127,
        inProgress: 89,
        completed: 234,
        overdue: 12,
        avgCompletionTime: 2.4
    };

    const clientIntelligence = {
        highEngagement: 1847,
        atRisk: 156,
        highRisk: 23,
        avgSatisfaction: 4.6,
        responseRate: 94.2
    };

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">Operational Metrics</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Onboarding Pipeline Status */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="text-base font-semibold text-black mb-4">Onboarding Pipeline Status</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-black">New Prospects</span>
                            <span className="text-sm font-medium text-black">{onboardingData.newProspects}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-black">Documentation Collection</span>
                            <span className="text-sm font-medium text-black">{onboardingData.documentationCollection}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-black">Account Setup</span>
                            <span className="text-sm font-medium text-black">{onboardingData.accountSetup}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-black">Ready to Activate</span>
                            <span className="text-sm font-medium text-green-600">{onboardingData.readyToActivate}</span>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-black">Avg. Onboarding Time</span>
                            <span className="text-sm font-semibold text-blue-600">{onboardingData.avgOnboardingTime} days</span>
                        </div>
                    </div>
                </div>

                {/* Task Management Status */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="text-base font-semibold text-black mb-4">Task Management Status</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-black">Pending Tasks</span>
                            <span className="text-sm font-medium text-black">{taskData.pending}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-black">In Progress</span>
                            <span className="text-sm font-medium text-blue-600">{taskData.inProgress}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-black">Completed Today</span>
                            <span className="text-sm font-medium text-green-600">{taskData.completed}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-black">Overdue</span>
                            <span className="text-sm font-medium text-red-600">{taskData.overdue}</span>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-black">Avg. Completion Time</span>
                            <span className="text-sm font-semibold text-blue-600">{taskData.avgCompletionTime} hrs</span>
                        </div>
                    </div>
                </div>

                {/* Client Intelligence Summary */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="text-base font-semibold text-black mb-4">Client Intelligence Summary</h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-black">High Engagement</p>
                                <p className="text-xs text-black">Weekly+ communication</p>
                            </div>
                            <span className="text-lg font-semibold text-green-600">{clientIntelligence.highEngagement.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-black">At Risk</p>
                                <p className="text-xs text-black">No contact 30+ days</p>
                            </div>
                            <span className="text-lg font-semibold text-yellow-600">{clientIntelligence.atRisk}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                            <div>
                                <p className="text-sm font-medium text-black">High Risk</p>
                                <p className="text-xs text-black">Declining sentiment</p>
                            </div>
                            <span className="text-lg font-semibold text-red-600">{clientIntelligence.highRisk}</span>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-black">Avg. Satisfaction Score</span>
                            <span className="font-medium text-black">{clientIntelligence.avgSatisfaction}/5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-black">Response Rate</span>
                            <span className="font-medium text-blue-600">{clientIntelligence.responseRate}%</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OperationalMetrics;