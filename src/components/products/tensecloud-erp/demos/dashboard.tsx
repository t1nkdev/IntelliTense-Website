'use client';

export default function ERPDashboard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="p-6">
        {/* Sample ERP Dashboard UI */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Financial Overview */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Revenue</h3>
            <p className="text-2xl font-bold text-gray-900">$1.2M</p>
            <span className="text-sm text-green-600">↑ 12.5%</span>
          </div>
          
          {/* Inventory Status */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Inventory</h3>
            <p className="text-2xl font-bold text-gray-900">2,453</p>
            <span className="text-sm text-gray-600">Items tracked</span>
          </div>
          
          {/* Orders */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Orders</h3>
            <p className="text-2xl font-bold text-gray-900">847</p>
            <span className="text-sm text-blue-600">125 pending</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1,2,3].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">New order received</span>
                </div>
                <span className="text-xs text-gray-400">2m ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}