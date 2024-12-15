import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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
              <img 
                src="/lovable-uploads/53dbc70b-bc62-46c0-aa67-78ce7a7e4acb.png"
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