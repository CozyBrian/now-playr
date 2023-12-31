import {
  ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import useCurrentPlaying from "@/hooks/useCurrentPlaying";
import { ISpotifyPlayer } from "@/types";
import { usePalette } from "color-thief-react";
import { wait } from "@/utils";

type Globals = {
  colors: string[];
  backgroundColor: string;
  albumImage?: string;
  showBackground: boolean;
};

interface IAuthContext {
  currentPlaying?: ISpotifyPlayer | undefined;
  global: Globals;
  setGlobal: React.Dispatch<React.SetStateAction<Globals>>;
}

const initialAuthContext: IAuthContext = {
  global: {
    colors: [],
    backgroundColor: "#000000",
    showBackground: false,
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

  useLayoutEffect(() => {
    const changeColor = async () => {
      if (colorsError === undefined) {
        if (colors) {
          setGlobal((prev) => ({
            ...prev,
            showBackground: false,
          }));
          await wait(300);
          setGlobal((prev) => ({
            ...prev,
            backgroundColor: colors[0],
            albumImage: currentPlaying?.item?.album?.images[0].url,
            colors: colors,
          }));
          await wait(300);
          setGlobal((prev) => ({
            ...prev,
            showBackground: true,
          }));
        }
      }
    };

    changeColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors, colorsError]);

  return (
    <GlobalContext.Provider value={{ global, setGlobal, currentPlaying }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalContext);
