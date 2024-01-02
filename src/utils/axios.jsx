import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3300", // <-- Correct property name is baseURL
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
