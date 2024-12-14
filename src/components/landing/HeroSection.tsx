import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HeroSection = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      title: "Luxury Villa",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Modern Apartment",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: "Penthouse Suite",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
      title: "Beachfront Property",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-kingdom-dark">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
            <span className="text-lg font-semibold text-kingdom-gold">
              Welcome to MyKingdom
            </span>
            <h1 className="mt-8 mb-6 text-5xl font-bold leading-tight text-white">
              AI-Powered Property Management for the Modern Era
            </h1>
            <p className="mb-8 text-xl text-kingdom-cyan/90">
              Transform your property management experience with cutting-edge AI
              technology. Streamline operations, maximize ROI, and deliver
              exceptional service to your tenants.
            </p>
            <div className="flex flex-wrap">
              <Button
                size="lg"
                className="mr-4 bg-kingdom-gold hover:bg-kingdom-gold/90"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-kingdom-cyan text-kingdom-cyan hover:bg-kingdom-cyan/10"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            {/* Video Placeholder */}
            <div className="relative mb-8 overflow-hidden rounded-lg shadow-xl">
              <AspectRatio ratio={16 / 9} className="bg-kingdom-dark/60">
                <div className="relative w-full h-full">
                  <img 
                    src="/lovable-uploads/d13ae473-1fa7-4510-8484-f4658a03a62d.png"
                    alt="Property Management Demo"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      <PlayCircle className="w-16 h-16" />
                    </Button>
                  </div>
                </div>
              </AspectRatio>
            </div>

            {/* Property Carousel */}
            <Carousel className="w-full">
              <CarouselContent>
                {properties.map((property) => (
                  <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                        />
                      </AspectRatio>
                      <h3 className="mt-2 text-sm font-medium text-white">
                        {property.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};