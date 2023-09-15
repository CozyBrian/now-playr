import { useQuery } from "@tanstack/react-query";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useSpotify from "./useSpotify";
import { useAuthContext } from "./AuthProvider";

type Globals = {
  colors: string[];
  backgroundColor: string;
  showBackground: boolean;
};

interface IAuthContext {
  global: Globals;
  setGlobal: React.Dispatch<React.SetStateAction<Globals>>;
}

const initialAuthContext: IAuthContext = {
  global: {
    colors: ["#3d832cb0", "#1C3ECC", "#6fecfabc"],
    backgroundColor: "#000000",
    showBackground: true,
  },
  setGlobal: () => {},
};

const GlobalContext = createContext<IAuthContext>(initialAuthContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const { getPlaybackState } = useSpotify().me;
  const { accessToken } = useAuthContext().auth;
  const [global, setGlobal] = useState<Globals>(initialAuthContext.global);

  const { data } = useQuery({
    enabled: accessToken !== undefined,
    queryKey: ["currentPlaying"],
    queryFn: getPlaybackState,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalContext);
