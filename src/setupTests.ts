import '@testing-library/jest-dom/vitest';

import { setupServer } from 'msw/node';
import { handlers } from '../task-13/mocks/handler';
import { afterAll, afterEach, beforeAll } from 'vitest';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());