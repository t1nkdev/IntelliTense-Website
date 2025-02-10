import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Hero from "@/components/products/tenseflow/Hero";
import { Calendar, Clock, Users, BarChart3, Building2, Laptop } from 'lucide-react';

export default function TenseFlowPage() {
  return (
    <main className="min-h-screen bg-white pt-12">
      <TopBar />
      <Hero />

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#0A1657]">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your workforce efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl border border-gray-200 hover:border-[#0066B3] hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#0066B3]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#0A1657]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#0A1657]">Why Choose TenseFlow?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#0066B3]"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#0A1657]">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#0A1657]">Ready to get started?</h3>
              <p className="text-gray-600 mb-8">
                Start your free trial today or schedule a demo with our team.
              </p>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-[#0070F2] hover:bg-[#0060D1] text-white font-medium rounded-lg transition-colors">
                  Start Free Trial
                </button>
                <button className="w-full px-6 py-3 bg-white border border-gray-200 hover:border-[#0066B3] text-gray-700 font-medium rounded-lg transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const features = [
  {
    title: "Smart Scheduling",
    description: "AI-powered scheduling that automatically creates optimal shift patterns while considering employee preferences and business needs.",
    icon: Calendar
  },
  {
    title: "Time Tracking",
    description: "Comprehensive time tracking with mobile check-in/out, break management, and overtime monitoring in real-time.",
    icon: Clock
  },
  {
    title: "Team Management",
    description: "Complete workforce management with detailed employee profiles and team organization tools.",
    icon: Users
  },
  {
    title: "Analytics Dashboard",
    description: "Advanced reporting with customizable dashboards showing labor costs, attendance patterns, and productivity metrics.",
    icon: BarChart3
  },
  {
    title: "Multi-location",
    description: "Manage multiple locations and departments from a single platform with location-specific settings.",
    icon: Building2
  },
  {
    title: "Mobile Access",
    description: "Access schedules, request time off, and manage shifts from anywhere with our mobile-friendly interface.",
    icon: Laptop
  }
];

const benefits = [
  {
    title: "Reduce Labor Costs",
    description: "Optimize scheduling and reduce overtime with AI-powered workforce management."
  },
  {
    title: "Improve Employee Satisfaction",
    description: "Give employees more control over their schedules and easier access to information."
  },
  {
    title: "Increase Productivity",
    description: "Streamline operations and automate routine tasks to boost overall efficiency."
  },
  {
    title: "Ensure Compliance",
    description: "Stay compliant with labor laws and regulations with built-in rule enforcement."
  }
];
