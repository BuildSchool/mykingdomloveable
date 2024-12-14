import { useState, useEffect } from "react";
import { Brain, Users, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Make data-driven decisions with our advanced AI analytics and predictions.",
    imagePrompt: "a futuristic AI brain analyzing real estate data with holographic displays showing property insights and predictions"
  },
  {
    icon: Users,
    title: "Smart Maintenance",
    description: "Predict and prevent maintenance issues before they become problems.",
    imagePrompt: "a smart home system with IoT sensors and AI predictive maintenance dashboard showing real-time property diagnostics"
  },
  {
    icon: LineChart,
    title: "ROI Optimization",
    description: "Maximize your returns with AI-driven investment recommendations.",
    imagePrompt: "a 3D visualization of property investment analytics with AI-generated ROI projections and market trends"
  }
];

export const FeaturesSection = () => {
  const [featureImages, setFeatureImages] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const generateImages = async () => {
      try {
        const images: {[key: string]: string} = {};
        
        for (const feature of features) {
          const { data, error } = await supabase.functions.invoke('generate-feature-image', {
            body: { prompt: feature.imagePrompt }
          });

          if (error) throw error;
          if (data.data && data.data[0].url) {
            images[feature.title] = data.data[0].url;
          }
        }

        setFeatureImages(images);
      } catch (error) {
        console.error('Error generating images:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load feature images. Please try again later."
        });
      } finally {
        setLoading(false);
      }
    };

    generateImages();
  }, []);

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-kingdom-dark to-kingdom-dark/90 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-kingdom-primary/5 to-kingdom-secondary/5 animate-gradient-flow"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-center">
          Why Choose MyKingdom.ai?
        </h2>
        <p className="text-xl text-kingdom-text/80 mb-16 text-center max-w-3xl mx-auto leading-relaxed">
          Experience the future of property management with our AI-powered platform that transforms
          complex challenges into seamless solutions.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card glow-effect transform hover:scale-105 transition-all duration-500 backdrop-blur-lg border-kingdom-primary/20"
            >
              <CardContent className="p-8">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  {loading ? (
                    <div className="absolute inset-0 bg-kingdom-dark/50 animate-pulse"></div>
                  ) : featureImages[feature.title] ? (
                    <img 
                      src={featureImages[feature.title]} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-kingdom-dark/50 flex items-center justify-center">
                      <feature.icon className="w-16 h-16 text-kingdom-primary/50" />
                    </div>
                  )}
                </div>
                
                <feature.icon className="w-12 h-12 text-kingdom-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-kingdom-text gradient-text">
                  {feature.title}
                </h3>
                <p className="text-lg text-kingdom-text/80 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};