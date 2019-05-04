import {call, put, select, takeLatest} from "redux-saga/effects";
import SC from "soundcloud";
import {requestUsersTracks, requestUsersTracksError, requestUsersTracksSuccess} from "../actionCreators";
import {FETCHED_USERS_TRACKS} from "../actionTypes";
import {getCurrentUserId} from "../selectors";

export function* watchFetchUsersTracks() {
    yield takeLatest(FETCHED_USERS_TRACKS, fetchUsersTracksAsync);
}

function* fetchUsersTracksAsync({payload: id}) {
    try {
        const currentUserId = yield select(getCurrentUserId);
        console.log(currentUserId);
        if (id !== currentUserId) {
            yield put(requestUsersTracks());
            const data = yield call(() => {
                    return SC.get(`/users/${id}/tracks`, {
                        limit: 20,
                        linked_partitioning: 1
                    }).then(data => data);
                }
            );
            yield put(requestUsersTracksSuccess(data));
        }
    }
    catch (error) {
        yield put(requestUsersTracksError());
    }
}