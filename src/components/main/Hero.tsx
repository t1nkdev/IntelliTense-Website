'use client';
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-[#0A1657] min-h-[600px] flex items-center">
      <div className="max-w-[90rem] mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Streamline everything.
            <br />
            Manage effortlessly.
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Experience how TenseFlow combines <span className="font-semibold">AI-powered scheduling and workforce management</span> to transform your business operations. Plus, get ready for TenseCloud ERP, coming soon.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">TenseFlow Shift Management</h2>
            <p className="text-lg text-gray-300">Available Now | TenseCloud ERP Coming 2025</p>
          </div>
          <Link 
            href="/tenseflow"
            className="inline-block px-6 py-3 bg-[#0070F2] hover:bg-[#0060D1] text-white font-medium rounded-lg transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
} 