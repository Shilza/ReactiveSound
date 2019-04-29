import React from "react";
import styles from './styles.module.scss';
import {connect} from "react-redux";
import {convertMsToString} from "../../urils";

const PlayerTime = ({currentTime, duration}) => (
    <div className={styles.container}>
        <span>{convertMsToString(currentTime)}</span>
        /
        <span>{duration}</span>
    </div>
);

export default connect(state => ({
    currentTime: state.favorite.player.currentTime,
    duration: state.favorite.player.currentTrack.duration
}))(PlayerTime);