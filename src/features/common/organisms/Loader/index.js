import React from "react";
import styles from './styles.module.scss';

export const Loader = () => (
    <div className={styles.loadingIndicator}>
        <div className={styles.circle} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
    </div>
);
