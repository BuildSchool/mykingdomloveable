import { AlertTriangle, Clock, DollarSign, FileWarning } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const challenges = [
  {
    icon: Clock,
    title: "Time-Consuming Management",
    description: "Hours spent on tenant screening, maintenance coordination, and paperwork."
  },
  {
    icon: DollarSign,
    title: "Revenue Leakage",
    description: "Missed opportunities and inefficient operations leading to reduced profits."
  },
  {
    icon: AlertTriangle,
    title: "Maintenance Surprises",
    description: "Unexpected repairs and maintenance issues causing disruptions."
  },
  {
    icon: FileWarning,
    title: "Compliance Complexity",
    description: "Keeping up with varying regulations across different regions."
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-6 text-center">
          Why Choose MyKingdom.ai?
        </h2>
        <p className="text-lg text-kingdom-text/80 mb-12 text-center max-w-2xl mx-auto">
          Property management shouldn't be a full-time job. Traditional methods are
          time-consuming, prone to errors, and lack the intelligence needed for
          optimal decision-making in today's dynamic market.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="glass-card glow-effect">
              <CardContent className="pt-6">
                <challenge.icon className="w-12 h-12 text-kingdom-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-kingdom-text">
                  {challenge.title}
                </h3>
                <p className="text-kingdom-text/70">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};