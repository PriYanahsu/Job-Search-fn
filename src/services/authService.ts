import apiClient from "@/lib/apiClient"

export const loginUser = (data : any) => {
    return apiClient.post("/api/user/login", data);
}

export const registrationUser = (data : any) => {
    return apiClient.post("/api/user/registration", data);
}