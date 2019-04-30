import styles from './styles.module.scss';
import React from "react";
import { PlayerControls, PlayerVolume} from "../../molecules";
import {PlayerTime, TimeLine} from "../../atoms";
import {connect} from "react-redux";

const SongBar = ({ player, title}) => (
    <>
        {
            player && <div className={styles.songBar}>
                <TimeLine/>
                <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                    <div className={styles.container}>
                        <div className={styles.subContainer}>
                            <PlayerControls/>
                            <PlayerTime/>
                            <span style={{padding: '0 10px'}}>{title}</span>
                        </div>
                        <PlayerVolume player={player}/>
                    </div>
                </div>
            </div>
        }
    </>
);

export default connect(state => ({
    player: state.favorite.player.player,
    title: state.favorite.player.currentTrack && state.favorite.player.currentTrack.title,
}))(SongBar);