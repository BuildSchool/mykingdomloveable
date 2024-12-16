import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LoginForm } from "@/components/auth/LoginForm";
import { TestimonialsCarousel } from "@/components/auth/TestimonialsCarousel";

export default function Login() {
  const navigate = useNavigate();

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
            <LoginForm />
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
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
}