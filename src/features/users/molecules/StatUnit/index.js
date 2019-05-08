import React from "react";
import {useCountUp} from 'react-countup';
import styles from './styles.module.scss';

export const StatUnit = ({ count, children, active}) => {
    const {countUp} = useCountUp({end: count});

    return (
        <div className={styles.unit}>
            {React.cloneElement(children, {className: active ? styles.labelActive : styles.label})}
            <span className={styles.count}>{countUp}</span>
        </div>
    );
};