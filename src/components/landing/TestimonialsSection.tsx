import { Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "MyKingdom.ai has transformed how I manage my properties. The AI insights have helped me reduce costs and increase tenant satisfaction.",
    name: "Rajesh Patel",
    role: "Property Investor, Mumbai"
  },
  {
    quote: "Managing properties across different countries was a nightmare until I found MyKingdom.ai. Now it's all seamlessly integrated.",
    name: "Sarah Thompson",
    role: "International Property Manager"
  },
  {
    quote: "The AI-powered maintenance predictions have saved us thousands in preventive repairs. This platform is a game-changer.",
    name: "Michael Chen",
    role: "Real Estate Developer, Singapore"
  },
  {
    quote: "As a property manager handling multiple luxury properties, MyKingdom.ai has streamlined our operations significantly.",
    name: "Isabella Martinez",
    role: "Luxury Property Manager, Madrid"
  },
  {
    quote: "The automated tenant screening and AI insights have made our property management process much more efficient.",
    name: "David Anderson",
    role: "Property Management CEO, Sydney"
  }
];

export const TestimonialsSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
        Trusted by Property Managers Worldwide
      </h2>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/1 lg:basis-1/1">
              <Card className="futuristic-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-lg text-kingdom-text italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-kingdom-text">{testimonial.name}</p>
                        <p className="text-sm text-kingdom-muted">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 mt-8">
          <CarouselPrevious className="relative static" />
          <CarouselNext className="relative static" />
        </div>
      </Carousel>

      {/* Trust Indicators */}
      <div className="mt-12 glass-card p-6 rounded-xl">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-kingdom-accent" />
            ))}
          </div>
          <p className="text-xl font-semibold text-kingdom-text">4.9 out of 5</p>
          <p className="text-sm text-kingdom-muted">Based on 1,000+ reviews</p>
        </div>
      </div>
    </div>
  );
};

// Add Star icon import at the top
import { Star } from "lucide-react";