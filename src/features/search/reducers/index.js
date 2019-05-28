import {
    REQUESTED_SEARCH_TRACKS,
    REQUESTED_SEARCH_TRACKS_FAILED,
    REQUESTED_SEARCH_TRACKS_SUCCEED,
    RESET_SEARCH_TRACKS
} from "../actionTypes";
import {getUnique, setWaveform, transformTrack} from "../../common/utils";
import {REQUESTED_WAVEFORM_SUCCEED} from "../../common/actionTypes";

export const initialState = {
    tracks: [],
    nextPage: undefined,
    query: undefined,
    loading: false,
    error: false,
};

export const searchReducer = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case REQUESTED_SEARCH_TRACKS:
            return {
                ...state,
                loading: true,
                error: false
            };
        case REQUESTED_SEARCH_TRACKS_SUCCEED:
            return {
                tracks: getUnique(state.tracks.concat(payload.collection.map(transformTrack))),
                nextPage: payload.next_href,
                query: payload.query,
                loading: false,
                error: false
            };
        case REQUESTED_SEARCH_TRACKS_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            };
        case REQUESTED_WAVEFORM_SUCCEED:
            return {
                ...state,
                tracks: state.tracks.map(track => setWaveform(track, payload))
            };
        case RESET_SEARCH_TRACKS:
            return {
                ...state,
                tracks: [],
                nextPage: undefined
            };
        default:
            return state;
    }
};