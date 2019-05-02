import {CommonContent} from "../templates";
import React from "react";
import {Link} from "react-router-dom";
import styles from './styles.module.scss';

export const NoMatch = () => (
    <CommonContent>
        <div className={styles.container}>
            <h1>404 Page not found</h1>
            <span>
            Don't panic, and make sure
        <br/>
            to watch your oxygen levels
        </span>
            <Link className={styles.link} to='/'>Return to safety</Link>
        </div>
    </CommonContent>
);
