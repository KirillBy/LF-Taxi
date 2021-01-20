import {registerCardStart, registerCardError,
    setCardData, getCardDataStart, getCardDataError } from "../actions/card";

const initialState = {
    cardNumber: '',
    cardName: '',
    cvc: '',
    expiryDate: '',
    error: null,
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case getCardDataStart.toString(): {
            return {...state, loading: true, error: null}
        }
        case setCardData.toString(): {
            return {...state, ...action.payload, loading: false, error: null}
        }
        case getCardDataError.toString(): {
            return {...state, loading: false, error: action.payload.error}
        }
        case registerCardStart.toString(): {
            return {...state, loading: true, error: null}
        }
        case registerCardError.toString(): {
            return {...state, loading: false, error: action.payload.error}
        }
    
        default:
            return state;
    }
}