import {SEEK_TO, SET_CURRENT_TIME, SET_PLAYER, SET_PLAYER_INTERVAL} from "../actionTypes";

const initialState = {
    player: undefined,
    currentTrack: undefined,
    trackIntervalId: undefined,
    currentTime: undefined
};

export const player = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case SET_PLAYER:
            return {
                ...state,
                player: payload.player,
                currentTrack: payload.currentTrack
            };
        case SET_PLAYER_INTERVAL:
            return {
                ...state,
                trackIntervalId: payload
            };
        case SET_CURRENT_TIME:
            return {
                ...state,
                currentTime: payload
            };
        case SEEK_TO:
            return {
                ...state,
                currentTime: payload
            };
        default:
            return state;
    }
};