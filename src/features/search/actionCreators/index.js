import {
    FETCHED_SEARCH_TRACKS,
    REQUESTED_SEARCH_TRACKS,
    REQUESTED_SEARCH_TRACKS_FAILED,
    REQUESTED_SEARCH_TRACKS_SUCCEED
} from "../actionTypes";

export const requestSearchTracks = () => ({ type: REQUESTED_SEARCH_TRACKS });

export const requestSearchTracksSuccess = data => ({ type: REQUESTED_SEARCH_TRACKS_SUCCEED, payload: data });

export const requestSearchTracksError = () => ({ type: REQUESTED_SEARCH_TRACKS_FAILED });

export const fetchSearchTracks = payload => ({ type: FETCHED_SEARCH_TRACKS, payload });