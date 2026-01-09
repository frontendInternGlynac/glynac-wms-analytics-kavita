export default function PerformanceInsights() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">My Performance Insights</h2>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span>⚡</span>
          <span>HubSpot Data</span>
        </div>
      </div>

      <div className="space-y-2.5">
        {/* Email Response Rate */}
        <div className="bg-green-50 rounded-lg p-3">
          <div className="flex justify-between items-start mb-0.5">
            <span className="text-sm font-medium text-gray-900">Email Response Rate</span>
            <div className="flex items-center gap-1 text-green-600">
              <span className="text-base font-bold">87%</span>
              <span className="text-sm">↑</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-500">15% above team average</p>
        </div>

        {/* Call-to-Meeting Rate */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex justify-between items-start mb-0.5">
            <span className="text-sm font-medium text-gray-900">Call-to-Meeting Rate</span>
            <div className="flex items-center gap-1 text-blue-600">
              <span className="text-base font-bold">73%</span>
              <span className="text-sm">↺</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-500">Conversion effectiveness</p>
        </div>

        {/* Avg Task Completion */}
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="flex justify-between items-start mb-0.5">
            <span className="text-sm font-medium text-gray-900">Avg Task Completion</span>
            <span className="text-base font-bold text-purple-600">3.7 days</span>
          </div>
          <p className="text-[10px] text-gray-500">2.3 days faster than target</p>
        </div>

        {/* Client Engagement Score */}
        <div className="bg-indigo-50 rounded-lg p-3">
          <div className="flex justify-between items-start mb-0.5">
            <span className="text-sm font-medium text-gray-900">Client Engagement Score</span>
            <div className="flex items-center gap-1 text-indigo-600">
              <span className="text-base font-bold">8.4/10</span>
              <div className="flex gap-[2px]">
                <div className="w-1 h-3 bg-indigo-600 rounded-sm"></div>
                <div className="w-1 h-3 bg-indigo-600 rounded-sm"></div>
                <div className="w-1 h-3 bg-indigo-600 rounded-sm"></div>
                <div className="w-1 h-3 bg-indigo-600 rounded-sm"></div>
                <div className="w-1 h-3 bg-indigo-300 rounded-sm"></div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-gray-500">Based on all touchpoints</p>
        </div>
      </div>
    </div>
  );
}