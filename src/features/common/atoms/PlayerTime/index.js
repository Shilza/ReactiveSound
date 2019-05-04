import React from "react";
import styles from './styles.module.scss';
import {connect} from "react-redux";
import {convertMsToString} from "../../utils";

const PlayerTime = ({currentTime, duration}) => (
    <div className={styles.container}>
        <span>{convertMsToString(currentTime)}</span>
        /
        <span>{duration}</span>
    </div>
);

export default connect(state => ({
    currentTime: state.player.currentTime,
    duration: state.player.currentTrack && state.player.currentTrack.duration
}))(PlayerTime);