import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrainingOverviewSection from "@/components/TrainingOverviewSection";
import GearSection from "@/components/GearSection";
import ScopeSection from "@/components/ScopeSection";

const TrainingGear = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <TrainingOverviewSection />
        <GearSection />
        <ScopeSection />
      </div>
      <Footer />
    </div>
  );
};

export default TrainingGear;
