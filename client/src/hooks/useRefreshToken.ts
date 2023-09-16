import { API_URL } from "@/constants";
import { useAuthContext } from "../services/AuthProvider";
import axios from "axios";
import { getLocalRefreshToken } from "@/services/spotify";

const useRefreshToken = () => {
  const { setAuth } = useAuthContext();

  const refresh = async (): Promise<string> => {
    const { data } = await axios(
      `${API_URL}/v1/auth/refresh_token?refresh_token=${getLocalRefreshToken()}`,
    );
    setAuth((prev) => {
      return { ...prev, accessToken: data.access_token, isAuthenticated: true };
    });
    return data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
