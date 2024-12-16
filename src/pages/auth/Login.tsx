import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Star } from "lucide-react";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";

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
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 bg-gradient-dark">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Building2 className="h-16 w-16 text-kingdom-primary animate-pulse" />
              <div className="absolute -bottom-2 -right-2">
                <Star className="h-6 w-6 text-kingdom-accent animate-pulse" />
              </div>
            </div>
            <h2 className="mt-6 text-4xl font-bold gradient-text">Welcome to MyKingdom</h2>
            <p className="mt-4 text-lg text-kingdom-muted text-center">
              Manage your properties smarter with AI
            </p>
          </div>

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
                  container: 'space-y-4',
                  button: 'w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-gradient-primary',
                  input: 'w-full px-4 py-3 rounded-lg bg-kingdom-dark/50 border border-kingdom-primary/20 text-kingdom-text placeholder:text-kingdom-muted/50 focus:border-kingdom-primary focus:ring-1 focus:ring-kingdom-primary transition-all duration-300',
                  label: 'text-sm font-medium text-kingdom-text',
                },
              }}
              providers={["google", "azure"]}
              redirectTo={window.location.origin + "/home"}
            />
          </div>
        </div>
      </div>

      {/* Right side - Testimonials */}
      <div className="hidden lg:flex w-1/2 bg-gradient-dark flex-col items-center justify-center p-12">
        <TestimonialsSection />
      </div>
    </div>
  );
}