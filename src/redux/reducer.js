import { SET_AUTHORIZATION } from "../constants";


export const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION:
            return {...state, auth: action.payload};
        default:
            return state;
    }
}