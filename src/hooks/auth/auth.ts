import { useState } from "react";
import axios from "@/lib/axios";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("/api/v1/auth/social/email/callback", {
        email,
        password,
      });
      return res.data;
    } catch (err: any) {
      setError("로그인 실패");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
}
