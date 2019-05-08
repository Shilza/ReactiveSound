import {watchFetchUsersTracks, watchFetchUsersTracksByPage} from "./tracks";
import {watchFetchUser} from "./user";
import {watchFetchLikedTracksByPage, watchFetchUsersLikedTracks} from "./likedTracks";
import {spawn} from "redux-saga/effects";

export const usersSagas = [
    spawn(watchFetchUsersTracks),
    spawn(watchFetchUsersTracksByPage),
    spawn(watchFetchUsersLikedTracks),
    spawn(watchFetchLikedTracksByPage),
    spawn(watchFetchUser)
];