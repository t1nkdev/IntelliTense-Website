'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'Microsoft Teams',
    logo: '/icons/icons8-microsoft-teams-48.png',
  },
  {
    name: 'ADP',
    logo: '/icons/adp.png',
  },
  {
    name: 'Microsoft Excel',
    logo: '/icons/excel.png',
  },

 
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#0A1657]">Trusted Integrations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seamlessly connect TenseFlow with your favorite enterprise tools
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index}
                className="flex-none w-[150px] mx-6 opacity-80 hover:opacity-100 transition-all"
              >
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 