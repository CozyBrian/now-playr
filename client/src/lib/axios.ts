import axios from "axios";

export default axios.create({
  baseURL: "https://api.spotify.com/v1",
  withCredentials: true,
});

export const axiosAuth = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: { "Content-Type": "application/json" },
  // withCredentials: true,
});
