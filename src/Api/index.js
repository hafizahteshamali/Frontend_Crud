import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://mongo-db-crud-flame.vercel.app",
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
