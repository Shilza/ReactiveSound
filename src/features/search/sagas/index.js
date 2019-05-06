import { all } from 'redux-saga/effects';
import {watchFetchSearchTracks, watchFetchSearchTracksByPage} from "./search";

export function* searchSaga() {
    yield all([
        watchFetchSearchTracks(),
        watchFetchSearchTracksByPage(),
    ])
}