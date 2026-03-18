import apiClient from "@/lib/apiClient";

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegistrationPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginResponse = {
  status: "success" | "error";
  accessToken?: string;
  refreshToken?: string;
  userId?: number;
  message?: string;
};

export const loginUser = (data: LoginPayload) => {
  return apiClient.post<LoginResponse>("/api/user/login", data);
};

export const registrationUser = (data: RegistrationPayload) => {
  return apiClient.post("/api/user/register", data);
};