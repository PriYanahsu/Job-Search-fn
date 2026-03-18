import { loginUser } from "@/services/authService";
import { setAccessToken, setRole, setUserId } from "@/lib/authStorage";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

export function useLogin(){
      const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const ownerName =
        (process.env.NEXT_PUBLIC_OWNER_NAME ?? "Priyanshu").toLowerCase();
      const ownerPassword =
        process.env.NEXT_PUBLIC_OWNER_PASSWORD ?? "Priyanshu@1265";
      const ownerEmail = process.env.NEXT_PUBLIC_OWNER_EMAIL?.toLowerCase()?? "priyanshu@gmail.com";

      const identifier = loginData.email.trim().toLowerCase();
      const isOwnerLogin =
        loginData.password === ownerPassword &&
        (ownerEmail ? identifier === ownerEmail : identifier === ownerName);

      if (identifier === ownerName && !ownerEmail) {
        toast.error("Set NEXT_PUBLIC_OWNER_EMAIL to enable owner login.");
        return false;
      }

      const response = await loginUser({
        email: identifier === ownerName ? (ownerEmail as string) : identifier,
        password: loginData.password,
      });
      const token = response.data?.accessToken;
      if (token) setAccessToken(token);
      if (typeof response.data?.userId === "number") setUserId(response.data.userId);
      setRole(isOwnerLogin ? "owner" : "user");
      toast.success("Login successful! Welcome back.");
      return true;
    } catch (error: unknown) {
      const message =
        axios.isAxiosError(error)
          ? (error.response?.data as { message?: string } | undefined)?.message ??
            "Login failed. Please check your credentials."
          : "Login failed. Please check your credentials.";
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loginForm,
    loginData,
    handleChange,
    loading
  }
}