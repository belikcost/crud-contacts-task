import { takeEvery, call, put } from 'redux-saga/effects';

import { EDIT_CONTACT_REQUEST } from "../constants";
import { editContactSuccess } from "../redux/actions";


function* editContact(action) {
    const result = yield call(editContactFetch, action.payload);
    yield put(editContactSuccess(result));
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