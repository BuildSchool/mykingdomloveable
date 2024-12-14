import { Brain, Users, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Make data-driven decisions with our advanced AI analytics and predictions."
  },
  {
    icon: Users,
    title: "Smart Maintenance",
    description: "Predict and prevent maintenance issues before they become problems."
  },
  {
    icon: LineChart,
    title: "ROI Optimization",
    description: "Maximize your returns with AI-driven investment recommendations."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-8 bg-kingdom-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-kingdom-text mb-6 text-center">
          Why Choose MyKingdom.ai?
        </h2>
        <p className="text-lg text-kingdom-muted mb-12 text-center max-w-2xl mx-auto">
          Managing properties shouldn't be complicated. We eliminate the hassle of tenant management,
          maintenance tracking, and compliance requirements, letting you focus on growing your investment.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <feature.icon className="w-12 h-12 text-kingdom-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-kingdom-muted">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};