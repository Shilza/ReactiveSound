import React from "react";
import styles from './styles.module.scss';
import {Button, Icon} from "../../atoms";
import {PlayButton} from "../../../features/common/atoms";
import {convertMsToString} from "../../../features/common/utils";

export const CardActions = ({id, link, duration}) => (
    <div className={styles.container}>
        <div className={styles.playContainer}>
            <PlayButton id={id}/>
            <span className={styles.duration}>{convertMsToString(duration)}</span>
        </div>
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <Button aria-label='link'>
                <Icon name='chain' viewBox='0 0 500 500' fill='#4d4e4f'/>
            </Button>
        </a>
    </div>
);