'use client';

export default function MESDashboard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="p-6">
        {/* Sample MES Dashboard UI */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Production</h3>
            <p className="text-2xl font-bold text-gray-900">89.5%</p>
            <span className="text-sm text-green-600">On Target</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Equipment</h3>
            <p className="text-2xl font-bold text-gray-900">98.2%</p>
            <span className="text-sm text-cyan-600">Uptime</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Quality</h3>
            <p className="text-2xl font-bold text-gray-900">99.7%</p>
            <span className="text-sm text-blue-600">Pass Rate</span>
          </div>
        </div>

        {/* Production Status */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Production Lines</h3>
          <div className="space-y-4">
            {[1,2,3].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-sm text-gray-600">Line {i + 1} - Running</span>
                </div>
                <span className="text-xs text-gray-400">100% Efficiency</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 