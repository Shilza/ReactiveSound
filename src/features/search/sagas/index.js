import { all } from 'redux-saga/effects';
import {watchFetchSearchTracks} from "./search";

export function* searchSaga() {
    yield all([
        watchFetchSearchTracks()
    ])
}