import { all, call } from 'redux-saga/effects';

import authorizationWatcher from "./authorization";


export default function* mainSaga() {
    yield all([
        call(authorizationWatcher),
    ]);
}