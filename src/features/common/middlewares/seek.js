import {SEEK_TO} from "../actionTypes";

export const seek = store => next => action => {
    if(action.type === SEEK_TO)
        store.getState().player.player.seek(action.payload);
    next(action);
};