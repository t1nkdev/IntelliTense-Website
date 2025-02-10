'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { Search, User, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-40">
      {/* Single Navbar */}
      <div className={`w-full h-14 bg-white border-b border-gray-200 transition-all duration-300`}>
        <div className="h-full max-w-[90rem] mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#0066B3] clip-path-polygon" />
                <span className="relative text-[1.35rem] font-bold tracking-tight text-white px-3 py-1">
                  IT
                </span>
              </div>
              <span className="text-[1.35rem] font-bold tracking-tight text-[#0066B3]">
                IntelliTense
              </span>
            </motion.div>
          </Link>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-[#0066B3] transition-colors">
                Products
              </Link>
              <Link href="/support" className="text-sm font-medium text-gray-700 hover:text-[#0066B3] transition-colors">
                Support
              </Link>
              <Link href="/learning" className="text-sm font-medium text-gray-700 hover:text-[#0066B3] transition-colors">
                Learning
              </Link>
              <Link href="/community" className="text-sm font-medium text-gray-700 hover:text-[#0066B3] transition-colors">
                Community
              </Link>
              <Link href="/partners" className="text-sm font-medium text-gray-700 hover:text-[#0066B3] transition-colors">
                Partners
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#0066B3] transition-colors">
                About
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-gray-900">
                <Search className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5 border border-gray-200">
                <Link href="/login" className="text-xs text-gray-600 hover:text-gray-900 px-2">
                  Log in
                </Link>
                <div className="w-px h-4 bg-gray-300"></div>
                <LanguageSelector scrolled={scrolled} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}