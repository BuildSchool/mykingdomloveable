import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-kingdom-dark">
      <Navigation />
      <div className="md:ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold gradient-text">Welcome to MyKingdom</h1>
          <Button 
            variant="outline" 
            onClick={handleSignOut}
            className="border-kingdom-primary/50 text-kingdom-text hover:bg-kingdom-primary/10"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
        
        {/* Placeholder content - you can expand this later */}
        <div className="grid gap-6">
          <div className="glass-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-kingdom-text">Dashboard Overview</h2>
            <p className="text-kingdom-muted">Welcome to your MyKingdom dashboard. This is where you'll manage your properties and access powerful AI-driven insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;