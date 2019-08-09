import {
    FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE
} from '../actions/index'

const initialState = {
    friends: [],
    gettingFriends: false,
    error: null
}

const fetchingFriends = (state, action) => {
    return {
        ...state,
        gettingFriends: true,
        error: null
    }
}

const fetchingFriendsSuccess = (state, action) => {
    return {
        ...state,
        gettingFriends: false,
        friends: action.payload,
        error: null
    }
}

const fetchingFriendsFailure = (state, action) => {
    return {
        ...state,
        gettingFriends: false,
        error: action.payload.message
    }
}

export default (state = initialState, action) => {
    
    switch(action.type){
        case FETCHING_FRIENDS:
            return fetchingFriends(state, action)
        case FETCHING_FRIENDS_SUCCESS:
            return fetchingFriendsSuccess(state, action)
        case FETCHING_FRIENDS_FAILURE:
            return fetchingFriendsFailure(state, action)
        default:
            return state
    }
    
}