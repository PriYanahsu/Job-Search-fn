import { loginUser } from "@/services/authService";
import { useState } from "react";
import { toast } from "sonner";

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
      const response = await loginUser(loginData);
      console.log(response);
      toast.success("Login successful! Welcome back.");
    } catch (error: any) {
      console.error("Login Failed", error);
      const message = error.response?.data?.message || "Login failed. Please check your credentials.";
      toast.error(message);
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