import useAxiosAuth from "@/hooks/useAxiosAuth";
import { ISpotifyPlayer, ISpotifyUser } from "@/types";

function useSpotify() {
  const authAxios = useAxiosAuth();

  const me = {
    getCurrentUser: async () => {
      const { data } = await authAxios.get<ISpotifyUser>("/me");
      return data;
    },
    getPlaybackState: async () => {
      const { data } = await authAxios.get<ISpotifyPlayer>("/me/player");
      return data;
    },
  };

  return {
    me,
  };
}

export default useSpotify;
