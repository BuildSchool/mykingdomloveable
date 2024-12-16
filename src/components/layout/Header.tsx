import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Logo } from "./header/Logo";
import { AuthButtons } from "./header/AuthButtons";
import { PublicButtons } from "./header/PublicButtons";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out successfully",
      description: "See you soon!",
    });
    navigate("/");
  };

  const scrollToFAQ = () => {
    const faqSection = document.querySelector('#faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLoginPage = location.pathname === '/login';
  const isHomePage = location.pathname === '/home';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kingdom-dark/80 backdrop-blur-lg border-b border-kingdom-primary/20">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Logo onClick={handleLogoClick} />
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <AuthButtons isHomePage={isHomePage} onSignOut={handleSignOut} />
            ) : !isLoginPage && (
              <PublicButtons onFAQClick={scrollToFAQ} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};