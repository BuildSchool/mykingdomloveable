import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center px-8">
      <div className="absolute inset-0 bg-kingdom-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-kingdom-primary/10 to-kingdom-secondary/10" />
      </div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')" }}
      />
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 gradient-text animate-glow">
          Empower Your Properties with the Future of AI Management
        </h1>
        <p className="text-xl mb-8 text-kingdom-text/90">
          Experience the next generation of property management with MyKingdom.ai's intelligent automation
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            className="futuristic-button glow-effect"
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-kingdom-primary/50 text-kingdom-text hover:bg-kingdom-primary/10"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};