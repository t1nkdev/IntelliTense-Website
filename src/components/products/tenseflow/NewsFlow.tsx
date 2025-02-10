'use client';
import { motion } from 'framer-motion';

const newsCategories = [
  { name: "Latest Updates", count: 8 },
  { name: "New Features", count: 3 },
  { name: "Coming Soon", count: 4 },
  { name: "Announcements", count: 2 },
];

const latestNews = [
  {
    type: "New Features",
    date: "Mar 18",
    title: "AI-Powered Schedule Optimization Released",
    description: "Automatically generate optimal schedules based on employee preferences and business needs."
  },
  {
    type: "Coming Soon",
    date: "Mar 15",
    title: "Mobile App Beta Testing",
    description: "Join our beta testing program for the new TenseFlow mobile app."
  },
  {
    type: "Announcements",
    date: "Mar 12",
    title: "New API Documentation",
    description: "Updated API docs with new endpoints for advanced integrations."
  }
];

export default function NewsFlow() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="py-4">
          {/* Categories */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              {newsCategories.map((category) => (
                <motion.button
                  key={category.name}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 relative py-1"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {category.name}
                  <span className="px-1.5 py-0.5 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              View All Updates →
            </button>
          </div>

          {/* News Items */}
          <div className="grid grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg border border-gray-200 hover:border-purple-200 hover:shadow-sm transition-all cursor-pointer"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium">
                    {news.type}
                  </span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{news.title}</h3>
                <p className="text-sm text-gray-600">{news.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  );
}
