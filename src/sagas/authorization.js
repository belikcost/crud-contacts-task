import { takeEvery, call, put } from 'redux-saga/effects';

import { AUTHORIZATION_REQUEST } from "../constants";
import { setAuthorization } from "../redux/actions";


function* authorization(action) {
    const result = yield call(authorizationFetch, action.payload);
    yield put(setAuthorization(result));
}

const authorizationFetch = (data) => {
    return fetch('http://localhost:3004/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data),
    }).then(response => response.json());
}

export default function* authorizationWatcher() {
    yield takeEvery(AUTHORIZATION_REQUEST, authorization);
}