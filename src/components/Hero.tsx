'use client';
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-[#0A1657] min-h-[600px] flex items-center">
      <div className="max-w-[90rem] mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Connect everything.
            <br />
            Achieve anything.
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Join our 60-minute virtual event to discover how TenseCloud combines <span className="font-semibold">AI, data, and applications</span> like never before to unleash your full potential and make you unstoppable.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">TenseCloud Business Unleashed</h2>
            <p className="text-lg text-gray-300">Virtual Event | Feb 13, 2025</p>
          </div>
          <Link 
            href="/learn-more"
            className="inline-block px-6 py-3 bg-[#0070F2] hover:bg-[#0060D1] text-white font-medium rounded-lg transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
} 