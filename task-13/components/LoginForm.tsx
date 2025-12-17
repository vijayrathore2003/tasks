import React, { useState } from 'react'
import { loginUser } from '../api';

export const Errors = {
    invalidEmail: 'Please enter a valid email address',
    LOGIN_FAILED: 'Login failed'
}

export const CONSTANTS = {
    SUCCESS_MESSAGE: 'Login Success'
}

export interface LoginData {
    email: string,
    password: string,
}

function LoginForm() {

    const [data, setData] = useState<LoginData>({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState<Record<string, string> | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);



    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    // todo ; need to implement login api and handle login
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(data)

        if (!validateEmail(data.email)) {
            setErrors({ email: Errors.invalidEmail });
            return;
        }

        try {
            const response = await loginUser(data);

            if(response.loggedIn) {
                setSuccessMessage(CONSTANTS.SUCCESS_MESSAGE);
                setErrors(null);
                return;
            }   
            setErrors({server: Errors.LOGIN_FAILED});
        } catch (error) {
            console.error('Login error:', error);
            setErrors({server: Errors.LOGIN_FAILED});
        }
    }

  return (
    <div className="flex items-center justify-center p-12">
    
    <div className="mx-auto w-full max-w-[550px] p-5 rounded-2xl shadow ">
        <h2 className='text-2xl font-bold mx-auto block w-fit'>Login Form</h2>
        <form>
            
            
            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                    {errors?.email && <p data-testid="error-message" className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>

            <div className="mb-5">
                <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

            {successMessage && <p data-testid={"success-message"} className="text-green-500 text-sm mb-5">{successMessage}</p>}
            {errors?.server && <p data-testid="error-message" className="text-red-500 text-sm mb-5">{errors.server}</p>}
            <div>
                <button
                onClick={handleLogin}
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Login
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default LoginForm