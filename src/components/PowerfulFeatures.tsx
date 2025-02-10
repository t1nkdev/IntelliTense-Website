'use client';
import { motion } from 'framer-motion';
import { Users, BarChart3, Workflow, Brain, Calendar, Clock, Building2, Laptop } from 'lucide-react';

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
          <h2 className="text-4xl font-bold mb-4 text-[#0A1657]">Intelligent Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive workforce management and enterprise solutions powered by cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Smart Scheduling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-[#0066B3]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#0A1657]">Smart Scheduling</h3>
            <p className="text-gray-600 leading-relaxed">
              TenseFlow's AI-driven scheduling automatically creates optimal shift patterns, considering employee preferences, skills, and availability.
            </p>
          </motion.div>

          {/* Time Tracking */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#0066B3]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#0A1657]">Time Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Accurate attendance tracking with mobile check-in/out, break management, and overtime monitoring in real-time.
            </p>
          </motion.div>

          {/* Team Management */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#0066B3]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#0A1657]">Team Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive employee profiles, skill tracking, and team organization tools for better workforce management.
            </p>
          </motion.div>

          {/* Analytics Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-[#0066B3]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#0A1657]">Analytics Dashboard</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced reporting with customizable dashboards showing labor costs, attendance patterns, and productivity metrics.
            </p>
          </motion.div>

          {/* Multi-location Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-[#0066B3]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#0A1657]">Multi-location Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Manage multiple locations, departments, and teams from a single platform with location-specific settings and rules.
            </p>
          </motion.div>

          {/* Mobile Access */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <Laptop className="w-6 h-6 text-[#0066B3]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#0A1657]">Mobile Access</h3>
            <p className="text-gray-600 leading-relaxed">
              Access schedules, request time off, and manage shifts from anywhere with our mobile-friendly interface.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 