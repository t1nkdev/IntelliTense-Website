'use client';
import Link from "next/link";

export default function ERPHero() {
  return (
    <div className="w-full bg-[#07838f] min-h-[522px] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      <div className="w-full relative z-10">
        <div className="pl-10 min-[1920px]:pl-[20%]">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-white leading-tight">
              TenseCloud
              <br />
              Enterprise Resource Planning
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Transform your business with our comprehensive <span className="font-semibold">cloud-based ERP solution</span>. Streamline operations, enhance productivity, and drive growth.
            </p>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Complete Business Management</h2>
              <p className="text-lg text-white/80">Coming Soon | Join Waitlist</p>
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