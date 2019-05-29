import {setCurrentTime, setPlayerInterval} from "../actionCreators";
import {PAUSE_TRACK, PLAY_TRACK} from "../actionTypes/";

export const playingControl = store => next => action => {
    if (action.type === PLAY_TRACK) {
        const intervalId = setInterval(() => {
            if(!store.getState().player.player.isPlaying())
                store.getState().player.player.play();
            store.dispatch(setCurrentTime(store.getState().player.player.currentTime()));
        }, 100);
        store.dispatch(setPlayerInterval(intervalId));
    } else if(action.type === PAUSE_TRACK) {
        store.getState().player.player.pause();
        clearInterval(store.getState().player.trackIntervalId);
        store.dispatch(setPlayerInterval(undefined));
    }
    next(action);
};