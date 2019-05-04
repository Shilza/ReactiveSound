import {
    REQUESTED_FAVORITE_TRACKS,
    REQUESTED_FAVORITE_TRACKS_FAILED,
    REQUESTED_FAVORITE_TRACKS_SUCCEED
} from "../actionTypes";
import {transformTrack} from "../../common/utils";

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
                tracks: payload.map(transformTrack),
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