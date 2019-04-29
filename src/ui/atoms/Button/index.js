import React from "react";
import styles from './styles.module.scss';

export const Button = ({children, ...props}) => (
    <button className={styles.button} {...props}>
        {children}
    </button>
);
