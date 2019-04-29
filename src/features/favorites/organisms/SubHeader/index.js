import React from "react";
import styles from './subHeader.module.scss'

export const SubHeader = () => (
    <div className={styles.subHeader}>
        <div className={styles.container}>
            <div className={styles.section}>Spotlight /</div>
            <h2 className={styles.title}>Featured Tracks</h2>
        </div>
    </div>
);