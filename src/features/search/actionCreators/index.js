import {
    FETCHED_SEARCH_TRACKS,
    FETCHED_SEARCH_TRACKS_BY_PAGE,
    REQUESTED_SEARCH_TRACKS,
    REQUESTED_SEARCH_TRACKS_FAILED,
    REQUESTED_SEARCH_TRACKS_SUCCEED,
    RESET_SEARCH_TRACKS
} from "../actionTypes";

export const requestSearchTracks = () => ({ type: REQUESTED_SEARCH_TRACKS });

export const requestSearchTracksSuccess = payload => ({ type: REQUESTED_SEARCH_TRACKS_SUCCEED, payload });

export const requestSearchTracksError = () => ({ type: REQUESTED_SEARCH_TRACKS_FAILED });

export const fetchSearchTracks = payload => ({ type: FETCHED_SEARCH_TRACKS, payload });

export const fetchSearchTracksByPage = payload => ({ type: FETCHED_SEARCH_TRACKS_BY_PAGE, payload });

export const resetSearchTracks = () => ({ type: RESET_SEARCH_TRACKS });