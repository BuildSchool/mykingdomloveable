import { Crown } from "lucide-react";

interface LogoProps {
  onClick: () => void;
}

export const Logo = ({ onClick }: LogoProps) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
  >
    <Crown className="h-8 w-8 text-kingdom-accent animate-glow" />
    <span className="text-2xl font-bold gradient-text">MyKingdom</span>
  </button>
);