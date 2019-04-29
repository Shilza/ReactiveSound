import React, {useMemo, useRef} from "react";
import styles from './styles.module.scss';
import {connect} from "react-redux";
import {convertStringToMs} from "../../urils";
import {seekTo} from "../../../favorites/actionCreators";

const TimeLine = ({currentTime, duration, dispatch}) => {
    let timeLine = useRef();

    let memoizedDuration = useMemo(() =>
        convertStringToMs(duration), [duration]);

    const seek = event => {
            let width = getComputedStyle(timeLine.current).width;
            let percents = event.nativeEvent.offsetX / parseInt(width) * 100;
            let seekMs = memoizedDuration / 100 * percents;
            dispatch(seekTo(seekMs));
    };

    return (
        <div ref={timeLine} className={styles.timeLine} onClick={seek}>
            <div className={styles.currentTime}
                 style={{width: `${currentTime / memoizedDuration * 100}%`}}>
            </div>
        </div>
    );
};

export default connect(state => ({
    currentTime: state.favorite.player.currentTime,
    duration: state.favorite.player.currentTrack.duration
}))(TimeLine);