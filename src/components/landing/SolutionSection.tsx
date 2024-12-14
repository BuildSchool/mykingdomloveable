import { Brain, ChartBar, Globe, Shield, Leaf, Wallet } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "Predictive Maintenance",
    description: "AI-driven insights to prevent issues before they occur"
  },
  {
    icon: ChartBar,
    title: "ROI Optimization",
    description: "Data-driven analytics for maximizing property returns"
  },
  {
    icon: Globe,
    title: "Cross-Border Management",
    description: "Seamless property management across multiple countries"
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "Stay compliant with region-specific regulations"
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "Streamlined financial operations and transactions"
  },
  {
    icon: Leaf,
    title: "Green Property Insights",
    description: "Optimize energy efficiency and reduce costs"
  }
];

export const SolutionSection = () => {
  return (
    <section className="py-20 px-8 bg-kingdom-dark/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          How MyKingdom Simplifies Property Management
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg glass-card glow-effect hover:transform hover:scale-105 transition-all duration-300"
            >
              <solution.icon className="w-10 h-10 text-kingdom-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-kingdom-text">
                {solution.title}
              </h3>
              <p className="text-sm text-kingdom-text/70">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};