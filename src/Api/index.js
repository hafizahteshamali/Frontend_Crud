import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://backend-curd-blond.vercel.app/",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return error;
  }
);
