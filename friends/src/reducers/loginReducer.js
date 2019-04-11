import {LOGGING_IN, LOGGING_IN_SUCCESS, LOGGING_IN_FAILURE} from '../actions/loginActions.js'

const initialState = {
    token: null,
    isLogginIn: false,
    error: ''
}


const caseLoggingIn = state => ({
    ...state,
    isLogginIn: true,
    error: ''
})

const caseLoggingInSuccess = (state, action) => {
    let token = action.payload;
    return ({
        ...state,
        token,
        isLogginIn: false,
        error: ''
    })
}

const caseLoggingInFailure = (state, action) => {
    let message = action.payload;
    return ({
        ...state,
        token: null,
        isLogginIn: false,
        error: message
    })
}

export default (state = initialState, action) => {
    
    switch(action.type){
        case LOGGING_IN:
            return caseLoggingIn(state)
        case LOGGING_IN_SUCCESS:
            return caseLoggingInSuccess(state, action)
        case LOGGING_IN_FAILURE:
            return caseLoggingInFailure(state, action)
        default:
            return state
    }
    
}