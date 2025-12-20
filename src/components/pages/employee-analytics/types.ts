export interface Advisor {
  id: string;
  initials: string;
  avatarColor: string; // Tailwind class like 'bg-blue-500'
  name: string;
  title: string;
  clients: number;
  aum: number; // in dollars
  performanceScore: number; // 0-10
  communicationScore: string; // e.g. 'Excellent'
  taskCompletion: number; // percentage
  clientSatisfaction: number; // out of 5
  newClientsYTD: number;
  avgResponse: string; // e.g. '2.3h'
  clientRetention: number; // percentage
  Quarter: string;
}

export interface TeamPerformancePoint {
  x: string; // month label
  y: number; // score
}

export interface Metric{
  Employee: string; // used to select different metrix 
  Total_AUM : string;
  Average_Performance : string;
  Average_Response : string;

}