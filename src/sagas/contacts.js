import { takeEvery, call, put } from 'redux-saga/effects';

import { GET_CONTACTS_REQUEST } from "../constants";
import { getContactsSuccess } from "../redux/actions";


function* getContacts() {
    const result = yield call(getContactsFetch);
    yield put(getContactsSuccess(result));
}

const getContactsFetch = () => {
    return fetch('http://localhost:3004/contacts').then(response => response.json());
}

export default function* getContactsWatcher() {
    yield takeEvery(GET_CONTACTS_REQUEST, getContacts);
}