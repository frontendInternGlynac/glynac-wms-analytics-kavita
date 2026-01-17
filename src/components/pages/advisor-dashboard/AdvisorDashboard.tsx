import React, { useMemo, useState } from 'react';
import {
  ADVISOR_PORTFOLIO_SUMMARY,
  ADVISOR_ACTION_ITEMS,
  ADVISOR_DASHBOARD_CLIENTS,
  ADVISOR_PERFORMANCE_INSIGHTS,
  ADVISOR_CLIENT_OPPORTUNITIES,
  ADVISOR_PRIORITY_ACTIONS,
} from './constants';
import {
  StarIcon,
  ChevronDownIcon,
} from './icons';

// =========================
// Advisor Dashboard Page
// =========================
export default function AdvisorDashboard() {
  const [clientFilter, setClientFilter] = useState<'all' | 'positive' | 'risk'>('all');

  const filteredClients = useMemo(() => {
    if (clientFilter === 'risk') return ADVISOR_DASHBOARD_CLIENTS.filter(c => c.healthScore < 7);
    if (clientFilter === 'positive') return ADVISOR_DASHBOARD_CLIENTS.filter(c => c.healthScore >= 7);
    return ADVISOR_DASHBOARD_CLIENTS;
  }, [clientFilter]);

  return (
    <div className="p-4 md:p-8 space-y-10">

      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold">My Portfolio Dashboard</h1>
        <p className="text-neutral-500">Your clients, performance metrics, and daily action items</p>
      </header>

      {/* Portfolio Summary */}
      <section>
        <h2 className="text-lg font-bold mb-4">My Portfolio Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {ADVISOR_PORTFOLIO_SUMMARY.map(metric => (
            <div key={metric.id} className="flex items-center gap-4 p-5 rounded-xl border bg-white hover:shadow">
              <div className={`p-3 rounded-lg ${metric.iconBgColor}`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-green-600 text-sm">{metric.change}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Items */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="border rounded-xl p-5">
          <h3 className="font-bold flex items-center gap-2 mb-4">
            <StarIcon className="w-5 h-5" /> Action Items Today
          </h3>
          <div className="space-y-3">
            {ADVISOR_ACTION_ITEMS.map(item => (
              <div
                key={item.id}
                className={`border-l-4 ${item.color} p-4 rounded-lg border hover:bg-neutral-50`}
              >
                <div className="flex justify-between font-semibold">
                  <span>{item.title}</span>
                  <span>{item.count}</span>
                </div>
                <p className="text-sm text-neutral-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Hub */}
        <div className="border rounded-xl p-5">
          <h3 className="font-bold mb-4">Communication Hub</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between"><span>Avg Response Time</span><span className="text-green-600">2.3 hours</span></li>
            <li className="flex justify-between"><span>Meetings This Week</span><span>18</span></li>
            <li className="flex justify-between"><span>Outstanding Tasks</span><span className="text-red-600">6</span></li>
            <li className="flex justify-between"><span>Email Engagement</span><span className="text-green-600">87%</span></li>
          </ul>
          <div className="mt-5 space-y-2">
            <ActionButton label="Compose client update" />
            <ActionButton label="Schedule follow-ups" />
            <ActionButton label="View communication reports" />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="border rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">My Clients</h3>
          <select
            value={clientFilter}
            onChange={e => setClientFilter(e.target.value as any)}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option value="all">All Clients</option>
            <option value="positive">Healthy Clients</option>
            <option value="risk">At Risk</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-neutral-500">
              <tr>
                <th className="text-left py-2">Client</th>
                <th>AUM</th>
                <th>Last Contact</th>
                <th>Health</th>
                <th>Next Meeting</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map(client => (
                <tr key={client.id} className="border-t">
                  <td className="py-3 font-medium">{client.name}</td>
                  <td>${(client.aum / 1_000_000).toFixed(1)}M</td>
                  <td>{client.lastContact}</td>
                  <td>
                    <span className={`px-2 py-1 rounded text-xs ${client.healthScore >= 7 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {client.healthScore}
                    </span>
                  </td>
                  <td>{client.nextMeeting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Performance & Communication Analytics */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="border rounded-xl p-5">
          <h3 className="font-bold mb-4">My Performance Insights</h3>
          <div className="space-y-3">
            {ADVISOR_PERFORMANCE_INSIGHTS.map(insight => (
              <div key={insight.id} className={`p-4 rounded-lg ${insight.bgColor}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{insight.title}</p>
                   {/*    <p className="text-sm text-neutral-500">{insight.subtitle}</p> */}
                  </div>
                  <span className="text-xl font-bold">{insight.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold mb-4">Communication Analytics</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">Email Open Rate by Client Segment</p>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between"><span>High Net Worth</span><span className="text-green-600">94%</span></li>
                <li className="flex justify-between"><span>Mass Affluent</span><span className="text-blue-600">78%</span></li>
                <li className="flex justify-between"><span>Emerging Wealth</span><span className="text-orange-600">65%</span></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Response Time by Communication Method</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-green-600">2.3h</p>
                  <p className="text-sm text-neutral-500">Email</p>
                </div>
                <div className="border rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-blue-600">0.8h</p>
                  <p className="text-sm text-neutral-500">Phone</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Client Channel Preferences</p>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between"><span>Email</span><span>45%</span></li>
                <li className="flex justify-between"><span>Phone</span><span>32%</span></li>
                <li className="flex justify-between"><span>In-Person</span><span>23%</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Opportunities & Alerts */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="border rounded-xl p-5">
          <h3 className="font-bold mb-4">Client Opportunities & Alerts</h3>
          <div className="space-y-3">
            {ADVISOR_CLIENT_OPPORTUNITIES.map(item => (
              <div
                key={item.id}
                className={`border-l-4 ${item.color} p-4 rounded-lg bg-white hover:shadow`}
              >
                <div className="flex justify-between font-semibold">
                  <span>{item.title}</span>
                  <span>{item.value}</span>
                </div>
                <p className="text-sm text-neutral-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold mb-4">Communication Hub</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between"><span>Avg Response Time</span><span className="text-green-600">2.3 hours</span></li>
            <li className="flex justify-between"><span>Meetings This Week</span><span>18</span></li>
            <li className="flex justify-between"><span>Outstanding Tasks</span><span className="text-red-600">6</span></li>
            <li className="flex justify-between"><span>Email Engagement</span><span className="text-green-600">87%</span></li>
          </ul>
          <div className="mt-5 space-y-2">
            <ActionButton label="Compose client update" />
            <ActionButton label="Schedule follow-ups" />
            <ActionButton label="View communication reports" />
          </div>
        </div>
      </section>

      {/* Priority Actions */}
      <section className="border rounded-xl p-5">
        <h3 className="font-bold mb-4">Today's Priority Actions</h3>
        <div className="space-y-3">
          {ADVISOR_PRIORITY_ACTIONS.map(action => (
            <div key={action.id} className="flex flex-col md:flex-row justify-between gap-4 border p-4 rounded-lg">
              <div className="flex gap-3">
                <span className={`w-3 h-3 rounded-full mt-2 ${action.dotColor}`} />
                <div>
                  <p className="font-semibold">{action.title}</p>
                  <p className="text-sm text-neutral-500">{action.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold ${action.priorityColor}`}>{action.priority}</span>
                <button
                  onClick={() => alert(`${action.buttonText}: ${action.title}`)}
                  className={`px-4 py-2 text-white rounded ${action.buttonColor}`}
                >
                  {action.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-sm text-neutral-400 flex justify-between">
        <span>Dashboard last updated: Today at 2:47 PM</span>
        <span>Next refresh in 13 minutes</span>
      </footer>
    </div>
  );
}

// =========================
// Small Reusable Button
// =========================
function ActionButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => alert(label)}
      className="w-full text-left border px-3 py-2 rounded hover:bg-neutral-100 text-sm"
    >
      {label}
    </button>
  );
}
