import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDownIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  PlusIcon,
  MagicBrainIcon,
} from './icons';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! I'm Ava, your Knowledge Agent.

I can help you with comprehensive client queries, communication history analysis, AUM and portfolio insights, and relationship intelligence.

**What I can do:**
- Analyze client portfolios and investment patterns
- Generate comprehensive client reports
- Track communication history and engagement
- Identify opportunities and risks across your book
- Synthesize data from multiple platforms

What would you like to know?`,
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAgent] = useState('Ava - Knowledge Agent');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  /* ---------------- MOCK RESPONSE LAYER ---------------- */

  const getMockResponse = (query: string): string => {
    if (query.toLowerCase().includes('tax')) {
      return `**Tax Deadlines Overview**

- Estimated tax payments: April 15
- Portfolio tax-loss harvesting review
- Client capital gains assessment

Would you like a client-wise tax impact summary?`;
    }

    if (query.toLowerCase().includes('rebalance')) {
      return `**Rebalancing Opportunities Identified**

- Equity allocation slightly above target
- Fixed income underweighted
- Suggest gradual rebalancing over next quarter

Shall I prepare a model allocation report?`;
    }

    if (query.toLowerCase().includes('communication')) {
      return `**Communication Gap Analysis**

- 12 clients with no interaction in last 90 days
- 4 high-AUM clients overdue for review
- Opportunity for proactive outreach

Would you like me to prioritize these clients?`;
    }

    return `Thanks for your question.

In a live environment, I would analyze connected systems like CRM, portfolio tools, and communication logs to provide a precise answer.

Would you like a summarized report or a deeper breakdown?`;
  };

  /* ---------------- MESSAGE SEND ---------------- */

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    inputRef.current?.focus();

    // Simulated assistant delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getMockResponse(userMessage.content),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 900);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestionChips = [
    'Tax deadlines this quarter',
    'Communication gaps analysis',
    'Rebalancing opportunities',
    'Onboarding report',
    'Advisor performance reviews',
  ];

  return (
    <div className="flex flex-col h-full bg-white rounded-t-xl shadow-lg mx-8 mb-4">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold">AI Assistant</h2>
          <button className="flex items-center bg-purple-100 px-4 py-2 rounded-lg">
            {selectedAgent}
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </button>
        </div>

        <button
          onClick={() => setMessages([messages[0]])}
          className="flex items-center bg-brand-blue text-white px-4 py-2 rounded-lg"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          New Chat
        </button>
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-2xl p-4 rounded-2xl shadow ${
                m.role === 'user'
                  ? 'bg-brand-blue text-white'
                  : 'bg-gray-50 border'
              }`}
              dangerouslySetInnerHTML={{
                __html: m.content.replace(/\n/g, '<br />'),
              }}
            />
          </div>
        ))}

        {isLoading && (
          <div className="text-sm text-gray-500">Ava is typing…</div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <div className="p-4 border-t bg-gray-50 flex flex-wrap gap-2">
          {suggestionChips.map((chip) => (
            <button
              key={chip}
              onClick={() => {
                setInput(chip);
                setTimeout(handleSend, 300);
              }}
              className="px-4 py-2 bg-white border rounded-full text-sm"
            >
              {chip}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t">
        <div className="relative">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="w-full pl-4 pr-32 py-3 border rounded-lg"
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
            <button>
              <MicrophoneIcon className="w-5 h-5" />
            </button>
            <button onClick={handleSend}>
              <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
            </button>
            <button>
              <MagicBrainIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
