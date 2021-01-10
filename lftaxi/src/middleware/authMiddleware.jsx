import { AUTHENTICATE, logIn } from "./../actions/login";
import {serverLogIn} from './../api/api';





export const authMiddleware = (store) => (next) => async (action) => {

  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const success = await serverLogIn(email, password)
    if(success){       
      store.dispatch(logIn());    
    }
  } else {
    next(action);
  }
};