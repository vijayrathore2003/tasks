    
    
export interface IMultiFormData {
    step: number, 
    totalSteps : number,
    formData: {
        firstName: string,
        middleName: string, 
        lastName: string,
        age: string,
        email: string, 
        phone: string, 
        address: string, 
        pincode: string, 
        city: string
    }
}