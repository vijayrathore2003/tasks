import { useContext, type ChangeEvent } from "react";
import { ActionTypes } from "../actions"
import MultiStepForm, { MultiStepFormContext } from './MultiStepForm'

export default function NameForm() {

    const context = useContext(MultiStepFormContext)
    if (!context) {
        throw new Error("Step must be used inside <MultiStephtmlForm>");
    }
    const { state, dispatch } = context;

    const NameFormUi = [
        {
            name: "first-name",
            lable: "First Name",
            type: "text",
            placeholder: "First Name",
            required: true,
            value: state.formData.firstName,
            onChange: (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: ActionTypes.UPDATE_TEXT_INPUT, field: 'firstName', payload: e.target.value })
        },
        {
            name: "middle-name",
            lable: "Middle Name",
            type: "text",
            placeholder: "Middle Name",
            required: true,
            value: state.formData.middleName,
            onChange: (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: ActionTypes.UPDATE_TEXT_INPUT, field: 'middleName', payload: e.target.value })
        },
        {
            name: "last-name",
            lable: "Last Name",
            type: "text",
            placeholder: "Last Name",
            required: true,
            value: state.formData.lastName,
            onChange: (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: ActionTypes.UPDATE_TEXT_INPUT, field: 'lastName', payload: e.target.value })
        },
    ]


    const handleNext = (moveForward: () => void) => {
        if (!state.formData.firstName.trim() || !state.formData.middleName.trim() || !state.formData.lastName.trim()) {
            return alert("Fill the information first");
        }
        moveForward()
    }

    return (

        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 w-full">
            <h3 className="text-xl font-bold text-center mb-4 dark:text-gray-200">Personal Details</h3>
            <form>
                {
                    NameFormUi && Array.isArray(NameFormUi) && NameFormUi.map((el) => (
                        <div className="mb-4">
                            <label htmlFor={el.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{el.lable}</label>
                            <input type={el.type} id={el.name} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder={el.placeholder} required={el.required} value={el.value} onChange={el.onChange} />
                        </div>
                    ))
                }
                <div className="flex justify-between">
                    <MultiStepForm.Previous className=' flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                    <MultiStepForm.Next onClick={handleNext} className=' flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                </div>
            </form>
        </div>

        // <div classNameName="w-[30%]">

        //     {
        //         htmlForm1Ui.map((info) => (
        //             <div classNameName="flex flex-col ">
        //                 <label htmlhtmlFor={info.lable}>{info.lable}</label>
        //                 <input classNameName="outline" type={info.type} onChange={info.onChange} />
        //             </div>
        //         ))
        //     }

        // </div>
    )
}