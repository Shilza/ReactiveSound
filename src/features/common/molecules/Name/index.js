import React from "react";
import styles from './styles.module.scss';
import {Link} from "react-router-dom";

export const Name = () => (
    <h1 className={styles.title}>
        <Link className={styles.link} to='/'>Reactive Sound</Link>
    </h1>
);
