import { Building2, Clock, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Smart Portfolio Management",
    description: "Leverage AI-powered insights to optimize your property portfolio performance in real-time.",
    metric: "45% ROI Increase",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    bgImage: "/lovable-uploads/53dbc70b-bc62-46c0-aa67-78ce7a7e4acb.png"
  },
  {
    icon: Clock,
    title: "Automated Excellence",
    description: "Save 15+ hours weekly with intelligent automation for tenant management and maintenance.",
    metric: "60% Time Saved",
    gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance measures to protect your valuable property data.",
    metric: "99.9% Uptime",
    gradient: "bg-gradient-to-br from-orange-500 to-orange-600"
  },
  {
    icon: TrendingUp,
    title: "Revenue Maximization",
    description: "Boost property returns by 23% with predictive analytics and market insights.",
    metric: "23% Higher Returns",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-8 bg-kingdom-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Why Choose Our Platform
        </h2>
        <p className="text-xl text-kingdom-text/80 mb-16 text-center max-w-3xl mx-auto">
          Experience the future of property management with our innovative features
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl ${feature.gradient} p-8 group transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-black to-transparent" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-semibold px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm">
                    {feature.metric}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};