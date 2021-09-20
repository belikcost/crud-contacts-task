import {
    ADD_CONTACT_REQUEST,
    ADD_CONTACT_SUCCESS,
    AUTHORIZATION_REQUEST,
    EDIT_CONTACT_REQUEST,
    EDIT_CONTACT_SUCCESS,
    GET_CONTACTS_REQUEST,
    GET_CONTACTS_SUCCESS,
    REMOVE_CONTACT_REQUEST,
    REMOVE_CONTACT_SUCCESS,
    SET_AUTHORIZATION
} from "../constants";


export const authorizationRequest = (data) => ({type: AUTHORIZATION_REQUEST, payload: data});
export const setAuthorization = (data) => ({type: SET_AUTHORIZATION, payload: data});

export const getContactsRequest = () => ({type: GET_CONTACTS_REQUEST});
export const getContactsSuccess = (data) => ({type: GET_CONTACTS_SUCCESS, payload: data});

export const editContactRequest = (data) => ({type: EDIT_CONTACT_REQUEST, payload: data});
export const editContactSuccess = (data) => ({type: EDIT_CONTACT_SUCCESS, payload: data});

export const removeContactRequest = (data) => ({type: REMOVE_CONTACT_REQUEST, payload: data});
export const removeContactSuccess = (data) => ({type: REMOVE_CONTACT_SUCCESS, payload: data});

export const addContactRequest = (data) => ({type: ADD_CONTACT_REQUEST, payload: data});
export const addContactSuccess = (data) => ({type: ADD_CONTACT_SUCCESS, payload: data});