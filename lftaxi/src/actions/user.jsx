export const ADD_USER_CARD = "ADD_USER_CARD";
export const ADD_USER = "ADD_USER";

export const addCard = (newCard) => ({ 
    type: ADD_USER_CARD,
    payload: newCard
 });

export const addUser = (newUser) => ({ 
    type: ADD_USER,
    payload: newUser
 });

