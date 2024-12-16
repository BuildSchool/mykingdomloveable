import { Brain, Users, LineChart, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get real-time property valuations and market predictions with 99% accuracy",
    bgColor: "bg-blue-500",
    iconColor: "text-blue-100"
  },
  {
    icon: Users,
    title: "Smart Tenant Matching",
    description: "Find perfect tenants with our AI screening system that reduces vacancy rates by 45%",
    bgColor: "bg-purple-500",
    iconColor: "text-purple-100"
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast maintenance needs and optimize rental pricing with machine learning",
    bgColor: "bg-pink-500",
    iconColor: "text-pink-100"
  },
  {
    icon: Shield,
    title: "Automated Compliance",
    description: "Stay compliant with automated updates and real-time regulation tracking",
    bgColor: "bg-emerald-500",
    iconColor: "text-emerald-100"
  }
];

const steps = [
  {
    number: "01",
    title: "Quick Setup",
    description: "Create your account and import your properties in under 5 minutes.",
    bgGradient: "from-blue-600 to-blue-800"
  },
  {
    number: "02",
    title: "AI Configuration",
    description: "Our AI analyzes your portfolio and customizes automation settings",
    bgGradient: "from-purple-600 to-purple-800"
  },
  {
    number: "03",
    title: "Start Growing",
    description: "Watch your portfolio thrive with automated management and insights",
    bgGradient: "from-pink-600 to-pink-800"
  }
];

export const ExperienceFutureSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-kingdom-dark to-blue-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Future of Property Management
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your property portfolio with AI-powered automation and insights
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`${feature.bgColor} p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Steps Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 bg-gradient-to-br ${step.bgGradient} relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              
              <div className="relative z-10">
                <span className="text-2xl font-bold text-white/50 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-flow"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group">
            Start Your Journey
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};