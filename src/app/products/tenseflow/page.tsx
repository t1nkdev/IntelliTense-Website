import TopBar from "@/components/main/TopBar";
import Footer from "@/components/main/Footer";
import Hero from "@/components/products/tenseflow/Hero";
import NewsFlow from "@/components/products/tenseflow/NewsFlow";
import { Building2, Users, ChartBar, Clock, Shield, Zap } from 'lucide-react';

export default function TenseFlowPage() {
  return (
    <main className="min-h-screen bg-white pt-12">
      <TopBar />
      <Hero />
      <NewsFlow />

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#0A1657]">Transform Your Workforce Management</h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="max-w-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#0A1657]">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
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

const useCases = [
  {
    title: "Enterprise Workforce Planning",
    description: "Large organizations use TenseFlow to manage complex shift patterns across multiple locations while maintaining compliance and efficiency. Our platform enables seamless coordination between different departments and ensures optimal resource allocation across the entire organization.",
    tags: ["Multi-location", "Compliance", "Enterprise", "Scheduling"]
  },
  {
    title: "Healthcare Staff Management",
    description: "Hospitals and clinics optimize staff schedules while ensuring proper coverage for all departments and specialties. The system takes into account specific certifications, skill sets, and regulatory requirements to maintain the highest standards of patient care.",
    tags: ["Healthcare", "24/7 Coverage", "Skills Management"]
  },
  {
    title: "Retail Operations",
    description: "Retail chains use predictive analytics to align staffing levels with customer demand and seasonal variations.",
    icon: ChartBar,
    tags: ["Retail", "Analytics", "Demand Planning"]
  },
  {
    title: "Manufacturing Shifts",
    description: "Factories maintain optimal production levels by efficiently managing worker shifts and machine operations schedules.",
    icon: Clock,
    tags: ["Manufacturing", "Production", "Shift Planning"]
  },
  {
    title: "Security Services",
    description: "Security companies ensure round-the-clock coverage while managing guard rotations and emergency response teams.",
    icon: Shield,
    tags: ["Security", "24/7 Operations", "Team Rotation"]
  },
  {
    title: "Quick Service Restaurants",
    description: "Restaurant chains optimize staff schedules based on peak hours and real-time demand forecasting.",
    icon: Zap,
    tags: ["Restaurants", "Peak Management", "Forecasting"]
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
