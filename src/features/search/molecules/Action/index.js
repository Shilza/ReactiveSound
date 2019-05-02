import React from "react";
import styles from './styles.module.scss';

export const Action = ({children, label}) => (
    <div className={styles.container}>
        {children}
        <span className={styles.label}>{label}</span>
    </div>
);