import {ADD_ADDRESSES, addAddresses} from "../actions/address";
import { serverAddresses} from "../api/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* addressSaga(action) {
  const success = yield  call(serverAddresses);
  if (success) {
    yield put(addAddresses());
  }
}

export function* adrsSaga() {
  yield takeEvery(ADD_ADDRESSES, addressSaga);
}