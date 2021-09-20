import { takeEvery, call } from 'redux-saga/effects';

import { EDIT_CONTACT_REQUEST } from "../constants";


function* editContact(action) {
    yield call(editContactFetch, action.payload);
}

const editContactFetch = ({id, ...data}) => {
    return fetch(`http://localhost:3004/contacts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

export default function* editContactWatcher() {
    yield takeEvery(EDIT_CONTACT_REQUEST, editContact);
}