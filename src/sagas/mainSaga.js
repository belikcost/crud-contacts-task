import { all, call } from 'redux-saga/effects';

import authorizationWatcher from "./authorization";
import getContactsWatcher from "./contacts";


export default function* mainSaga() {
    yield all([
        call(authorizationWatcher),
        call(getContactsWatcher),
    ]);
}