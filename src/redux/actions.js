import { AUTHORIZATION_REQUEST, SET_AUTHORIZATION } from "../constants";

export const authorizationRequest = (data) => ({type: AUTHORIZATION_REQUEST, payload: data});
export const setAuthorization = (data) => ({type: SET_AUTHORIZATION, payload: data});