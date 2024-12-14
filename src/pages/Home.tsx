import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { LogOut, Crown, Building2, Users, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const metrics = [
    {
      icon: Building2,
      title: "Total Properties",
      value: "12",
      change: "+2 this month"
    },
    {
      icon: Users,
      title: "Active Tenants",
      value: "45",
      change: "98% occupancy"
    },
    {
      icon: Crown,
      title: "Maintenance Tasks",
      value: "8",
      change: "3 urgent"
    },
    {
      icon: LineChart,
      title: "Monthly Revenue",
      value: "$52,400",
      change: "+12% vs last month"
    }
  ];

  return (
    <div className="min-h-screen bg-kingdom-dark pt-16">
      <Navigation />
      <div className="md:ml-64 p-8">
        <div className="flex justify-end mb-8">
          <Button 
            variant="outline" 
            onClick={handleSignOut}
            className="border-kingdom-primary/50 text-kingdom-text hover:bg-kingdom-primary/10"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 glow-effect"
            >
              <div className="flex items-start justify-between">
                <div>
                  <metric.icon className="h-8 w-8 text-kingdom-primary mb-4" />
                  <h3 className="text-lg font-medium text-kingdom-text mb-1">{metric.title}</h3>
                  <p className="text-2xl font-bold gradient-text">{metric.value}</p>
                  <p className="text-sm text-kingdom-muted mt-1">{metric.change}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6">
          <Card className="glass-card p-6 glow-effect">
            <h2 className="text-xl font-semibold mb-4 gradient-text">AI Insights</h2>
            <p className="text-kingdom-text/90">
              Our AI has analyzed your portfolio and identified potential opportunities for optimization:
            </p>
            <ul className="mt-4 space-y-2 text-kingdom-text/80">
              <li className="flex items-center gap-2">
                • Property maintenance costs could be reduced by 15% through predictive maintenance
              </li>
              <li className="flex items-center gap-2">
                • Tenant satisfaction scores indicate 92% retention probability
              </li>
              <li className="flex items-center gap-2">
                • Market analysis suggests potential for 8% rent increase in 3 properties
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;