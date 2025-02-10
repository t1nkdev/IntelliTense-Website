'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';  
import * as Tooltip from '@radix-ui/react-tooltip';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full transition-all duration-300 fixed top-8 z-30 ${
        scrolled 
          ? 'bg-white shadow-md'
          : 'bg-black/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo Section */}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <DropdownMenu.Root>
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <DropdownMenu.Trigger className="flex items-center gap-1 text-white/80 hover:text-white text-sm">
                    Features
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenu.Trigger>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-black/90 text-white text-xs px-2 py-1 rounded">
                    Explore Features
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="bg-black/95 border border-white/10 rounded-lg p-2 min-w-[200px] mt-2">
                <DropdownMenu.Item className="text-white/80 hover:text-white text-sm px-4 py-2 cursor-pointer outline-none">
                  Feature 1
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-white/80 hover:text-white text-sm px-4 py-2 cursor-pointer outline-none">
                  Feature 2
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <Link href="/solutions" className={`text-sm transition-colors ${
            scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
          }`}>
            Solutions
          </Link>
          <Link href="/pricing" className={`text-sm transition-colors ${
            scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
          }`}>
            Pricing
          </Link>
          <Link href="/resources" className={`text-sm transition-colors ${
            scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
          }`}>
            Resources
          </Link>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Link 
              href="/contact"
              className="px-4 py-2 bg-[#FFB800] hover:bg-[#FFA800] text-black text-sm font-medium rounded"
            >
              TALK TO US
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Link 
              href="/demo"
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                scrolled 
                  ? 'border border-gray-200 text-gray-900 hover:bg-gray-50'
                  : 'border border-white/20 text-white hover:bg-white/5'
              }`}
            >
              SEE A DEMO
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}