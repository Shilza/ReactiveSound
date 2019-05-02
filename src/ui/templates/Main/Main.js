import React from "react";
import styles from './styles.module.scss';

export const Main = ({ header, children }) => (
    <div>
        {header}
        <main className={styles.mainContainer}>{children}</main>
    </div>
);