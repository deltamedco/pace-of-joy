import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyTrainSection from "@/components/WhyTrainSection";
import TrainingOverviewSection from "@/components/TrainingOverviewSection";
import GearSection from "@/components/GearSection";
import ScopeSection from "@/components/ScopeSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyTrainSection />
      <TrainingOverviewSection />
      <GearSection />
      <ScopeSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
