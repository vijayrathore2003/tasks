import { test, expect } from '@playwright/test';

const name = 'Vijay Singh Rathore';
const email = 'vijay@gmail.com';
const password = '12345';
const page_url = 'http://localhost:5173/task-14';


test.describe('authentication flow', () => {
    test('that registration fails when required fields are missing', async ({ page }) => {
        await page.goto(page_url);
        await page.getByRole('link', { name: 'Register' }).click();
        await page.getByRole('button', { name: 'Register' }).click();
        await expect(page.getByText('Full Name is required')).toBeVisible();
        await expect(page.getByText('Email is required')).toBeVisible();
        await expect(page.getByText('Password is required')).toBeVisible();
    });

    test('that registration succeeds when all fields are filled correctly', async ({ page }) => {
        await page.goto(page_url);
        await page.getByRole('link', { name: 'Register' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).fill('Vijay Singh Rathore');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(password);
        await page.getByRole('button', { name: 'Register' }).click();
        await expect(page.getByTestId('success-message')).toBeVisible();
        await expect(page.getByTestId('success-message')).toContainText('Registered Successfully!');
    });

    test('that login works after successful registration', async ({ page }) => {
        await page.goto(page_url);
        await page.getByRole('link', { name: 'Register' }).click();

        expect(page.url()).toContain('/register');
        await page.getByRole('textbox', { name: 'Full Name' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).fill('vijay singh rathore');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(password);
        await page.getByRole('button', { name: 'Register' }).click();
        await expect(page.getByTestId('success-message')).toBeVisible();
        await expect(page.getByTestId('success-message')).toContainText('Registered Successfully!');
        await page.getByRole('link', { name: 'Already have an account? Login' }).click();

        expect(page.url()).toContain('/login');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(password);
        await page.getByRole('button', { name: 'Login' }).click();

        expect(page.url()).toContain('/profile');
        await expect(page.getByText(email)).toBeVisible();
        await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
        await expect(page.getByRole('button')).toContainText('Logout');
    });

    test('that login form shows error for invalid email', async ({ page }) => {
        await page.goto(page_url);
        await page.getByRole('link', { name: 'Login' }).click();
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByTestId('error-message')).toBeVisible();
        await expect(page.getByTestId('error-message')).toContainText('Please enter a valid email address');
    });

    test('that login fails for non-existent user', async ({ page }) => {
        await page.goto(page_url);
        await page.getByRole('link', { name: 'Register' }).click();

        expect(page.url()).toContain('/register');
        await page.getByRole('textbox', { name: 'Full Name' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).fill('vijay');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('vsr@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
        await page.getByRole('button', { name: 'Register' }).click();
        await expect(page.getByTestId('success-message')).toBeVisible();
        await expect(page.getByTestId('success-message')).toContainText('Registered Successfully!');
        await page.getByRole('link', { name: 'Already have an account? Login' }).click();

        expect(page.url()).toContain('/login');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('vjay@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByTestId('error-message')).toBeVisible();
        await expect(page.getByTestId('error-message')).toContainText('Login failed');
    });

    test('that login and logout works correctly', async ({ page }) => {
        await page.goto(page_url);
        await page.getByRole('link', { name: 'Register' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).fill(name);
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(password);
        await page.getByRole('button', { name: 'Register' }).click();
        await expect(page.getByTestId('success-message')).toBeVisible();
        await expect(page.getByTestId('success-message')).toContainText('Registered Successfully!');
        await page.getByRole('link', { name: 'Already have an account? Login' }).click();

        expect(page.url()).toContain('/login');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(password);
        await page.getByRole('button', { name: 'Login' }).click();

        expect(page.url()).toContain('/profile');
        await expect(page.getByRole('heading', { name: 'Welcome to your Profile' })).toBeVisible();
        await expect(page.getByRole('heading')).toContainText('Welcome to your Profile');
        await expect(page.getByText(email)).toBeVisible();
        await expect(page.locator('span')).toContainText(email);
        await page.getByRole('button', { name: 'Logout' }).click();

        expect(page.url()).toContain('/login');
    });
})






