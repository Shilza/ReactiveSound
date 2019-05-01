import React from "react";
import styles from './subHeader.module.scss'

export const SubHeader = ({location}) => (
    <div className={styles.subHeader}>
        <div className={styles.container}>
            <div className={styles.section}>Spotlight /</div>
            <h2 className={styles.title}>{location}</h2>
        </div>
    </div>
);