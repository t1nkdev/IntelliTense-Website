'use client';
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function NewsNavBar() {
  return (
    <div className="w-full bg-[#0066B3] text-white">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Left side - Latest News */}
          <div className="flex items-center gap-8">
            <span className="text-sm font-medium">Latest Updates</span>
            <div className="flex items-center gap-6">
              <Link href="/news/cloud-erp" className="text-sm text-white/90 hover:text-white">
                First release of TenseFlow v1.1 is here! 
              </Link>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <Link href="/news/partnership" className="text-sm text-white/90 hover:text-white">
                TenseCloud ERP is currently not available! You can join the waitlist to get notified when it's ready.
              </Link>
            </div>
          </div>

          {/* Right side - View All */}
          <Link 
            href="/news" 
            className="flex items-center gap-1 text-sm text-white/90 hover:text-white group"
          >
            View all news 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
} 