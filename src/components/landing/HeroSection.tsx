import { HeroContent } from "./hero/HeroContent";
import { VideoSection } from "./hero/VideoSection";
import { PropertyCarousel } from "./hero/PropertyCarousel";

export const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-kingdom-dark">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <HeroContent />
          <div className="w-full px-4 lg:w-1/2">
            <VideoSection />
            <PropertyCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};