import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Contact", "Careers", "Blog"]
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "FAQs", "API"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
  },
  {
    title: "Social",
    links: ["Twitter", "LinkedIn", "Facebook", "Instagram"]
  }
];

export const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-kingdom-dark border-t border-kingdom-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl mb-4 gradient-text">MyKingdom.ai</h3>
            <p className="text-kingdom-text/70 mb-6">
              Empowering Property Owners with Smart AI Solutions
            </p>
            <div className="flex items-center gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="futuristic-input"
              />
              <Button className="futuristic-button">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4 text-kingdom-text">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-kingdom-text/70 hover:text-kingdom-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 mt-8 border-t border-kingdom-primary/20 text-center text-kingdom-text/70">
          <p>© 2024 MyKingdom.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};