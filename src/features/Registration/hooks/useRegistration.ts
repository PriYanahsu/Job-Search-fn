'use client';

import { registrationUser } from "@/services/authService";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export function useRegistration() {
    const [registerData, setRegisterData] = useState<RegisterData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        });
    };

    const registerForm = async (e: React.FormEvent) => {
        e.preventDefault();

        if (registerData.password !== registerData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            console.log(registerData);

            const response = await registrationUser(registerData);
            console.log(response, "response");
            toast.success("Registration successful! You can now log in.");

        } catch (error: unknown) {
            console.error("Registration Failed", error);
            const message =
                axios.isAxiosError(error)
                    ? (error.response?.data as { message?: string } | undefined)?.message ??
                      "Registration failed. Please try again."
                    : "Registration failed. Please try again.";
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return {
        registerForm,
        registerData,
        handleChange,
        loading
    }
}