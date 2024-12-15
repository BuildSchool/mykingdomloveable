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
              <div className="absolute inset-0 bg-gradient-to-b from-kingdom-dark/20 to-kingdom-dark/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/630eaf05-f528-45e4-b54f-1fc8e034637f.png"
                  alt="MyKingdom Crown"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300 p-8 rounded-full bg-kingdom-primary/20 backdrop-blur-sm border border-kingdom-primary/30 glow-effect animate-pulse"
                  onClick={handlePlayClick}
                >
                  <PlayCircle className="w-24 h-24" />
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