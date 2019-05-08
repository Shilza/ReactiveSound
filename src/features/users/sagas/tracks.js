import {call, put, select, fork, take} from "redux-saga/effects";
import SC from "soundcloud";
import {
    requestUsersLikedTracksError,
    requestUsersTracks,
    requestUsersTracksError,
    requestUsersTracksSuccess,
    resetUsersTracks
} from "../actionCreators";
import {FETCHED_USERS_TRACKS, FETCHED_USERS_TRACKS_BY_PAGE} from "../actionTypes";
import {getCountOfUsersTracks, getCurrentUserId, getUsersTracksNextPage} from "../selectors";

export function* watchFetchUsersTracks() {
    while(true) {
        const action = yield take(FETCHED_USERS_TRACKS);
        yield fork(fetchUsersTracksAsync, action);
    }
}

export function* watchFetchUsersTracksByPage() {
    while(true) {
        const action = yield take(FETCHED_USERS_TRACKS_BY_PAGE);
        yield fork(fetchUsersTrackByPagesAsync, action);
    }
}

function* fetchUsersTrackByPagesAsync() {
    try {
        const nextPage = yield select(getUsersTracksNextPage);
        const response = yield call(fetch, nextPage);
        const data = yield call([response, response.json]);
        yield put(requestUsersTracksSuccess(data));
    } catch (error) {
        yield put(requestUsersLikedTracksError());
    }
}

function* fetchUsersTracksAsync({payload: id}) {
    try {
        const countOfTracks = yield select(getCountOfUsersTracks);
        const currentUserId = yield select(getCurrentUserId);

        if (id !== currentUserId || countOfTracks === 0) {
            yield put(resetUsersTracks());
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