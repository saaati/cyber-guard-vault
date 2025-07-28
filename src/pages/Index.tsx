import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HighlightSection from "@/components/HighlightSection";
import BlogSection from "@/components/BlogSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-bg">
      <HeroSection />
      <ServicesSection />
      <HighlightSection />
      <BlogSection />
      <GuaranteesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
