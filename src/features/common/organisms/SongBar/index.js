import styles from './styles.module.scss';
import React from "react";
import {PlayerControls, PlayerVolume} from "../../molecules";
import {PlayerTime, TimeLine} from "../../atoms";
import {connect} from "react-redux";
import MediaQuery from "react-responsive";

const SongBar = ({player, title, currentTrackId}) => (
    <>
        {
            player &&
            <div className={styles.songBar}>
                <TimeLine id={currentTrackId}/>
                <div className={styles.mainContainer}>
                    <div className={styles.container}>
                        <div className={styles.subContainer}>
                            <PlayerControls/>
                            <MediaQuery minWidth={768}>
                                <PlayerTime/>
                            </MediaQuery>
                            <span title={title} className={styles.title}>{title}</span>
                        </div>
                        <MediaQuery minWidth={768}>
                            <PlayerVolume player={player}/>
                        </MediaQuery>
                    </div>
                </div>
            </div>
        }
    </>
);

export default connect(state => ({
    player: state.player.player,
    title: state.player.currentTrack && state.player.currentTrack.title,
    currentTrackId: state.player.currentTrack && state.player.currentTrack.id
}))(SongBar);