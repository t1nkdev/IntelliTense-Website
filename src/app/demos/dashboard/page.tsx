import DemoTopBar from "@/components/products/tenseflow/demos/demo-topbar";
import Footer from "@/components/main/Footer";
import { 
  BarChart3, Users, Calendar, Clock, Building2, Settings,
  FileText, UserPlus, Briefcase, ChevronRight, Star,
  ClipboardList, Bell, MessageSquare, Pencil
} from 'lucide-react';

export default function DashboardDemo() {
  return (
    <main className="min-h-screen bg-gray-100">
      <DemoTopBar />

      {/* Menu Navigation */}
      <div className="w-full bg-white shadow-sm mt-[3.2rem]">
        <div className="max-w-[1920px] min-[2000px]:max-w-[2400px] mx-auto px-4 lg:px-8 2xl:px-16">
          <div className="flex items-center justify-between h-9">
            <div className="flex items-center gap-2">
              <button className="h-full px-1.5 border-b-2 border-blue-600 text-blue-600 text-[14px] font-medium">
                Dashboard
              </button>
              <button className="h-full px-1.5 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-[14px] font-medium">
                Schedule
              </button>

              <button className="h-full px-1.5 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-[14px] font-medium">
                Employees
              </button>


              <button className="h-full px-1.5 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-[14px] font-medium">
                Reports
              </button>


              <button className="h-full px-1.5 border-b-2 border-transparent text-gray-600 hover:text-gray-900 text-[14px] font-medium">
                Settings
              </button>

            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-gray-500">Last updated: 2m ago</span>
              <div className="h-2 w-px bg-gray-200"></div>
              <button className="text-[13px] text-gray-600 hover:text-gray-900 font-medium">
                View Updates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-[1920px] min-[2000px]:max-w-[2400px] mx-auto px-4 lg:px-8 2xl:px-16 py-6 lg:py-8">
        {/* Quick Access Title with Edit */}
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-sm font-medium text-gray-600">Quick Access</h2>
          <button className="text-[#0066B3] hover:text-blue-700">
            <Pencil className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Favorites Section */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6 lg:mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 gap-3 p-4">
            {favorites.map((item, index) => (
              <button 
                key={index}
                className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group text-left"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${item.bgColor} ${item.iconColor} flex items-center justify-center group-hover:opacity-80 transition-opacity`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm lg:text-base font-medium text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Connected Stats Cards */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6 lg:mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 lg:p-8">
                <span className="text-sm text-gray-500">{stat.title}</span>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</span>
                  <span className={`text-sm ${stat.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend > 0 ? '↑' : '↓'} {Math.abs(stat.trend)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Table Section */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
          <div className="px-8 py-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Employee Schedule</h2>
              <button className="text-sm text-gray-500 hover:text-gray-900">
                View All
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase">
                <th className="text-left px-8 py-4 font-medium">Employee</th>
                <th className="text-left px-8 py-4 font-medium">Department</th>
                <th className="text-left px-8 py-4 font-medium">Shift</th>
                <th className="text-left px-8 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((employee, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-0">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium">
                        {employee.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{employee.name}</div>
                        <div className="text-sm text-gray-500">{employee.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="text-sm text-gray-600">{employee.department}</span>
                  </td>
                  <td className="px-8 py-4">
                    <div className="text-sm text-gray-900">{employee.time}</div>
                    <div className="text-xs text-gray-500">{employee.shift}</div>
                  </td>
                  <td className="px-8 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      employee.status === 'Active' ? 'bg-green-50 text-green-600' :
                      employee.status === 'Break' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-gray-50 text-gray-600'
                    }`}>
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </main>
  );
}

const stats = [
  {
    title: "Total Employees",
    value: "248",
    trend: 12
  },
  {
    title: "Active Now",
    value: "186",
    trend: 8
  },
  {
    title: "Total Hours",
    value: "1,284",
    trend: -3
  },
  {
    title: "Efficiency",
    value: "92%",
    trend: 5
  }
];

const employeeData = [
  {
    name: "Sarah Johnson",
    role: "Team Lead",
    department: "Engineering",
    shift: "Morning Shift",
    time: "06:00 - 14:00",
    hours: "7h 45m",
    status: "Active"
  },
  {
    name: "Mike Chen",
    role: "Senior Developer",
    department: "Engineering",
    shift: "Morning Shift",
    time: "06:00 - 14:00",
    hours: "7h 30m",
    status: "Break"
  },
  {
    name: "Emma Davis",
    role: "UX Designer",
    department: "Design",
    shift: "Morning Shift",
    time: "07:00 - 15:00",
    hours: "7h 15m",
    status: "Active"
  },
  {
    name: "Alex Kim",
    role: "Developer",
    department: "Engineering",
    shift: "Morning Shift",
    time: "06:00 - 14:00",
    hours: "7h 45m",
    status: "Active"
  },
  {
    name: "Lisa Park",
    role: "Product Manager",
    department: "Product",
    shift: "Morning Shift",
    time: "08:00 - 16:00",
    hours: "6h 30m",
    status: "Active"
  }
];

const favorites = [
  
  {
    name: "Schedule Management",
    description: "Manage shifts",
    icon: Calendar,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    name: "Reports & Analytics",
    description: "View analytics",
    icon: FileText,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    name: "Departments & Teams",
    description: "Team structure",
    icon: Building2,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    name: "Messages ",
    description: "Team chat",
    icon: MessageSquare,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600"
  },
  {
    name: "Tasks & Assignments",
    description: "Manage workflow",
    icon: ClipboardList,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    name: "Settings",
    description: "Preferences",
    icon: Settings,
    bgColor: "bg-gray-100",
    iconColor: "text-gray-600"
  },
  {
    name: "Notifications ",
    description: "View alerts",
    icon: Bell,
    bgColor: "bg-red-100",
    iconColor: "text-red-600"
  },
  {
    name: "Time Off & Holidays",
    description: "Leave requests",
    icon: Calendar,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600"
  },
  
  {
    name: "Performance ",
    description: "Reviews & goals",
    icon: BarChart3,
    bgColor: "bg-cyan-100",
    iconColor: "text-cyan-600"
  },
  {
    name: "Directory EM Management",
    description: "Employee list",
    icon: Users,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  }
];