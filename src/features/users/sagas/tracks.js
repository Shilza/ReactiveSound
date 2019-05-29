import {call, put, select, takeEvery} from "redux-saga/effects";
import {
    requestUsersLikedTracksError,
    requestUsersTracks,
    requestUsersTracksError,
    requestUsersTracksSuccess,
    resetUsersTracks
} from "../actionCreators";
import {FETCHED_USERS_TRACKS, FETCHED_USERS_TRACKS_BY_PAGE} from "../actionTypes";
import {getCountOfUsersTracks, getCurrentUserTracksUserId, getUsersTracksNextPage} from "../selectors";
import {tracksApi} from "../../common/api";

export function* watchFetchUsersTracks() {
    yield takeEvery(FETCHED_USERS_TRACKS, fetchUsersTracksAsync);
}

export function* watchFetchUsersTracksByPage() {
    yield takeEvery(FETCHED_USERS_TRACKS_BY_PAGE, fetchUsersTrackByPagesAsync);
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
        const currentUserId = yield select(getCurrentUserTracksUserId);

        if (id !== currentUserId || countOfTracks === 0) {
            yield put(resetUsersTracks());
            yield put(requestUsersTracks());
            const data = yield call(tracksApi.getUsersTracksById, id);
            yield put(requestUsersTracksSuccess({...data, userId: id}));
        }
    }
    catch (error) {
        yield put(requestUsersTracksError());
    }
}