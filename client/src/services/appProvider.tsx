import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useCurrentPlaying from "@/hooks/useCurrentPlaying";
import { ISpotifyPlayer } from "@/types";
import { useColor, usePalette } from "color-thief-react";

type Globals = {
  colors: string[];
  backgroundColor: string;
  showBackground: boolean;
};

interface IAuthContext {
  currentPlaying?: ISpotifyPlayer | undefined;
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
  const [global, setGlobal] = useState<Globals>(initialAuthContext.global);
  const { currentPlaying } = useCurrentPlaying(true, 5000);

  const { data: colors, error: colorsError } = usePalette(
    currentPlaying?.item?.album?.images[0].url ?? "",
    4,
    "hex",
    {
      crossOrigin: "Anonymous",
    },
  );

  const { data: bgColor, error: bgColorError } = useColor(
    currentPlaying?.item?.album?.images[0].url ?? "",
    "hex",
    {
      crossOrigin: "Anonymous",
    },
  );

  useEffect(() => {
    if (colorsError === undefined) {
      if (colors) {
        setGlobal((prev) => ({
          ...prev,
          colors: colors,
        }));
      }
    }
    if (bgColorError === undefined) {
      if (bgColor) {
        setGlobal((prev) => ({
          ...prev,
          backgroundColor: bgColor,
        }));
      }
    }
  }, [colors, colorsError, bgColor, bgColorError]);

  return (
    <GlobalContext.Provider value={{ global, setGlobal, currentPlaying }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalContext);
