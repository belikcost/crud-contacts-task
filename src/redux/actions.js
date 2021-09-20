import { AUTHORIZATION_REQUEST, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS, SET_AUTHORIZATION } from "../constants";


export const authorizationRequest = (data) => ({type: AUTHORIZATION_REQUEST, payload: data});
export const setAuthorization = (data) => ({type: SET_AUTHORIZATION, payload: data});

export const getContactsRequest = () => ({type: GET_CONTACTS_REQUEST});
export const getContactsSuccess = (data) => ({type: GET_CONTACTS_SUCCESS, payload: data});