import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-12">
      <TopBar />
      <Hero />
      <Solutions />
    </main>
  );
}
