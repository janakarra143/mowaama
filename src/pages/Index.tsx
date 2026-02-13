import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopulusSection from "@/components/PopulusSection";
import GoalsSection from "@/components/GoalsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PopulusSection />
      <GoalsSection />
      <Footer />
    </div>
  );
};

export default Index;
