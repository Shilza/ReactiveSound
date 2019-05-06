import {useMemo, useRef} from "react";
import {convertStringToMs, getDisplayName} from "../../utils";
import {seekTo} from "../../actionCreators";
import hoistNonReactStatics from "hoist-non-react-statics";
import React from "react";
import {connect} from "react-redux";
import styles from './styles.module.scss';

export const withTimeLine = WrappedComponent => {
    const WrappedTimeLine = connect(mapStateToProps)(({duration, id, currentTrackId, currentTime, dispatch, ...props}) => {
        let timeLineRef = useRef();

        let memoizedDuration = useMemo(() =>
            convertStringToMs(duration), [duration]);

        const seek = event => {
            if(currentTrackId === id) {
                let width = getComputedStyle(timeLineRef.current).width;
                let percents = event.nativeEvent.offsetX / parseInt(width) * 100;
                let seekMs = memoizedDuration / 100 * percents;
                dispatch(seekTo(seekMs));
            }
        };

        let currentTimeLinePosition = 0;
        if(currentTrackId === id)
            currentTimeLinePosition = `${currentTime / memoizedDuration * 100}%`;

        return (
            <div ref={timeLineRef} onClick={seek} className={styles.container}>
                <WrappedComponent {...props} seek={seek}
                                  currentTimeLinePosition={currentTimeLinePosition}/>
            </div>
        )
    });

    hoistNonReactStatics(WrappedTimeLine, WrappedComponent);

    WrappedTimeLine.displayName = `WrappedTimeLine(${getDisplayName(
        WrappedComponent, "WrappedTimeLine"
    )})`;

    return WrappedTimeLine;
};

const mapStateToProps = state => ({
    currentTime: state.player.currentTime,
    duration: state.player.currentTrack && state.player.currentTrack.duration,
    currentTrackId: state.player.currentTrack && state.player.currentTrack.id
});
