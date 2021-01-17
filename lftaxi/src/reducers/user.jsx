import {ADD_USER_CARD } from '../actions/user'

const initialState = {
    userCard: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_USER_CARD : {
            return {userCard: action.payload}
        }
        default:
            return state
    }
}