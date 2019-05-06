import {call, put, select, takeLatest} from "redux-saga/effects";
import SC from "soundcloud";
import {
    requestUsersLikedTracks,
    requestUsersLikedTracksError,
    requestUsersLikedTracksSuccess,
    resetLikedTracks
} from "../actionCreators";
import {FETCHED_USERS_LIKED_TRACKS, FETCHED_USERS_LIKED_TRACKS_BY_PAGE} from "../actionTypes";
import {getCountOfLikedTracks, getCurrentUserId, getLikedTracksNextPage} from "../selectors";

export function* watchFetchUsersLikedTracks() {
    yield takeLatest(FETCHED_USERS_LIKED_TRACKS, fetchUsersLikedTracksAsync);
}

export function* watchFetchLikedTracksByPage() {
    yield takeLatest(FETCHED_USERS_LIKED_TRACKS_BY_PAGE, fetchLikedTracksByPageAsync);
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
        const currentUserId = yield select(getCurrentUserId);

        if (id !== currentUserId || countOfTracks === 0) {
            yield put(resetLikedTracks());
            yield put(requestUsersLikedTracks());
            const data = yield call(() => {
                    return SC.get(`/users/${id}/favorites`, {
                        limit: 20,
                        linked_partitioning: 1
                    }).then(tracks => tracks);
                }
            );
            yield put(requestUsersLikedTracksSuccess(data));
        }
    }
    catch (error) {
        yield put(requestUsersLikedTracksError());
    }
}
