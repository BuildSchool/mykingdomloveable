import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";

export const useAuthState = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      console.log('Auth event:', event);
      console.log('Session:', session);
      console.log('Current URL:', window.location.href);
      
      switch (event) {
        case 'SIGNED_IN':
          if (session) {
            console.log('User signed in successfully:', session.user);
            navigate('/home');
            toast({
              title: "Welcome back!",
              description: "You've successfully signed in.",
            });
          }
          break;
        case 'SIGNED_OUT':
          console.log('User signed out');
          navigate('/login');
          break;
        case 'USER_DELETED':
          console.log('User was deleted');
          break;
        case 'USER_UPDATED':
          console.log('User was updated');
          break;
        case 'PASSWORD_RECOVERY':
          console.log('Password recovery initiated');
          break;
        case 'TOKEN_REFRESHED':
          console.log('Token was refreshed');
          break;
      }
    });

    // Log initial auth state
    const checkInitialSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      console.log('Initial session check:', session);
      if (error) console.error('Session check error:', error);
    };
    
    checkInitialSession();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, toast]);
};