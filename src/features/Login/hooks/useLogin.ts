import { loginUser } from "@/services/authService";
import { useState } from "react";

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
    } catch (error) {
      console.error("Login Failed", error);
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