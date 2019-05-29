import {call, put, select, takeEvery} from "redux-saga/effects";
import {
    requestUsersLikedTracks,
    requestUsersLikedTracksError,
    requestUsersLikedTracksSuccess,
    resetLikedTracks
} from "../actionCreators";
import {FETCHED_USERS_LIKED_TRACKS, FETCHED_USERS_LIKED_TRACKS_BY_PAGE} from "../actionTypes";
import {getCountOfLikedTracks, getCurrentLikedTracksUserId, getLikedTracksNextPage} from "../selectors";
import {tracksApi} from "../../common/api";

export function* watchFetchUsersLikedTracks() {
     yield takeEvery(FETCHED_USERS_LIKED_TRACKS, fetchUsersLikedTracksAsync);
}

export function* watchFetchLikedTracksByPage() {
    yield takeEvery(FETCHED_USERS_LIKED_TRACKS_BY_PAGE, fetchLikedTracksByPageAsync);
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
            const data = yield call(tracksApi.getFavorites, id);
            yield put(requestUsersLikedTracksSuccess({...data, userId: id}));
        }
    }
    catch (error) {
        yield put(requestUsersLikedTracksError());
    }
}
