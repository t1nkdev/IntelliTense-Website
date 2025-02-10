'use client';
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-[#a100c2] min-h-[500px] flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      

      <div className="max-w-[90rem] mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            TenseFlow
            <br />
            Workforce Management

          </h1>
          <p className="text-xl text-white/90 mb-6">
            Experience how TenseFlow combines <span className="font-semibold">AI-powered scheduling and workforce management</span> to transform your business operations.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Smart Scheduling Made Simple</h2>
            <p className="text-lg text-white/80">Available Now | Start Free Trial</p>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/trial"
              className="inline-block px-6 py-3 bg-white text-[#6B2C91] hover:bg-white/90 font-medium rounded-lg transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/demo"
              className="inline-block px-6 py-3 bg-black/20 hover:bg-black/30 text-white font-medium rounded-lg transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 