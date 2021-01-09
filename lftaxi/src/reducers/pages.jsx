import { ON_MAP, ON_PROFILE, ON_LOGIN } from "../actions/pages"

const initialState = {
    map: false,
    profile: false,
    login: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ON_MAP : {
            return {map: true, profile: false, login: false}
        }
        case ON_PROFILE : {
            return {map: false, profile: true, login: false }
        }
        case ON_LOGIN : {
            return {map: false, profile: false, login: true }
        }
        default:
            return state
    }
}