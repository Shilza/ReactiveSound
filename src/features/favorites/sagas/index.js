import { all } from 'redux-saga/effects';
import {watchFetchFavoriteTracks} from "./tracks";
import {watchFetchNext, watchFetchPrevious, watchFetchTrack} from "./player";

export function* favoritesSaga() {
    yield all([
        watchFetchFavoriteTracks(),
        watchFetchTrack(),
        watchFetchNext(),
        watchFetchPrevious()
    ])
}