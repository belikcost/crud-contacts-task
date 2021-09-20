import { all, call } from 'redux-saga/effects';

import authorizationWatcher from "./authorization";
import getContactsWatcher from "./contacts";
import editContactWatcher from "./editContact";
import removeContactWatcher from "./removeContact";


export default function* mainSaga() {
    yield all([
        call(authorizationWatcher),
        call(getContactsWatcher),
        call(editContactWatcher),
        call(removeContactWatcher),
    ]);
}