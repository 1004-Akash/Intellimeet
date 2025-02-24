import { MeetHeader } from "@/components/MeetHeader";
import { MeetControls } from "@/components/MeetControls";
import { JoinOptions } from "@/components/JoinOptions";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showPermissionPrompt, setShowPermissionPrompt] = useState(true);

  return (
    <div className="min-h-screen bg-meetDark text-white">
      <MeetHeader />
      
      <div className="flex min-h-screen">
        {/* Left side - Video preview */}
        <div className="flex-1 p-8 flex items-center justify-center">
          <div className="relative w-full max-w-2xl aspect-video bg-meetDark-lighter rounded-xl overflow-hidden animate-fadeIn">
            {showPermissionPrompt ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center p-4">
                <h2 className="text-2xl font-light">
                  Do you want people to see you in the meeting?
                </h2>
                <Button
                  className="bg-meetBlue hover:bg-meetBlue-dark text-white px-6"
                  onClick={() => setShowPermissionPrompt(false)}
                >
                  Allow camera
                </Button>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-meetBlue flex items-center justify-center text-3xl">
                  A
                </div>
              </div>
            )}
            <div className="absolute bottom-6 left-0 right-0">
              <MeetControls />
            </div>
          </div>
        </div>

        {/* Right side - Join options */}
        <div className="w-96 p-8 flex flex-col justify-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-3xl font-light">Ready to join?</h1>
            <p className="text-gray-400">No one else is here</p>
            <JoinOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
