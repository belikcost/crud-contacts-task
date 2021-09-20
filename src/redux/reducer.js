import {
    ADD_CONTACT_REQUEST,
    EDIT_CONTACT_REQUEST,
    GET_CONTACTS_SUCCESS,
    REMOVE_CONTACT_REQUEST,
    SET_AUTHORIZATION
} from "../constants";


export const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION:
            return {...state, auth: action.payload};
        case GET_CONTACTS_SUCCESS:
            return {...state, contacts: action.payload};
        case EDIT_CONTACT_REQUEST:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact),
            };
        case REMOVE_CONTACT_REQUEST:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };
        case ADD_CONTACT_REQUEST:
            return {...state, contacts: [...state.contacts, action.payload]};
        default:
            return state;
    }
}