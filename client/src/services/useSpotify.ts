import useAxiosAuth from "@/hooks/useAxiosAuth";

function useSpotify() {
  const authAxios = useAxiosAuth();

  const me = {
    getCurrentUser: async () => {
      const { data } = await authAxios.get("/me");
      return data;
    },
    getPlaybackState: async () => {
      const { data } = await authAxios.get("/me/player");
      return data;
    },
  };

  return {
    me,
  };
}

export default useSpotify;
