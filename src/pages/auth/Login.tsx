import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: "MyKingdom revolutionized how we manage properties. The AI insights are incredible!",
    author: "Sarah Chen",
    role: "Property Manager",
    rating: 5
  },
  {
    text: "The automated maintenance scheduling has saved us countless hours.",
    author: "Michael Roberts",
    role: "Real Estate Investor",
    rating: 5
  },
  {
    text: "Best property management platform I've ever used. Worth every penny!",
    author: "David Thompson",
    role: "Portfolio Manager",
    rating: 5
  }
];

export default function Login() {
  const navigate = useNavigate();
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/home");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 bg-gradient-dark relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-kingdom-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-kingdom-secondary/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-md space-y-8 relative z-10">
          <div className="glass-card p-8 rounded-xl shadow-xl backdrop-blur-lg border border-kingdom-primary/20">
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#4E9FFF',
                      brandAccent: '#1CE5E5',
                      brandButtonText: 'white',
                      defaultButtonBackground: '#1B1F3B',
                      defaultButtonBackgroundHover: '#2A2F4C',
                    },
                  },
                },
                className: {
                  container: 'space-y-6',
                  button: 'w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-gradient-primary relative overflow-hidden after:absolute after:inset-0 after:z-10 after:bg-gradient-to-r after:from-kingdom-primary/20 after:to-kingdom-secondary/20 after:opacity-0 hover:after:opacity-100 after:transition-opacity',
                  input: 'w-full px-4 py-3 rounded-lg bg-kingdom-dark/50 border border-kingdom-primary/20 text-kingdom-text placeholder:text-kingdom-muted/50 focus:border-kingdom-primary focus:ring-1 focus:ring-kingdom-primary transition-all duration-300',
                  label: 'text-sm font-medium text-kingdom-text',
                  loader: 'border-kingdom-primary',
                  anchor: 'text-kingdom-primary hover:text-kingdom-secondary transition-colors',
                },
              }}
              redirectTo={window.location.origin + "/home"}
              view="sign_in"
              showLinks={true}
              providers={[]}
            />
          </div>
        </div>
      </div>

      {/* Right side - Testimonials */}
      <div className="hidden lg:flex w-1/2 bg-gradient-dark flex-col items-center justify-center p-12 relative">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-kingdom-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-kingdom-secondary/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative z-10 w-full max-w-2xl">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-6">
                    <div className="glass-card p-8 rounded-xl relative group hover:scale-[1.02] transition-all duration-300">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-kingdom-accent fill-kingdom-accent"
                          />
                        ))}
                      </div>
                      <p className="text-lg text-kingdom-text mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <span className="font-semibold text-kingdom-text">
                            {testimonial.author}
                          </span>
                          <span className="text-sm text-kingdom-muted">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-kingdom-dark/50 hover:bg-kingdom-dark border-kingdom-primary/20" />
            <CarouselNext className="hidden md:flex -right-12 bg-kingdom-dark/50 hover:bg-kingdom-dark border-kingdom-primary/20" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}