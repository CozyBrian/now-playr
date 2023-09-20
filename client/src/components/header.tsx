import useSpotify from "@/services/useSpotify";
import { useQuery } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutUser } from "@/services/spotify";
import { Expand, LogOut, Shrink } from "lucide-react";
import useFullscreen from "@/hooks/useFullscreen";

const Header = () => {
  const { getCurrentUser } = useSpotify().me;

  const { data: user } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
  });

  const isFullscreen = useFullscreen();

  const toggleFullscreen = () => {
    isFullscreen
      ? window.document.exitFullscreen()
      : window.document.body.requestFullscreen();
  };

  return (
    <div className="absolute top-0 right-0 flex flex-row items-center gap-2 p-4 opacity-20 hover:opacity-100 duration-200">
      <DropdownMenu>
        <DropdownMenuTrigger>
          {user && (
            <p className="text-white text-lg font-display">
              {user.display_name}
            </p>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-4">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => toggleFullscreen()}>
            {isFullscreen ? (
              <Shrink className="mr-2 h-4 w-4" />
            ) : (
              <Expand className="mr-2 h-4 w-4" />
            )}
            <span>{isFullscreen ? "Leave fullscreen" : "Fullscreen"}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => logoutUser()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
