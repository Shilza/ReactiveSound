import {
    FETCHED_USER, FETCHED_USERS_LIKED_TRACKS,
    FETCHED_USERS_TRACKS,
    REQUESTED_USER,
    REQUESTED_USER_FAILED,
    REQUESTED_USER_SUCCEED,
    REQUESTED_USERS_LIKED_TRACKS, REQUESTED_USERS_LIKED_TRACKS_FAILED,
    REQUESTED_USERS_LIKED_TRACKS_SUCCEED,
    REQUESTED_USERS_TRACKS,
    REQUESTED_USERS_TRACKS_FAILED,
    REQUESTED_USERS_TRACKS_SUCCEED
} from "../actionTypes";

export const requestUsersTracks = () => ({ type: REQUESTED_USERS_TRACKS });

export const requestUsersTracksSuccess = payload => ({ type: REQUESTED_USERS_TRACKS_SUCCEED, payload });

export const requestUsersTracksError = () => ({ type: REQUESTED_USERS_TRACKS_FAILED });

export const fetchUsersTracks = payload => ({ type: FETCHED_USERS_TRACKS, payload });


export const requestUsersLikedTracks = () => ({ type: REQUESTED_USERS_LIKED_TRACKS });

export const requestUsersLikedTracksSuccess = payload => ({ type: REQUESTED_USERS_LIKED_TRACKS_SUCCEED, payload });

export const requestUsersLikedTracksError = () => ({ type: REQUESTED_USERS_LIKED_TRACKS_FAILED });

export const fetchUsersLikedTracks = payload => ({ type: FETCHED_USERS_LIKED_TRACKS, payload });


export const requestUser = () => ({ type: REQUESTED_USER });

export const requestUserSuccess = payload => ({ type: REQUESTED_USER_SUCCEED, payload });

export const requestUserError = () => ({ type: REQUESTED_USER_FAILED });

export const fetchUser = payload => ({ type: FETCHED_USER, payload });