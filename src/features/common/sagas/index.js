import { all } from 'redux-saga/effects';
import {watchFetchNext, watchFetchPrevious, watchFetchTrack} from "./player";
import {watchFetchWaveform} from "./waveform";

export function* playerSaga() {
    yield all([
        watchFetchTrack(),
        watchFetchNext(),
        watchFetchPrevious(),
        watchFetchWaveform()
    ])
}