import axios from 'axios';

export const LOGGING_IN = "LOGGING_IN";
export const LOGGING_IN_SUCCESS = "LOGGING_IN_SUCCESS";
export const LOGGING_IN_FAILURE = "LOGGING_IN_FAILURE";

// LOGGING_IN, LOGGING_IN_SUCCESS, LOGGING_IN_FAILURE

export const login = credentials => dispatch => {
    dispatch({
        type: LOGGING_IN
    })

    axios
        .get('/api/login/')
        .then(res => {
            console.log(res)
            dispatch({
                type: LOGGING_IN_SUCCESS
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: LOGGING_IN_FAILURE
            })
        })
}