import TopBar from "@/components/main/TopBar";
import Hero from "@/components/main/Hero";
import PowerfulFeatures from "@/components/main/PowerfulFeatures";
import Solutions from "@/components/main/Solutions";
import Testimonials from "@/components/main/Testimonials";
import ContactCTA from "@/components/main/ContactCTA";
import Footer from "@/components/main/Footer";

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
