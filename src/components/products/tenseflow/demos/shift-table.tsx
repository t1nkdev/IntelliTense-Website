'use client';
import { motion } from 'framer-motion';

const workers = [
  { name: "Sarah Johnson", role: "Team Lead" },
  { name: "Mike Chen", role: "Associate" },
  { name: "Emma Davis", role: "Senior" },
  { name: "Alex Kim", role: "Associate" },
  { name: "Lisa Park", role: "Team Lead" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const shifts = {
  "M": { label: "Morning", time: "06:00 - 14:00", color: "bg-yellow-100 text-yellow-800" },
  "A": { label: "Afternoon", time: "14:00 - 22:00", color: "bg-blue-100 text-blue-800" },
  "N": { label: "Night", time: "22:00 - 06:00", color: "bg-purple-100 text-purple-800" },
  "-": { label: "Off", time: "", color: "bg-gray-50 text-gray-400" }
};

type Schedule = {
  [key: string]: string[];
};

const schedule: Schedule = {
  "Sarah Johnson": ["M", "M", "A", "A", "-", "N", "N"],
  "Mike Chen": ["A", "A", "M", "M", "N", "-", "-"],
  "Emma Davis": ["N", "N", "-", "-", "M", "M", "A"],
  "Alex Kim": ["-", "M", "M", "N", "N", "A", "A"],
  "Lisa Park": ["A", "-", "N", "M", "M", "M", "-"],
};

export default function ShiftTable() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/95 backdrop-blur-md rounded-t-xl shadow-xl p-4 w-[600px]"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Weekly Schedule</h3>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-xs">
            {Object.entries(shifts).map(([key, value]) => 
              key !== "-" && (
                <span key={key} className={`px-2 py-1 rounded ${value.color}`}>
                  {key}
                </span>
              )
            )}
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded-md">
            <CalendarIcon className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 text-sm font-medium text-gray-500">Employee</th>
              {days.map(day => (
                <th key={day} className="px-2 py-2 text-sm font-medium text-gray-500">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {workers.map((worker) => (
              <tr key={worker.name} className="border-t border-gray-100">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-sm font-medium text-purple-700">
                      {worker.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{worker.name}</p>
                      <p className="text-xs text-gray-500">{worker.role}</p>
                    </div>
                  </div>
                </td>
                {schedule[worker.name].map((shift, index) => (
                  <td key={index} className="px-2 py-2">
                    <div className={`text-center rounded-lg py-1 text-sm font-medium ${shifts[shift as keyof typeof shifts].color}`}>
                      {shift}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
      <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2"/>
    </svg>
  );
}
