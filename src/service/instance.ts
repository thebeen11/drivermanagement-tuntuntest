import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
