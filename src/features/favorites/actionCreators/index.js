import {
    FETCHED_FAVORITE_TRACKS,
    PAUSE_TRACK,
    FETCHED_TRACK,
    REQUESTED_FAVORITE_TRACKS,
    REQUESTED_FAVORITE_TRACKS_FAILED,
    REQUESTED_FAVORITE_TRACKS_SUCCEED,
    SET_CURRENT_TIME,
    SET_PLAYER,
    SET_PLAYER_INTERVAL, PLAY_TRACK, SEEK_TO, FETCHED_NEXT, FETCHED_PREVIOUS
} from "../actionTypes";

export const requestFavoriteTracks = () => ({ type: REQUESTED_FAVORITE_TRACKS });

export const requestFavoriteTracksSuccess = data => ({ type: REQUESTED_FAVORITE_TRACKS_SUCCEED, payload: data });

export const requestFavoriteTracksError = () => ({ type: REQUESTED_FAVORITE_TRACKS_FAILED });

export const fetchFavoriteTracks = () => ({ type: FETCHED_FAVORITE_TRACKS });


export const fetchTrack = payload => ({ type: FETCHED_TRACK, payload });

export const setPlayer = payload => ({ type: SET_PLAYER, payload });

export const setPlayerInterval = payload => ({ type: SET_PLAYER_INTERVAL, payload });

export const setCurrentTime = payload => ({ type: SET_CURRENT_TIME, payload });

export const playTrack = () => ({type: PLAY_TRACK});

export const pauseTrack = () => ({ type: PAUSE_TRACK });

export const seekTo = payload => ({ type: SEEK_TO, payload });


export const fetchNext = () => ({ type: FETCHED_NEXT });

export const fetchPrevious = () => ({ type: FETCHED_PREVIOUS });