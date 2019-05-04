import {REQUESTED_USERS_TRACKS, REQUESTED_USERS_TRACKS_FAILED, REQUESTED_USERS_TRACKS_SUCCEED} from "../actionTypes";
import {REQUESTED_WAVEFORM_SUCCEED} from "../../search/actionTypes";
import {setWaveform, transformTrack} from "../../common/utils";

const initialState = {
    data: [],
    nextPage: undefined,
    loading: false,
    error: false
};

export const tracks = (state = initialState, {type, payload = null}) => {
    console.log(type, payload);
    switch (type) {
        case REQUESTED_USERS_TRACKS:
            return {
                data: payload,
                loading: true,
                error: false
            };
        case REQUESTED_USERS_TRACKS_SUCCEED:
            return {
                data: payload.collection.map(transformTrack),
                nextPage: payload.next_href,
                loading: false,
                error: false
            };
        case REQUESTED_USERS_TRACKS_FAILED:
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