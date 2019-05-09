import {call, fork, put, select, take} from "redux-saga/effects";
import SC from "soundcloud";
import {
    requestUsersLikedTracks,
    requestUsersLikedTracksError,
    requestUsersLikedTracksSuccess,
    resetLikedTracks
} from "../actionCreators";
import {FETCHED_USERS_LIKED_TRACKS, FETCHED_USERS_LIKED_TRACKS_BY_PAGE} from "../actionTypes";
import {getCountOfLikedTracks, getCurrentLikedTracksUserId, getLikedTracksNextPage} from "../selectors";

export function* watchFetchUsersLikedTracks() {
    while (true) {
        const action = yield take(FETCHED_USERS_LIKED_TRACKS);
        yield fork(fetchUsersLikedTracksAsync, action);
    }
}

export function* watchFetchLikedTracksByPage() {
    while (true) {
        const action = yield take(FETCHED_USERS_LIKED_TRACKS_BY_PAGE);
        yield fork(fetchLikedTracksByPageAsync, action);
    }
}

function* fetchLikedTracksByPageAsync() {
    try {
        const nextPage = yield select(getLikedTracksNextPage);
        const response = yield call(fetch, nextPage);
        const data = yield call([response, response.json]);
        yield put(requestUsersLikedTracksSuccess(data));
    } catch (error) {
        yield put(requestUsersLikedTracksError());
    }
}

function* fetchUsersLikedTracksAsync({payload: id}) {
    try {
        const countOfTracks = yield select(getCountOfLikedTracks);
        const currentUserId = yield select(getCurrentLikedTracksUserId);

        if (id !== currentUserId || countOfTracks === 0) {
            yield put(resetLikedTracks());
            yield put(requestUsersLikedTracks());
            const data = yield call(() => SC.get(`/users/${id}/favorites`, {
                        limit: 20,
                        linked_partitioning: 1
                    }).then(tracks => tracks)
            );
            yield put(requestUsersLikedTracksSuccess({...data, userId: id}));
        }
    }
    catch (error) {
        yield put(requestUsersLikedTracksError());
    }
}
