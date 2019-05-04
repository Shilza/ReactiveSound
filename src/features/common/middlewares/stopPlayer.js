import {SET_PLAYER} from "../actionTypes";
import {setCurrentTime, setPlayerInterval} from "../actionCreators";

export const stopPlayer = store => next => action => {
    if(action.type === SET_PLAYER && store.getState().player.player) {
        store.getState().player.player.pause();
        clearInterval(store.getState().player.trackIntervalId);
        store.dispatch(setCurrentTime(0));
        store.dispatch(setPlayerInterval(undefined));
    }
    next(action);
};