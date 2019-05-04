import {fetchTrack, pauseTrack, playTrack} from "../../actionCreators";
import {useCallback, useEffect} from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import React from "react";
import {connect} from "react-redux";

export const withPlayer = WrappedComponent => {

    const PlayerWrapper = connect(mapStateToProps)(({dispatch, player, currentTrackId, trackIntervalId, id, ...props}) => {
        useEffect(() => {
            if (player && currentTrackId === id) {
                dispatch(playTrack());
            }
        }, [player, dispatch, currentTrackId, id]);

        const onPlay = useCallback(() => {
            if (player && currentTrackId === id)
                player.isPlaying() ? dispatch(pauseTrack()) : dispatch(playTrack());
            else
                dispatch(fetchTrack(id));
        }, [player, dispatch, currentTrackId, id]);

        let isPlay = !Object.is(trackIntervalId, null) && currentTrackId === id;

        return <WrappedComponent {...props} onPlay={onPlay} isPlay={isPlay}/>
    });

    hoistNonReactStatics(PlayerWrapper, WrappedComponent);

    PlayerWrapper.displayName = `PlayerWrapper(${getDisplayName(
        WrappedComponent
    )})`;

    return PlayerWrapper;
};

const mapStateToProps = state => ({
    player: state.player.player,
    currentTrackId: state.player.currentTrack && state.player.currentTrack.id,
    trackIntervalId: state.player.trackIntervalId
});

const getDisplayName = WrappedComponent => {
    return (
        WrappedComponent.displayName || WrappedComponent.name || "PlayerWrapper"
    );
};