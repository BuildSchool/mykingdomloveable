import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-kingdom-primary/90 to-kingdom-secondary/90 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')" }}
      />
      <div className="relative z-20 max-w-4xl mx-auto text-white">
        <h1 className="text-5xl font-bold mb-6">
          Transforming Property Management with AI
        </h1>
        <p className="text-xl mb-8 text-white/90">
          Simplify, Optimize, and Scale Your Property Investments with Intelligent Automation
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-white text-kingdom-primary hover:bg-white/90">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};