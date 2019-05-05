import { all } from 'redux-saga/effects';
import {watchFetchFavoriteTracks, watchFetchFavoriteTracksByPage} from "./tracks";

export function* favoritesSaga() {
    yield all([
        watchFetchFavoriteTracks(),
        watchFetchFavoriteTracksByPage()
    ])
}