import { all } from 'redux-saga/effects';
import {watchFetchUsersTracks, watchFetchUsersTracksByPage} from "./tracks";
import {watchFetchUser} from "./user";
import {watchFetchLikedTracksByPage, watchFetchUsersLikedTracks} from "./likedTracks";

export function* usersSaga() {
    yield all([
        watchFetchUsersTracks(),
        watchFetchUsersTracksByPage(),
        watchFetchUsersLikedTracks(),
        watchFetchLikedTracksByPage(),
        watchFetchUser()
    ])
}