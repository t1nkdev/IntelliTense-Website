'use client';
import Link from "next/link";

export default function Solutions() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Solutions built for you</h2>
          <Link href="/products" className="text-[#0070F2] text-sm hover:underline">
            View products A-Z
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ERP Solution */}
          <div className="p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Enterprise Resource Planning</h3>
            <p className="text-gray-600 mb-4">
              TenseCloud S/4HANA Cloud is complete, modular, and award-winning ERP. Embedded with AI and analytics, it can help your business run anywhere, in real time.
            </p>
            <Link href="/erp" className="text-[#0070F2] hover:underline">
              Get started with S/4HANA Cloud →
            </Link>
          </div>

          {/* CRM Solution */}
          <div className="p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">CRM and Customer Experience</h3>
            <p className="text-gray-600 mb-4">
              With our CX solutions, you can connect e-commerce, marketing, sales, and service data – and use AI to personalize the customer experience at every touchpoint.
            </p>
            <Link href="/crm" className="text-[#0070F2] hover:underline">
              Explore CRM and CX solutions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 