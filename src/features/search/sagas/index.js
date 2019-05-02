import { all } from 'redux-saga/effects';
import {watchFetchSearchTracks} from "./search";
import {watchFetchWaveform} from "./waveform";

export function* searchSaga() {
    yield all([
        watchFetchSearchTracks(),
        watchFetchWaveform()
    ])
}