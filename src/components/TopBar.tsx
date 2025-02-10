'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { Search, User, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

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
      {/* Top Secondary Navbar */}
      <div className="w-full h-12 bg-white/95 backdrop-blur-sm">
        <div className="h-full max-w-[90rem] mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group pt-10">
            <motion.span 
              whileHover={{ x: 2 }}
              className={`text-2xl font-bold tracking-tight text-white bg-blue-500 px-4 py-2 rounded-md shadow-md`}
            >
              IntelliTense
            </motion.span>
          </Link>
          <div className="flex items-center justify-end gap-6">
            <Link href="/login" className="text-xs text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <button className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              English
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full h-12 bg-white border-b border-gray-200 transition-all duration-300`}>
        <div className="h-full max-w-[90rem] mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            {/* Completely empty - no text */}
          </Link>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link href="/products" className="text-sm text-gray-700 hover:text-gray-900">
                Products
              </Link>
              <Link href="/support" className="text-sm text-gray-700 hover:text-gray-900">
                Support
              </Link>
              <Link href="/learning" className="text-sm text-gray-700 hover:text-gray-900">
                Learning
              </Link>
              <Link href="/community" className="text-sm text-gray-700 hover:text-gray-900">
                Community
              </Link>
              <Link href="/partners" className="text-sm text-gray-700 hover:text-gray-900">
                Partners
              </Link>
              <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900">
                About
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-gray-900">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}