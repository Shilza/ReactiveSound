import {SET_PLAYER} from "../actionTypes";
import {setPlayerInterval} from "../actionCreators";

export const stopPlayer = store => next => action => {
    if(action.type === SET_PLAYER && store.getState().favorite.player.player) {
        store.getState().favorite.player.player.pause();
        clearInterval(store.getState().favorite.player.trackIntervalId);
        store.dispatch(setPlayerInterval(undefined));
    }
    next(action);
};