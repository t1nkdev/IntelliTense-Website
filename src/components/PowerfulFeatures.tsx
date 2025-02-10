'use client';
import { motion } from 'framer-motion';
import { Users, BarChart3, Calendar, Clock, Building2, Laptop } from 'lucide-react';

export default function PowerfulFeatures() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#0A1657]">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your workforce management with our comprehensive suite of AI-powered tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="w-7 h-7 text-[#0066B3]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#0A1657]">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              {feature.highlights && (
                <ul className="mt-4 space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Smart Scheduling",
    description: "AI-powered scheduling that automatically creates optimal shift patterns while considering employee preferences and business needs.",
    icon: Calendar,
    highlights: [
      "Automated schedule generation",
      "Employee preference matching",
      "Conflict resolution"
    ]
  },
  {
    title: "Time Management",
    description: "Comprehensive time tracking system with real-time monitoring and automated attendance management.",
    icon: Clock,
    highlights: [
      "Mobile check-in/out",
      "Break management",
      "Overtime tracking"
    ]
  },
  {
    title: "Team Management",
    description: "Complete workforce management solution with detailed employee profiles and team organization tools.",
    icon: Users,
    highlights: [
      "Skill tracking",
      "Performance monitoring",
      "Team analytics"
    ]
  },
  {
    title: "Analytics Dashboard",
    description: "Advanced reporting tools with customizable dashboards providing deep insights into your workforce operations.",
    icon: BarChart3,
    highlights: [
      "Real-time metrics",
      "Custom reports",
      "Trend analysis"
    ]
  },
  {
    title: "Multi-location Support",
    description: "Manage multiple locations and departments from a single platform with location-specific settings.",
    icon: Building2,
    highlights: [
      "Location management",
      "Department controls",
      "Regional settings"
    ]
  },
  {
    title: "Mobile Access",
    description: "Full-featured mobile experience allowing employees and managers to stay connected from anywhere.",
    icon: Laptop,
    highlights: [
      "Mobile app access",
      "Remote management",
      "Instant notifications"
    ]
  }
]; 