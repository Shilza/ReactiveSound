import React from "react";
import styles from './subHeader.module.scss'

export const SubHeader = ({section, location, children}) => (
    <div className={styles.subHeader}>
        <div className={styles.container}>
            {
                section && <div className={styles.section}>{section} /</div>
            }
            <h2 className={styles.title}>{location}</h2>
            {children}
        </div>
    </div>
);