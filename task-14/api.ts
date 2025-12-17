import type { RegisterData } from "./components/RegisterForm";
import type { LoginData } from "./components/LoginForm";
import Cookies from 'js-cookie';
import { getLocalStoreMap, localStoreMap } from "./utils/utils";

export interface User {
    fullName: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export type LoginResponse = {
    loggedIn: boolean;
    error: string;
    user: User | null;
}

const Users: Map<string, User> = getLocalStoreMap('users');
const sessionUsers: Map<string, User> = getLocalStoreMap('session');


export const registerUser = async (data: RegisterData) => {
    try {
        // will call a real API to register user
        // const response = await fetch('https://api.example.com/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email: data.email }),
        // });
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        // const result = await response.json();

        const response = {
            created: false,
            error: ''
        }

        if (!data || !data.password) {
            response.error = 'Email and password are required';
            return response;
        }

        if (Users.has(data.email)) {
            response.error = 'User already exists';
            return response
        }

        Users.set(data.email, data);

        // save to local storage
        localStoreMap(Users, 'users');

        response.created = true;

        console.log("User : ", Users);

        return response;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

export const loginUser = (data: LoginData) => {
    try {
        // const payload = {
        //     email: data.email,
        //     password: data.password
        // }
        // const response = await fetch('https://api.example.com/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(payload),
        // });
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }

        const response: LoginResponse = {
            loggedIn: false,
            error: '', 
            user: null
        };

        if (!data.email || !data.password) {
            response.error = 'Email and password are required';
            return response;
        }

        if (!Users.has(data.email)) {
            response.error = 'User not registered';
            return response;
        }

        const user = Users.get(data.email);
        if (!user || user.password !== data.password) {
            response.error = 'Invalid email or password';
            return response;
        }

        // set email in cookie 
        Cookies.set('email', data.email, { expires: 7 });

        // save to local storage as session user
        sessionUsers.set(data.email, user!);
        localStoreMap(sessionUsers, 'session');

        response.loggedIn = true;
        response.user = user;
        return response;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

export const logoutUser = (email: string) => {
    Cookies.remove('email');
    if (sessionUsers.has(email)) {
        sessionUsers.delete(email);
        localStoreMap(sessionUsers, 'session');
    }
}

export const checkLogin: () => User | false = () => {
    const email = Cookies.get('email');
    if (email && sessionUsers.has(email)) {
        return sessionUsers.get(email)!;
    }
    return false;
}





