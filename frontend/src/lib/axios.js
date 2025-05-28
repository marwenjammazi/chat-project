import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL,
  withCredentials: true, // 👈 This is required
});
