import React from "react";
import styles from './styles.module.scss';
import {Action} from "../../molecules";
import {Icon} from "../../../../ui/atoms";
import {Waveform} from "../../molecules";
import {connect} from "react-redux";
import {PlayButton} from "../../../common/atoms";
import {Button} from "../../../../ui/atoms";
import {Link} from "react-router-dom";
import {convertMsToString} from "../../../common/utils";

const TrackCard = ({id, onPlay, userId, link, isPlay, duration, title, dispatch, username, likesCount, playbackCount, waveform}) => (
    <div className={styles.container}>
        <Link to={`/users/${userId}/tracks`} className={styles.username}>{username}</Link>
        <div className={styles.title}>{title}</div>
        <Waveform id={id} waveform={waveform}/>
        <div className={styles.actions}>
            <Action label={convertMsToString(duration)}>
                <PlayButton id={id}/>
            </Action>
            <Action label={playbackCount}>
                <Icon name='headphones' viewBox="0 0 287.386 287.386"/>
            </Action>
            <Action label={likesCount}>
                <Icon name='like' viewBox="0 0 51.997 51.997"/>
            </Action>
            <Action>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                    <Button>
                        <Icon name='chain' viewBox='0 0 500 500' fill='#4d4e4f'/>
                    </Button>
                </a>
            </Action>
        </div>
    </div>
);

export default connect(state => ({
    player: state.player.player,
    currentTrackId: state.player.currentTrack && state.player.currentTrack.id,
    trackIntervalId: state.player.trackIntervalId
}))(TrackCard);