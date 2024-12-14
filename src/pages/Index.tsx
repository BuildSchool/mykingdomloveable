import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { CoreFeaturesSection } from "@/components/landing/CoreFeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { TargetMarketSection } from "@/components/landing/TargetMarketSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-kingdom-dark">
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={() => navigate("/login")}
          className="futuristic-button glow-effect"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Sign In
        </Button>
      </div>
      <main>
        <HeroSection />
        <ProblemSection />
        <CoreFeaturesSection />
        <TestimonialsSection />
        <TargetMarketSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;