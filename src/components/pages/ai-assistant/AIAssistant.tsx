import React from 'react';
import { ChevronDownIcon, MicrophoneIcon, PaperAirplaneIcon, PlusIcon, MagicBrainIcon } from './icons';

const AIAssistant: React.FC = () => {
    const suggestionChips = [
        'Tax deadlines this quarter',
        'Communication gaps analysis',
        'Rebalancing opportunities',
        'Onboarding report',
        'Advisor performance reviews',
    ];

    return (
        <div className="flex flex-col h-full bg-white rounded-t-xl shadow-lg mx-8 mb-4">
             <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f8f9fa; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #e9ecef; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #dee2e6; }
            `}</style>

            {/* Header */}
            <div className="flex-shrink-0 flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                    <h2 className="text-xl font-bold text-black">AI Assistant</h2>
                    <div className="relative">
                        <button className="flex items-center space-x-2 bg-purple-100 text-brand-purple font-semibold px-4 py-2 rounded-lg text-sm hover:bg-purple-200 transition-colors">
                            <span>Ava - Knowledge Agent</span>
                            <ChevronDownIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-green-700">Online</span>
                    </div>
                    <button className="flex items-center bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        <PlusIcon className="w-5 h-5 mr-2" />
                        New Chat
                    </button>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                {/* Welcome Message */}
                <div className="p-8">
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex-shrink-0 flex items-center justify-center font-bold text-lg">
                            A
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg rounded-tl-none shadow-sm border border-gray-100 max-w-3xl">
                            <h3 className="font-bold text-lg text-black mb-2">Hello! I'm Ava, your Knowledge Agent.</h3>
                            <p className="text-black mb-4">
                                I can help you with comprehensive client queries, communication history analysis, AUM and portfolio insights, and relationship intelligence. I have access to all your connected systems including HubSpot, Addepar, Black Diamond, and Salesforce.
                            </p>
                            <div className="text-black font-semibold mb-2">What I can do:</div>
                            <ul className="list-disc list-inside space-y-1 text-black">
                                <li>Analyze client portfolios and investment patterns</li>
                                <li>Generate comprehensive client reports</li>
                                <li>Track communication history and engagement</li>
                                <li>Identify opportunities and risks across your book</li>
                                <li>Synthesize data from multiple platforms</li>
                            </ul>
                            <p className="mt-4 font-medium text-black">What would you like to know?</p>
                        </div>
                    </div>
                </div>

                 {/* Spacer to push content up */}
                <div className="flex-grow"></div>

                {/* Suggestion Chips */}
                <div className="px-8 pb-4">
                    <p className="text-sm text-black mb-3">Try asking:</p>
                    <div className="flex flex-wrap gap-3">
                        {suggestionChips.map(chip => (
                            <button key={chip} className="px-4 py-2 bg-gray-100 text-black rounded-full text-sm hover:bg-gray-200 transition-colors">
                                {chip}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="flex-shrink-0 p-4 bg-white border-t border-gray-200">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Ask me anything about your clients, portfolios, or operations..."
                        className="w-full pl-4 pr-32 py-3 border border-gray-300 rounded-lg text-sm focus:ring-brand-blue focus:border-brand-blue"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center space-x-2">
                        <button className="text-black hover:text-black">
                            <MicrophoneIcon className="w-5 h-5" />
                        </button>
                        <button className="bg-brand-blue w-9 h-9 flex items-center justify-center rounded-lg hover:bg-blue-700 transition-colors">
                            <PaperAirplaneIcon className="w-5 h-5 text-white -rotate-45" />
                        </button>
                         <button className="bg-purple-600 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-purple-700 transition-colors">
                            <MagicBrainIcon className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAssistant;