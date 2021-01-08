import {createStore} from 'redux';
import rootReducer from '../reducers/auth';

export const store = createStore(rootReducer);