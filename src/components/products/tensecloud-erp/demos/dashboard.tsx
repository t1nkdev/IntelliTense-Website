'use client';
import { DollarSign, Package, ShoppingCart, MessageSquare, Pencil, TrendingUp } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, orders: 2400 },
  { name: 'Feb', revenue: 3000, orders: 1398 },
  { name: 'Mar', revenue: 2000, orders: 9800 },
  { name: 'Apr', revenue: 2780, orders: 3908 },
  { name: 'May', revenue: 1890, orders: 4800 },
  { name: 'Jun', revenue: 2390, orders: 3800 },
];

export default function ERPDashboard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Browser Window Frame */}
      <div className="bg-[#07838f]/20 border-b border-gray-200/20 p-1.5 flex items-center gap-1.5">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-white/80"></div>
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </div> 

      <div className="p-4">
        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-3 rounded-lg border border-blue-100">
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1.5">Revenue</h3>
                <p className="text-xl font-bold text-gray-900">$1.2M</p>
                <span className="text-sm text-green-600">↑ 12.5%</span>
              </div>
              <div className="bg-blue-500/10 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-3 rounded-lg border border-purple-100">
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1.5">Inventory</h3>
                <p className="text-xl font-bold text-gray-900">2,453</p>
                <span className="text-sm text-gray-600">Items tracked</span>
              </div>
              <div className="bg-purple-500/10 p-2 rounded-lg">
                <Package className="w-5 h-5 text-purple-500" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-3 rounded-lg border border-emerald-100">
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1.5">Orders</h3>
                <p className="text-xl font-bold text-gray-900">847</p>
                <span className="text-sm text-blue-600">125 pending</span>
              </div>
              <div className="bg-emerald-500/10 p-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <h3 className="text-sm font-medium text-gray-800 mb-3">Revenue Trend</h3>
            <div className="h-[160px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0066B3" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0066B3" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#0066B3" fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <h3 className="text-sm font-medium text-gray-800 mb-3">Orders Overview</h3>
            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#0066B3" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-medium text-gray-600 mb-3">Recent Activity</h3>
          <div className="space-y-3">
            {[1,2,3].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-3">
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