import { all } from 'redux-saga/effects';
import {watchFetchUsersTracks} from "./tracks";
import {watchFetchUser} from "./user";
import {watchFetchUsersLikedTracks} from "./likedTracks";

export function* usersSaga() {
    yield all([
        watchFetchUsersTracks(),
        watchFetchUsersLikedTracks(),
        watchFetchUser()
    ])
}