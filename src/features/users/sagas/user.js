import {FETCHED_USER} from "../actionTypes";
import {call, fork, put, select, take} from "redux-saga/effects";
import {requestUser, requestUserError, requestUserSuccess} from "../actionCreators";
import {getCurrentUserId} from "../selectors";
import {tracksApi} from "../../common/api";

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
            const data = yield call(tracksApi.getUserById, id);
            yield put(requestUserSuccess(data));
        }
    } catch (error) {
        yield put(requestUserError());
    }
}