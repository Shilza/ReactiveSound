import React, {useEffect, useState} from "react";
import styles from './styles.module.scss';

export const PlayerVolume = ({ player }) => {

    let [volume, setVolume] = useState(player.getVolume() * 100);

    const changeVolume = event => {
        setVolume(event.target.value);
    };

    useEffect(() => {
        player.setVolume(volume / 1000);
    });

    return (
        <div className={styles.container}>
            <input onChange={changeVolume} type="range" min="0" max="100" step='1' value={volume}/>
        </div>
    );
};