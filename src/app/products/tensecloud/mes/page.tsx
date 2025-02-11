import TopBar from "@/components/main/TopBar";
import Footer from "@/components/main/Footer";
import ContactCTA from "@/components/main/ContactCTA";
import MESHero from "@/components/products/tensecloud-mes/Hero";
import MESFeatures from "@/components/products/tensecloud-mes/Features";
import MESDashboard from "@/components/products/tensecloud-mes/demos/dashboard";
import SecondNavbar from "@/components/products/tensecloud-mes/SecondNavbar";

export default function TenseCloudMESPage() {
  return (
    <main className="min-h-screen bg-white pt-12">
      <TopBar />
      <SecondNavbar />
      <MESHero />
      
      {/* Dashboard Demo Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1920px] min-[2000px]:max-w-[2400px] mx-auto px-4 lg:px-8 2xl:px-16">
          <div className="grid lg:grid-cols-4 gap-24 min-[1920px]:gap-32 items-center">
            {/* Left side - Text Content */}
            <div className="space-y-8 min-[1920px]:pl-32">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Real-time Production Monitoring
              </h2>
              <p className="text-lg text-gray-600">
                Track manufacturing processes, monitor equipment performance, and optimize production efficiency in real-time.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-red-500"></div>
                <span className="text-sm text-gray-500">Live Preview</span>
              </div>
            </div>

            {/* Right side - Dashboard Demo */}
            <div className="lg:col-span-3">
              <MESDashboard />
            </div>
          </div>
        </div>
      </section>

      <MESFeatures />
      <ContactCTA />
      <Footer />
    </main>
  )
}
