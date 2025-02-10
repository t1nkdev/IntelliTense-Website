'use client';
import Link from "next/link";
import ShiftTable from "./demos/shift-table";

export default function Hero() {
  return (
    <div className="w-full bg-[#a100c2] min-h-[522px] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      <div className="w-full relative z-10">
        <div className="pl-10 min-[1920px]:pl-[20%]">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-white leading-tight">
              TenseFlow
              <br />
              Workforce Management
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Experience how TenseFlow combines <span className="font-semibold">AI-powered scheduling and workforce management</span> to transform your business operations.
            </p>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Smart Scheduling Made Simple</h2>
              <p className="text-lg text-white/80">Available Now | Start Free Trial</p>
            </div>
            <div className="flex gap-4">
          
              <Link 
                href="/demo"
                className="inline-block px-6 py-3 bg-black/20 hover:bg-black/30 text-white font-medium rounded-lg transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-20 min-[1920px]:right-[20%] z-20">
        <ShiftTable />
        <div className="absolute -top-10 -right-6 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute -left-8 -top-8 w-32 h-28 bg-white/5 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}