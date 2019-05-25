import styles from './styles.module.scss';
import React from "react";
import {PlayerControls, PlayerVolume} from "../../molecules";
import {PlayerTime, TimeLine} from "../../atoms";
import {connect} from "react-redux";
import MediaQuery from "react-responsive";

const SongBar = ({player, title, currentTime, duration, currentTrackId}) => (
    <>
        {
            player &&
            <div className={styles.songBar}>
                <TimeLine id={currentTrackId}/>
                <div className={styles.container}>
                    <div className={styles.subContainer}>
                        <PlayerControls currentTrackId={currentTrackId}/>
                        <MediaQuery minWidth={768}>
                            <PlayerTime
                                currentTime={currentTime}
                                duration={duration}
                            />
                        </MediaQuery>
                        <span title={title} className={styles.title}>{title}</span>
                    </div>
                    <MediaQuery minWidth={768}>
                        <PlayerVolume player={player}/>
                    </MediaQuery>
                </div>
            </div>
        }
    </>
);

export default connect(state => ({
    player: state.player?.player,
    title: state.player?.currentTrack?.title,
    currentTrackId: state.player?.currentTrack?.id,
    currentTime: state.player?.currentTime,
    duration: state.player?.currentTrack?.duration
}))(SongBar);