import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Brain,
  Users,
  Wrench,
  LineChart,
  Globe,
  Wallet,
  Leaf,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Main Content */}
      <div className="md:ml-64">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-kingdom-primary/90 to-kingdom-secondary/90 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')" }}
          />
          <div className="relative z-20 max-w-4xl mx-auto text-white">
            <h1 className="text-5xl font-bold mb-6">
              Transforming Property Management with AI
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Simplify, Optimize, and Scale Your Property Investments with Intelligent Automation
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-kingdom-primary hover:bg-white/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
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

        {/* Core Features */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-kingdom-text mb-12 text-center">
              How MyKingdom Simplifies Property Management
            </h2>
            
            <div className="space-y-8">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-8 p-6 rounded-lg hover:bg-kingdom-light transition-colors">
                  <feature.icon className="w-16 h-16 text-kingdom-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-kingdom-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
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

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-kingdom-primary to-kingdom-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Property Management?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of property owners who are already saving time and maximizing returns with MyKingdom.ai
            </p>
            <Button size="lg" className="bg-white text-kingdom-primary hover:bg-white/90">
              Book Your Free Demo Today <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 bg-kingdom-text text-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">MyKingdom.ai</h3>
                <p className="text-sm text-white/70">
                  Empowering Property Owners with Smart AI Solutions
                </p>
              </div>
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="font-bold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className="text-sm text-white/70 hover:text-white">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Make data-driven decisions with our advanced AI analytics and predictions."
  },
  {
    icon: Wrench,
    title: "Smart Maintenance",
    description: "Predict and prevent maintenance issues before they become problems."
  },
  {
    icon: LineChart,
    title: "ROI Optimization",
    description: "Maximize your returns with AI-driven investment recommendations."
  }
];

const coreFeatures = [
  {
    icon: Brain,
    title: "AI-powered Predictive Maintenance",
    description: "Proactively manage maintenance to save costs and avoid disruptions."
  },
  {
    icon: Users,
    title: "Tenant Behavior & Credit Scoring",
    description: "Choose the right tenants and retain them longer with AI-driven insights."
  },
  {
    icon: Globe,
    title: "Cross-Border Management",
    description: "Manage properties globally with localized insights and compliance tracking."
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "Streamlined and secure transactions for all your property-related finances."
  },
  {
    icon: Leaf,
    title: "Green Property Management",
    description: "Optimize energy efficiency and reduce environmental impact while saving costs."
  }
];

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

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Blog"]
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "API", "Status"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
  }
];

export default Index;