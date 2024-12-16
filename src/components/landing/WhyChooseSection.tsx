import { BarChart3, Clock, Shield, LineChart } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Smart Portfolio Management",
    description: "Leverage AI-powered insights to optimize your property portfolio performance in real-time.",
    metric: "45% ROI Increase",
    bgColor: "from-blue-600/90 to-blue-700/90",
  },
  {
    icon: Clock,
    title: "Automated Excellence",
    description: "Save 15+ hours weekly with intelligent automation for tenant management and maintenance.",
    metric: "60% Time Saved",
    bgColor: "from-emerald-600/90 to-emerald-700/90",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance measures to protect your valuable property data.",
    metric: "99.9% Uptime",
    bgColor: "from-purple-600/90 to-purple-700/90",
  },
  {
    icon: LineChart,
    title: "Revenue Maximization",
    description: "Boost property returns by 23% with predictive analytics and market insights.",
    metric: "23% Higher Returns",
    bgColor: "from-orange-500/90 to-orange-600/90",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-kingdom-dark relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-kingdom-dark via-kingdom-dark/95 to-kingdom-dark opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
            Why Choose Our Platform
          </h2>
          <p className="text-xl text-gray-300/90 max-w-3xl mx-auto">
            Experience the future of property management with our innovative features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.bgColor} p-8 transition-all duration-300 hover:scale-[1.02] group`}
            >
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <feature.icon className="w-12 h-12 text-white/90" />
                  <span className="text-white/90 font-semibold">
                    {feature.metric}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-white/80 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-flow"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
            Start Your Journey →
          </button>
        </div>
      </div>
    </section>
  );
};