import React from "react";
import styles from './styles.module.scss';
import {withTimeLine} from "../wthTimeLine";

export const TimeLine = withTimeLine(({currentTimeLinePosition}) => (
    <div className={styles.timeLine}>
        <div data-testid='currentTimeLinePosition'
             className={styles.currentTime}
             style={{width: currentTimeLinePosition}}/>
    </div>
));

