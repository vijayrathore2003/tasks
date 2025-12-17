import React, { useState } from 'react'
import { registerUser } from '../api';
import { Link } from 'react-router';
import { CONSTANTS, Errors } from '../utils/constants';


export interface RegisterData {
    fullName: string,
    phoneNumber: string,
    email: string,
    password: string,
    confirmPassword: string
}

function RegisterForm() {

    const [data, setData] = useState<RegisterData>({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState<Record<string, string> | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);



    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const checkAlphabetsOnly = (name: string) => {
        const nameRegex = /^[a-zA-Z\s]*$/;
        return nameRegex.test(name);
    }


    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(data)

        setErrors(null);
        setSuccessMessage(null);

        if(data.fullName.trim() === '') {
            console.log("coming into it 1")
            setErrors((prev) => ({ ...prev, fullName: 'Full Name is required' }));
        }

        if(!data.password.trim()) {
            console.log("coming into it 2")
            setErrors((prev) => ({ ...prev, password: 'Password is required' }));
        }

        if(!data.email.trim()) {
            console.log("coming into it 3")
            setErrors((prev) => ({ ...prev, email: 'Email is required' }));
            return
        }

        if (!validateEmail(data.email)) {
            setErrors({ email: Errors.invalidEmail });
            return;
        }

        if(!checkAlphabetsOnly(data.fullName.trim())) {
            setErrors({ fullName: 'Full Name should contain only alphabets and spaces' });
            return;
        }

        try {
            const response = await registerUser(data);

            if(response.created) {
                setSuccessMessage(CONSTANTS.REGISTER_SUCCESS_MESSAGE);
                setErrors(null);
                return;
            }   

            if(response.error !== '') {
                setErrors({server: response.error});
                return;
            }   
            setErrors({server: Errors.REGISTRATION_FAILED});
        } catch (error) {
            console.error('Registration error:', error);
            setErrors({server: Errors.REGISTRATION_FAILED});
        }
    }

  return (
    <div className="relative z-3 flex items-center justify-center p-12">
    
    <div className="mx-auto w-full max-w-[550px] p-5 rounded-2xl shadow ">
        <h2 className='text-2xl font-bold mx-auto block w-fit'>Register Form</h2>
        <form>
            <div className="mb-5">
                <label htmlFor="fullName" className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    value={data.fullName}
                    onChange={(e) => setData({ ...data, fullName: e.target.value })}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors?.fullName && <p data-testid="error-message" className="text-red-500 text-sm mt-2">{errors.fullName}</p>}
            </div>
            
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
                {errors?.password && <p data-testid="error-message" className="text-red-500 text-sm mt-2">{errors.password}</p>}
            </div>

            {successMessage && <p data-testid={"success-message"} className="text-green-500 text-sm mb-5">{successMessage}</p>}
            {errors?.server && <p data-testid="error-message" className="text-red-500 text-sm mb-5">{errors.server}</p>}
            <div>
                <button
                onClick={handleRegister}
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Register
                </button>
                <Link to="/login" className="text-sm text-blue-500 hover:underline mt-3 block text-center">Already have an account? Login</Link>
            </div>
        </form>
    </div>
</div>
  )
}

export default RegisterForm