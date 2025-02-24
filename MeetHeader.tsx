import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const MeetHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-opacity-80 backdrop-blur-sm z-50">
      <div className="flex items-center gap-2">
        <img
          src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
          alt="Google Meet"
          className="h-6"
        />
        <span className="text-gray-500">|</span>
        <span className="text-sm text-gray-500">iiv-eecv-gey</span>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
        >
          Switch account
        </Button>
        <Avatar className="h-8 w-8 bg-meetBlue text-white">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
