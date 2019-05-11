import React, {useRef} from "react";
import {getDisplayName} from "../../utils";
import {seekTo} from "../../actionCreators";
import hoistNonReactStatics from "hoist-non-react-statics";
import {connect} from "react-redux";
import styles from './styles.module.scss';

export const withTimeLine = WrappedComponent => {
    const WrappedTimeLine = connect(mapStateToProps)(({duration, id, currentTrackId, currentTime, dispatch, ...props}) => {
        let timeLineRef = useRef();

        const seek = event => {
            if (currentTrackId === id) {
                let width = getComputedStyle(timeLineRef.current).width;
                let percents = event.nativeEvent.offsetX / parseInt(width) * 100;
                let seekMs = duration / 100 * percents;
                dispatch(seekTo(seekMs));
            }
        };

        let currentTimeLinePosition = 0;
        if (currentTrackId === id)
            currentTimeLinePosition = `${currentTime / duration * 100}%`;

        return (
            <div ref={timeLineRef} onClick={seek} className={styles.container}>
                <WrappedComponent {...props} currentTimeLinePosition={currentTimeLinePosition} />
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
