import {getAddresses, addAddresses} from "../actions/address";
import { serverAddresses} from "../api/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* addressSaga(action) {
  const response = yield  call(serverAddresses);
  
  if (response.addresses.length > 0) {
    yield put(addAddresses(response.addresses));
  }
}

export function* adrsSaga() {
  yield takeEvery(getAddresses.toString(), addressSaga);
}