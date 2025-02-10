'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { Search, User, Globe, ChevronDown, BarChart, Users, Clock, Shield, Zap, Server, Building2, Cpu, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import Image from 'next/image';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsOpen && !(event.target as Element).closest('.products-menu')) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [productsOpen]);

  const products = {
    tenseCloud: {
      title: "TenseCloud",
      items: [
        {
          name: 'Enterprise Resource Planning (ERP)',
          href: '/products/tensecloud/erp',
          
        },
        {
          name: 'Manufacturing Execution System (MES)',
          href: '/products/tensecloud/mes',
          
        },
        {
          name: 'Quality Management System (QMS)',
          href: '/products/tensecloud/qms',
          
        },
        {
          name: 'Supply Chain Management (SCM)',
          href: '/products/tensecloud/scm',
          
        },
        {
          name: 'Customer Relationship Management (CRM)',
          href: '/products/tensecloud/crm',
          
        },
      ]
    },
    tenseFlow: {
      title: "TenseFlow",
      items: [
        {
          name: 'Workforce Shift Management (WFM)',
          href: '/products/tenseflow'
        },
        {
          name: 'Workforce Analytics',
          href: '/products/tenseflow/analytics'
        },
        {
          name: 'Leave Management',
          href: '/products/tenseflow/planning'
        },
        {
          name: 'Department Control', 
          href: '/products/tenseflow/departments'
        }
      ]
    }
  };

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
              <span className="text-[1.35rem] font-bold tracking-tight text-[#0066B3] flex items-center">
                IntelliTense
                {pathname === '/products/tenseflow' && (
                  <>
                    <span className="font-light text-gray-400 mx-2">|</span>
                    <span className="font-bold text-black flex items-center gap-1">
                      TenseFlow
                      <Image 
                        src="/icons/flow.png" 
                        alt="Flow Icon" 
                        width={20} 
                        height={20} 
                        className="inline-block"
                      />
                    </span>
                  </>
                )}
                {pathname.includes('/products/tensecloud') && (
                  <>
                    <span className="font-light text-gray-400 mx-2">|</span>
                    <span className="font-bold text-black flex items-center gap-1">
                      TenseCloud
                      <span className="text-black font-light">
                        {pathname === '/products/tensecloud/mes' ? 'MES' : 'ERP'}
                      </span>
                      <Image 
                        src="/icons/3arrows.png" 
                        alt="Cloud Icon" 
                        width={20} 
                        height={20} 
                        className="inline-block"
                      />
                    </span>
                  </>
                )}
              </span>
            </motion.div>
          </Link>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <div className="relative products-menu group">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#0066B3] py-4 transition-colors"
                >
                  Products
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {productsOpen && (
                  <div className="absolute top-full left-0 w-[280px] bg-white shadow-lg border-t border-gray-200">
                    <div className="py-2">
                      {/* TenseCloud Section */}
                      <div className="px-4 py-2">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {products.tenseCloud.title}
                        </h3>
                        {products.tenseCloud.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 hover:text-[#0066B3]"
                            onClick={() => setProductsOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="border-t border-gray-100 my-2"></div>

                      {/* TenseFlow Section */}
                      <div className="px-4 py-2">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {products.tenseFlow.title}
                        </h3>
                        {products.tenseFlow.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 hover:text-[#0066B3]"
                            onClick={() => setProductsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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