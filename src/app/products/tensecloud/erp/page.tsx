import TopBar from "@/components/main/TopBar";
import Footer from "@/components/main/Footer";
import ContactCTA from "@/components/main/ContactCTA";
import ERPHero from "@/components/products/tensecloud-erp/Hero";
import ERPFeatures from "@/components/products/tensecloud-erp/Features";
import SecondNavbar from "@/components/products/tensecloud-erp/SecondNavbar";

export default function TenseCloudERPPage() {
  return (
    <main className="min-h-screen bg-white pt-12">
      <TopBar />
      <SecondNavbar />
      <ERPHero />
      <ERPFeatures />
      <ContactCTA />
      <Footer />
    </main>
  )
}