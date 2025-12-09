import MultiStepForm from './components/MultiStepForm'
import AddressForm from './components/AddressForm'
import ContactDetailsForm from './components/ContactDetailsForm'
import NameForm from './components/NameForm'

function Task5() {
    return (
        <div className="min-h-screen w-[30%] mx-auto broder flex flex-col gap-3 items-center justify-center  dark:bg-gray-950">
            <MultiStepForm>

                <h1 className="text-2xl font-bold text-center dark:text-gray-200">Multi Step Form</h1>
                <MultiStepForm.State/>

                <MultiStepForm.Step stepIndex={1}>
                    <NameForm />
                </MultiStepForm.Step>

                <MultiStepForm.Step stepIndex={2}>
                    <ContactDetailsForm />
                </MultiStepForm.Step>

                <MultiStepForm.Step stepIndex={3}>
                    <AddressForm />
                </MultiStepForm.Step>

                <div className='flex w-full justify-center'>
                    
                    <MultiStepForm.Submit className=' flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                    
                </div>

            </MultiStepForm>
        </div >
    )
}

export default Task5