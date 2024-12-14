import { Button } from "@/components/ui/button";

export const HeroContent = () => {
  return (
    <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
      <span className="text-lg font-semibold text-kingdom-gold">
        Welcome to MyKingdom
      </span>
      <h1 className="mt-8 mb-6 text-5xl font-bold leading-tight text-white">
        AI-Powered Property Management for the Modern Era
      </h1>
      <p className="mb-8 text-xl text-kingdom-cyan/90">
        Transform your property management experience with cutting-edge AI
        technology. Streamline operations, maximize ROI, and deliver exceptional
        service to your tenants.
      </p>
      <div className="flex flex-wrap">
        <Button
          size="lg"
          className="mr-4 bg-kingdom-gold hover:bg-kingdom-gold/90"
        >
          Get Started
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-kingdom-cyan text-kingdom-cyan hover:bg-kingdom-cyan/10"
        >
          Watch Demo
        </Button>
      </div>
    </div>
  );
};