import {
    REQUESTED_SEARCH_TRACKS,
    REQUESTED_SEARCH_TRACKS_FAILED,
    REQUESTED_SEARCH_TRACKS_SUCCEED,
    REQUESTED_WAVEFORM_SUCCEED
} from "../actionTypes";
import {setWaveform, transformTrack} from "../../common/utils";

const initialState = {
    tracks: [],
    query: undefined,
    loading: false,
    error: false,
};

export const search = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case REQUESTED_SEARCH_TRACKS:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case REQUESTED_SEARCH_TRACKS_SUCCEED:
            return {
                tracks: payload.data.map(transformTrack),
                query: payload.query,
                loading: false,
                error: false
            };
        case REQUESTED_SEARCH_TRACKS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case REQUESTED_WAVEFORM_SUCCEED:
            return {
                ...state,
                tracks: state.tracks.map(track => setWaveform(track, payload))
            };
        default:
            return state;
    }
};