import { all } from 'redux-saga/effects';
import {watchFetchNext, watchFetchPrevious, watchFetchTrack} from "./player";

export function* playerSaga() {
    yield all([
        watchFetchTrack(),
        watchFetchNext(),
        watchFetchPrevious()
    ])
}