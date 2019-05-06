import React from "react";
import styles from './styles.module.scss';

export const Main = ({ header, children }) => (
    <>
        {header}
        <main className={styles.mainContainer}>{children}</main>
    </>
);