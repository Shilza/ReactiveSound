import {
    REQUESTED_SEARCH_TRACKS,
    REQUESTED_SEARCH_TRACKS_SUCCEED,
    REQUESTED_SEARCH_TRACKS_FAILED, REQUESTED_WAVEFORM_SUCCEED
} from "../actionTypes";
import {convertMsToString} from "../../common/utils";

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
                tracks: payload.data.map(item => {
                    if(item.artwork_url)
                        item.artwork_url = item.artwork_url.substr(0, item.artwork_url.length - 9) + 't250x250.jpg';
                    else
                        item.artwork_url = item.user.avatar_url.substr(0, item.user.avatar_url.length - 9) + 't250x250.jpg';

                    item.duration = convertMsToString(item.duration);
                    item.waveform_url = item.waveform_url.replace('://wave', '://wis').replace('.png', '.json');

                    return item;
                }),
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
                tracks: state.tracks.map(item => {
                    if(item.id === payload.id) {
                        item.waveform = payload.data;
                        return {...item};
                    }

                    return item;
                })
            };
        default:
            return state;
    }
};