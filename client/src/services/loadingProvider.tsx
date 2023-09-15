import { useWebPlaybackSDKReady } from "react-spotify-web-playback-sdk";

type LoadingProviderProps = {
  children: React.ReactNode;
};
const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const webPlaybackSDKReady = useWebPlaybackSDKReady();

  if (!webPlaybackSDKReady)
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-zinc-900 text-white">
        Loading...
      </div>
    );

  return <>{children}</>;
};

export default LoadingProvider;
