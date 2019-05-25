import {fetchTrack, pauseTrack, playTrack} from "../../actionCreators";
import React, {useCallback} from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import {connect} from "react-redux";
import {getDisplayName} from "../../utils";

export const withPlayer = WrappedComponent => {

    const PlayerWrapper = connect(mapStateToProps)(({dispatch, player, currentTrackId, trackIntervalId, id, ...props}) => {

        const onPlay = useCallback(() => {
            if (player && currentTrackId === id)
                player.isPlaying() ? dispatch(pauseTrack()) : dispatch(playTrack());
            else
                dispatch(fetchTrack(id));
        }, [player, dispatch, currentTrackId, id]);

        let isPlay = !Object.is(trackIntervalId, null) && currentTrackId === id;

        return <WrappedComponent {...props} onPlay={onPlay} isPlay={isPlay}/>;
    });

    hoistNonReactStatics(PlayerWrapper, WrappedComponent);

    PlayerWrapper.displayName = `withPlayer(${getDisplayName(
        WrappedComponent, "PlayerWrapper"
    )})`;

    return PlayerWrapper;
};

const mapStateToProps = state => ({
    player: state?.player?.player,
    currentTrackId: state?.player?.currentTrack?.id,
    trackIntervalId: state?.player?.trackIntervalId
});