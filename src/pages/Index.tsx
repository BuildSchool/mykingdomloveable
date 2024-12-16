import { HeroSection } from "@/components/landing/HeroSection";
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
          className="bg-kingdom-primary hover:bg-kingdom-primary/90 text-white"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Sign In
        </Button>
      </div>
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;