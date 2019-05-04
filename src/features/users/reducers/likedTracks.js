import {
    REQUESTED_USERS_LIKED_TRACKS,
    REQUESTED_USERS_LIKED_TRACKS_FAILED,
    REQUESTED_USERS_LIKED_TRACKS_SUCCEED
} from "../actionTypes";
import {REQUESTED_WAVEFORM_SUCCEED} from "../../search/actionTypes";
import {setWaveform, transformTrack} from "../../common/utils";

const initialState = {
    data: [],
    loading: false,
    error: false
};

export const likedTracks = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case REQUESTED_USERS_LIKED_TRACKS:
            return {
                ...state,
                loading: true,
                error: false
            };
        case REQUESTED_USERS_LIKED_TRACKS_SUCCEED:
            return {
                data: payload.map(transformTrack),
                loading: false,
                error: false
            };
        case REQUESTED_USERS_LIKED_TRACKS_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            };
        case REQUESTED_WAVEFORM_SUCCEED:
            return {
                ...state,
                data: state.data.map(track => setWaveform(track, payload))
            };
        default:
            return state;
    }
};