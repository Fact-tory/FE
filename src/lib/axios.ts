import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "서버서버",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
