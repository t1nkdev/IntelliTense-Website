import Link from "next/link";

export default function SolutionsSidebar() {
  return (
    <div className="w-[400px] min-h-screen bg-[#f8fafc] border-l border-gray-100">
      <div className="p-10 h-full flex flex-col">
        {/* Header */}
        <div className="mb-10">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Solutions
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 mt-3">
            Choose your platform
          </h2>
        </div>
        
        <div className="space-y-6 flex-1">
          {/* Tense Flow Option */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <Link 
              href="/tense-flow"
              className="relative block p-6 bg-white rounded-2xl hover:bg-gray-50/80 transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">Tense Flow</h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600">
                      Workforce
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Shift Management System</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 max-w-[80%]">
                  AI-powered workforce optimization and scheduling
                </p>
                <svg className="w-5 h-5 text-indigo-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Tense Cloud Option */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <Link 
              href="/tense-cloud"
              className="relative block p-6 bg-white rounded-2xl hover:bg-gray-50/80 transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">Tense Cloud</h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-violet-50 text-violet-600">
                      ERP/MES
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Manufacturing Platform</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 max-w-[80%]">
                  Complete manufacturing solution with real-time insights
                </p>
                <svg className="w-5 h-5 text-violet-600 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>© 2024 IntelliTense</span>
            <Link href="/contact" className="text-indigo-600 hover:text-indigo-700">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 