import { Building2, Clock, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Smart Portfolio Management",
    description: "Leverage AI-powered insights to optimize your property portfolio performance in real-time.",
    metric: "45% ROI Increase",
    gradient: "from-blue-500/80 to-blue-600/80"
  },
  {
    icon: Clock,
    title: "Automated Excellence",
    description: "Save 15+ hours weekly with intelligent automation for tenant management and maintenance.",
    metric: "60% Time Saved",
    gradient: "from-emerald-500/80 to-emerald-600/80"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance measures to protect your valuable property data.",
    metric: "99.9% Uptime",
    gradient: "from-purple-500/80 to-purple-600/80"
  },
  {
    icon: TrendingUp,
    title: "Revenue Maximization",
    description: "Boost property returns by 23% with predictive analytics and market insights.",
    metric: "23% Higher Returns",
    gradient: "from-orange-500/80 to-orange-600/80"
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br p-8 transition-all duration-300 hover:scale-[1.02] group"
              style={{
                background: `linear-gradient(135deg, rgba(23, 27, 54, 0.9), rgba(23, 27, 54, 0.95))`,
                boxShadow: `0 4px 24px -1px rgba(0, 0, 0, 0.2)`
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-300`} />
              
              {/* Content Container */}
              <div className="relative z-10">
                {/* Top Row with Icon and Metric */}
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Container */}
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Metric Badge */}
                  <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white">
                    {feature.metric}
                  </span>
                </div>
                
                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
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