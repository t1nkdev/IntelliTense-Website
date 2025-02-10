export default function MESFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advanced Manufacturing Control
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive tools for modern manufacturing operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Production Tracking</h3>
            <p className="text-gray-600">Real-time monitoring of production processes and equipment status.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
            <p className="text-gray-600">Integrated quality management and defect tracking system.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
            <p className="text-gray-600">Advanced metrics and KPIs for manufacturing optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 