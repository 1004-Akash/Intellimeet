import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff, Camera } from "lucide-react";
import { useState } from "react";

export const MeetControls = () => {
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(false);

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-meetDark-lighter hover:bg-meetDark text-white w-12 h-12"
        onClick={() => setMicEnabled(!micEnabled)}
      >
        {micEnabled ? (
          <Mic className="h-5 w-5" />
        ) : (
          <MicOff className="h-5 w-5" />
        )}
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-meetDark-lighter hover:bg-meetDark text-white w-12 h-12"
        onClick={() => setVideoEnabled(!videoEnabled)}
      >
        {videoEnabled ? (
          <Video className="h-5 w-5" />
        ) : (
          <VideoOff className="h-5 w-5" />
        )}
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-meetDark-lighter hover:bg-meetDark text-white w-12 h-12"
      >
        <Camera className="h-5 w-5" />
      </Button>
    </div>
  );
};
