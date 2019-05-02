import React from "react";
import styles from './styles.module.scss';
import {Button, Icon} from "../../../../ui/atoms";
import {PlayButton} from "../../../common/atoms";

export const CardActions = ({id, link, duration}) => (
    <div className={styles.container}>
        <div className={styles.playContainer}>
            <PlayButton id={id}/>
            <span>{duration}</span>
        </div>
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <Button>
                <Icon name='chain' viewBox='0 0 500 500' fill='#4d4e4f'/>
            </Button>
        </a>
    </div>
);