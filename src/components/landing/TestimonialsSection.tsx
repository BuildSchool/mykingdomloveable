import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "MyKingdom.ai has transformed how I manage my properties. The AI insights have helped me reduce costs and increase tenant satisfaction.",
    name: "Rajesh Patel",
    role: "Property Investor, Mumbai"
  },
  {
    quote: "Managing properties across different countries was a nightmare until I found MyKingdom.ai. Now it's all seamlessly integrated.",
    name: "Sarah Thompson",
    role: "International Property Manager"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-8 bg-kingdom-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-kingdom-text mb-12 text-center">
          What Our Users Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <p className="text-kingdom-muted mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-kingdom-primary/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-kingdom-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-kingdom-muted">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};