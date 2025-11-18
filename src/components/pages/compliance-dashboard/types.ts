export interface MetricTile {
  id: string;
  title: string;
  value: string | number;
  sub?: string;
  colorClass?: string;
}

export interface AlertItem {
  id: string;
  title: string;
  description: string;
  level: 'HIGH' | 'MED' | 'LOW';
}

export interface ProgressItem {
  id: string;
  label: string;
  value: number; // 0-100
}

export interface TimelineItem {
  id: string;
  title: string;
  dueLabel: string;
  badgeClass: string;
  actionLabel: string;
}