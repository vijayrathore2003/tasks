import { useContext, type ChangeEvent } from "react"
import { ActionTypes } from "../actions"
import MultiStepForm, { MultiStepFormContext } from "./MultiStepForm";

export default function AddressForm() {

    const context = useContext(MultiStepFormContext)
    if (!context) {
        throw new Error("Step must be used inside <MultiStepForm>");
    }
    const { state, dispatch } = context;

    const AddressFormUi = [
        {
            name: "address",
            lable: "Address",
            type: "text",
            placeholder: "Address",
            required: true,
            value: state.formData.address,
            onChange: (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: ActionTypes.UPDATE_TEXT_INPUT, field: 'address', payload: e.target.value })
        },
        {
            name: "pincode",
            lable: "Pincode",
            type: "text",
            placeholder: "462023",
            required: true,
            value: state.formData.pincode,
            onChange: (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: ActionTypes.UPDATE_TEXT_INPUT, field: 'pincode', payload: e.target.value })
        },
        {
            name: "city",
            lable: "City",
            type: "text",
            placeholder: "Bhopal",
            required: true,
            value: state.formData.city,
            onChange: (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: ActionTypes.UPDATE_TEXT_INPUT, field: 'city', payload: e.target.value })
        },
    ]

    const handleNext = (moveForward: () => void) => {
        if (!state.formData.address.trim() || !state.formData.pincode.trim() || !state.formData.city.trim()) {
            return alert("Fill the information first");
        }
        moveForward()
    }

    return (
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 w-full">
            <h3 className="text-xl font-bold text-center mb-4 dark:text-gray-200">Address Details</h3>
            <form>
                {
                    AddressFormUi && Array.isArray(AddressFormUi) && AddressFormUi.map((el) => (
                        <div className="mb-4">
                            <label htmlFor={el.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{el.lable}</label>
                            <input type={el.type} value={el.value} id={el.name} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder={el.placeholder} required={el.required} onChange={el.onChange} />
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