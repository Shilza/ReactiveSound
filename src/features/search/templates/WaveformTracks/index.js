import styles from './styles.module.scss';
import {WaveformCard} from "../../organisms/WaveformCard";
import React from "react";
import {withLoader} from "../../../common/organisms";

export const WaveformTracks =  withLoader(({tracks, dispatch}) => (
    <div className={styles.container}>
        {
            tracks && tracks.map(item => <WaveformCard key={item.id} dispatch={dispatch} {...item}/>
            )
        }
    </div>
));