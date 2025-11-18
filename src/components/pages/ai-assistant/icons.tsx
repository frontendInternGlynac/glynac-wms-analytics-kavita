import React from 'react';
import { ChevronDown, Mic, Send, Plus, BrainCircuit } from 'lucide-react';

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <ChevronDown className={className} />
);

export const MicrophoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Mic className={className} />
);

export const PaperAirplaneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Send className={className} />
);

export const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Plus className={className} />
);

export const MagicBrainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <BrainCircuit className={className} />
);