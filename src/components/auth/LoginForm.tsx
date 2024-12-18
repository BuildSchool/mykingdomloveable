import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthChangeEvent } from "@supabase/supabase-js";

export const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session) => {
      console.log('Auth event:', event);
      console.log('Session:', session);
      
      if (event === 'SIGNED_IN' && session) {
        console.log('Redirecting to home after sign in');
        navigate('/home');
        toast({
          title: "Welcome back!",
          description: "You've successfully signed in.",
        });
      }
      if (event === 'SIGNED_OUT') {
        console.log('Redirecting to login after sign out');
        navigate('/login');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, toast]);

  return (
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
          divider: 'my-4',
        },
      }}
      providers={["google"]}
      providerScopes={{
        google: 'profile email'
      }}
      localization={{
        variables: {
          sign_in: {
            email_label: "Email address",
            password_label: "Password",
            button_label: "Sign in",
            loading_button_label: "Signing in ...",
            social_provider_text: "Continue with {{provider}}",
            link_text: "Already have an account? Sign in",
          },
          sign_up: {
            email_label: "Email address",
            password_label: "Password",
            button_label: "Sign up",
            loading_button_label: "Signing up ...",
            social_provider_text: "Continue with {{provider}}",
            link_text: "Don't have an account? Sign up",
          },
        },
      }}
      redirectTo={`${window.location.origin}/home`}
      view="sign_in"
      showLinks={true}
      socialLayout="vertical"
      onlyThirdPartyProviders={false}
    />
  );
};