import type { RegisterData } from "./components/RegisterForm";


export const registerUser = async(data: RegisterData) => {
    try {
        const response = await fetch('https://api.example.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: data.email }),
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