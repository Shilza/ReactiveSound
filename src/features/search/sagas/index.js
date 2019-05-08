import {watchFetchSearchTracks, watchFetchSearchTracksByPage} from "./search";
import {spawn} from "redux-saga/effects";

export const searchSagas = [
    spawn(watchFetchSearchTracks),
    spawn(watchFetchSearchTracksByPage)
];