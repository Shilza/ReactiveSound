import {
    REQUESTED_USERS_LIKED_TRACKS,
    REQUESTED_USERS_LIKED_TRACKS_FAILED,
    REQUESTED_USERS_LIKED_TRACKS_SUCCEED,
    RESET_LIKED_TRACKS
} from "../actionTypes";
import {REQUESTED_WAVEFORM_SUCCEED} from "../../search/actionTypes";
import {getUnique, setWaveform, transformTrack} from "../../common/utils";

const initialState = {
    data: [],
    nextPage: undefined,
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
                data: getUnique(state.data.concat(payload.collection.map(transformTrack))),
                nextPage: payload.next_href,
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
        case RESET_LIKED_TRACKS:
            return {
                ...state,
                data: [],
                nextPage: undefined
            };
        default:
            return state;
    }
};