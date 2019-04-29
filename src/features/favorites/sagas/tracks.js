import {FETCHED_FAVORITE_TRACKS} from "../actionTypes";
import {put, call, takeLatest} from "redux-saga/effects";
import {requestFavoriteTracks, requestFavoriteTracksError, requestFavoriteTracksSuccess} from "../actionCreators";
import SC from "soundcloud";

export function* watchFetchFavoriteTracks() {
    yield takeLatest(FETCHED_FAVORITE_TRACKS, fetchFavoriteTracksAsync);
}

function* fetchFavoriteTracksAsync() {
    try {
        yield put(requestFavoriteTracks());
        const data = yield call(() => {
                return SC.get('/users/185676792/favorites').then(tracks => tracks);
            }
        );
        yield put(requestFavoriteTracksSuccess(data));
    } catch (error) {
        yield put(requestFavoriteTracksError());
    }
}