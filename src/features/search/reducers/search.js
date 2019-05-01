import {
    REQUESTED_SEARCH_TRACKS,
    REQUESTED_SEARCH_TRACKS_SUCCEED,
    REQUESTED_SEARCH_TRACKS_FAILED
} from "../actionTypes";
import {convertMsToString} from "../../common/utils";

const initialState = {
    tracks: [],
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
                tracks: payload.map(item => {
                    if(item.artwork_url)
                        item.artwork_url = item.artwork_url.substr(0, item.artwork_url.length - 9) + 't250x250.jpg';
                    else
                        item.artwork_url = item.user.avatar_url.substr(0, item.user.avatar_url.length - 9) + 't250x250.jpg';

                    item.duration = convertMsToString(item.duration);
                    item.waveform_url = item.waveform_url.replace('://wave', '://wis').replace('.png', '.json');

                    return item;
                }),
                loading: false,
                error: false,
            };
        case REQUESTED_SEARCH_TRACKS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};