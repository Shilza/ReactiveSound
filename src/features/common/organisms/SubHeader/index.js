import React from "react";
import styles from './subHeader.module.scss'

export const SubHeader = React.memo(({section, location, children}) => (
    <div className={styles.subHeader}>
        <div className={styles.container}>
            {
                section && <div className={styles.section}>{section} /</div>
            }
            <h1 className={styles.title}>{location}</h1>
            {children}
        </div>
    </div>
));