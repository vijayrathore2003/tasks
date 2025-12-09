import React, { createContext, useContext, useReducer } from "react"
import multiStepFormDispatcher from '../dispatcher/MultiStepFormDispatcher'
import type { IMultiFormData } from '../types'
import { ActionTypes, type Actions } from '../actions/index'


type propType = {
    children: React.ReactNode
}

type MultiStepFormContextType = {
    state: IMultiFormData
    dispatch: React.Dispatch<Actions>
}
export const MultiStepFormContext = createContext<MultiStepFormContextType | null>(null);

const initialFormData: IMultiFormData = {
    step: 1,
    totalSteps: 1,
    formData: {
        firstName: '',
        middleName: '',
        lastName: '',
        age: '',
        email: '',
        phone: '',
        address: '',
        pincode: '',
        city: ''
    }
}

function MultiStepForm({ children }: propType) {

    const childrenArray = React.Children.toArray(children);

    const steps = childrenArray.filter(
        (child) => (child as any).type.displayName === "FormStep"
    );
    initialFormData.totalSteps = steps.length

    const [state, dispatch] = useReducer(multiStepFormDispatcher, initialFormData)

    return (
        <MultiStepFormContext.Provider value={{ state, dispatch }}>
            {children}
        </MultiStepFormContext.Provider>
    )
}

MultiStepForm.Step = Step
MultiStepForm.Next = Next
MultiStepForm.Previous = Previous
MultiStepForm.Submit = Submit
MultiStepForm.State = State

export default MultiStepForm


type StepProps = {
    stepIndex: number
    children: any
}
function Step({ stepIndex, children }: StepProps) {
    const context = useContext(MultiStepFormContext)
    if (!context) {
        throw new Error("Step must be used inside <MultiStepForm>");
    }
    const { state } = context;

    if (stepIndex === state.step) return <>{children}</>
    return null
}
Step.displayName = "FormStep"


type nextPropType = {
    className: string,
    children?: string,
    onClick: (moveForward: () => void) => void
}
function Next({ children = "Next", className, onClick }: nextPropType) {
    const context = useContext(MultiStepFormContext)
    if (!context) {
        throw new Error("Step must be used inside <MultiStepForm>");
    }
    const { state, dispatch } = context;
    const disabled = state.step === state.totalSteps;

    const moveForward = () => {
        if (state.step < state.totalSteps)
            dispatch({ type: ActionTypes.NEXT_STEP })
    }

    const handleNext = () => {
        onClick(moveForward)
    }

    return <button className={`${className} ${disabled && ' opacity-70 cursor-not-allowed'} `} disabled={disabled} onClick={handleNext}> {children} </button>
}



type previousPropType = {
    className?: string,
    children?: any
}
function Previous({ children = "Previous", className }: previousPropType) {
    const context = useContext(MultiStepFormContext)
    if (!context) {
        throw new Error("Step must be used inside <MultiStepForm>");
    }
    const { state, dispatch } = context;
    const disabled = state.step === 1;

    const handlePrevious = () => {
        if (state.step > 1)
            dispatch({ type: ActionTypes.PREVIOUS_STEP })
    }

    return <button className={`${className} ${disabled && ' opacity-70 cursor-not-allowed'} `} disabled={disabled} onClick={handlePrevious}> {children} </button>
}


type submitPropType = {
    className?: string
}
function Submit({ className }: submitPropType) {
    const context = useContext(MultiStepFormContext)
    if (!context) {
        throw new Error("Step must be used inside <MultiStepForm>");
    }
    const { state } = context;
    const handleSubmit = () => {
        if (state.step !== state.totalSteps) {
            alert("Fill all the details first.")
        }
        console.log(state.formData)
    }
    return <button className={className} onClick={handleSubmit}> Submit </button>

}


function State() {
    const context = useContext(MultiStepFormContext)
    if (!context) {
        throw new Error("Step must be used inside <MultiStepForm>");
    }
    const { state } = context;

    return (
        <div>
            Step : {state.step} / {state.totalSteps}
        </div>
    )
}