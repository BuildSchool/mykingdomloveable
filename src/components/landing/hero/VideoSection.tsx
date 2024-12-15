import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useState } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://fjdafebctoioqwqolhjk.supabase.co/storage/v1/object/public/videos/MyKingdomFinalVersion.mp4?t=2024-12-15T16%3A51%3A25.441Z";

  const handlePlayClick = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById('propertyVideo') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <div className="relative mb-8 overflow-hidden rounded-lg shadow-xl">
      <AspectRatio ratio={16 / 9} className="bg-kingdom-dark/60">
        <div className="relative w-full h-full">
          {!isPlaying ? (
            <>
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-kingdom-dark/10 to-kingdom-dark/30" />
              
              {/* Thumbnail container */}
              <div className="absolute inset-0">
                <img 
                  src="/lovable-uploads/c24a9545-363f-48d1-bc29-cf7d00d45215.png"
                  alt="MyKingdom Crown"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Visit MyKingdom.ai text */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-lg font-semibold text-white bg-kingdom-dark/40 px-4 py-2 rounded-full backdrop-blur-sm border border-kingdom-primary/30">
                  Visit MyKingdom.ai
                </span>
              </div>

              {/* Play button container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300 p-8 rounded-full bg-kingdom-primary/20 backdrop-blur-sm border border-kingdom-primary/30 glow-effect"
                  onClick={handlePlayClick}
                >
                  <PlayCircle className="w-24 h-24 animate-pulse" />
                </Button>
              </div>
            </>
          ) : (
            <video
              id="propertyVideo"
              className="w-full h-full object-cover"
              controls
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </AspectRatio>
    </div>
  );
};