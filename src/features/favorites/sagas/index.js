import {spawn} from 'redux-saga/effects';
import {watchFetchFavoriteTracks, watchFetchFavoriteTracksByPage} from "./tracks";

export const favoritesSagas = [
    spawn(watchFetchFavoriteTracks),
    spawn(watchFetchFavoriteTracksByPage)
];