import {
    FETCHED_SEARCH_TRACKS, FETCHED_WAVEFORM_TRACKS,
    REQUESTED_SEARCH_TRACKS,
    REQUESTED_SEARCH_TRACKS_FAILED,
    REQUESTED_SEARCH_TRACKS_SUCCEED, REQUESTED_WAVEFORM_SUCCEED
} from "../actionTypes";

export const requestSearchTracks = () => ({ type: REQUESTED_SEARCH_TRACKS });

export const requestSearchTracksSuccess = payload => ({ type: REQUESTED_SEARCH_TRACKS_SUCCEED, payload });

export const requestSearchTracksError = () => ({ type: REQUESTED_SEARCH_TRACKS_FAILED });

export const fetchSearchTracks = payload => ({ type: FETCHED_SEARCH_TRACKS, payload });


export const fetchWaveform = payload => ({ type: FETCHED_WAVEFORM_TRACKS, payload });

export const requestWaveformSuccess = payload => ({ type: REQUESTED_WAVEFORM_SUCCEED, payload });