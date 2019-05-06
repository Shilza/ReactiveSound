import React, {useCallback} from "react";
import styles from './styles.module.scss';
import {Icon} from "../../../../ui/atoms/Icon";
import {Button} from "../../../../ui/atoms";
import {fetchNext, fetchPrevious, pauseTrack, playTrack} from "../../actionCreators";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const PlayerControls = withRouter(({player, trackIntervalId, location, dispatch}) => {
    const onPlay = useCallback(() => {
        if (player)
            player.isPlaying() ? dispatch(pauseTrack()) : dispatch(playTrack());
    }, [player, dispatch]);

    const onNext = () => {
        // Pass a location prop that there was a selection from the appropriate storage
        dispatch(fetchNext(location.pathname));
    };

    const onPrevious = () => {
        dispatch(fetchPrevious(location.pathname));
    };

    let isPlay = !Object.is(trackIntervalId, null);

    return (
        <div className={styles.container}>
            <Button onClick={onPrevious}>
                <Icon name='previous' fill='#4d4e4f'/>
            </Button>
            <Button onClick={onPlay}>
                {
                    isPlay ?
                        <Icon name='pause' viewBox='0 0 420 420' fill='#4d4e4f'/>
                        :
                        <Icon name='play' viewBox='0 0 420 420' fill='#4d4e4f'/>
                }
            </Button>
            <Button onClick={onNext}>
                <Icon name='next' fill='#4d4e4f'/>
            </Button>
        </div>
    );
});

export default connect(state => ({
    player: state.player.player,
    trackIntervalId: state.player.trackIntervalId
}))(PlayerControls);