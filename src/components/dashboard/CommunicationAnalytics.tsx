export default function CommunicationAnalytics() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm h-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-bold text-gray-900">Communication Analytics</h2>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span>💬</span>
          <span>HubSpot Powered</span>
        </div>
      </div>

      <div className="space-y-8">
        {/* 1. Email Open Rate by Client Segment */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Email Open Rate by Client Segment</h3>
          <div className="space-y-4">
            {/* High Net Worth */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">High Net Worth</span>
                <span className="text-sm font-bold text-green-600">94%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[94%] rounded-full"></div>
              </div>
            </div>

            {/* Mass Affluent */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Mass Affluent</span>
                <span className="text-sm font-bold text-blue-600">78%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[78%] rounded-full"></div>
              </div>
            </div>

            {/* Emerging Wealth */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Emerging Wealth</span>
                <span className="text-sm font-bold text-orange-600">65%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[65%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Response Time by Communication Method */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Response Time by Communication Method</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <span className="block text-2xl font-bold text-green-600 mb-1">2.3h</span>
              <span className="text-xs text-gray-500">Email</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <span className="block text-2xl font-bold text-blue-600 mb-1">0.8h</span>
              <span className="text-xs text-gray-500">Phone</span>
            </div>
          </div>
        </div>

        {/* 3. Client Channel Preferences */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Client Channel Preferences</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-gray-600">Email</span>
              </div>
              <span className="font-medium text-gray-900">45%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-gray-600">Phone</span>
              </div>
              <span className="font-medium text-gray-900">32%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-gray-600">In-Person</span>
              </div>
              <span className="font-medium text-gray-900">23%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}