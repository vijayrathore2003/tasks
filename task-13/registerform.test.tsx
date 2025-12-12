
import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterForm, { CONSTANTS } from './components/RegisterForm';
import { it, expect } from 'vitest';


const fillEmail = async (email: string) => {
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, email);
}

const fillFullName = async (fullName: string) => {
    const fullNameInput = screen.getByLabelText(/Full Name/i);
    await userEvent.type(fullNameInput, fullName);
}

const fillPassword = async (password: string) => {
    const passwordInput = screen.getByLabelText(/Password/i);
    await userEvent.type(passwordInput, password);
}

const clickOnRegister = async()=>{
    const registerButton = screen.getByRole('button', { name: /Register/i });
    await userEvent.click(registerButton);
}

it('renders the registration form', () => {
  render(<RegisterForm />);
  expect(screen.getByText('Register')).toBeInTheDocument();
});


it('shows an error message for an empty submission', async () => {
  render(<RegisterForm />);
  
  await userEvent.click(screen.getByRole('button', { name: /register/i }));

  expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
  expect(screen.queryByTestId('success-message')).not.toBeInTheDocument();
})


it('shows an error message for an invalid email', async () => {
    render(<RegisterForm />);
    
    await fillEmail('vijay-gamil.com');
    await clickOnRegister();

    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
    expect(screen.queryByTestId('success-message')).not.toBeInTheDocument();
});

it('should show success message when form is correctly submitted', async () => {
    render(<RegisterForm/>)

    await fillFullName('VSR')
    await fillEmail('vijay@gmail.com')
    await fillPassword('Vijay@1234')
    await clickOnRegister()

    expect(screen.getByTestId('success-message')).toBeInTheDocument();
    expect(screen.getByTestId('success-message')).toHaveTextContent(CONSTANTS.SUCCESS_MESSAGE);
    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
})
