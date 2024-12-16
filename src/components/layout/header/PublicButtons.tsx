import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PublicButtonsProps {
  onFAQClick: () => void;
}

export const PublicButtons = ({ onFAQClick }: PublicButtonsProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={onFAQClick}
        variant="outline"
        className="relative group overflow-hidden border-kingdom-primary/50 text-kingdom-text hover:text-white hover:border-kingdom-primary/80"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-x-full group-hover:translate-x-0 bg-gradient-primary" />
        <span className="relative flex items-center gap-2 group-hover:scale-105 transition-transform duration-200">
          <HelpCircle className="w-4 h-4" />
          FAQ
        </span>
      </Button>
      <Button
        onClick={() => navigate("/login")}
        className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
      >
        <span className="relative flex items-center gap-2 group-hover:scale-105 transition-transform duration-200">
          Getting Started
        </span>
      </Button>
    </>
  );
};