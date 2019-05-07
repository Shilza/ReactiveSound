import React from "react";
import {useCountUp} from 'react-countup';
import styles from './styles.module.scss';

export const StatUnit = ({loading, count, children, active}) => {
    const {countUp} = useCountUp({end: count});

    return (
        <div className={styles.unit}>
            {React.cloneElement(children, {className: active ? styles.labelActive : styles.label})}
            <span className={styles.count}>{!loading ? countUp : 0}</span>
        </div>
    );
};