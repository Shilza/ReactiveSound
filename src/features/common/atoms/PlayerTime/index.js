import React, {useMemo} from "react";
import styles from './styles.module.scss';
import {convertMsToString} from "../../utils";

export const PlayerTime = ({currentTime, duration}) => {
    let memoizedDuration = useMemo(() => convertMsToString(duration), [duration]);

    return (
        <div className={styles.container}>
            <span data-testid="currentTime">{convertMsToString(currentTime)}</span>
            /
            <span data-testid="duration">{memoizedDuration}</span>
        </div>
    );
};