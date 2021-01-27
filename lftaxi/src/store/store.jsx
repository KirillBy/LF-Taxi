import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga' 
import {authSaga} from '../saga/authSaga'
import {regSaga} from '../saga/registrationSaga'
import {adrsSaga} from '../saga/addressSaga'
import {paySaga} from '../saga/paymentSaga'
import {rtSaga} from '../saga/routeSaga'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );

sagaMiddleware.run(authSaga);
sagaMiddleware.run(regSaga);
sagaMiddleware.run(adrsSaga);
sagaMiddleware.run(paySaga);
sagaMiddleware.run(rtSaga);