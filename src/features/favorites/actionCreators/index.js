import {
    FETCHED_FAVORITE_TRACKS, FETCHED_FAVORITE_TRACKS_BY_PAGE,
    REQUESTED_FAVORITE_TRACKS,
    REQUESTED_FAVORITE_TRACKS_FAILED,
    REQUESTED_FAVORITE_TRACKS_SUCCEED,
} from "../actionTypes";

export const requestFavoriteTracks = () => ({ type: REQUESTED_FAVORITE_TRACKS });

export const fetchFavoriteTracksByPage = () => ({ type: FETCHED_FAVORITE_TRACKS_BY_PAGE });

export const requestFavoriteTracksSuccess = data => ({ type: REQUESTED_FAVORITE_TRACKS_SUCCEED, payload: data });

export const requestFavoriteTracksError = () => ({ type: REQUESTED_FAVORITE_TRACKS_FAILED });

export const fetchFavoriteTracks = () => ({ type: FETCHED_FAVORITE_TRACKS });

