import React from 'react';
import { TriangleAlert, Copy, CalendarDays, ChevronDown } from 'lucide-react';

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

export const ExclamationTriangleIcon: React.FC<IconProps> = (props) => (
  <TriangleAlert {...props} />
);

export const DocumentDuplicateIcon: React.FC<IconProps> = (props) => (
  <Copy {...props} />
);

export const CalendarDaysIcon: React.FC<IconProps> = (props) => (
  <CalendarDays {...props} />
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <ChevronDown {...props} />
);