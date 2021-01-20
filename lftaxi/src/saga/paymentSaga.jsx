import { all, put, takeEvery, call } from "redux-saga/effects";
import {registerCardStart, registerCardError,
setCardData, getCardDataStart, getCardDataError, registerCard } from "../actions/card";
import {serverRegisterCard, getCardData} from "../api/api";

export function* registerCardSaga(action){
    console.log("ddd")
    yield put(registerCardStart());
    const token = yield localStorage.getItem("token");

    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    try {
        const response = yield call(
            serverRegisterCard,
            expiryDate,
            cardNumber,
            cardName,
            cvc,
            token
        );
        if(response.success){
            yield put(setCardData({cardNumber, expiryDate, cardName, cvc}));
        } else {
            yield put(registerCardError({error: response.error}));
        }
    } catch(e) {
        yield put(registerCardError({error: "Can't save card data"}));
    }
}

export function* getCardSage(action) {
    yield put(getCardDataStart());
    const token = yield localStorage.getItem("token");
    try{
        const response = yield call(getCardData, token);
        if(response.id) {
            yield put(setCardData(response));
        }else {
            yield put(getCardDataError({error: null}));
        }
    }catch(e) {
        yield put(getCardDataError({error: "Can't get card data"}));
    }
} 

export function* paySaga(){
    yield all([ takeEvery(registerCard.toString(), registerCardSaga)]);
}