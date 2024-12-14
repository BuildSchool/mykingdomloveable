import { Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  const handleLogoClick = () => {
    if (isAuthenticated) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kingdom-dark/80 backdrop-blur-lg border-b border-kingdom-primary/20">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Crown className="h-8 w-8 text-kingdom-accent animate-glow" />
            <span className="text-2xl font-bold gradient-text">MyKingdom</span>
          </button>
        </div>
      </div>
    </header>
  );
};