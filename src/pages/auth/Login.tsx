import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2 } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center">
            <Building2 className="h-12 w-12 text-kingdom-primary" />
            <h2 className="mt-6 text-3xl font-bold text-kingdom-text">Welcome back</h2>
            <p className="mt-2 text-sm text-kingdom-muted">
              Please sign in to your account
            </p>
          </div>

          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#9b87f5',
                    brandAccent: '#7E69AB',
                  },
                },
              },
            }}
            providers={["google", "azure"]}
            redirectTo={window.location.origin}
          />
        </div>
      </div>

      {/* Right side - Promotional Content */}
      <div className="hidden lg:flex w-1/2 bg-kingdom-light flex-col items-center justify-center p-12">
        <div className="max-w-md space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-kingdom-text">
              Trusted by Property Managers Worldwide
            </h3>
            
            {/* Testimonial */}
            <blockquote className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-kingdom-text mb-4">
                "MyKingdom has transformed how we manage our properties. The AI insights have helped us reduce costs by 30% while improving tenant satisfaction."
              </p>
              <footer className="text-sm">
                <cite className="font-medium text-kingdom-text">Rajesh Patel</cite>
                <p className="text-kingdom-muted">Property Investor, Mumbai</p>
              </footer>
            </blockquote>

            {/* Trust Badge */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-medium text-kingdom-text">4.6 out of 5</p>
                <p className="text-sm text-kingdom-muted">Based on 1,000+ reviews</p>
              </div>
            </div>
          </div>

          <p className="text-center text-kingdom-muted">
            Join thousands of property owners simplifying their management with MyKingdom
          </p>
        </div>
      </div>
    </div>
  );
}