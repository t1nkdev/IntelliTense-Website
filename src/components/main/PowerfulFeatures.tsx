'use client';
import { motion } from 'framer-motion';

export default function PowerfulFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-[#0A1657]">
          Powerful Features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="max-w-xl">
              <h3 className="text-xl font-semibold mb-3 text-[#0A1657]">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((highlight, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-sm">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Smart Scheduling",
    description: "AI-powered scheduling that automatically creates optimal shift patterns while considering employee preferences and business needs. Our advanced algorithms analyze historical data and real-time requirements to generate the most efficient schedules.",
    highlights: [
      "Automated schedule generation",
      "Employee preference matching",
      "Conflict resolution"
    ]
  },
  {
    title: "Time Management",
    description: "Comprehensive time tracking system with real-time monitoring and automated attendance management.",
    highlights: [
      "Mobile check-in/out",
      "Break management",
      "Overtime tracking"
    ]
  },
  {
    title: "Team Management",
    description: "Complete workforce management solution with detailed employee profiles and team organization tools.",
    highlights: [
      "Skill tracking",
      "Performance monitoring",
      "Team analytics"
    ]
  },
  {
    title: "Analytics Dashboard",
    description: "Advanced reporting tools with customizable dashboards providing deep insights into your workforce operations.",
    highlights: [
      "Real-time metrics",
      "Custom reports",
      "Trend analysis"
    ]
  },
  {
    title: "Multi-location Support",
    description: "Manage multiple locations and departments from a single platform with location-specific settings.",
    highlights: [
      "Location management",
      "Department controls",
      "Regional settings"
    ]
  },
  {
    title: "Mobile Access",
    description: "Full-featured mobile experience allowing employees and managers to stay connected from anywhere.",
    highlights: [
      "Mobile app access",
      "Remote management",
      "Instant notifications"
    ]
  }
]; 