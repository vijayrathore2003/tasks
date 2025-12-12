import { http, HttpResponse } from 'msw';

export const handlers = [
    http.post('https://api.example.com/register', async ({ request }) => {
        const data = await request.json();

        console.log('Intercepted POST data:', data);

        return HttpResponse.json(
            { created: true },
            { status: 201 }
        );
    }),

];
