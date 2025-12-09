import type { Actions } from '../actions';
import type {IMultiFormData} from '../types'


export default function multiStepFormDispatcher(state: IMultiFormData, action: Actions) {
    switch (action.type) {
        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step + 1
            };

        case 'PREVIOUS_STEP':
            return {
                ...state,
                step: state.step - 1
            };

        case 'UPDATE_TEXT_INPUT':
            return {
                ...state,
                formData: { ...state.formData, [action.field]: action.payload }
            };

        default:
            return state;
    }
}