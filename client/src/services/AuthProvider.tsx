import { ReactNode, createContext, useContext, useState } from "react";
import { getAccessToken } from "./spotify";

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

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
