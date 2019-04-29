import React from "react";
import styles from './styles.module.scss';

export const PlayerVolume = ({ player }) => {

    const changeVolume = event => {
        player.setVolume(event.target.value / 100);
    };

    return (
        <div className={styles.container}>
            <input onChange={changeVolume} type="range" min="0" max="100" step='1' defaultValue={player.getVolume() * 100}/>
        </div>
    );
};