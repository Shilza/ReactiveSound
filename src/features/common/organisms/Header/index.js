import React from "react";
import { Navigation } from '../../molecules';
import { Name } from '../../molecules';
import styles from './styles.module.scss';

export const Header = () => (
    <header className={styles.header}>
        <Name/>
        <Navigation/>
    </header>
);
