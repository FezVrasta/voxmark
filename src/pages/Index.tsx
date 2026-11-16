import HeroSection from "@/components/HeroSection";
import FeatureSections from "@/components/FeatureSections";
import CtaSection from "@/components/CtaSection";
import PlatformSwitch from "@/components/PlatformSwitch";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformSwitch />
      <HeroSection />
      <FeatureSections />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
