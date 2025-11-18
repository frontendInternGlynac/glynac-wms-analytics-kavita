import React from 'react';
import {
  Clock as ClockIcon,
  Users as UserGroupIcon,
  ChevronDown as ChevronDownIcon,
  BarChart3 as ChartBarIcon,
  CircleDollarSign as CurrencyDollarIcon,
  Filter as FunnelIcon,
  ArrowUpDown as ArrowsUpDownIcon,
  Brain as BrainIcon,
} from 'lucide-react';

// Custom Star icon to support filled state
type StarProps = React.SVGProps<SVGSVGElement> & { solid?: boolean };
export const StarIcon: React.FC<StarProps> = ({ solid = false, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={solid ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={2}
    className={className}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export {
  ClockIcon,
  UserGroupIcon,
  ChevronDownIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  FunnelIcon,
  ArrowsUpDownIcon,
  BrainIcon,
};