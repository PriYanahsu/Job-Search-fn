'use client';

import { registrationUser } from "@/services/authService";
import { useState } from "react";

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

            const response = registrationUser(registerData);
            console.log(response, "response");

        } catch (error) {
            console.error("Registration Failed", error);
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