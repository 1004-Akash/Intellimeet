import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const JoinOptions = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Button
        className="bg-meetBlue hover:bg-meetBlue-dark text-white px-8 py-6 rounded-full text-lg font-medium"
      >
        Join now
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">
            Other ways to join <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Join via phone</DropdownMenuItem>
          <DropdownMenuItem>Join via meeting code</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
