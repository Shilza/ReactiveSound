import React from "react";
import styles from './styles.module.scss';

export const Error = () => {
    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={styles.container} data-testid='errorContainer'>
            <h1>Error</h1>
            <span>
            Something went wrong
        </span>
            <button className={styles.button} onClick={reload}>Try again</button>
        </div>
    );
};