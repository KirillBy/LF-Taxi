import {ADD_ADDRESSES } from '../actions/address'

const initialState = {
    listAddresses: null,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_ADDRESSES : {
            return {listAddresses: action.payload}
        }
        default:
            return state
    }
}