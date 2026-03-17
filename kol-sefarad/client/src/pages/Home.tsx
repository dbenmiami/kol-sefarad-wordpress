/**
 * Kol Sefarad — Home Page
 * Design: Modern Jerusalem — dark premium, gold accents, photography-forward
 * Assembles all sections: Hero → About → Program → Why → Pricing → Contact → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.12 0.03 260)" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <WhySection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
