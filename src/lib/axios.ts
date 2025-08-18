import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "서버서버",
  timeout: 5000,
  // withCredentials: true, // 쿠키 설정 옵션
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
