'use client';
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function Solutions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-[#0A1657]">Solutions for every business need</h2>
          <Link href="/products" className="text-[#0066B3] text-sm hover:underline flex items-center gap-1 font-medium">
            View all solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TenseFlow */}
          <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#0A1657]">TenseFlow</h3>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Available Now</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transform your workforce management with our intelligent shift scheduling system. TenseFlow combines AI-powered optimization with intuitive interfaces to streamline your staff management processes. Perfect for businesses of all sizes, from small teams to enterprise organizations.
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                Smart shift scheduling with AI optimization
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                Real-time attendance tracking & reporting
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                Employee mobile app for easy access
              </li>
            </ul>
            <Link href="/tenseflow" className="text-[#0066B3] hover:underline inline-flex items-center gap-1 font-medium">
              Explore TenseFlow <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* TenseCloud ERP */}
          <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#0A1657]">TenseCloud ERP</h3>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Coming Soon</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our upcoming comprehensive enterprise resource planning solution will revolutionize how businesses manage their operations. TenseCloud ERP seamlessly integrates with TenseFlow and brings powerful new capabilities to your organization.
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                Full integration with TenseFlow
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                Advanced analytics and reporting
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                Cloud-based deployment for scalability
              </li>
            </ul>
            <Link href="/early-access" className="text-[#0066B3] hover:underline inline-flex items-center gap-1 font-medium">
              Join waitlist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 