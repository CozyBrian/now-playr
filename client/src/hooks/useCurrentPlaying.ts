import { useAuthContext } from "@/services/AuthProvider";
import useSpotify from "@/services/useSpotify";
import { ISpotifyPlayer } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function useCurrentPlaying(
  interval: boolean = false,
  intervalTime: number = 1000,
) {
  const { getPlaybackState } = useSpotify().me;
  const { accessToken } = useAuthContext().auth;
  const [currentPlaying, setCurrentPlaying] = React.useState<
    ISpotifyPlayer | undefined
  >();

  const { data, refetch } = useQuery({
    enabled: accessToken !== undefined,
    queryKey: ["currentPlaying"],
    queryFn: getPlaybackState,
  });

  React.useEffect(() => {
    if (data) {
      setCurrentPlaying(data);
    }
  }, [data]);

  React.useEffect(() => {
    if (interval) {
      const intervalId = setInterval(() => {
        refetch();
      }, intervalTime);
      return () => clearInterval(intervalId);
    }
  }, [interval, intervalTime, refetch]);

  return { currentPlaying, refetch };
}
