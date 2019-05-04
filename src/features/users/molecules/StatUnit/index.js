import React from "react";
import styles from './styles.module.scss';

export const StatUnit = ({ count, children, active }) => (
    <div className={styles.unit}>
        {React.cloneElement(children, {className: active ? styles.labelActive : styles.label})}
        <span className={styles.count}>{count}</span>
    </div>
);