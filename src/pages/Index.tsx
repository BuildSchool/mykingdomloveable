import { HeroSection } from "@/components/landing/HeroSection";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { ExperienceFutureSection } from "@/components/landing/ExperienceFutureSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-kingdom-dark to-black">
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={() => navigate("/login")}
          className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Getting Started
        </Button>
      </div>
      <main>
        <HeroSection />
        <WhyChooseSection />
        <ExperienceFutureSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
    </div>
  );
};

export default Index;