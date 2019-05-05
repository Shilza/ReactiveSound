import {FETCHED_FAVORITE_TRACKS, FETCHED_FAVORITE_TRACKS_BY_PAGE} from "../actionTypes";
import {put, call, select, takeLatest} from "redux-saga/effects";
import {requestFavoriteTracks, requestFavoriteTracksError, requestFavoriteTracksSuccess} from "../actionCreators";
import SC from "soundcloud";
import {getFavoriteTracksNextPage} from "../selectos";

export function* watchFetchFavoriteTracks() {
    yield takeLatest(FETCHED_FAVORITE_TRACKS, fetchFavoriteTracksAsync);
}

export function* watchFetchFavoriteTracksByPage() {
    yield takeLatest(FETCHED_FAVORITE_TRACKS_BY_PAGE, fetchFavoriteTracksByPageAsync);
}

function* fetchFavoriteTracksByPageAsync() {
    try {
        const nextPage = yield select(getFavoriteTracksNextPage);
        const response = yield call(fetch, nextPage);
        const data = yield call([response, response.json]);
        yield put(requestFavoriteTracksSuccess(data));
    } catch (error) {
        yield put(requestFavoriteTracksError());
    }
}

function* fetchFavoriteTracksAsync() {
    try {
        yield put(requestFavoriteTracks());
        const data = yield call(() => SC.get('/users/185676792/favorites', {
            limit: 20,
            linked_partitioning: 1
        }).then(tracks => tracks));
        yield put(requestFavoriteTracksSuccess(data));
    } catch (error) {
        yield put(requestFavoriteTracksError());
    }
}