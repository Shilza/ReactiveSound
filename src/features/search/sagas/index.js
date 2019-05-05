import { all } from 'redux-saga/effects';
import {watchFetchSearchTracks, watchFetchSearchTracksByPage} from "./search";
import {watchFetchWaveform} from "./waveform";

export function* searchSaga() {
    yield all([
        watchFetchSearchTracks(),
        watchFetchSearchTracksByPage(),
        watchFetchWaveform()
    ])
}