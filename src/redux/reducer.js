import { GET_CONTACTS_SUCCESS, SET_AUTHORIZATION } from "../constants";


export const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION:
            return {...state, auth: action.payload};
        case GET_CONTACTS_SUCCESS:
            return {...state, contacts: action.payload};
        default:
            return state;
    }
}