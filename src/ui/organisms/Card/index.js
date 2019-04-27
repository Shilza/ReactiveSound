import React from "react";
import styles from './styles.module.scss';

export const Card = ({ children }) => (
    <article className={styles.card}>
        {children}
    </article>
);
