'use client';
import React, { useState, useEffect, useRef } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { ChevronDown, Plus, Mic, Send, AlertTriangle } from 'lucide-react';

export default function AIAssistantPage() {
    const [mounted, setMounted] = useState(false);
    const [messages, setMessages] = useState<{ id: string; role: string; content: React.ReactNode }[]>([
        {
            id: '1',
            role: 'assistant',
            content: (
                <div className="space-y-4">
                    <p className="text-xl font-medium text-gray-900">
                        Hello, I'm Ava, your advanced wealth analytics assistant.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        I have access to your complete firm data including client portfolios, compliance records, and operational metrics. How can I help you optimize your practice today?
                    </p>
                </div>
            )
        },
        {
            id: '2',
            role: 'user',
            content: 'Show me which high-net-worth clients have increased private equity allocations in the past six months and missed their last review meeting'
        },
        {
            id: '3',
            role: 'assistant',
            content: (
                <div className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm max-w-[750px] space-y-3">
                    <p className="text-[15px] text-gray-800">
                        <span className="font-bold">Analysis Complete!</span> I found 7 clients matching your criteria by analyzing data from Addepar (portfolio allocations), HubSpot (meeting history), and Black Diamond (client communications).
                    </p>

                    <div className="bg-[#fff1f2] border border-[#fecdd3] rounded-xl p-4 space-y-2">
                        <div className="flex items-center space-x-2 text-[#9f1239]">
                            <AlertTriangle className="w-5 h-5" />
                            <h4 className="font-bold text-[15px]">High Priority Clients (Immediate Attention)</h4>
                        </div>

                        <div className="space-y-2">
                            {[
                                { name: 'Johnson Family Office', pe: '+2.3M (18% → 31%)', review: '8 weeks ago' },
                                { name: 'Thompson Holdings', pe: '+1.8M (12% → 28%)', review: '6 weeks ago' },
                                { name: 'Martinez Trust', pe: '+3.1M (8% → 24%)', review: '10 weeks ago' }
                            ].map((client, i) => (
                                <div key={i} className="flex justify-between items-start text-[14px]">
                                    <span className="font-semibold text-gray-900">{client.name}</span>
                                    <div className="text-right">
                                        <p className="text-[#e11d48] font-bold">PE: {client.pe}</p>
                                        <p className="text-gray-500 text-[12px]">Last Review: {client.review}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#eff6ff] border border-[#dbeafe] rounded-xl p-4 space-y-2">
                        <h4 className="font-bold text-[#1e40af] text-[15px]">Key Insights:</h4>
                        <ul className="space-y-1">
                            {[
                                'Average PE allocation increase: +18.2% of portfolio',
                                'All 7 clients exceed $5M AUM threshold',
                                'Combined missed review value: $47.3M in AUM',
                                '3 clients have upcoming tax implications'
                            ].map((insight, i) => (
                                <li key={i} className="flex items-start space-x-2 text-[14px] text-[#1e40af]">
                                    <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full mt-1 flex-shrink-0" />
                                    <span>{insight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {[
                            { label: 'Schedule Emergency Reviews', color: 'bg-[#fee2e2] text-[#901e1e]' },
                            { label: 'Generate Detailed Report', color: 'bg-[#dbeafe] text-[#1e40af]' },
                            { label: 'Risk Assessment', color: 'bg-[#f3e8ff] text-[#6b21a8]' },
                            { label: 'Create Follow-up Tasks', color: 'bg-[#dcfce7] text-[#166534]' }
                        ].map((btn, i) => (
                            <button key={i} className={`${btn.color} px-4 py-1.5 rounded-full text-[12px] font-bold hover:opacity-80 transition-opacity`}>
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>
            )
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            scrollToBottom();
        }
    }, [messages, mounted]);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        // Mapping for demo queries
        const queryMap: Record<string, string> = {
            'communication gaps analysis': 'Show me communication gaps with top 20 clients',
            'rebalancing opportunities': 'Identify portfolio rebalancing opportunities',
            'onboarding report': 'Generate monthly client onboarding report',
            'advisor performance reviews': 'Which advisors need performance review meetings?',
            'tax deadlines this quarter': 'Which clients have upcoming tax deadlines this quarter?',
            'pe allocations': 'Show me which high-net-worth clients have increased private equity allocations in the past six months and missed their last review meeting'
        };

        const lowerText = text.toLowerCase();
        const matchedKey = Object.keys(queryMap).find((key) => lowerText.includes(key));
        const displayUserText = matchedKey ? queryMap[matchedKey] : text;

        const userMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: displayUserText
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');

        // Simulate AI response
        setTimeout(() => {
            const isPEQuery = lowerText.includes('pe allocation') || lowerText.includes('private equity') || lowerText.includes('missed their last review');

            const aiResponse = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: isPEQuery ? (
                    <div className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm max-w-[750px] space-y-3">
                        <p className="text-[15px] text-gray-800">
                            <span className="font-bold">Analysis Complete!</span> I found 7 clients matching your criteria by analyzing data from Addepar (portfolio allocations), HubSpot (meeting history), and Black Diamond (client communications).
                        </p>

                        <div className="bg-[#fff1f2] border border-[#fecdd3] rounded-xl p-4 space-y-2">
                            <div className="flex items-center space-x-2 text-[#9f1239]">
                                <AlertTriangle className="w-5 h-5" />
                                <h4 className="font-bold text-[15px]">High Priority Clients (Immediate Attention)</h4>
                            </div>

                            <div className="space-y-2">
                                {[
                                    { name: 'Johnson Family Office', pe: '+2.3M (18% → 31%)', review: '8 weeks ago' },
                                    { name: 'Thompson Holdings', pe: '+1.8M (12% → 28%)', review: '6 weeks ago' },
                                    { name: 'Martinez Trust', pe: '+3.1M (8% → 24%)', review: '10 weeks ago' }
                                ].map((client, i) => (
                                    <div key={i} className="flex justify-between items-start text-[14px]">
                                        <span className="font-semibold text-gray-900">{client.name}</span>
                                        <div className="text-right">
                                            <p className="text-[#e11d48] font-bold">PE: {client.pe}</p>
                                            <p className="text-gray-500 text-[12px]">Last Review: {client.review}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#eff6ff] border border-[#dbeafe] rounded-xl p-4 space-y-2">
                            <h4 className="font-bold text-[#1e40af] text-[15px]">Key Insights:</h4>
                            <ul className="space-y-1">
                                {[
                                    'Average PE allocation increase: +18.2% of portfolio',
                                    'All 7 clients exceed $5M AUM threshold',
                                    'Combined missed review value: $47.3M in AUM',
                                    '3 clients have upcoming tax implications'
                                ].map((insight, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-[14px] text-[#1e40af]">
                                        <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full mt-1.5 flex-shrink-0" />
                                        <span>{insight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-1">
                            {[
                                { label: 'Schedule Emergency Reviews', color: 'bg-[#fee2e2] text-[#901e1e]' },
                                { label: 'Generate Detailed Report', color: 'bg-[#dbeafe] text-[#1e40af]' },
                                { label: 'Risk Assessment', color: 'bg-[#f3e8ff] text-[#6b21a8]' },
                                { label: 'Create Follow-up Tasks', color: 'bg-[#dcfce7] text-[#166534]' }
                            ].map((btn, i) => (
                                <button key={i} className={`${btn.color} px-4 py-1.5 rounded-full text-[12px] font-bold hover:opacity-80 transition-opacity`}>
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm max-w-[750px] space-y-3">
                        <p className="text-[16px] text-gray-900">
                            <span className="font-bold">I understand you're asking about: "{displayUserText}"</span>
                        </p>
                        <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                            I'm analyzing data across all connected systems including HubSpot, Addepar, Black Diamond, and Salesforce to provide comprehensive insights.
                        </p>
                        <div className="bg-[#eff6ff] border border-[#dbeafe] rounded-xl p-4 mt-2">
                            <p className="text-[14px] text-[#1e40af]">
                                <span className="font-bold">Demo Note:</span> <span className="font-medium">In the full application, this would return real data from your integrated systems with actionable insights, visualizations, and specific recommendations tailored to your query.</span>
                            </p>
                        </div>
                    </div>
                )
            };
            setMessages((prev) => [...prev, aiResponse]);
        }, 800);
    };

    const customTitle = (
        <div className="flex items-center space-x-4">
            <h1 className="text-[20px] font-bold text-gray-900">AI Assistant</h1>
            <div className="bg-[#7c69b1] text-white px-4 py-1.5 rounded-lg flex items-center space-x-2 text-[14px] font-medium cursor-pointer hover:bg-[#6c5a9d] transition-colors shadow-sm">
                <span>Ava - Knowledge Agent</span>
                <ChevronDown className="w-4 h-4 opacity-80" />
            </div>
        </div>
    );

    const extraHeaderContent = (
        <div className="flex items-center space-x-4 mr-4">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[14px] text-gray-500">Online</span>
            </div>
            <button
                onClick={() => setMessages([messages[0]])}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-1.5 rounded-lg text-[14px] font-semibold flex items-center shadow-sm transition-all"
            >
                <Plus className="w-4 h-4 mr-2" />
                New Chat
            </button>
        </div>
    );

    if (!mounted) return null;

    return (
        <DashboardLayout
            dashboardTitle="AI Assistant"
            currentPath="/ai-assistant"
            currentTab="ai-assistant"
            customTitle={customTitle}
            extraHeaderContent={extraHeaderContent}
            hideAIChatButton={true}
            hideUserAccount={true}
        >
            <div className="max-w-6xl mx-auto flex flex-col h-[calc(100vh-180px)] relative overflow-hidden">
                <div className="flex-1 space-y-8 pb-32 pt-4 px-2 overflow-y-auto custom-scrollbar">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'space-x-4'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                            {message.role === 'assistant' && (
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-[#b169b1] rounded-full flex items-center justify-center text-white font-bold text-[18px] shadow-sm">
                                        A
                                    </div>
                                </div>
                            )}
                            {message.role === 'user' ? (
                                <div className="bg-[#2563eb] text-white rounded-[20px] rounded-tr-none p-5 px-6 max-w-[700px] shadow-sm">
                                    <p className="text-[15px] font-medium leading-relaxed">{message.content}</p>
                                </div>
                            ) : (
                                message.content
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 p-4 z-20">
                    <div className="max-w-6xl mx-auto space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mr-1">Try asking:</span>
                            {[
                                "PE allocations",
                                "Tax deadlines this quarter",
                                "Communication gaps analysis",
                                "Rebalancing opportunities",
                                "Onboarding report"
                            ].map((suggestion, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSendMessage(suggestion)}
                                    className="bg-gray-50 hover:bg-gray-100 text-gray-500 border border-gray-200 px-4 py-1.5 rounded-lg text-[13px] font-medium transition-colors"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                        <div className="relative group">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                                placeholder="Ask me anything about your clients, portfolios, or operations..."
                                className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-6 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-[15px] text-gray-800 placeholder-gray-400 shadow-sm"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                    <Mic className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleSendMessage(inputValue)}
                                    className="bg-[#2563eb] text-white p-2.5 rounded-lg shadow-sm hover:bg-[#1d4ed8] transition-all active:scale-95"
                                >
                                    <Send className="w-5 h-5 fill-current" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                body { overflow: hidden; }
                @keyframes fade-in { 0% { opacity: 0; } to { opacity: 1; } }
                @keyframes slide-in-from-bottom { 0% { transform: translateY(20px); } to { transform: translateY(0); } }
                .animate-in { animation-duration: 0.5s; animation-fill-mode: both; }
                .fade-in { animation-name: fade-in; }
                .slide-in-from-bottom-4 { animation-name: slide-in-from-bottom; }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e5e7eb; border-radius: 20px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #d1d5db; }
            `}</style>
        </DashboardLayout>
    );
}
