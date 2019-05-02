import {
    REQUESTED_FAVORITE_TRACKS,
    REQUESTED_FAVORITE_TRACKS_FAILED,
    REQUESTED_FAVORITE_TRACKS_SUCCEED
} from "../actionTypes";
import {convertMsToString} from "../../common/utils";

const initialState = {
    tracks: [],
    loading: false,
    error: false,
};

export const tracks = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case REQUESTED_FAVORITE_TRACKS:
            return {
                ...state,
                loading: true,
                error: false
            };
        case REQUESTED_FAVORITE_TRACKS_SUCCEED:
            return {
                tracks: payload.map(item => {
                    if(item.artwork_url)
                        item.artwork_url = item.artwork_url.substr(0, item.artwork_url.length - 9) + 't250x250.jpg';
                    else
                        item.artwork_url = item.user.avatar_url.substr(0, item.user.avatar_url.length - 9) + 't250x250.jpg';

                    item.duration = convertMsToString(item.duration);

                    return item;
                }),
                loading: false,
                error: false
            };
        case REQUESTED_FAVORITE_TRACKS_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};