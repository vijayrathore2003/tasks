import { http, HttpResponse } from 'msw';
import type { LoginPayload, RegisterPayload } from '../types';


interface User {
    fullName?: string;
    phoneNumber?: string;
    email: string;
    password: string;
}

const Users: Map<string, User> = new Map();

export const handlers = [

    http.post('https://api.example.com/register', async ({ request }) => {
        const data = await request.json() as RegisterPayload;

        console.log('Intercepted POST data:', data);

        if(!data || !data.password || !data.email || !data.name) {
            return HttpResponse.json(
                { error: 'Email and password and Full Name are required' },
                { status: 400 }
            );
        }

        if(Users.has(data.email)) {
            return HttpResponse.json(
                { error: 'User already exists' },
                { status: 409 }
            );
        }

        Users.set(data.email, data);
        

        return HttpResponse.json(
            { created: true },
            { status: 201 }
        );
    }),

    http.post('https://api.example.com/login', async ({ request }) => {
        const data = await request.json() as LoginPayload;

        console.log('Intercepted LOGIN POST data:', data);

        if(!data.email || !data.password) {
            return HttpResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        const user = Users.get(data.email);
        if(!user || user.password !== data.password) {
            return HttpResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        return HttpResponse.json(
            { loggedIn: true },
            { status: 200 }
        );
    }), 

];
