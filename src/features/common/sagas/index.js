import {watchFetchNext, watchFetchPrevious, watchFetchTrack} from "./player";
import {watchFetchWaveform} from "./waveform";
import {spawn} from "redux-saga/effects";

export const playerSagas = [
    spawn(watchFetchTrack),
    spawn(watchFetchNext),
    spawn(watchFetchPrevious),
    spawn(watchFetchWaveform)
];