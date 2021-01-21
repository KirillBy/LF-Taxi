import { all, put, takeEvery, call } from "redux-saga/effects";
import {registerCardStart, registerCardError,
setCardData, getCardDataStart, getCardDataError, registerCard, getCardData, setCardUpdated } from "../actions/card";
import {serverRegisterCard, serverGetCardData} from "../api/api";

export function* registerCardSaga(action){
    console.log("ddd")
    yield put(registerCardStart());
    const token = yield localStorage.getItem("token");

    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    try {
        const response = yield call(
            serverRegisterCard,
            cardNumber,
            expiryDate,
            cardName,
            cvc,
            token
        );
        if(response.success){
            yield put(setCardData({cardNumber, expiryDate, cardName, cvc}));
            yield put(setCardUpdated());
        } else {
            yield put(registerCardError({error: response.error}));
        }
    } catch(e) {
        yield put(registerCardError({error: "Can't save card data"}));
    }
}

export function* getCardSaga(action) {
    yield put(getCardDataStart());
    const token = yield localStorage.getItem("token");
    try{
        const response = yield call(serverGetCardData, token);
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
    yield all([ 
        takeEvery(registerCard.toString(), registerCardSaga),
        takeEvery(getCardData.toString(), getCardSaga)
    ]);
}