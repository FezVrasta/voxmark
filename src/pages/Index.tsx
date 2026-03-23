import HeroSection from "@/components/HeroSection";
import FeatureSections from "@/components/FeatureSections";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSections />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
