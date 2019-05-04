import { all } from 'redux-saga/effects';
import {watchFetchFavoriteTracks} from "./tracks";

export function* favoritesSaga() {
    yield all([
        watchFetchFavoriteTracks(),
    ])
}