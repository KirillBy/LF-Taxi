import { AUTHENTICATE, logIn } from "../actions/login";
import { serverLogIn } from "../api/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function*  authenticateSaga(action)  {
  const { email, password } = action.payload;
  const response = yield call(serverLogIn, email, password);
  if (response.success) {
    localStorage.setItem('token', response.token);
    yield put(logIn());
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}