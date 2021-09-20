import { takeEvery, call } from 'redux-saga/effects';

import { ADD_CONTACT_REQUEST } from "../constants";


function* addContact(action) {
    yield call(addContactFetch, action.payload);
}

const addContactFetch = ({id, ...data}) => {
    return fetch(`http://localhost:3004/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

export default function* addContactWatcher() {
    yield takeEvery(ADD_CONTACT_REQUEST, addContact);
}