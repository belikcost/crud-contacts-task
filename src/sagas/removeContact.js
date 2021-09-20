import { takeEvery, call } from 'redux-saga/effects';

import { REMOVE_CONTACT_REQUEST } from "../constants";


function* removeContact(action) {
    yield call(removeContactFetch, action.payload);
}

const removeContactFetch = (id) => {
    return fetch(`http://localhost:3004/contacts/${id}`, {method: 'DELETE'}).then(response => response.json());
}

export default function* removeContactWatcher() {
    yield takeEvery(REMOVE_CONTACT_REQUEST, removeContact);
}