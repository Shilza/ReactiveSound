import React from "react";
import styles from './styles.module.scss';
import {WaveformCard} from '../../../ui/organisms';
import {withPagination} from "../../../features/common/atoms";

export const WaveformTracks = withPagination(({tracks}) => (
    <div className={styles.container}>
        {
            tracks && tracks.map(item => <WaveformCard key={item.id} {...item}/>)
        }
    </div>
));