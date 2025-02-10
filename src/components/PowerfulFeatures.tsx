'use client';
import { motion } from 'framer-motion';
import { Database, Calendar, Cloud } from 'lucide-react';

export default function PowerfulFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600">
            Everything you need to manage your business operations efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Database Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-gray-200 hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p className="text-gray-600">
              Efficient data handling and storage solutions for your enterprise
            </p>
          </motion.div>

          {/* Calendar Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-gray-200 hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scheduling System</h3>
            <p className="text-gray-600">
              Advanced scheduling and shift management capabilities
            </p>
          </motion.div>

          {/* Cloud Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-gray-200 hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
              <Cloud className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
            <p className="text-gray-600">
              Seamless cloud connectivity and data synchronization
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 