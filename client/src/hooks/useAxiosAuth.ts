import { useEffect } from "react";
import { useAuthContext } from "../services/AuthProvider";
import { axiosAuth } from "../lib/axios";
import useRefreshToken from "./useRefreshToken";
import { logoutUser } from "@/services/spotify";

const useAxiosAuth = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuthContext();

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosAuth(prevRequest);
        } else if (error?.response?.status === 401 && prevRequest?.sent) {
          logoutUser();
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosAuth;
};

export default useAxiosAuth;
