import {FETCHED_USER} from "../actionTypes";
import {call, put, select, fork, take} from "redux-saga/effects";
import SC from "soundcloud";
import {
    requestUser,
    requestUserError,
    requestUserSuccess
} from "../actionCreators";
import {getCurrentUserId} from "../selectors";

export function* watchFetchUser() {
    while(true) {
        const action = yield take(FETCHED_USER);
        yield fork(fetchUserAsync, action);
    }
}

function* fetchUserAsync({payload: id}) {
    try {
        const currentUserId = yield select(getCurrentUserId);
        if (id !== currentUserId) {
            yield put(requestUser());
            const data = yield call(() => SC.get('/users/' + id).then(tracks => tracks));
            yield put(requestUserSuccess(data));
        }
    } catch (error) {
        yield put(requestUserError());
    }
}