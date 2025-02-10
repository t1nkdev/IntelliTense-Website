export default function ERPFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Enterprise-Grade ERP Solution
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive tools to manage your entire business operation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Financial Management</h3>
            <p className="text-gray-600">Complete financial control with advanced accounting and reporting tools.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Supply Chain</h3>
            <p className="text-gray-600">End-to-end supply chain visibility and management capabilities.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
            <p className="text-gray-600">Streamline production processes and optimize resource allocation.</p>
          </div>
          
          {/* Add more feature cards as needed */}
        </div>
      </div>
    </section>
  );
} 