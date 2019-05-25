import React from "react";
import styles from './subHeader.module.scss'

export const SubHeader = React.memo(({section, location, children}) => (
    <div className={styles.subHeader}>
        <div className={styles.container}>
            {
                section &&
                <div className={styles.section} data-testid='subHeaderSection'>
                    {section}
                    <span> /</span>
                </div>
            }
            <h1 className={styles.title} data-testid='subHeaderTitle'>{location}</h1>
            {children}
        </div>
    </div>
));