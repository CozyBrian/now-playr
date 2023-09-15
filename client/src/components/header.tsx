import useSpotify from "@/services/useSpotify";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const { getCurrentUser } = useSpotify().me;

  const { data: user } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="absolute top-0 right-0 flex flex-row items-center gap-2 p-4 opacity-20 hover:opacity-100 duration-200">
      {user && (
        <>
          <p className="text-white text-lg font-display">{user.display_name}</p>
        </>
      )}
    </div>
  );
};

export default Header;
