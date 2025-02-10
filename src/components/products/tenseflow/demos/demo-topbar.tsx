'use client';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';

export default function DemoTopBar() {
  return (
    <div className="fixed top-0 w-full z-40">
      <div className="w-full h-14 bg-white">
        <div className="h-full max-w-[90rem] mx-auto px-4 flex items-center">
          {/* Left side - Logo and Selector */}
          <div className="flex items-center gap-6">
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
        </div>
      </div>
    </div>
  );
}
