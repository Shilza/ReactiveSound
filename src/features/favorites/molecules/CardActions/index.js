import React, {useCallback, useEffect} from "react";
import styles from './styles.module.scss';
import {Button, Icon} from "../../../../ui/atoms";
import {connect} from "react-redux";
import {fetchTrack, pauseTrack, playTrack} from "../../actionCreators";

export const CardActions = ({id, link, title, trackIntervalId, currentTrackId, duration, dispatch, player}) => {

    useEffect(() => {
        if(player && currentTrackId === id) {
            dispatch(playTrack());
        }
    }, [player, dispatch, currentTrackId, id]);

    const onPlay = useCallback(() => {
        if (player && currentTrackId === id)
            player.isPlaying() ? dispatch(pauseTrack()) : dispatch(playTrack());
        else
            dispatch(fetchTrack({
                id, duration, title
            }));
    }, [player, dispatch, currentTrackId, id, duration, title]);

    let isPlay = !Object.is(trackIntervalId, null) && currentTrackId === id;
    return (
        <Body link={link} duration={duration} isPlay={isPlay} onPlay={onPlay}/>
    );
};

const Body = React.memo(({onPlay, duration, isPlay, link}) => (
    <div className={styles.container}>
        <div className={styles.playContainer}>
            <Button onClick={onPlay}>
                {
                    isPlay ?
                        <Icon name='pause' viewBox='0 0 420 420' fill='#4d4e4f'/>
                        :
                        <Icon name='play' viewBox='0 0 420 420' fill='#4d4e4f'/>
                }
            </Button>
            <span>{duration}</span>
        </div>
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <Button>
                <Icon name='chain' viewBox='0 0 500 500' fill='#4d4e4f'/>
            </Button>
        </a>
    </div>
));

export default connect(state => ({
    player: state.favorite.player.player,
    currentTrackId: state.favorite.player.currentTrack && state.favorite.player.currentTrack.id,
    trackIntervalId: state.favorite.player.trackIntervalId
}))(CardActions);