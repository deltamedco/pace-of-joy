import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyTrainSection from "@/components/WhyTrainSection";
import ArynPhilosophySection from "@/components/ArynPhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ArynPhilosophySection />
      <WhyTrainSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
