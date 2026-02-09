import { BarChart3, Clock, CheckCircle, FileText, AlertTriangle, Brain, ChevronDown } from 'lucide-react';
import React from 'react';

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <BarChart3 className={className} />
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Clock className={className} />
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <CheckCircle className={className} />
);

export const DocumentDuplicateIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FileText className={className} />
);

export const ExclamationTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <AlertTriangle className={className} />
);

export const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Brain className={className} />
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <ChevronDown className={className} />
);