

export enum ActionTypes {
    NEXT_STEP = 'NEXT_STEP',
    PREVIOUS_STEP = 'PREVIOUS_STEP',
    UPDATE_TEXT_INPUT = 'UPDATE_TEXT_INPUT'
}


export type NextStepAction = {
    type: ActionTypes.NEXT_STEP
}

export type PreviousStepAction = {
    type: ActionTypes.PREVIOUS_STEP
}

export type UpdateTextInput = {
    type: ActionTypes.UPDATE_TEXT_INPUT, 
    field: string
    payload: string
}

export type Actions = NextStepAction | PreviousStepAction | UpdateTextInput