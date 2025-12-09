import { useContext, type ChangeEvent } from "react";
import MultiStepForm, { MultiStepFormContext } from "./MultiStepForm";
import { ActionTypes } from "../actions";

export default function ContactDetailsForm() {

    const context = useContext(MultiStepFormContext)
    if (!context) {
        throw new Error("Step must be used inside <MultiStepForm>");
    }
    const { dispatch, state } = context;

    const ContactFormUi = [
        {
            name: "age",
            lable: "Age",
            type: "text",
            placeholder: "Age",
            required: true,
            value: state.formData.age,
            onChange: (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: ActionTypes.UPDATE_TEXT_INPUT, field: 'age', payload: e.target.value })
        },
        {
            name: "email",
            lable: "Email",
            type: "email",
            placeholder: "yourname@domain.com",
            required: true,
            value: state.formData.email,
            onChange: (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: ActionTypes.UPDATE_TEXT_INPUT, field: 'email', payload: e.target.value })
        },
        {
            name: "phone",
            lable: "Phone",
            placeholder: "9440224451",
            required: true,
            value: state.formData.phone,
            type: "text",
            onChange: (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: ActionTypes.UPDATE_TEXT_INPUT, field: 'phone', payload: e.target.value })
        },
    ]

    const handleNext = (moveForward: () => void) => {
        if (!state.formData.age.trim() || !state.formData.email.trim() || !state.formData.phone.trim()) {
            return alert("Fill the information first");
        }
        moveForward()
    }

    return (
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 w-full">
            <h3 className="text-xl font-bold text-center mb-4 dark:text-gray-200">Contact Details</h3>
            <form>
                {
                    ContactFormUi && Array.isArray(ContactFormUi) && ContactFormUi.map((el) => (
                        <div className="mb-4">
                            <label htmlFor={el.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{el.lable}</label>
                            <input type={el.type} id={el.name} value={el.value} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder={el.placeholder} required={el.required} onChange={el.onChange} />
                        </div>
                    ))
                }
                <div className="flex justify-between">
                    <MultiStepForm.Previous className=' flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                    <MultiStepForm.Next onClick={handleNext} className=' flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                </div>
            </form>
        </div>
    )
}