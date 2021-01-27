import {addRoute, addAddresses} from '../actions/address'

const initialState = {
    listAddresses: null,
    route: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case addAddresses.toString(): {
            return {...state, listAddresses: action.payload}
        }
        case addRoute.toString(): {
            return {...state, route: action.payload}
        }
        default:
            return state
    }
}