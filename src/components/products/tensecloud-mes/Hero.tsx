'use client';
import Link from "next/link";

export default function MESHero() {
  return (
    <div className="w-full bg-[#ffc933] min-h-[522px] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      <div className="w-full relative z-10">
        <div className="pl-10 min-[1920px]:pl-[20%]">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-black leading-tight mb-2">
              TenseCloud
              <br />
              Manufacturing Execution System
            </h1>
            <p className="text-xl text-black/90 mb-6">
              Optimize your manufacturing processes with our <span className="font-semibold">intelligent MES solution</span>. Monitor, control, and improve production efficiency in real-time.
            </p>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">Smart Manufacturing Control</h2>
              <p className="text-lg text-black/80">Coming Soon | Join Waitlist</p>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/waitlist"
                className="inline-block px-6 py-3 bg-black/20 hover:bg-black/30 text-white font-medium rounded-lg transition-colors"
              >
                Join Waitlist
              </Link>
              <Link 
                href="/demo"
                className="inline-block px-6 py-3 bg-black/20 hover:bg-black/30 text-white font-medium rounded-lg transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 