import React from "react";
import styles from './styles.module.scss';
import {SongBar} from "../../../features/common/organisms";

export const Main = ({ header, children }) => (
    <div>
        {header}
        <main className={styles.mainContainer}>{children}</main>
        <SongBar/>
    </div>
);