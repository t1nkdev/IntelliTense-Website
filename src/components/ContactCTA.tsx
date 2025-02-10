'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-[#0A1657]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to transform your workforce management?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with TenseFlow today or join the waitlist for TenseCloud ERP
            </p>
            <div className="flex gap-4">
              <Link 
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0070F2] hover:bg-[#0060D1] text-white font-medium rounded-lg transition-colors"
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-white">
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-medium">Email Us</p>
                <p className="text-gray-300">sales@tenseflow.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 