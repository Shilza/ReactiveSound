import {setCurrentTime, setPlayerInterval} from "../actionCreators";
import {PAUSE_TRACK, PLAY_TRACK} from "../actionTypes";

export const trackInterval = store => next => action => {
    if (action.type === PLAY_TRACK) {
        const intervalId = setInterval(function () {
            store.getState().favorite.player.player.play();
            store.dispatch(setCurrentTime(store.getState().favorite.player.player.currentTime()));
        }, 100);
        store.dispatch(setPlayerInterval(intervalId));
    } else if(action.type === PAUSE_TRACK) {
        store.getState().favorite.player.player.pause();
        clearInterval(store.getState().favorite.player.trackIntervalId);
        store.dispatch(setPlayerInterval(undefined));
    }
    next(action);
};