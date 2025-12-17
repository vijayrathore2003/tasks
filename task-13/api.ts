import type { RegisterData } from "./components/RegisterForm";
import type { LoginData } from "./components/LoginForm";
import type { LoginPayload, RegisterPayload } from "./types";


export const registerUser = async(data: RegisterData) => {
    try {
        const payload: RegisterPayload = {
            name: data.fullName,
            email: data.email,
            password: data.password
        }
        const response = await fetch('https://api.example.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

export const loginUser = async(data: LoginData) => {
    try {
        const payload: LoginPayload = {
            email: data.email,
            password: data.password
        }
        const response = await fetch('https://api.example.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}