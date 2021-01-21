import {addRoute, getRoute} from "../actions/address";
import { serverGetRoute} from "../api/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* routeSaga(action) {
    console.log(action)
    const { startPoint, destPoint } = action.payload;
  const response = yield  call(serverGetRoute, startPoint, destPoint);
  console.log(response);
  if (response.length > 0) {
    yield put(addRoute(response));
  }
}

export function* rtSaga() {
  yield takeEvery(getRoute.toString(), routeSaga);
}