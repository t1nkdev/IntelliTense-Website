import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import PowerfulFeatures from "@/components/PowerfulFeatures";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-12">
      <TopBar />
      <Hero />
      <PowerfulFeatures />
      <Solutions />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
