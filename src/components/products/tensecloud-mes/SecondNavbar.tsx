'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function SecondNavbar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Overview',
      href: '/products/tenseflow'
    },
    {
      name: 'Features',
      href: '/products/tenseflow/features'
    },
    {
      name: 'Analytics',
      href: '/products/tenseflow/analytics'
    },
    {
      name: 'Integrations',
      href: '/products/tenseflow/integrations'
    },
    {
      name: 'Pricing',
      href: '/products/tenseflow/pricing'
    }
  ];

  return (
    <div className="w-full h-16 bg-white">
      <div className="h-full max-w-[70rem] mx-auto px-4 pt-1">
        <nav className="h-full flex items-center">
          <span className="text-[15px] font-bold text-black -ml-32 mr-6">Manufacturing Execution System (MES)</span>
          <Image src="/icons/3arrows.png" alt="Flow Icon" width={20} height={20} className="inline-block -ml-4 mr-4"/>
          <span className="text-xl font-light text-black -ml-22 mr-6">|</span>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link   
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href
                      ? 'text-[#6B2C91]'
                      : 'text-gray-600 hover:text-[#6B2C91]'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

        </nav>
      </div>
    </div>
  );
}
