'use client';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Search, Globe } from 'lucide-react';

export default function DemoTopBar() {
  return (
    <div className="fixed top-0 w-full z-40">
      <div className="w-full h-14 bg-white">
        <div className="h-full max-w-[1920px] min-[2000px]:max-w-[2400px] mx-auto px-4 lg:px-8 2xl:px-16 flex items-center justify-between">
          {/* Left side - Logo and Selector */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center gap-2"
              >
                <Image 
                  src="/icons/flow.png"
                  alt="Flow Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-[1.35rem] font-bold tracking-tight text-[#0066B3]">
                  TenseFlow
                </span>
              </motion.div>
            </Link>

            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-sm font-semibold text-gray-600 hover:text-[#0066B3] transition-colors">Main</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-2xl px-8 2xl:px-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text"
                placeholder="Search anything..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>

          {/* Right side - User Profile & Language */}
          <div className="flex items-center gap-8">
            {/* Language Selector */}
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">EN</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-gray-900">John Smith</span>
                <span className="text-xs text-gray-500">Administrator</span>
              </div>
              <button className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium group-hover:ring-2 ring-blue-100 transition-all">
                  JS
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
