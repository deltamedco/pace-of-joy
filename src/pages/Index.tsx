import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyTrainSection from "@/components/WhyTrainSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyTrainSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
