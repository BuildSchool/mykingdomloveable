import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://fjdafebctoioqwqolhjk.supabase.co/storage/v1/object/public/videos/MyKingdom.mp4?t=2024-12-14T11%3A42%3A29.647Z";

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
              <img 
                src="/lovable-uploads/d13ae473-1fa7-4510-8484-f4658a03a62d.png"
                alt="Property Management Demo"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  onClick={handlePlayClick}
                >
                  <PlayCircle className="w-16 h-16" />
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