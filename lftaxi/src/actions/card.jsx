import { createAction } from 'redux-actions';

export const registerCardStart = createAction("REGISTER_CARD_START");
export const registerCard = createAction("REGISTER_CARD");
export const registerCardError = createAction("REGISTER_CARD_ERROR");

export const getCardDataStart = createAction("GET_CARD_DATA_START");
export const getCardData = createAction("GET_CARD_DATA");
export const setCardData = createAction("SET_CARD_DATA");
export const getCardDataError = createAction("GET_CARD_DATA_ERROR");
export const setCardUpdated = createAction("SET_CARD_UPDATED");