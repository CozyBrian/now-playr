import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { getAccessToken } from "./spotify";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";

type Auth = {
  isAuthenticated: boolean;
  accessToken?: string;
  user?: string;
};

interface IAuthContext {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
  persist: boolean;
  setPersist: React.Dispatch<React.SetStateAction<boolean>>;
}

const token = getAccessToken();

const initialAuthContext: IAuthContext = {
  auth: {
    accessToken: token!,
    isAuthenticated: false,
  },
  setAuth: () => {},
  persist: JSON.parse(localStorage.getItem("persist")?.toString() || "false"),
  setPersist: () => {},
};

const AuthContext = createContext<IAuthContext>(initialAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth>(initialAuthContext.auth);
  const [persist, setPersist] = useState(initialAuthContext.persist);

  const getOAuthToken = useCallback((callback: (token: string) => void) => {
    // return auth.accessToken && callback(auth.accessToken);
    return callback(
      "BQDQQ0wtN5KbEWB4QaLiYF4REs97PvC2YLajkdK3Wi4HeK_aTtpFeSKnSOw6mVKTAq5EL-iEDHOGSjaJI0oFN-Eump6vPMt3JVZRyJgFTN-Iajnp0VgpTqCgMOIs37LX4Z-s4XPtWJSWUIW_x-MxLpiGCv-ZUK_CWyEd7QMinHpU5lTZJmKjfFywbVj2idsI3QA0bGZ1gC0",
    );
  }, []);

  return (
    <WebPlaybackSDK
      initialDeviceName="Now-Playr"
      getOAuthToken={getOAuthToken}
      connectOnInitialized={true}
    >
      <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
        {children}
      </AuthContext.Provider>
    </WebPlaybackSDK>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
