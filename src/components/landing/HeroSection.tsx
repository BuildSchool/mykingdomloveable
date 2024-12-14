import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-8 py-16">
      <div className="absolute inset-0 bg-kingdom-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-kingdom-primary/10 to-kingdom-secondary/10" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-6xl font-bold mb-6 gradient-text animate-glow">
          Transform Your Property Management with AI
        </h1>
        <p className="text-xl mb-8 text-kingdom-text/90 max-w-3xl mx-auto">
          Experience the future of property management with our AI-powered platform. 
          Automate tasks, gain insights, and grow your portfolio effortlessly.
        </p>
        <div className="flex gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="futuristic-button glow-effect"
          >
            Join the Waitlist <ArrowRight className="ml-2" />
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

      {/* Video Section */}
      <div className="relative z-20 w-full max-w-4xl mx-auto mb-16">
        <div className="futuristic-card overflow-hidden">
          <AspectRatio ratio={16 / 9} className="bg-kingdom-dark/60">
            <div className="relative w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Property Management Demo"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full w-16 h-16 bg-kingdom-primary/20 border-kingdom-primary/50 hover:bg-kingdom-primary/30"
                >
                  <Play className="h-8 w-8 text-white" />
                </Button>
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>

      {/* Property Showcase Carousel */}
      <div className="relative z-20 w-full max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {[
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2075&q=80",
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
            ].map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="futuristic-card overflow-hidden">
                    <AspectRatio ratio={4 / 3}>
                      <img
                        src={image}
                        alt={`Property ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};