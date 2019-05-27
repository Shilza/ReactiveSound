import {FETCHED_FAVORITE_TRACKS, FETCHED_FAVORITE_TRACKS_BY_PAGE} from "../actionTypes";
import {call, put, select, takeEvery} from "redux-saga/effects";
import {requestFavoriteTracks, requestFavoriteTracksError, requestFavoriteTracksSuccess} from "../actionCreators";
import {getFavoriteTracksNextPage} from "../selectos";
import {tracksApi} from "../../common/api";

export function* watchFetchFavoriteTracks() {
    yield takeEvery(FETCHED_FAVORITE_TRACKS, fetchFavoriteTracksAsync);
}

export function* watchFetchFavoriteTracksByPage() {
    yield takeEvery(FETCHED_FAVORITE_TRACKS_BY_PAGE, fetchFavoriteTracksByPageAsync);
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
        const data = yield call(tracksApi.getFavorites);
        yield put(requestFavoriteTracksSuccess(data));
    } catch (error) {
        yield put(requestFavoriteTracksError());
    }
}